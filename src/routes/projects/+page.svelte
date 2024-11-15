<script>
	import Card from '$lib/card.svelte';

	const projects = [
		{
			title: 'Comandă atestate',
			description: 'A web app for ordering high-school graduation certificates.',
			technologies: ['SvelteKit', 'Tailwindcss', 'express.js', 'MongoDB'],
			link: 'https://comanda-atestate.vercel.app/',
			githubLink: 'https://github.com/VeressIris/comanda-atestate',
			date: 'June 2024'
		},
		{
			title: 'Sveltle',
			description: 'A Wordle clone built with Svelte.',
			technologies: ['SvelteKit', 'Tailwindcss', 'express.js', 'MongoDB'],
			link: 'https://sveltle.vercel.app/',
			githubLink: 'https://github.com/VeressIris/Sveltle',
			date: 'July 2024'
		},
		{
			title: 'The Order of the Enchanted Gift',
			description:
				'A cute 2D game inspired by a scouting event hosted in Romania around the holidays.',
			technologies: ['Unity', 'C#'],
			link: 'https://midnightdovedev.itch.io/the-order-of-the-enchanted-gift',
			githubLink: 'https://github.com/VeressIris/The-Order-Of-The-Enchanted-Gift',
			date: 'December 2023'
		}
	];
</script>

<div>
	<h1 class="text-gold mr-3 font-bold">Projects</h1>
	<p>Here are some of my personal projects:</p>

	<div class="grid-cols-2 gap-12 md:grid md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<Card
				title={project.title}
				description={project.description}
				technologies={project.technologies}
				link={project.link}
				githubLink={project.githubLink}
				date={project.date}
			/>
		{/each}
	</div>
</div>
