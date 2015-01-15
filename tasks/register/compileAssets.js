module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'copy:bower',
		'jst:dev',
		'copy:dev',
		'sass:dev',
		'coffee:dev'
	]);
};
