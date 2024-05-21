import { Card, CardContent, CardDescription } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  category: string;
};

export default function CategoryCardWithoutImg({ category }: any) {
  return (
    <Link href={`/collections/${category}`}>
      <Card className="relative h-48 bg-black">
        <CardContent className="flex  justify-center items-center h-48">
          <CardDescription className="uppercase relative text-white font-bold ">
            {category}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
