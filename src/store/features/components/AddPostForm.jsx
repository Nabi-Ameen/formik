import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from '../post/postSlice'


const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostclicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h3>Add new post</h3>
            <form>
                <label htmlFor='postTitle'>Post title</label>
                <input
                    type="text"
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Content:</label>
                <input
                    type="text"
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type='button'
                    onClick={onSavePostclicked}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm
