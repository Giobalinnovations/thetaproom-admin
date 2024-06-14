import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type CollectionCardProps = {
  img: string;
  altimg: string;
  producttitle: string;
  discountedprice: number;
  price: number;
  slug: string;
};

export default function CollectionCard({
  img,
  altimg,
  producttitle,
  discountedprice,
  price,
  slug,
}: CollectionCardProps) {
  return (
    <Link href={slug ?? '#'}>
      <Card className="text-center">
        <Image
          className="object-cover w-full h-48  "
          src={img ?? ''}
          alt={altimg}
          width={300}
          height={100}
        />
        <div className="py-4 mx-3">{producttitle}</div>
        <div className="text-[#dc5454] pb-4">
          {discountedprice ? discountedprice : ''} 
          <span className={` text-[#6E757C] line-through px-2`}>{price ?? ''}</span>
        </div>
      </Card>
    </Link>
  );
}
