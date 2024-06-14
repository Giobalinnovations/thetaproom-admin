'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Header from './header';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocials?: boolean;
}
export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocials,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader>
        <Header label="Admin Login" />
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
