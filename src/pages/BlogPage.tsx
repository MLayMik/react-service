import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonMain from '../components/Buttons/ButtonMain'

interface Posts {
  id: number
  title: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Posts[]>([])
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },
    [],
  )

  return (
    <div className="max-w-[1440px] mx-auto">
      <Link to="new"><ButtonMain>New post</ButtonMain></Link>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
        )
      })}
    </div>
  )
}
