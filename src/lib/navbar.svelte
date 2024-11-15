<script>
	let { isOpen = $bindable(false) } = $props();

	const toggleSidebar = () => {
		isOpen = !isOpen;
	};
</script>

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
			<li class="px-6 py-4">
				<a
					href="https://vanila.io"
					target="_blank"
					class="font-bold uppercase text-white hover:underline">About me</a
				>
			</li>
			<li class="px-6 py-4">
				<a
					href="https://instagram.com/plavookac"
					target="_blank"
					class="font-bold uppercase text-white hover:underline">Projects</a
				>
			</li>
			<li class="px-6 py-4">
				<a
					href="https://github.com/VeressIris"
					target="_blank"
					class="font-bold uppercase text-white hover:underline">GitHub</a
				>
			</li>
			<li class="px-6 py-4">
				<a
					href="https://www.linkedin.com/in/iris-veress/"
					target="_blank"
					class="font-bold uppercase text-white hover:underline">LinkedIn</a
				>
			</li>
		</ul>
	</div>
</div>

<style>
	.hidden {
		opacity: 0;
	}
</style>
