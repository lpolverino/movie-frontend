<script>
	import { getContext } from "svelte";

    const {cinemas} = $props();

    let cinemaSelectorOpen = $state(false);

    const selectedCinema = getContext('cinemaSelected');

    const cinemaSelectorHandler = (cinema) => {
        selectedCinema.changeCinemaSelected(cinema);
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
	<h1>Cinemas</h1>
	<nav>
		<a href="/peliculas">peliculas</a>
		<a href="/candy">Candy</a>
		<a href="/Cine-Fan">Cine Fan</a>
		<a href="/Regala-Cine">Regala Cine</a>
		<a href="/Store">Store</a>
	</nav>
	<button onclick={() => cinemaSelectorOpen = !cinemaSelectorOpen}>{selectedCinema.getCinemaSelectedValue()?.name??"Elegir Cine"}</button>
	<a href="/Elegir-Pelicula">Elegi Pelicula</a>
</div>	
