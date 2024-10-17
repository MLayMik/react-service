import { useParams } from 'react-router-dom'

export default function EditPage() {
  const { id } = useParams()
  return (
    <div className="max-w-[1440px] mx-auto">
      <p>
        Edit post №
        {id}
      </p>
    </div>
  )
}
