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
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('are URL not empty and defined', function() {
            Object.keys(allFeeds).forEach(function(key){
                expect(allFeeds[key].url).toBeDefined();
                expect(allFeeds[key].url.length).not.toBe(0);
            });
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('are names defined and not empty', function() {
            Object.keys(allFeeds).forEach(function(key) {
                expect(allFeeds[key].name).toBeDefined();
                expect(allFeeds[key].name.length).not.toBe(0);
            });
        });
    });


    /* new test suite named "The menu" */
    describe('The menu', function() {

        var menuButton = $(".menu-icon-link");
        /* test ensures the menu element is hidden by default. */
        it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
         
        /* test that ensures the menu changes visibility when the menu icon is clicked. */
        it('it changes menu visibility', function() {
            menuButton.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            menuButton.click();
            expect($("body").hasClass("menu-hidden")).toBe(true); 
        });
    });

    /* new test suite named "Initial Entries" */
    describe('Initial Entries', function() {


        /* test ensures when the loadFeed function
         * is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        it('has at least one entry', function() {
            var entries = $(".feed").has(".entry");
            expect(entries.length > 0).toBe(true); 
        });
    });

    /* new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var entryText = $(".feed").find("h2").text();
        
        /* test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */
        beforeEach(function(done) {
            entryText;
            loadFeed(1, done); 
        });

        it('is new feed loaded', function(done) {
            expect($(".feed").find("h2").text()).not.toBe(entryText); 
            done(); 
        });

        /* load previous feed back */
        afterEach(function(done) {
            loadFeed(0, done); 
        });

   });  
}());
