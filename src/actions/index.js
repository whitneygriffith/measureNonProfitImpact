import { todosRef, authRef, db } from "../config/firebase";
import { FETCH_TODOS, USER_DETAILS, FETCH_USER } from "./types";

export const addToDo = (newToDo, uid) => async dispatch => {
    todosRef
        .child(uid)
        .push()
        .set(newToDo);
};

export const completeToDo = (completeToDoId, uid) => async dispatch => {
    todosRef
        .child(uid)
        .child(completeToDoId)
        .remove();
};

export const fetchToDos = uid => async dispatch => {
    todosRef.child(uid).on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            });
        } else {
            dispatch({
                type: FETCH_USER,
                payload: null
            });
        }
    });
};

export const addLegalName = (name) =>  dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('email').set(authRef.currentUser.email);

    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('legalName').set(authRef.currentUser.displayName);
};


export const addUserBlockchainAccount = (publicA, privateA) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('account')
        .child('public')
        .set(publicA);
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('account')
        .child('private')
        .set(privateA);
};



export const addZipcode = (zipcode) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('address')
        .child('zipcode')
        .set(zipcode);
};

export const addWebsite = (website) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('website')
        .set(website);
};

export const addGoal = (impact, op) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('goal')
        .child('impact')
        .set(impact);

    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('goal')
        .child('op')
        .set(op);
};

export const addStreet = (street) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('address')
        .child('street')
        .set(street);
};

export const addCity = (city) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('address')
        .child('city')
        .set(city);
};

export const addState = (state) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('address')
        .child('state')
        .set(state);
};

export const addCountry = (country) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('description')
        .child('address')
        .child('country')
        .set(country);
};

export const addTransaction = (amount, to, reason) => dispatch => {
    db
        .ref('users/' + authRef.currentUser.uid)
        .child('transactions')
        .push({
            amount: amount,
            to: to,
            reason: reason
        });
    
    db
        .ref('transactions')
        .push({
            uid: authRef.currentUser.uid,
            fullName: authRef.currentUser.displayName,
            amount: amount,
            to: to,
            reason: reason
        })
};



export const signIn = (username, password) => dispatch => {
    authRef
        .signInWithEmailAndPassword(username, password)
        .then(result => { })
        .catch(error => {
            console.log(error);
        });
};

export const signUp = (username, password) => dispatch => {
    authRef
        .createUserWithEmailAndPassword(username, password)
        .then(result => {
            authRef.currentUser.sendEmailVerification()
            .catch(error =>{
                console.log(error);
            })
         })
        .catch(error => {
            console.log(error);
        });
};


export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
            console.log(error);
        });
};

export const setDisplayName = (name) => dispatch => {
    authRef
        .currentUser
        .updateProfile({
            displayName: name
        }).then(function () {
            console.log(authRef.currentUser);
        }).catch(function (error) {
            console.log(error);
        });
};





export const getUserTag = uid => dispatch => {
    db.ref('users/' + uid + "/description").once("value")
        .then(function (snapshot) {
            console.log(snapshot.val(), "sup");
            return snapshot.val();
        });
};


export const getUserDetails = () => async dispatch => {
    const uid = authRef.currentUser.uid;
    db.ref('users/' + uid + "/description").once("value", snapshot => {
       console.log(snapshot.child("/userTag").val(), "sup");
        dispatch({
            type: USER_DETAILS,
            payload: snapshot.child("/userTag").val()
        });


    });
};


