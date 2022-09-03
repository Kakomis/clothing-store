import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_START, FETCH_CATEGORIES_FAILED } from "./categories.types";

import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase";

const fetchCategoriesStart = () =>
    createAction(FETCH_CATEGORIES_START)

const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(FETCH_CATEGORIES_SUCCESS, categoriesArray)

const fetchCategoriesFailed = (error) =>
    createAction(FETCH_CATEGORIES_FAILED, error)

// action creator
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())

    try {
        const categoriesArray = await getCategoriesAndDocuments()
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}