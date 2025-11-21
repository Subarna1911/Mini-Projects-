import React from 'react'

const Blog = ({ title, body,tags, reactions, views }) => {
  return (
    <div className="bg-gray-300 text-black rounded-lg w-full p-4 my-3 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm leading-relaxed">{body}</p>
      <div>
        {
            tags.map((tag,index)=>{
                <li className='flex gap-3 items-center' key={index}>{tag}</li>
            })
        }
      </div>

      <div>
        {reactions.like} | {reactions.dislikes} | {views} views
      </div>
    </div>
  );
};

export default Blog;
