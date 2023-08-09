# The Pythonista

  Pythonista is a social app designed for Python developers. Pythonista is a dynamic community platform for programmers to connect, share insights, and embark on collective coding journeys in a digital age where collaboration fuels innovation.
  Pythonista allows developers of all levels to easily connect to a global network of peers and a wealth of shared knowledge. Pythonista bridges the gap, fostering an ecosystem where the boundaries of code are transcended and the spirit of camaraderie reigns supreme. 

  <!-- deployed link -->
  <!-- I AM Responsive image -->

## Features


### _Existing Features_

 * **Navigation Bar**

    ![NavBar](../pythonista/src/assets/readme/navbar-desktop.jpg)

    The navigation bar includes various clickable links, allowing the user to easily access the pages on the app. The links change according to whether the user is signed in or out, giving them access to more content once signed in.
    The links on the navbar are:

    * Pythonista Logo
    * Home
    * Create Post
    * Event
    * User Action (displayed as dropdown menu )
        * Profile
        * Sign Out
    * Sign Up
    * Sign In

   
    To make navigating easy for the user, the navigation bar is fixed, meaning it stays at the top of the page when the user scrolls down.

    The navigation bar displays in the same manner on all pages, ensuring uniformity across the app.

    A hover effect is incorporated, with the icons changing to a turquoise color and the cursor becoming a pointer on both the text and the icons, to help the user realize that the link is clickable.

    React Bootstrap was used to construct the navigation bar, which is fully responsive across devices.

* **Navbar When users are not loggedIn**

    ![Mobile Navbar](../pythonista/src/assets/readme/loggedoutNavbar.jpg)

* **Navbar in Mobile's Screen**

    ![Mobile Navbar](../pythonista/src/assets/readme/mobileNavbar.jpg)

* **Navbar in Tablet's Screen**

    ![Mobile Navbar](../pythonista/src/assets/readme/tabletNavbar.jpg)



* **Home Page**

  ![Home Page](../pythonista/src/assets/readme/home.jpg)

    The homepage is the user's first port of call and consists of user posts, post search, discover profiles.

    The posts show the user's username, and profile image, when it was posted, content as well as any user interaction in the form of likes and comments counts.



* **Post Page**

    ![Post Page](../pythonista/src/assets/readme/postPage.jpg)

    The post page contains further information on the post in question, as well as the homepage version of the post.

    The features here are:

    * Ability to create a comment if logged in.
    * Ability to edit or delete post if you are the owner of the post.


* **Create Post Form**

    ![Event Page](../pythonista/src/assets/readme/postForm.jpg)

    If users are logged in, they are able to share new posts with the community. By clicking on the Create Post Icon in the Navigation Bar, they are taken to the Share a new post page, where they can submit the post creation form to the API.

* **Post Edit Form**

    ![Post Edit Form](../pythonista/src/assets/readme/editPost.jpg)

    If user click on a post it will take the user to the post page, by clicking the more button near post date , users can find the edit post feature there. By clicking edit users can see post creation form, but the fields are already pre-populated with the existing post information. You can edit the desired fields and save the changes, which will return you to the post detail page and you can see that the post has been updated successfully.

* **Events Page**

    ![Event Page](../pythonista/src/assets/readme/eventPage.jpg)

   The events page contains user-created events.

    The events display the user's username and profile image, as well as the day and time it was made, the title, content, and image generated, as well as event and organiser data, and any user participation in the form of attendance replies.

    The following functionalities are available:

    * A search bar that allows the user to quickly find existing events by username, title, and content.
    An Add Event button that allows the user to simply create their own event.
    * A Popular Profiles component that allows users to easily see other users on the app and follow and unfollow individuals as well as browse their profiles.


* **Event Page**

    ![Event Post](../pythonista/src/assets/readme/pageEvent.jpg)

    The features here are:
    * Ability to edit or delete event if you are the owner of the event.

* **Create Event  Form**

    ![Create Event Page](../pythonista/src/assets/readme/eventForm.jpg)

    If you are logged in, you are able to share new events with the community. By clicking on the Add Event menu option in the Navigation Bar, you are taken to the Share a New Event page, where you can submit the event creation form to the API.
    Create Event Form consist of event picture, title, description, event date, start time, end time, location and organizer.
    Once the form has been submitted successfully, you can see the event published successfully as you are re-directed automatically to the newly created event details page.

* **Edit Event Form**

    ![Edit Event Page](../pythonista/src/assets/readme/editEvent.jpg)

    By clicking Edit, you are taken back to the event creation form, but the fields are already pre-populated with the existing event information. You can edit the desired fields and save the changes, which will return you to the event detail page and you can see that the event has been updated successfully.

* **Validating Event Date**

   The Create Event Form is validated to determine that users are not able to add an event in the past; if users add an event date in the past, the form will raise an error that the event cannot be in the past. It will avoid entering the wrong date.


    ![Event Date](../pythonista/src/assets/readme/eventDate.jpg)


* **Profile Page**

    ![Profile Page](../pythonista/src/assets/readme/profilePage.jpg)

    The profile page consists conists of the selected user's profile - either your own via the navbar, or other users via clicking on their profile images.

    The profiles show the user's username, profile image, bio, any social media links included, user stats regarding followers, posts and events, as well as any posts or events created by the user.
    The only information that subsequently gets updated in the profile page is the site usage stats, as follows:

    * Number of events the user has posted
    * Number of posts the user has published
    * Number of profiles they are following
    * Number of profiles that are following them

* **Edit Profile Page**

    ![Edit Profile Page](../pythonista/src/assets/readme/editProfile.jpg)

    By clicking the Edit Profile option, they are taken to a new page containing the full profile details form to fill in and submit. Here, they can add their own avatar image, bio, GitHub, website address and LinkedIn.

    Once these fields have been filled in, they can be seen by other users in the main profile page stats container. Any website links that are entered can be clicked on to open the website in a new browser tab.

    Each profile also has a follow button inside the stats container so that other users can click it to follow and unfollow the profile as all profiles won't always appear listed in the popular profiles component, to access the follow functionality there.

* **SignUp Page**

    ![SignUp Page](../pythonista/src/assets/readme/signUp.jpg)

    The sign up page is only accessible if the user is logged out. This page consists of a form to be completed in order to sign up and create an account, and a link to the sign in page if the user already has an account.

* **SignIn Page**

    ![SignIn Page](../pythonista/src/assets/readme/signIn.jpg)

    The sign in page is only accessible if the user is logged out. This page consists of a form to be completed in order to sign in, and a link to the sign up page if the user does not yet have an account.



### _Future Implementations_

If there was time after my gratuation I'd like to implement these feature in Pythonista appp and make it more powerfull.

* **Job Page:**
Enable users to post a Job or apply a Job. I was planning to implement Job feature in PP5, but unfortunately due to some unexpected event with my asylum process I was force to leave the country and it happened just when I was about to work on my project. So I was not able to implement the Job feature.

here is the mock-up for Job feature:

* **Job Page**
![Job Page mock-up](../pythonista/src/assets/readme/jobPage.jpg)

* **Applying For a Job Page**
![Apply Job Page mock-up](../pythonista/src/assets/readme/applyForm.jpg)

* **Create Job Post Page**
![Job Form Page mock-up](../pythonista/src/assets/readme/createJob.jpg)

* **Notification Syatem:**
Allow users to recive notification when someone leave a comment on her/his post, event post or add reaction on a post.

* **Messaging System:**
A chat functionality, allowing users to send each other messages, and thus to create stronger connections between like-minded people.
Seeing which users are online including links to the chat page, enabling users to have real-time conversations.

## Design

### _Mock-Up_

* **Home Page**
![Home Page mock-up](../pythonista/src/assets/readme/homePage.jpg)

* **Create Post Page**
![Create Post Form mock-up](../pythonista/src/assets/readme/createPost.jpg)

* **Create Post Page**
![Create Event Form mock-up](../pythonista/src/assets/readme/createEvent.jpg)

* **Event Page**
![Event Page mock-up](../pythonista/src/assets/readme/event.jpg)

* **Profile Page**
![Profile Page](../pythonista/../pythonista/src/assets/readme/profile.jpg)

* **Job Page**
![Job Page mock-up](../pythonista/src/assets/readme/jobPage.jpg)

* **Applying For a Job Page**
![Apply Job Page mock-up](../pythonista/src/assets/readme/applyForm.jpg)

* **Create Job Post Page**
![Job Form Page mock-up](../pythonista/src/assets/readme/createJob.jpg)

### _Color_

The colour palette is made up of following colours:
 * #2d649b - NavBar background , buttons
 * #54D9FF - Button hover, border color
 * #C1DFFF - Inout hover
 * #F6F6F6 - Sit background
 * Black #000000 - Content
 * White #FFFFFF - Component background

### _Typography_
I used two google fonts for pythonista:
 * **'Open Sans', sans-serif** - Sit content
 * **'Calistoga', cursive** - NavBar Links



## Test

### _Automatic Testing_
### _Manual Testing_
### _Responsiveness Testing_
### _Lighthouse Testing_


## Bugs

### _Solved Bugs_
### _UnSolved Bugs_

## Technologies Used

### _Languages_

* **HTML5** - Provides the content and structure for the website.
* **CSS3** - Provides the styling for the website.
* **JavaScript** - Provides interactive elements of the website.
* **React.js** - Provides the base for the frontend components.

### _Frameworks, Libraries & Programs_

* **React -** React was used to create this web app.
* **React Bootstrap -** React Bootstrap was used to create this web app and to make it fully responsive.
* **Git -** Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* **GitHub -** GitHub is used to store the projects code after being pushed from Git.
* **GitHub Projects -** GitHub Projects was used to create the User Stories.
* **Heroku -** Heroku was used for the deployed application.
* **Chrome DevTools -** Chrome DevTools was used to consistently check the site in terms of responsivity, performance, accessibility, best practice and SEO.
* **Cloudinary -** A service that hosts image files in the project.
* **My Free Logo Maker -** Used to create the Happening brand logo.
* **Moqups -** Used  to create the mock-ups during the design process, as well as Sign Up and Sign In hero images.
* **date-fns -** Installed to validate event date.
* **msw -** Mock Service Worker, Used for testing.

## Deployment

### _Database_
### _Heroku_

## Credits








