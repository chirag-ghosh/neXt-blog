import axios from 'axios';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';
import { BlogForList } from '../../types/blog'

const Blog = (props: BlogForList) => {

    const date = new Date(props.publishDate);
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: '/blogs/[pid]',
            query: {pid: props.id}
        })
    }
    
    return(
        <div className='blog-card' onClick={handleClick}>
            <div className='blog-card-title'>{props.title}</div>
            <div className='blog-card-date'>{date.toDateString()}</div>
        </div>
    )
}

const Blogs: NextPage = () => {

    const [list, setList] = useState<BlogForList[]>([]);

    useEffect(() => {
        axios.get(`${API_URL}/blogs`)
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className='blog-list'>
            <div className='title'>Here is the list of <span>blogs</span></div>
            <div className='list'>
                {list.map((blog) => {
                    return(
                        <Blog key={blog.id} {...blog}></Blog>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs;