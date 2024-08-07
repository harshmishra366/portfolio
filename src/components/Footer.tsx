import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Harsh Mishra</h3>
          <p className="text-sm">Aspiring Software Engineer & Full-Stack Developer</p>
        </div>
        <div className="flex space-x-4">
          <Link href={'https://github.com/harshmishra366'} target='blank'>
          Github
          </Link>
          <Link href={'https://github.com/harshmishra366'} target='blank'>
          LinkedIn
          </Link>
          <Link href={'https://github.com/harshmishra366'} target='blank'>
          Instagram
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Harsh Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
