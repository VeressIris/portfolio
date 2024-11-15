<script>
	let { isOpen = $bindable(false) } = $props();

	const toggleSidebar = () => {
		isOpen = !isOpen;
	};
</script>

{#snippet item(icon, text, link, target)}
	<li class="px-6 py-4">
		<div class="flex items-center">
			{@html icon}
			<a href={link} {target} class="font-bold uppercase text-white hover:underline">{text}</a>
		</div>
	</li>
{/snippet}

<div class="relative">
	<button
		class="absolute left-4 top-5 z-20 cursor-pointer focus:outline-none"
		onclick={toggleSidebar}
		aria-label="Toggle Sidebar"
	>
		<div class="relative h-5 w-5">
			<div
				class="absolute h-0.5 w-full transform bg-white transition-transform duration-300"
				class:hidden={isOpen}
			></div>
			<div
				class="absolute h-0.5 w-full origin-center transform bg-white transition-transform duration-300"
				class:rotate-45={isOpen}
				class:-translate-y-1.5={!isOpen}
			></div>
			<div
				class="absolute h-0.5 w-full origin-center transform bg-white transition-transform duration-300"
				class:-rotate-45={isOpen}
				class:translate-y-1.5={!isOpen}
			></div>
		</div>
	</button>

	<div
		class={`fixed left-0 top-0 z-10 h-full w-48 transform bg-gray-300 transition-transform duration-300 ${
			isOpen ? 'translate-x-0' : '-translate-x-64'
		}`}
	>
		<ul class="divide-y divide-white divide-opacity-10 pt-16">
			<li class="px-6 py-4 font-bold uppercase text-white">
				<span class="text-rose text-xl">Iris Veress</span>
				<span class="text-light-gray-200">Developer</span>
			</li>
			{@render item(
				'<image src="icons8-waving-hand-100.png" width="28" class="mr-2" />',
				'About me',
				'/'
			)}
			{@render item(
				'<svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="28" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"/></svg>',
				'Projects',
				'/projects'
			)}
			{@render item(
				'<svg width="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="mr-2"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg',
				'GitHub',
				'https://github.com/VeressIris',
				'target="_blank"'
			)}
			{@render item(
				'<image src="In-White-40.png" width="25" class="mr-2" />',
				'LinkedIn',
				'https://www.linkedin.com/in/iris-veress/',
				'target="_blank"'
			)}
			{@render item('', 'Resume', '/', 'target="_blank"')}
		</ul>
	</div>
</div>

<style>
	.hidden {
		opacity: 0;
	}
</style>
