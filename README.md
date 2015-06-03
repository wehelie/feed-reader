# Feed-reader::Javascript Unit Testing with Jasmine

All tests added to `jasmine/spec/feedreader.js`.
####Run the `APP`
1. Open the index.html in the browser
2. Eyeball the Jasmine reporter for results
3. In the provided list, click on any feed to load
4. To run all specs, click `Jasmine__TopLevel__Suite` then click, `Ran 0 of 7 specs - run all`
5. If all is well, it should read, `7 specs, 0 failures`

The `APP` can be run by clicking 'run all' to test whether all `specs` will pass. Should there be any errors, `spec` details will be show in red, otherwise, green means pass. 

######LOCATED @ (http://wehelie.github.io/feed-reader/)

#TESTS

>1. test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty. 
2. test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. new test suite named "The menu".
4. test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. test suite named "Initial Entries".
7. test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
8. test suite named "New Feed Selection".
9. test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


#RESULTS
![spec](https://cloud.githubusercontent.com/assets/3928442/7952045/65330d24-0964-11e5-9d99-2a87d4852a36.png)
