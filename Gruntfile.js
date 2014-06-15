module.exports = function(grunt) {
	grunt.initConfig({
	    qunit: {
	        rotateQuotes: ['tests/index.html'],
	        all: ['tests/*.html']
	    }
	});

	// Import QUnit plugin
	grunt.loadNpmTasks('grunt-contrib-qunit');

	// Default task.
	grunt.registerTask('default', 'qunit:all');

	// Travis CI task.
	grunt.registerTask('test', 'qunit:all');
};