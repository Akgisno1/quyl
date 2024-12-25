import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const students = await prisma.student.findMany();

  return NextResponse.json(students);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const student = await prisma.student.create({ data });
  return NextResponse.json(student);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const { id, ...rest } = data;

  const updatedStudent = await prisma.student.update({
    where: { id },
    data: rest,
  });

  return NextResponse.json(updatedStudent);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  await prisma.student.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
