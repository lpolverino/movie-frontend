<script lang="ts">
    import type {BillboardMovie} from "$lib/types/movies"
    export let data:{billboardMovies: BillboardMovie[]};
</script>

<h1>Movies</h1>

<ul>
    {#each data.billboardMovies as movie}
        <li>
            <h3><a href={"/movie/"+movie.id}> {movie.title}</a></h3>
        </li>
    {/each}
</ul>