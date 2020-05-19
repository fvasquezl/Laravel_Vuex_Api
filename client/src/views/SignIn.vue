<template>
	<form @submit.prevent="submit">
		<div>
			<label for="email">Email</label>
			<input type="text" name="email" id="email" v-model="form.email" />
		</div>
		<div>
			<label for="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				autocomplete="on"
				v-model="form.password"
			/>
		</div>
		<button type="submit">
			Sign In
		</button>
	</form>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'signin',
		components: {},
		data() {
			return {
				form: {
					email: '',
					password: '',
				},
			};
		},
		methods: {
			...mapActions({
				signIn: 'auth/signIn',
			}),

			submit() {
				this.signIn(this.form)
					.then(() =>
						this.$router.replace({
							name: 'dashboard',
						})
					)
					.catch(() => {
						console.log('failed');
					});
			},
		},
	};
</script>

<style lang="scss" scoped></style>
