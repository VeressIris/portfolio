<script>
	import '../app.css';
	import Navbar from '../lib/navbar.svelte';
	import Page from './+page.svelte';
	let { children } = $props();

	let isSidebarOpen = $state(false);
	const toggleSidebar = () => {
		isSidebarOpen = !isSidebarOpen;
	};
</script>

<div class="my-4 flex">
	<Navbar bind:isOpen={isSidebarOpen} />
	<div
		class={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-60 mr-8' : 'ml-16 mr-16'}`}
	>
		{@render children()}
	</div>
</div>
