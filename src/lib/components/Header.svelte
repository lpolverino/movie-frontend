<script lang="ts">
	import type { Cinema } from "$lib/types/cinemas";
	import { invalidateAll } from '$app/navigation';

    const {cinemas, selectedCinema} = $props();

    let cinemaSelectorOpen = $state(false);

    const cinemaSelectorHandler = async (cinema:Cinema) => {
		const res = await fetch('/api/set-cinema', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ cinema })
		});

		if (!res.ok) {
			console.error('Error cambiando cine');
			return;
		}

		await invalidateAll();
    }

</script>

{#if cinemaSelectorOpen}
    <ul>
        {#each cinemas as cinema}
            <li>
				<button onclick={()=>cinemaSelectorHandler(cinema)}>
					{cinema.name??"xd"}
				</button>
			</li>
        {/each}
    </ul>
{/if}

<div>
	<h1><a href="/">Cinemas</a></h1>
	<nav>
		<a href="/peliculas">peliculas</a>
		<a href="/candy">Candy</a>
		<a href="/Cine-Fan">Cine Fan</a>
		<a href="/Regala-Cine">Regala Cine</a>
		<a href="/Store">Store</a>
	</nav>
	<button onclick={() => cinemaSelectorOpen = !cinemaSelectorOpen}>
		{selectedCinema}
	</button>
	<a href="/Elegir-Pelicula">Elegi Pelicula</a>
</div>	
