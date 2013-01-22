/*global define:true,XMLHttpRequest:true*/

// Blog
/**
 * @class Kata.Blog
 * Description
 */
define([], function () {
    'use strict';

    var Blog = function () {
        this.title = null;
        this.creationDate = -1;
        this.url = '';
        this.owner = {};
    };

    Blog.prototype.setTitle = function (title) {
        if (title.length >= 20) {
            title = title.substr(0, 17) + '...';
        }
        this.title = title;
    };
    Blog.prototype.getTitle = function () {
        return this.title;
    };

    Blog.prototype.setCreationDate = function (creationDate) {
        if (typeof creationDate !== 'number') {
            throw new Error('Creation date must be an integer');
        } else {
            this.creationDate = creationDate;
        }
    };

    Blog.prototype.getCreationDate = function () {
        return this.creationDate;
    };

    Blog.prototype.setURL = function (url) {
        if ( ! /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url) ) {
            throw new Error('URL must be a valid URL');
        } else {
            this.url = url;
        }
    };

    Blog.prototype.getURL = function () {
        return this.url;
    };

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

    Blog.prototype.getOwner = function () {
        return this.owner;
    };

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
        	debugger;
            throw new Error('XHR Error', e);
        };

        xhr.send();
    };

    return Blog;
});
