import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../store-2/reducers/posts'


function Posts() {
	const { posts, loading } = useSelector((state) => state.posts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [])

	if (loading) {
		return <p>...loading</p>
	}

	return (
		<div className="">
		{posts.map(item => {
			return (
			<div className="">{item.title}</div>
			)
		})}
		</div>
	)
}

export default Posts;