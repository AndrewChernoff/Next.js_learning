import { Post, api } from '@/service/api'
import { create } from 'zustand'

type PostsStore = {
    posts: Post[]
    loading: boolean
    fetchPosts: () => void
    fetchOnParam: (title: string) => void
}

export const usePosts = create<PostsStore>((set) => ({
  posts: [],
  loading: false,
  fetchPosts: async () => {
    set(() => ({ loading: true }));
    try {
      const fetchedPosts = await api.getAllPosts();
      set((state) => ({ posts: (state.posts = fetchedPosts), loading: false }));
    } catch (err) {
      set(() => ({ loading: false }));
    }
  },
  fetchOnParam: async (title: string) => {
    set(() => ({ loading: true }));
    try {
      const qwet = await api.getPostByTitle(title);
      set((state) => ({ posts: (state.posts = qwet), loading: false }));
    } catch (err) {
      set(() => ({ loading: false }));
    }
  }
}));
