<script lang="ts">
	import type { Cinema } from '$lib/types/cinemas.js';
	import {setContext} from 'svelte';
	
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';

	let { data, children } = $props();
	let cinemaSelected:Cinema|null = $state(null)

	setContext('cinemaSelected', {
		getCinemaSelectedValue,
		changeCinemaSelected,
	});

	function getCinemaSelectedValue(){
		return cinemaSelected
	}

	function changeCinemaSelected(newCinemaSelected:Cinema){
		cinemaSelected = newCinemaSelected;
	}

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header cinemas={data.cinema}></Header>

{@render children()}
