'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/table/data-table';

import apiEndpoint from '@/services/apiEndpoint';
import useQueryGet from '@/hooks/useQuery';
import { columns } from './columns';

export default function Dashboard() {
  const {
    data: blogsData,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQueryGet({
    apiEndpointUrl: apiEndpoint.BLOGS,
    queryKey: 'getAllBlogs',
  });
  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    const blogs = blogsData?.data?.data ?? [];

    return (
      <>
        {blogs.length === 0 && (
          <>
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <div
              className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
              x-chunk="dashboard-02-chunk-1"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  You have no Data
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, qui.
                </p>
                <Button className="mt-4">Add Data</Button>
              </div>
            </div>
          </>
        )}
        {blogs.length > 0 && (
          <>
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <div
              className="flex flex-1  rounded-lg border border-dashed shadow-sm"
              x-chunk="dashboard-02-chunk-1"
            >
              <div className="border w-full grid">
                {blogs && blogs.length > 0 && (
                  <DataTable data={blogs} columns={columns} />
                )}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
