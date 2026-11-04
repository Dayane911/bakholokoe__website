
import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcryptjs";
import pool from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const password =
      typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json(
        { message: "Please enter your email and password." },
        { status: 400 }
      );
    }

    const [rows] = await pool.execute(
      `SELECT id, name, email, password_hash, role, is_active
       FROM admins
       WHERE email = ?
       LIMIT 1`,
      [email]
    );

    const admins = rows as {
      id: number;
      name: string;
      email: string;
      password_hash: string;
      role: string;
      is_active: number;
    }[];

    const admin = admins[0];

    if (
      !admin ||
      !admin.is_active ||
      !(await compare(password, admin.password_hash))
    ) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Login successful.",
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { message: "Unable to sign in. Please check the server and database." },
      { status: 500 }
    );
  }
}
