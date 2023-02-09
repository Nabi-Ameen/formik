import React from 'react'
import { useSelector } from "react-redux";

const PostList = () => {
    const posts = useSelector(state => state.post)

    const fetchPosts = posts.map((post) => {
        const { id, title, content } = post;
        return (
            <article key={id} className="border mt-2 p-4 mx-5 w-50 mx-auto bg-secondary text-white">
                <p className=''>{title}</p>
                <p>{content.substring(0, 30)}</p>
            </article>
        )
    })
    return (
        <div>
            <h3 className='mx-5 text-center py-5'>posts</h3>
            {fetchPosts}
        </div>
    )
}

export default PostList
