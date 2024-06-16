import { Card, CardContent, CardDescription } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  _id: string;
};

export default function CategoryCardWithoutImg({
  category,
}: {
  category: CategoryCardProps;
}) {
  return (
    <Link href={`/collections/${category.name}`}>
      <Card className="relative h-48 bg-black">
        <CardContent className="flex  justify-center items-center h-48">
          <CardDescription className="uppercase relative text-white font-bold ">
            {category?.name ?? 'category'}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
