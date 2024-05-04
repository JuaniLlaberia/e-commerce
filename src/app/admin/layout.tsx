import Navbar from './(components)/navbar';
import Sidebar from './(components)/sidebar';

export default async function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <div className='p-5 lg:px-16 bg-background-1 flex-1 overflow-y-scroll overflow-x-hidden'>
          {children}
        </div>
      </div>
    </main>
  );
}
