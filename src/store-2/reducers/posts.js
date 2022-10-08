// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const getPosts = createAsyncThunk(
// 	'posts/getPost',
// 	async () => {
// 		const result = await fetch('https://jsonplaceholder.typicode.com/posts')
// 		.then((data) => data.json())

// 		return result
// 	}
// )

// const postsSlice = createSlice({
// 	name: 'posts',
// 	initialState: {
// 		posts: [],
// 		loading: false
// 	},
// 	reducers: {},
// 	extraReducers: {
// 		[getPosts.pending]: (state) => {
// 			state.loading = true
//     },
//     [getPosts.fulfilled]: (state, { payload }) => {
// 		state.posts = payload
// 		state.loading = false
//     },
//     [getPosts.rejected]: (state) => {
// 		state.loading = false
//     }
// }
// })

// export default postsSlice.reducer
// export { getPosts }