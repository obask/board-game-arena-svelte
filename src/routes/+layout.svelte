<script>
	import Sidebar from './Sidebar.svelte';
</script>

<Sidebar />

<div class="main-content">
    <slot />
</div>

<style>
	/* styles for the main content area */
	.main-content {
		margin-left: 200px;
		padding: 20px;
	}
</style>
