import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const cinemaCookie = event.cookies.get('cinema');

	event.locals.cinema = cinemaCookie
		? JSON.parse(cinemaCookie)
		: null;

	return resolve(event);
};
