import { takeLatest, put, all, call, take } from 'redux-saga/effects'
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signOutUser, signInUserWithEmailAndPassword,createAuthUserWithEmailAndPassword } from '../../utils/firebase'

import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed } from './user.actions'
import { 
    CHECK_USER_SESSION, 
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START, 
    SIGN_UP_START, 
    SIGN_UP_SUCCESS,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS } from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signupWithEmail({ payload: {email, password, displayName} }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
        yield put(signUpSuccess, { user, displayName })
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* signInAfterSingUp({ payload: {user, additionalDetails} }) {
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInUserWithEmailAndPassword, email, password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signOut() {
    try {
        yield call(signOutUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailed(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signupWithEmail)
}

export function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSingUp)
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignOut() {
    yield takeLatest(SIGN_OUT_START, signOut)
}

export function* onSignOutSuccess() {
    yield takeLatest(SIGN_OUT_SUCCESS, signOutSucced)
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOut),
    ])
}