// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { Cinema } from '$lib/types/cinema';

declare global {
	namespace App {
		 interface Error {}
		 interface Locals {}
		 interface PageData {
			cinema: Cinema | null;
		 }
		 interface PageState {}
		 interface Platform {}
		 interface Locals {
			cinema: Cinema | null;
		}
	}
}

export {};
