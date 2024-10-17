import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface Post {
  id: number
  title: string
  body: string
}

export default function BlogItem() {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<Post | null>(null)
  useEffect(
    () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },
    [id],
  )

  return (
    <div className="max-w-[1440px] mx-auto">
      {post && (
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </div>
      )}
    </div>
  )
}
