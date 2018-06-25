/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? Answer: It breaks.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // test to check if all URLs defined and not empty
        it('are all URLs defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        // test to check are all feed names defined and not empty
        it('are all feed names defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe();
            });
        });
    });

    
    // test suite for menu
    describe('The menu', function() {
        // test if menu element is hidden be default
        it('is menu element hiden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         // test that once menu is clicked it changes visibility
        it('does menu display/hide when clicked', function() {
            $('.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
            $('.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });

    // test suite initial entries
    describe('Initial Entries', function() {
        // test if there is at least one .entry element within the .feed container
        beforeEach(function(done) {
            loadFeed(0, done);
        });
            
        it('feed container has at least one entry', function(done) {
            expect($('.feed > .entry-link').length).toBeGreaterThan(0);
            done();
        });
    });

    // test suite new feed selection
    describe('New Feed Selection', function() {
        // test to check if new feed on load changes
        let oldFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();

                loadFeed(1, done);
            });
        });

        it('when a new feed is loaded content actually changes', function(done) {
            expect(oldFeed).not.toBe($('.feed').html());
            done();
        })
    })

}());
