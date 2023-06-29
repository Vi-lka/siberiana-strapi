import favicon from './extensions/favicon.ico'

export default {
    config: {
        // Replace the favicon
        head: {
            favicon: favicon,
        },
        locales: ['ru', 'en'],
    },
    bootstrap() {
    },
};