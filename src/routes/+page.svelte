<script>
	const skills = [
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

	const prfessionalInterests = [
		'Backend development',
		'AI & machine learning',
		'Full-stack development',
		'Game development'
	];
	const personalInterests = ['Music 🎸', 'Film-making 🎥', 'Hiking 🏕️', 'Gaming 🎮'];
</script>

{#snippet skill(title, description)}
	<div class="mb-4">
		<h2 class="text-orange mb-1 text-2xl font-semibold italic">{title}</h2>
		<p>
			<!-- @html just in case I need to add some spans or extra styling, etc. -->
			{@html description}
		</p>
	</div>
{/snippet}

{#snippet interests(interestsList)}
	<ul class="ml-5 list-disc">
		{#each interestsList as interest}
			<li>{interest}</li>
		{/each}
	</ul>
{/snippet}

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
			I'm an 18 year old final year high-school student and an <span class="text-green italic"
				>aspiring software engineer</span
			> based in Romania.
		</p>
	</div>
	<div class="my-8">
		<h1 class="text-gold font-bold">Skills</h1>
		<div class="grid-cols-2 gap-12 md:grid">
			{#each skills as sk}
				{@render skill(sk.title, sk.description)}
			{/each}
		</div>
	</div>
	<div class="my-8">
		<h1 class="text-gold font-bold">Interests</h1>
		<h2 class="text-orange mb-1 text-2xl font-semibold italic">Professional</h2>
		{@render interests(prfessionalInterests)}
		<h2 class="text-orange mb-1 mt-2 text-2xl font-semibold italic">Personal</h2>
		{@render interests(personalInterests)}
	</div>
</div>
