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


* **Profile Page**

    ![Profile Page](../pythonista/src/assets/readme/profilePage.jpg)
    The profile page consists conists of the selected user's profile - either your own via the navbar, or other users via clicking on their profile images.

    The profiles show the user's username, profile image, bio, any social media links included, user stats regarding followers, posts and events, as well as any posts or events created by the user.


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
### _Frameworks, Libraries & Programs_


## Deployment

### _Database_
### _Heroku_

## Credits








