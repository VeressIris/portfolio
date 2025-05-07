<script>
	import Card from '$lib/card.svelte';

	const projects = [
		{
			title: 'TeamUp',
			description:
				'A web app built in 48 hours for ITfest 2025 that aims to connect students all over the world by matching them based on their projects & profiles.',
			technologies: ['Next.js', 'Prisma', 'MUI', 'PostgreSQL'],
			link: 'https://teamup-beige.vercel.app/',
			githubLink: 'https://github.com/AndyStan112/teamup',
			date: 'April 2025'
		},
		{
			title: 'No Return Seed Calculator',
			description:
				'A website that calculates the seed of any daily run for The Last Of Us Part II Remastered No Return game mode.',
			technologies: ['Svelte', 'Tailwindcss'],
			link: 'https://tloudailyseeds.vercel.app/',
			githubLink: 'https://github.com/VeressIris/noReturnSeedCalculator',
			date: 'May 2025'
		},
		{
			title: 'Table to MongoDB converter',
			description:
				'A web app that converts Google Sheets/Microsoft Excel tables into a MongoDB database, powered by a Flask backend and Svelte frontend.',
			technologies: ['Svelte', 'Tailwindcss', 'Flask', 'MongoDB'],
			link: 'https://tabletomongodb.vercel.app/',
			githubLink: 'https://github.com/VeressIris/excelToMongoDb',
			date: 'December 2024'
		},
		{
			title: 'Minimalist Poster Generator',
			description:
				'A web app that generates minimalist movie/TV show posters based on an uploaded image. The movie data is fetched from themoviedb API.',
			technologies: ['SvelteKit', 'Tailwindcss'],
			link: 'https://minimalist-poster-generator.vercel.app/',
			githubLink: 'https://github.com/VeressIris/moviePosterGenerator',
			date: 'January 2025'
		},
		{
			title: 'OlympiAId',
			description:
				'A web app built in 48h for Unihack 6 with React.js, Express.js, MongoDB, Auth0 that aims to help romanian high-school students prepare for olympiads.',
			technologies: ['React.js', 'Express.js', 'MongoDB', 'Auth0'],
			link: 'https://www.olympiaid.study/',
			githubLink: 'https://github.com/VeressIris/unihack2024',
			date: 'August 2024'
		},
		{
			title: 'Go Calculator API',
			description: 'An API built with Go that simulates a calculator.',
			technologies: ['Go'],
			link: 'https://gocalculatorapi.onrender.com/',
			githubLink: 'https://github.com/VeressIris/GOcalculatorAPI',
			date: 'August 2024'
		},
		{
			title: 'Sveltle',
			description: 'A Wordle clone built with Svelte and Random word API.',
			technologies: ['SvelteKit', 'Tailwindcss', 'express.js', 'MongoDB'],
			link: 'https://sveltle.vercel.app/',
			githubLink: 'https://github.com/VeressIris/Sveltle',
			date: 'July 2024'
		},
		{
			title: 'GradeCalc+',
			description:
				'An android & desktop app That I built for calculating the grades need in order to achieve a certain average.',
			technologies: ['Android Studio', 'Kotlin', 'WinForms'],
			link: 'https://github.com/VeressIris/GradeCalcPlus/releases',
			githubLink: 'https://github.com/VeressIris/GradeCalcPlus',
			date: 'September 2023'
		},
		{
			title: 'Norway quiz',
			description:
				"A web quiz that I built for my geography class to test my classmate's knowledge on Norway.",
			technologies: ['SvelteKit', 'Tailwindcss', 'MongoDB'],
			link: 'https://quiz-norvegia.vercel.app/',
			githubLink: 'https://github.com/VeressIris/quizNorvegia',
			date: 'November 2024'
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

<svelte:head>
	<title>Iris Veress | Projects</title>
</svelte:head>

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
