import axios from "axios";


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

export const api = {
    async getAllPosts() {
        const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return  res.data
    },

    async getPost(id: string) {
        const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return  res.data

    },

    async getPostByTitle(title: string) {
        const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts?q=${title}`);
        return  res.data

    },

}