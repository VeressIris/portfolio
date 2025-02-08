<script>
	const personalSkills = [
		{
			title: 'Dedicated',
			description:
				'I tend to get really caught up into the work I do. I cannot stop thinking about it until I get it done.'
		},
		{
			title: 'Logical thinking',
			description:
				"I approach everything in a logical manner. I can't learn new things if I don't also understand the underlying logic behind them. "
		},
		{
			title: 'Puzzle solving',
			description:
				"I've always loved puzzle solving. Development, of any kind, has been the perfect"
		},
		{
			title: 'Passion for learning',
			description:
				'I love learning new things. I sometimes get hyper-fixated on things and cannot stop researching more and more.'
		}
	];

	const professionalSkills = [
		{
			title: 'Backend development',
			description:
				'I have experience with <span class="text-cyan">Express.js</span> and the standard <span class="text-cyan">Go HTTP library</span>. I have also worked with <span class="text-cyan">MongoDB</span>, <span class="text-cyan">Firebase</span>, <span class="text-cyan">Supabase</span> and <span class="text-cyan">Auth0</span>.'
		},
		{
			title: 'AI & machine learning',
			description:
				'I have experience with <span class="text-cyan">Python</span>, <span class="text-cyan">Scikit-Learn</span> and <span class="text-cyan">Pytorch</span>. I have also briefly worked with <span class="text-cyan">OpenCV</span> and <i>fine-tuning</i> on <span class="text-cyan">HuggingFace</span>.'
		},
		{
			title: 'Full-stack development',
			description:
				'I have experience with <span class="text-cyan">React.js</span> and <span class="text-cyan">SvelteKit</span>. I am also proficient with <span class="text-cyan">TailwindCSS</span> and have worked with <span class="text-cyan">Bootstrap</span>.'
		},
		{
			title: 'Game development',
			description:
				'I have built both 2D and 3D games with <span class="text-cyan">Unity</span> and <span class="text-cyan">C#</span> that have been published on <a class="text-cyan hover:underline" href="https://midnightdovedev.itch.io/" target="_blank">itch.io</a>.'
		}
	];

	const prfessionalInterests = [
		'Backend development',
		'AI & machine learning',
		'Full-stack development',
		'Game development'
	];
	const personalInterests = [
		{
			title: 'Music',
			emoji: '🎸',
			description: "I've been playing guitar for almost 8 years now."
		},
		{
			title: 'Film-making',
			emoji: '🎥',
			description:
				'I love putting together (recording, editing) short cinematic videos from my trips.'
		},
		{
			title: 'Hiking',
			emoji: '🏕️',
			description: 'Having been a scout, hikes were the go-to activity.'
		},
		{
			title: 'Gaming',
			emoji: '🎮',
			description:
				"I've been playing video games since I was a little kid and I've never stopped since."
		}
	];
</script>

{#snippet skill(title, description)}
	<div class="mb-4">
		<h2 class="text-orange mb-1 mt-5 text-2xl font-semibold italic">{title}</h2>
		<p>
			<!-- @html just in case I need to add some spans or extra styling, etc. -->
			{@html description}
		</p>
	</div>
{/snippet}

<svelte:head>
    <title>Iris Veress | Home</title>
</svelte:head>

<div>
	<div class="flex flex-col">
		<h1 class="text-gold mr-3 font-bold">Hello!</h1>
		<p class="text-2xl">
			My name is <span class="text-rose font-semibold italic">Iris Veress</span>.
		</p>
	</div>
	<div class="my-8">
		<h1 class="text-gold font-bold">About me</h1>
		<p>
			I'm an 18 year old final year high-school student and an <span class="text-cyan italic"
				>aspiring software engineer</span
			> based in Romania.
		</p>
	</div>
	<div class="my-8">
		<h1 class="text-gold font-bold">Professional skills</h1>
		<div class="grid-cols-2 gap-x-16 gap-y-6 md:grid">
			{#each professionalSkills as sk}
				{@render skill(sk.title, sk.description)}
			{/each}
		</div>
		<h1 class="text-gold mt-6 font-bold">Personal skills</h1>
		<div class="grid-cols-2 gap-x-16 md:grid md:gap-y-6">
			{#each personalSkills as sk}
				{@render skill(sk.title, sk.description)}
			{/each}
		</div>
	</div>
	<div class="mb-4">
		<h1 class="text-gold font-bold">Personal interests</h1>
		<ul class="ml-5 list-disc">
			{#each personalInterests as interest}
				<li class="my-1">
					<span class="font-bold underline">{interest.title}</span>
					{interest.emoji} - {interest.description}
				</li>
			{/each}
		</ul>
	</div>
</div>
