import DashboardSidebar from './components/dashboard-sidebar';
import DashboardHeader from './components/dashboard-header';
import { Toaster } from '@/components/ui/toaster';
import { Metadata } from 'next';
import ReactQueryProvider from '@/components/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Adcrest media Dashboard',
  description: 'Adcrest media Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
