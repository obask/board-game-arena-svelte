<script lang="ts">

	import { base } from "$app/paths";

</script>

<div class="sidebar">
    <a href="{base}/login">Login</a>
    <a href="{base}/page2">Item 2</a>
    <a href="{base}/page3">Item 3</a>
    <a href="{base}/page4">Item 4</a>
</div>

<style>

/* styles for the sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 20px;
  margin-left: 20px;
  bottom: 0;
  width: 200px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
}
</style>
