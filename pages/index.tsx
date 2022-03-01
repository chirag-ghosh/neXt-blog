import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='landing'>
      <div className='title'>Welcome to <span>neXt</span> blogs...</div>
      <div className='btn-group'>
        <button className='button'>Read Blogs</button>
        <button className='button'>Write a blog</button>
      </div>
    </div>
  )
}

export default Home
