import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function NewPage() {
  const { posts, setPosts } = useState([])
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },
    [],
  )

  const { id } = useParams()

  return (
    <div className="max-w-[1440px] mx-auto">
      {id}
    </div>
  )
}
