import Layout from '@/components/screen/layout/Layout';
import axios from 'axios';
import { Metadata, NextPage } from 'next';
import Link from 'next/link';
import { cache } from 'react';

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
};

export const revalidate = 60


 const getData = cache(async () => {
     const res = await axios.get<Post[]>('https://jsonplaceholder.org/posts');

     return  res.data
});


export const metadata: Metadata = {
  title: 'Blog'
}

const Blog: NextPage = async ({}) => {

  const posts =  await getData(); 

  return (
    <Layout>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;