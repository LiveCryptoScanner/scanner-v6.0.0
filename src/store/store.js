import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from '@/src/features/counter/counterSlice'
import postsReducer from '@/src/features/posts/postsSlice'
import topBullCoinsReducer from '@/src/features/top-bull-coins/topBullCoinsSlice'
import topBullCoinsAsyncReducer from '@/src/features/top-bull-coins/topBullCoinsAsyncSlice'
import trendingCoinsAsyncReducer from '@/src/features/trending-coins/trendingCoinsAsyncSlice'
import selectedMainTabReducer from '@/src/features/selected-main-tab/selectedMainTabSlice'
import priceToMaIndicatorReducer from '@/src/features/standard/priceToMaIndicatorSlice'
import standardReducer from '@/src/features/standard/standardSlice'
import mainHomeButtonReducer from '@/src/features/mainHomeButtonSlice'

// console.log(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    topBullCoins: topBullCoinsReducer,
    topBullCoinsAsync: topBullCoinsAsyncReducer,
    trendingCoinsAsync: trendingCoinsAsyncReducer,
    selectedMainTab: selectedMainTabReducer,
    priceToMaIndicator: priceToMaIndicatorReducer,
    standard: standardReducer,
    mainHomeButton: mainHomeButtonReducer,
  },
})

export default store;
