<script lang="ts">
	import type { ActionData, PageData } from "./$types"


	export let name: string;
    export let data: PageData;
    export let form: ActionData;

	function login() {
		// authenticate the user based on their name
		if (name === 'Alice') {
			// log in as Alice
			// ...
		} else if (name === 'Bob') {
			// log in as Bob
			// ...
		} else {
			// display an error message
			alert('Invalid name');
		}
	}
</script>

{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
  <p>Successfully logged in! Welcome back, { data.user.name }</p>
{/if}

<form method="POST">
	<label>
		text
		<input name="qwerty" type="text" />
	</label>
	<button>Log in</button>
</form>

<style>
	/* styles for the login form */
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	label {
		display: block;
		margin-bottom: 8px;
	}

	input {
		width: 200px;
		height: 32px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 8px;
		font-size: 16px;
	}

	button {
		width: 120px;
		height: 32px;
		border: 0;
		border-radius: 4px;
		background-color: #4caf50;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
	}
</style>
