import { NextResponse } from 'next/server';
import { openDb } from '@/lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  const member = await db.get('SELECT * FROM team WHERE id = ?', [params.id]);
  if (!member) {
    return new Response('Membro não encontrado', { status: 404 });
  }
  return NextResponse.json(member);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  const data = await request.json();
  const { name, role, specialization, category, image } = data;

  await db.run(
    'UPDATE team SET name = ?, role = ?, specialization = ?, category = ?, image = ? WHERE id = ?',
    [name, role, specialization, category, image, params.id]
  );

  return NextResponse.json({ id: params.id, ...data });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  await db.run('DELETE FROM team WHERE id = ?', [params.id]);
  return new Response(null, { status: 204 });
}