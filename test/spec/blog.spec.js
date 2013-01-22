/*global require:true, describe:true,it:true,expect:true,beforeEach:true,setTimeout:true*/

// Blog specs
require(['blog'], function (Blog) {
    'use strict';

    beforeEach(function (done) {
        this.blog = new Blog();
        done();
    });

    describe('Describe a Blog', function () {
        it("should be defined", function () {
            expect(this.blog).to.be.instanceof(Blog);
        });
        it('should have a "title" property', function () {
            expect(this.blog).to.have.property('title');
            expect(this.blog.title).to.be.null;
        });
        it('should have a title set to "My New Blog"', function () {
            this.blog.setTitle('My New Blog');
            expect(this.blog.getTitle()).to.equal('My New Blog');
        });
        it('should have a title length of 20 characters max', function () {
            this.blog.setTitle('My New Blog');
            expect(this.blog.getTitle().length).to.be.below(20);
            this.blog.setTitle('Lorem ipsum aliqua exercitation ex sint ea nostrud dolor fugiat commodo aliqua commodo amet minim deserunt elit dolore adipisicing labore adipisicing aute sunt velit Excepteur non qui reprehenderit veniam consequat tempor qui laborum nisi dolor aute in velit esse nisi ullamco dolore velit exercitation ea anim consequat nulla in dolore est laboris commodo eu consectetur amet mollit voluptate voluptate minim aute consequat est tempor reprehenderit veniam ut nulla proident elit nulla in ad voluptate veniam adipisicing ut cillum Excepteur enim incididunt aliqua cupidatat fugiat reprehenderit quis consectetur cillum Excepteur dolore culpa qui voluptate nisi velit ullamco nulla adipisicing laboris exercitation sed in veniam deserunt proident sed esse labore consectetur ad consequat ad adipisicing cupidatat ut irure amet ullamco do velit nulla dolore eu proident proident consectetur enim Excepteur magna dolor consectetur consequat Ut minim fugiat laborum Ut incididunt Ut veniam in eu consequat consequat deserunt Duis sit cupidatat officia nostrud et occaecat eu ullamco adipisicing est Duis sint officia cupidatat do. ');
            expect(this.blog.getTitle()).to.have.length.at.most(20);
        });
        it('should have a "creationDate" property', function () {
            expect(this.blog).to.have.property('creationDate');
            expect(this.blog.creationDate).to.be.equal(-1);
        });
        it('should have a creation date in timestamp', function (done) {
            var creationDate = +new Date();
            this.blog.setCreationDate(creationDate);
            expect(this.blog.getCreationDate()).to.be.a('number');
            expect(this.blog.getCreationDate()).to.be.equal(creationDate);

            setTimeout((function () {
                expect(this.blog.getCreationDate()).to.be.not.equal(+new Date());
                done();
            }).bind(this), 100);

            try {
                this.blog.setCreationDate('');
            } catch (e) {
                expect(this.blog.setCreationDate).to.throw(Error);
            }
        });
        it('should have a "url" property', function () {
            expect(this.blog).to.have.property('url');
            expect(this.blog.url).to.be.empty;
        });
        it('should have a valide URL', function () {
            var urlre = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            this.blog.setURL('http://mywonderful.blog.com');
            expect(this.blog.getURL()).to.be.equal('http://mywonderful.blog.com');
            expect(this.blog.getURL()).to.be.not.equal('http://another.blog.com');
            expect(this.blog.getURL()).to.match(urlre);

            this.blog.setURL('http://www.mywonderful.com');
            expect(this.blog.getURL()).to.match(urlre);

            try {
                this.blog.setURL('Lorem ipsum dolor velit labore ad mollit consequat ut. ');
            } catch (e) {
                expect(this.blog.setURL).to.throw(Error);
            }
            expect(this.blog.getURL()).to.match(urlre);
        });
        it('should have a "owner" property', function () {
            expect(this.blog).to.have.property('owner');
            expect(this.blog.owner).to.be.an('object');
        });
    });
    describe('Describe an Owner', function () {
        var address = {
            "city": "Rennes",
            "zipcode": 35000
        },
            owner = {
                "firstName": "John",
                "lastName": "Smith",
                "address": address
            };

        it('should have a firstName', function () {
            this.blog.setOwner(owner);
            expect(this.blog.getOwner()).to.contain.keys('firstName');
            expect(this.blog.getOwner().firstName).to.be.a('string');
            expect(this.blog.getOwner().firstName).to.be.eq('John');
        });
        it('should have a lastName', function () {
            this.blog.setOwner(owner);
            expect(this.blog.getOwner()).to.contain.keys('lastName');
            expect(this.blog.getOwner().lastName).to.be.a('string');
            expect(this.blog.getOwner().lastName).to.be.eq('Smith');
        });
        it('should have an address', function () {
            this.blog.setOwner(owner);
            expect(this.blog.getOwner()).to.contain.keys('address');
            expect(this.blog.getOwner().address).to.be.an('object');
            expect(this.blog.getOwner().address).to.be.eq(address);
        });
        it('should succeed to load a valid config file from remote server', function (done) {
            this.blog.getRemoteConfig('http://cheghamwassim.com/apps/js/kata/bdd/blog/config.json',function (data) {
                expect(data).to.be.an('object');
                expect(data).to.be.deep.eq(owner);
                done();
            });
        });
        it.skip('should fail to load an invalid config file from remote server', function (done) {
            try {
                this.blog.getRemoteConfig('http://cheghamwassim.com/apps/js/kata/bdd/blog/configXXX.json');
            } catch (e) {
                expect(this.blog.getRemoteConfig).to.throw(Error);
            }
        });
    });
    describe('Describe an address', function () {
        var address = {
            "city": "Rennes",
            "zipcode": 35000
        },
            owner = {
                "firstName": "John",
                "lastName": "Smith",
                "address": address
            };
        it('should have a city and a zipcode', function () {
            this.blog.setOwner(owner);
            expect(this.blog.getOwner().address).to.have.keys(['city', 'zipcode']);
            expect(this.blog.getOwner().address.zipcode).to.be.a('number');
        });
        it('should have a zipcode as a number', function () {
            this.blog.setOwner(owner);
            expect(this.blog.getOwner().address).to.have.property('zipcode').to.be.a('number');
        });

    });
    describe("Describe a relation between a Blog and an Owner", function () {
        var address = {
            "city": "Rennes",
            "zipcode": 35000
        },
            owner = {
                "firstName": "John",
                "lastName": "Smith",
                "address": address
            };

        it('should exists', function () {
            this.blog.setOwner(owner);
            expect(this.blog.getOwner()).to.be.equal(owner);
            try {

                this.blog.setOwner(1);
                this.blog.setOwner();
                this.blog.setOwner('');

            } catch (e) {
                expect(this.blog.setOwner).to.throw(Error);
            }
        });
    });



});
