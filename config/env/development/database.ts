export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'siberiana-strapi'),
			user: env('DATABASE_USERNAME', 'siberiana-admin'),
			password: env('DATABASE_PASSWORD', 'zyYMpzDlDX8ymYGx'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
