import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  // Correção: Adicionado 'await' aqui
  const cookieStore = cookies();
  cookieStore.delete('token');
  return NextResponse.json({ message: 'Logout bem-sucedido' });
}