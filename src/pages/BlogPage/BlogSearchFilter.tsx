import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface Posts {
  id: number
  title: string
}

interface Props {
  posts: Posts[]
  onFilter: (filtered: Posts[]) => void
}

export default function BlogSearchFilter({ posts, onFilter }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const postQuery = searchParams.get('post') || ''
  const [searchTerm, setSearchTerm] = useState(postQuery)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
    setSearchParams({ post: e.target.value })
  }
  useEffect(() => {
    const filteredPost = posts.filter(post => post.title.split(' ').join('').toLocaleLowerCase().includes(postQuery.split(' ').join('').toLocaleLowerCase()))
    onFilter(filteredPost)
  }, [searchParams, posts, onFilter, postQuery])

  return (
    <form autoComplete="off" className="p-5 border">
      <input
        type="search"
        placeholder="Search post"
        name="search"
        onChange={handleInputChange}
        value={searchTerm}
        className="p-2 border"
      />
    </form>
  )
}
