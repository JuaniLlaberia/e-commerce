import Navbar from './(components)/navbar';
import Sidebar from './(components)/sidebar';

export default async function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex h-full'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <div className='p-5 bg-background-1 flex-1'>{children}</div>
      </div>
    </main>
  );
}
