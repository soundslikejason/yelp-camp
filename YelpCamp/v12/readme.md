#YelpCamp
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

##Each Campground has:
 * Name
 * Image

##How to begin:
* npm init
* npm install express ejs --save
* touch app.js


* mkdir views
* touch view/landing.ejs

##Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

##Creating New Campgrounds
* Setup new campgrounds POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

##Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

##Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

##Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

##Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

##Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

##Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

##Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

##Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

##Style Show Page
* Add sidebar to show page
* Display comments nicely

##Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auto Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

##Refactor The Routes
* Use Express router to reorganize all routes

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

##Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

##Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

##Deleting Campgrounds
* Add Destroy Route
* Add Delete button

##Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

##Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

##Deleting Comments
* Add Destroy route
* Add Delete button

##Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delte buttons
* Refactor Middleware

##Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header