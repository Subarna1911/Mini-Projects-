import React from 'react'
import postData from '../constant/postData'
import Blog from '../components/Blog';

const BlogContent = () => {
  return (
    <div>
        <h2>BlogPost</h2>
   {postData.map((post) => (
  <Blog key={post.id} {...post} />
))}

    </div>
  )
}

export default BlogContent
