import { createSelector } from 'reselect'

export const selectUserReducer = (state) => state.user

export const selectUser = createSelector(
    [selectUserReducer],
    (userSlice) => userSlice.currentUser
)

export const selectLoadig = createSelector(
    [selectUserReducer],
    (userSlice) => userSlice.isLoading
)

export const selectError = createSelector(
    [selectUserReducer],
    (userSlice) => userSlice.error 
)