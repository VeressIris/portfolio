<script>
	import Card from '$lib/card.svelte';

	const projects = [
		{
			title: 'Comandă atestate',
			description: 'A web app for ordering high-school graduation certificates.',
			technologies: ['SvelteKit', 'Tailwindcss', 'express.js', 'MongoDB'],
			link: 'https://comanda-atestate.vercel.app/',
			githubLink: 'https://github.com/VeressIris/comanda-atestate'
		}
	];
</script>

<div>
	<h1 class="text-gold mr-3 font-bold">Projects</h1>
	<p>Here are some of my personal projects:</p>

	<div>
		{#each projects as project}
			<Card
				title={project.title}
				description={project.description}
				technologies={project.technologies}
				link={project.link}
				githubLink={project.githubLink}
			/>
		{/each}
	</div>
</div>
