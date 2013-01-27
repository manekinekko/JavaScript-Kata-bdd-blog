/*global module:true*/

module.exports = function (grunt) {
		'use strict';
		grunt.initConfig({

				watch: {
						reload: {
								files: [
										'index.html',
										'css/**/*.css',
										'js/**/*.js'
								],
								tasks: 'reload'
						}
				}
	});

}