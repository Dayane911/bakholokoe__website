import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;
    const role = body.role || "EDITOR";

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and password are required.",
        },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must contain at least 8 characters.",
        },
        { status: 400 }
      );
    }

    if (!["SUPER_ADMIN", "EDITOR"].includes(role)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid administrator role.",
        },
        { status: 400 }
      );
    }

    const [existingAdmins] = await db.execute(
      "SELECT id FROM admins WHERE email = ? LIMIT 1",
      [email]
    );

    if ((existingAdmins as any[]).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "An administrator with this email already exists.",
        },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await db.execute(
      `
      INSERT INTO admins
      (name, email, password_hash, role, is_active)
      VALUES (?, ?, ?, ?, 1)
      `,
      [name, email, passwordHash, role]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Administrator created successfully.",
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Admin registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while creating the administrator.",
      },
      { status: 500 }
    );
  }
}