"use client"

import Layout from '@/components/screen/layout/Layout';
import Search from '@/components/ui/BlogPage/Search';
import { api } from '@/service/api';
import { usePosts } from '@/store/store';
import axios from 'axios';
import { Metadata, NextPage } from 'next';
import Link from 'next/link';
import { cache, useEffect, useState } from 'react';

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
    return api.getAllPosts()
});


export const metadata: Metadata = {
  title: 'Blog'
}

const Blog: NextPage = ({}) => {


  //const [posts, setPosts] = useState<any[]>([])

  const {fetchPosts, fetchOnParam, posts} = usePosts() 

  useEffect( () => {
    /* api.getAllPosts()
    .then(setPosts) */
    fetchPosts()
    console.log(posts);
    
  }, [])

  return (
    <Layout>
      <h1>Blog page</h1>
      <Search /* onSearch={setPosts} */ onSearch={fetchOnParam} /> 
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