/*global define:true,XMLHttpRequest:true*/

/**
 * The Blog class
 */
define([], function () {
    'use strict';

    /**
     * The Blog constructor
     */
    var Blog = function () {
        this.title = null;
        this.creationDate = -1;
        this.url = '';
        this.owner = {};
    };

    /**
     * Sets the blog's title
     * @param {String} title The title
     */
    Blog.prototype.setTitle = function (title) {
        if (title.length >= 20) {
            title = title.substr(0, 17) + '...';
        }
        this.title = title;
    };

    /**
     * Gets the blog's title
     * @return {String}
     */
    Blog.prototype.getTitle = function () {
        return this.title;
    };

    /**
     * Sets the blog's creation date
     * @param {Integer} creationDate The creation date in timestamp
     */
    Blog.prototype.setCreationDate = function (creationDate) {
        if (typeof creationDate !== 'number') {
            throw new Error('Creation date must be an integer');
        } else {
            this.creationDate = creationDate;
        }
    };

    /**
     * Gets the blog's creation date
     * @return {Integer}
     */
    Blog.prototype.getCreationDate = function () {
        return this.creationDate;
    };

    /**
     * Sets the blog's URL
     * @param {String} url The blog's URL
     */
    Blog.prototype.setURL = function (url) {
        if ( ! /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url) ) {
            throw new Error('URL must be a valid URL');
        } else {
            this.url = url;
        }
    };

    /**
     * Gets the blog's URL
     * @return {String}
     */
    Blog.prototype.getURL = function () {
        return this.url;
    };

    /**
     * Sets the blog's owner
     * @param {Object} owner The owner of the blog
     */
    Blog.prototype.setOwner = function (owner) {
        if (owner === 'undefined') {

            throw new Error('The blog must have an owner');

        } else if (typeof owner !== 'object') {

            throw new Error('Owner must be an Object');

        } else if (!owner.firstName) {

            throw new Error('Owner must have a first name');

        } else if (!owner.lastName) {

            throw new Error('Owner must have a last name');

        } else {
            this.owner = owner;
        }
    };

    /**
     * Gets the owner of the blog
     * @return {Object}
     */
    Blog.prototype.getOwner = function () {
        return this.owner;
    };

    /**
     * Gets a remote config file
     * @param  {String}   url      The URL of the remote config JSON file
     * @param  {Function} callback The callback function to be called when the request has been completed (or if an error has occured)
     */
    Blog.prototype.getRemoteConfig = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';

        xhr.onload = function (e) {
            if (this.status === 200) {
                callback(JSON.parse(this.response));
            }
        };

        xhr.onerror = function (e) {
            throw new Error('XHR Error', e);
        };

        xhr.send();
    };

    return Blog;
});
