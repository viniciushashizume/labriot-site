import { NextResponse } from 'next/server';
import { openDb } from '@/lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  const publication = await db.get('SELECT * FROM publications WHERE id = ?', [params.id]);
  if (!publication) {
    return new Response('Publicação não encontrada', { status: 404 });
  }
  return NextResponse.json(publication);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  const data = await request.json();
  const { title, authors, journal, year, doi } = data;

  await db.run(
    'UPDATE publications SET title = ?, authors = ?, journal = ?, year = ?, doi = ? WHERE id = ?',
    [title, authors, journal, year, doi, params.id]
  );

  return NextResponse.json({ id: params.id, ...data });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const db = await openDb();
  await db.run('DELETE FROM publications WHERE id = ?', [params.id]);
  return new Response(null, { status: 204 });
}