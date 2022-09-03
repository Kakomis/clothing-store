import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
// As long as categories array does not change do not re run this method (reduce)
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items
        return acc
    }, {})
)

export const selectIsCategoriesLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)