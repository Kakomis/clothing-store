import { createSelector } from 'reselect'
import { CategoryMap } from './categories.types'
import { CategoriesState } from './categories.reducer' 
import { RootState } from '../store'

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
// As long as categories array does not change do not re run this method (reduce)
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap => categories.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items
        return acc
    }, {} as CategoryMap)
)

export const selectIsCategoriesLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)