import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Harsh Mishra</h3>
          <p className="text-sm">Aspiring Software Engineer & Full-Stack Developer</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com" className="text-white hover:text-gray-400">
            Twitter
          </a>
          <a href="https://youtube.com" className="text-white hover:text-gray-400">
            YouTube
          </a>
          <a href="https://github.com" className="text-white hover:text-gray-400">
            GitHub
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Harsh Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
