
import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { cache } from 'react';

interface Props {}

type Post = {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
}


export async function generateMetadata({params: {id}}: any) {
  return {
    title: id
  }
}

export const revalidate = 60


 const getData = cache(async (id:string) => {
     const res = await axios.get<Post>(`https://jsonplaceholder.org/posts/${id}`);

     return  res.data
});

const Post: NextPage<Props> = async ({params: {id}}: any) => {
    

  const post = await getData(id)
  

    
  return <div>
    <h1>{id}</h1>
    {post.title}
    </div>
}

export default Post