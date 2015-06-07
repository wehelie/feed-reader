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
            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);
            });
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('are names defined and not empty', function() {
            allFeeds.forEach(function(item) {
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);
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
            expect(entries.length).toBeGreaterThan(0); 
        });
    });

    /* new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(done) {
        var title; 
        var header; 

        
        /* test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */
        beforeEach(function(done) {
            // clear up all feed content first
            title = $(".feed .entry h2").empty();
            header = $("h1.header-title").empty();
            
            // load feeds 
            loadFeed(0, function() {
                title = $(".feed .entry h2"); 
                header = $("h1.header-title"); 
                loadFeed(1, function() {
                    done(); 
                });
            });
        });
        it('has some other content', function(done) {
            // compare feeds
            expect($(".feed .entry h2").html() != title).toBe(true); 
            // invoke the done callback function
            done(); 
        }); 

        it('is new feed loaded', function(done) {
            // compare feeds
            expect($("h1.header-title").html() != header).toBe(true);
            // invoke the done callback function
            done(); 
        });

        // restore original state 
        afterAll(function(done) {
            loadFeed(0, done); 
        });

   });  
}());
