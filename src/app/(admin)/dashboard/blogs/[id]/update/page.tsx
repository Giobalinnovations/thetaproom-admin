'use client';
import useQueryGet from '@/hooks/useQuery';
import UpdateBlogsForm from './update-blogs-form';
import apiEndpoint from '@/services/apiEndpoint';

export default function UpdateBlogPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const {
    data: blogData,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQueryGet({
    apiEndpointUrl: `${apiEndpoint.BLOGS}/${params.id}`,
    queryKey: 'getBlogById',
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    const blog = blogData?.data?.data ?? [];
    console.log(blog);
    return (
      <div>
        <UpdateBlogsForm id={params.id} blog={blog} />
      </div>
    );
  }
}
