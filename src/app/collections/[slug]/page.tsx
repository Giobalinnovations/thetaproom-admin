import { getAllPostsMeta, rootDirectoryPosts } from '@/lib/mdx';
import CollectionsBanner from './collections-banner';
import CollectionCard from './collectionscard';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const posts = await getAllPostsMeta(rootDirectoryPosts);
  const categories = posts.filter((post: any) => post.category === params.slug);
  if (!categories.length) {
    return notFound();
  }

  return (
    <>
      <CollectionsBanner slug={params.slug} />
      <div className="container py-8 grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {categories.map((category: any) => (
          <CollectionCard
            key={category.title ?? ''}
            img={category.img ?? ''}
            altimg={category.altimg ?? category.productName ?? ''}
            producttitle={category.productName ?? ''}
            discountedprice={category.discountedprice ?? ''}
            price={category.price}
            slug={`/collections/${params.slug}/products/${category.slug}`}
          />
        ))}
      </div>
    </>
  );
}
