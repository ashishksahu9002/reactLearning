import React from 'react'
import appwriteService from '../appwrite/config' // check this path
import { Link } from 'react-router'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} >
      <div className='w-full bg-gray-100 rounded-xl p-4' >
        <div className='justify-center w-full mb-4' >
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold' >{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard