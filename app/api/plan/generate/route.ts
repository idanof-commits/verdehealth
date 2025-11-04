import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), { status: 400 });
  const id = Math.random().toString(36).slice(2);
  return new Response(JSON.stringify({ ok: true, id, received: body, ts: Date.now() }), { status: 200 });
}
