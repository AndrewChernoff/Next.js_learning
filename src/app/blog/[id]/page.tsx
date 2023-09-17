
import { api } from '@/service/api';
import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { cache } from 'react';

export async function generateMetadata({params: {id}}: any) {
  return {
    title: id
  }
}

export const revalidate = 60


 const getData = cache(async (id:string) => {
  return api.getPost(id)
});

const Post: NextPage = async ({params: {id}}: any) => {
    

  const post = await getData(id)
  

    
  return <div>
    <h1>{id}</h1>
    {post.title}
    </div>
}

export default Post