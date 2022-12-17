<script>
	import Sidebar from './Sidebar.svelte';

    import { page } from '$app/stores'

</script>

<Sidebar />

<div class="main-content">
    <div>Name: {$page.data.user.name}</div>
    <slot />
</div>

<style>
	/* styles for the main content area */
	.main-content {
		margin-left: 200px;
		padding: 20px;
	}
</style>
