import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ButtonMain from '../../components/Buttons/ButtonMain'

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
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className="max-w-[1440px] mx-auto">
      {post && (
        <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <ButtonMain><Link to={`/posts/${id}/edit`}>Edit this post</Link></ButtonMain>
          <ButtonMain onClick={goBack}>Go back</ButtonMain>
        </div>
      )}
    </div>
  )
}
