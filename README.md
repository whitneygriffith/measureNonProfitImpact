## Branches

```master``` == main client + redux + firebase + react 

```stellar-stripe``` == stripe connected to SEAMs

```client-pages-no-auth``` == Seamless web app, Create React App - v2.1.1 boilerplate with integration of Redux, React Router, Redux thunk & Reactstrap(Bootstrap v4) + stopped when I couldn't get the auth wrapper working well

```react-flask-backend``` == pagedraw UI + React + Flask as backend + Separation of Client and Server

```failed-redux-react-firebase-generator``` === Attempt to use [React Firebase (Redux optional) yeoman generator](https://github.com/prescottprue/generator-react-firebase) to solve the connection between redux and firebase and page auth wrappers


## Phases
[x] Transitioning to              [React-Redux-Node-Firebase Boilerplate](https://github.com/prescottprue/generator-react-firebase/tree/master/examples/react-firebase-redux)
* Placed this on pause because it was way too complicated 

[x] Built from scratch React-Redux-Firebase-Router [Tutorial1](https://dusty.phillips.codes/2018/08/25/react-redux-firebase-with-firestore-tutorial/)
[Tutorial2](https://medium.com/quick-code/how-to-integrate-react-redux-and-firebase-in-3-simple-steps-c44804a6af38)
[Tutorial3](https://medium.com/quick-code/adding-authentication-to-react-redux-firebase-app-f0efcb1c519a)

[ ] [Combine with our Client](https://github.com/whitneygriffith/seamlessmoney/tree/client-pages-no-auth)

[ ] Re-edit each Page Functionalities

[ ] Integrate with Stripe + Stellar Anchor for our TT Anchor

[ ] Integrate Stronghold APIs for USD Anchor 

[ ] React Native Integration for Mobile Clients

## Internal Company Documents

[Application Config Keys](http://bit.ly/AppConfigs)

[UI Builder - Pagedraw](https://pagedraw.io/)


## Instructions

### Starting the project
* ```git clone https://github.com/whitneygriffith/seamlessmoney```
* ```git checkout -b client```
* create ```.env``` and ```src/config/dev.js```in main folder and populate it with the info from [Application Config Keys](http://bit.ly/AppConfigs)
* ```npm install```
* ```npm start```

### Adding a new page
- Edit the following:
    - ```asyncRoutes.js```
    - ```routes.js```


## Video Walkthrough

Here's a walkthrough of our development iterations:

#### Iteration 1 
<img src='https://imgur.com/28K9LCn.gif' title='Iteration 1' width='' alt='Video Walkthrough' />

#### Senior Project Demo
<img src='https://imgur.com/JMMH5CU.gif' title='Senior Project Demo' width='' alt='Video Walkthrough' />


## Development TODOs

### Authorizations
[ ] In the Sign Up Flow prevent going back to past screens such as Full Name

### Firebase
[ ] Handle Firebase Sign In With Link CallBack using onAuthStateCHanged Listener
[ ] Error Handling to display error to user from Firebase's Sign In, Sign Up and other function calls
[ ] Sign Up email verification link is not sending to hotmail.com 

### Home 

[ ] Figure out how to return data from database such as userTag and picture to load on home screen


### Sign Up
[ ] Create input pattern validators for Email, Phone Number [Ref](https://www.w3schools.com/html/html_form_attributes.asp)
[ ] Create function to check password1 and password2 is equal, error handling to tell user: password don't match and so on...

### UI 
[ ] Clean up css for ```login-password```
[ ] Standardized CSS for all common components
[ ] Consider switching color scheme to purple rgb(128,0,128) [Meaning](https://www.bourncreative.com/meaning-of-the-color-purple/)

## Production TODOs

### General
[ ] Separate Client from server side

### Environment Variables
[ ] Set ```env``` to ```production``` in ```config.js```

### Firebase Console
[ ] [Add domain to list of authorized domains](https://console.firebase.google.com/u/1/project/seampay-1d1a9/authentication/providers) 
[ ] [Define what occurs to email action links on android or ios device](https://firebase.google.com/docs/auth/web/passing-state-in-email-actions#configuring_firebase_dynamic_links) 


## References

### React 
[cra-boilerplate](https://github.com/mohandere/cra-boilerplate)

[React + Ecosystem](https://github.com/rwieruch?tab=repositories)


### React + Firebase

[React + Firebase](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
- [Codebase](https://github.com/the-road-to-react-with-firebase/react-firebase-authentication/tree/65e6c18fb894b847fed0ab6f9bb042b310cfedc2)

###  React + Redux

[React + Redux for Beginners](https://www.valentinog.com/blog/react-redux-tutorial-beginners/)

[Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)

[Taming the state with React](https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE)

[React 101 ](https://tighten.co/blog/react-101-part-4-firebase)

[React Redux Tutorial for Beginners: The Definitive Guide (2018)](https://www.valentinog.com/blog/react-redux-tutorial-beginners/#React_Redux_tutorial_connecting_React_with_Redux)

### React + Redux + Firebase
[React + Redux + Firebase](http://react-redux-firebase.com/)

[Tutorial for React + Firebase + Redux Codebase](https://github.com/wickard/redux-firebase-tutorial)

[How to Integrate React Redux and Firebase in 3 Simple Steps](https://medium.com/quick-code/how-to-integrate-react-redux-and-firebase-in-3-simple-steps-c44804a6af38)

[react-redux-firestore-boilerplate](https://github.com/rioam2/react-redux-firestore-boilerplate)

[Firebase login with email, Fb, Twitter, Google or Github](https://github.com/polinazolotukhina/Social-login)

[generator-react-firebase](https://github.com/prescottprue/generator-react-firebase)


### Firebase

[Email Link Authentication](https://firebase.google.com/docs/auth/web/email-link-auth)

[Email Link Authentication Code Example](https://github.com/firebase/quickstart-js/blob/master/auth/email-link.html#L89)

[Email Link Authentication Repos](https://github.com/search?o=desc&p=2&q=signinwithemaillink&s=indexed&type=Code)

## React + NodeJs Backend

[Connecting ReactJS Frontend with NodeJs Backend](https://www.zeolearn.com/magazine/connecting-reactjs-frontend-with-nodejs-backend)