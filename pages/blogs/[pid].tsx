import axios from "axios";
import { NextPage } from "next"
import { useEffect, useState } from "react";
import { Blog } from "../../types/blog";
import Editor from "rich-markdown-editor";

interface Query {
    pid: number
}

const Blog: NextPage<Query> = ( { pid } ) => {

    const [blog, setBlog] = useState<Blog>();

    var date: Date = new Date();
    
    if(blog?.publishDate) {
        date = new Date(blog.publishDate)
    }

    useEffect(() => {

        axios.get(`http://localhost:3000/api/blogs/${pid}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.log(err));
    }, []);

    return(
        <div className="blog-page">
            <div className="title">{blog?.title}</div>
            <div className="date">{blog && date.toDateString()}</div>
            <div className="content">
                {blog?.content !== null && 
                    <Editor
                        value={blog?.content}
                        readOnly
                    />}
            </div>
        </div>
    )
};

Blog.getInitialProps = ({ query: { pid } }) => {

    const blogID = typeof pid === "string" ? parseInt(pid) : -1
    const query: Query = {
        pid: blogID
    }

    return query;
  }

export default Blog;