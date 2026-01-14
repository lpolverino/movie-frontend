import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	const {cinema} = await request.json();

	cookies.set('cinema', JSON.stringify(cinema), {
		path: '/',
		httpOnly: true,
		sameSite: 'lax'
	});

	return json({ ok: true });
}
