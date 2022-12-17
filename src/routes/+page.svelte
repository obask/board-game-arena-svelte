<script lang="ts">
	import { page } from '$app/stores';
</script>

<!-- App.svelte -->

<!-- main content goes here -->
<h3>Content</h3>

<form method="POST" action="?/newMatch">
	<button>New game</button>
</form>

<h4>{$page.data.user.name}</h4>

Matches:
<ul>
	{#each $page.data.items as match}
		<li>{match.id}
            <form method="POST" action="?/enterMatch">
                <input name="matchId" type="hidden" value="{match.id}" />
                <button>enter</button>
            </form>
            At this table:
            {#each match.players as userId}
                {userId.username},
            {/each}
            <form method="POST" action="?/deleteMatch">
            <input name="matchId" type="hidden" value="{match.id}" />
            <button>delete</button>
        </form>
        </li>
	{/each}
</ul>

<style>
</style>
