import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <div className='landing'>
      <div className='title'>Welcome to <span>neXt</span> blogs...</div>
      <div className='btn-group'>
        <button className='button' onClick={() => router.push('/blogs')}>Read Blogs</button>
        <button className='button' onClick={() => router.push('/new')}>Write a blog</button>
      </div>
    </div>
  )
}

export default Home
