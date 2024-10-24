import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ButtonMain from '../components/Buttons/ButtonMain'

interface Posts {
  id: number
  title: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const postQuery = searchParams.get('post') || ''
  const [searchTerm, setSearchTerm] = useState(postQuery)

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },
    [],
  )
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
    setSearchParams({ post: e.target.value })
  }
  const filteredPost = posts.filter(post => post.title.split(' ').join('').toLocaleLowerCase().includes(postQuery.split(' ').join('').toLocaleLowerCase()))

  return (
    <div className="max-w-[1440px] mx-auto">
      <form autoComplete="off" className="p-5 border">
        <input
          type="search"
          placeholder="Search post"
          name="search"
          onChange={handleInputChange}
          value={searchTerm}
        />
      </form>
      <Link to="new"><ButtonMain>New post</ButtonMain></Link>
      {filteredPost.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}><li>{post.title}</li></Link>
        )
      })}
    </div>
  )
}
