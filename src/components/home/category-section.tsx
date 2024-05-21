import { getAllPostsMeta, rootDirectoryPosts } from '@/lib/mdx';
import CategoryCardWithoutImg from '../category-card-without-img';

export default async function CategorySection() {
  const posts = await getAllPostsMeta(rootDirectoryPosts);
  const categories: any = new Set(posts.map((post: any) => post.category));
  console.log([...categories]);
  return (
    <>
      {[...categories].length > 0
        ? [...categories].map(category => (
            <CategoryCardWithoutImg key={category} category={category} />
          ))
        : 'no category found'}
    </>
  );
}
