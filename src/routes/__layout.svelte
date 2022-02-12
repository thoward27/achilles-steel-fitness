<script>
	import '../app.scss';
	import { page } from '$app/stores';
	let menu = true;
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a rel="external" class="navbar-item" href="/">
			<img
				src="https://avatars.dicebear.com/api/croodles-neutral/achillessteel.svg"
				width="56"
				height="28"
				alt="achilles steel fitness logo"
			/>
			Achilles Steel Fitness
		</a>

		<button
			class="navbar-burger"
			class:is-active={menu}
			aria-label="menu"
			aria-expanded="false"
			data-target="navbar"
			on:click={() => (menu = !menu)}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
	</div>

	<div id="navbar" class="navbar-menu" class:is-active={menu}>
		<div class="navbar-start">
			<a
				rel="external"
				class="navbar-item"
				href="/workout"
				class:is-active={$page.url.pathname.startsWith('/workout/')}
			>
				Workout
			</a>

			<!-- <a class="navbar-item" href="/history/"> History </a>

			<a class="navbar-item" href="/modifiers/"> Modifiers </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="/settings/"> Advanced </a>

				<div class="navbar-dropdown">
					<a class="navbar-item" href="/data/import/"> Import Data </a>
					<a class="navbar-item" href="/data/export/"> Export Data </a>
					<hr class="navbar-divider" />
					<a class="navbar-item" href="https://github.com/thoward27/achilles-steel-fitness/issues">
						Report an issue
					</a>
				</div>
			</div> -->
		</div>

		<!-- <div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a class="button is-primary">
						<strong>Sign up</strong>
					</a>
					<a class="button is-light"> Log in </a>
				</div>
			</div>
		</div> -->
	</div>
</nav>
<slot />
