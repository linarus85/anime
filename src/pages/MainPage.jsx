import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopularPosts } from '../components/PopularPosts'
import { PostItem } from '../components/PostItem'
import { getAllPosts } from '../redux/features/post/postSlice'

export const MainPage = () => {
    const dispatch = useDispatch()
    const { posts, popularPosts } = useSelector((state) => state.post)

    console.log(popularPosts)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Постов не существует.
            </div>
        )
    }

    return (
        <div className='grid justify-center items-center py-10'>
            <div className='grid'>
                <div className='grid'>
                    {posts?.map((post, idx) => (
                        <PostItem key={idx} post={post} />
                    ))}
                </div>
                <div className='grid py-5'>
                    <div className='text-xs uppercase text-white'>
                        Популярное:
                    </div>

                    {popularPosts?.map((post, idx) => (
                        <PopularPosts key={idx} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
