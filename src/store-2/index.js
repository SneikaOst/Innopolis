import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basket.js'
import postsReducer from './reducers/posts.js'

export default configureStore({
  reducer: {
    basket: basketReducer,
    posts: postsReducer
  }
})