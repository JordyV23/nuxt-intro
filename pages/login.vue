<template>
	<div class="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
		<form novalidate="" action="" class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100" data-bitwarden-watching="1">
			<label for="username" class="self-start text-xs font-semibold">Username or Email</label>
			<input id="username" type="text" class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-purple-400 focus:ri">
			<label for="password" class="self-start mt-3 text-xs font-semibold">Password</label>
			<input id="password" type="password" class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-purple-400 focus:ri">
			<button type="submit" class="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-purple-400 dark:text-gray-900">Login</button>
			<div class="flex justify-center mt-6 space-x-2 text-xs">
				<a rel="noopener noreferrer" href="#" class="dark:text-gray-400">Forgot Password?</a>
				<span class="dark:text-gray-400">/</span>
				<a rel="noopener noreferrer" href="#" class="dark:text-gray-400">Sign Up</a>
			</div>
		</form>
	</div>
</template>