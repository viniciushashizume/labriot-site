import { NextResponse } from 'next/server';
import { openDb } from '@/lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  const research = await db.get('SELECT * FROM research WHERE id = ?', [params.id]);
  if (!research) {
    return new Response('Área de pesquisa não encontrada', { status: 404 });
  }
  return NextResponse.json(research);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  const data = await request.json();
  const { title, description } = data;

  await db.run(
    'UPDATE research SET title = ?, description = ? WHERE id = ?',
    [title, description, params.id]
  );

  return NextResponse.json({ id: params.id, ...data });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  await db.run('DELETE FROM research WHERE id = ?', [params.id]);
  return new Response(null, { status: 204 });
}