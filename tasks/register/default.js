module.exports = function (grunt) {
	grunt.registerTask('default', ['compileAssets', 'linkAssets', 'symlink:dev', 'watch']);
};
