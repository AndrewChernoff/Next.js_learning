
import { api } from '@/service/api'
import { NextPage } from 'next'
import { useState } from 'react'

interface Props {
    onSearch: (value: any) => void
}

const Search: NextPage<Props> = ({onSearch}) => {

    const [title, setTitle] = useState('')
    const onSubmitHandler = async (e: any) => {
        e.preventDefault()
        //const posts = await api.getPostByTitle(title)
            
        //onSearch(posts)
        onSearch(title)

        
    }

  return <form onSubmit={onSubmitHandler}>
    <input value={title} onChange={e => setTitle(e.currentTarget.value)}/>
    <button type='submit'>Search</button>
  </form>
}

export default Search