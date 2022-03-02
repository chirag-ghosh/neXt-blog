import axios from 'axios';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Blog } from '../../types/blog'

const Blog = (props: Blog) => {

    const date = new Date(props.publishDate);
    const viewDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    
    return(
        <div className='blog-card'>
            <div className='blog-card-title'>{props.title}</div>
            <div className='blog-card-date'>{date.toDateString()}</div>
        </div>
    )
}

const Blogs: NextPage = () => {

    const [list, setList] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/blogs")
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className='blog-list'>
            <div className='title'>Here is the list of <span>blogs</span></div>
            <div className='list'>
                {list.map((blog) => {
                    return(
                        <Blog {...blog}></Blog>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs;