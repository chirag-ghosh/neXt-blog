import axios from 'axios';
import type { NextPage } from 'next'
import { useState } from 'react';
import Editor from "rich-markdown-editor";
import { Blog } from '../types/blog';

const New: NextPage = () => {

  const [title, setTitle] = useState<string>("");
  const [markdownContent, setMarkdownContent] = useState<(() => string) | any>(() => "");

  const submitBlog = () => {

    const newBlog: Blog = {
      title: title,
      content: markdownContent,
      publishDate: new Date()
    }
    
    axios.post("http://localhost:3000/api/new", newBlog)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
  }

  return (
    <div className='new-blog'>
      <div className='title'>Create New <span>Blog</span></div>
      <div className='top-bar'>
      <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Enter a title for the blog'></input>
        <button className="button" onClick={() => submitBlog()}>Submit</button>
      </div>
      <div className='editor'>
        <Editor 
          onChange={(changeFunc) => setMarkdownContent(changeFunc)}
        />
      </div>
    </div>
  )
}

export default New
