server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'templates'
});
