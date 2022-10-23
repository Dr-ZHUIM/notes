 module.exports = {
    trailingSlash: true,
    exportPathMap: function () {
       return { 
        '/': { page: '/' },
        '/blog': { page: '/blog' },
        '/project': {page: '/project'}
       };
    },
};