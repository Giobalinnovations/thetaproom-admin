import { Card, CardContent, CardDescription } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  title: string;
  description: string;
  productName: string;
  productDescription: string;
  img: string;
  productImg: string;
  category: string;
  slug: string;
};

export default function CategoryCard({
  title,
  description,
  productName,
  productDescription,
  img,
  productImg,
  category,
  slug,
}: any) {
  return (
    <Link href={`/collections/${slug}`}>
      <Card className="relative h-48">
        <Image
          className="object-cover absolute top-0 left-0 w-full h-full opacity-80"
          src={img ?? ''}
          alt={productName ?? 'image'}
          width={280}
          height={175}
        />
        <CardContent className="flex  justify-center items-center h-48">
          <CardDescription className="uppercase relative text-white font-bold ">
            {category}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
