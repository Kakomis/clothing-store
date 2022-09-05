import { createSelector } from 'reselect'
import { UserState } from './user.reducer'
import { RootState } from '../store'

export const selectUserReducer = (state: RootState): UserState => state.user

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