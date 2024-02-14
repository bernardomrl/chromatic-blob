'use client';

import Link from 'next/link';

import Spline from '@splinetool/react-spline';

const items = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/bernardoamrl' },
  { name: 'GitHub', href: 'https://github.com/bernardomrl' },
  { name: 'Email    ', href: 'mailto:bernardomrl@icloud.com' }
];
export default function Page() {
  return (
    <>
      <Spline
        className="fixed left-0 top-0 h-screen w-screen bg-black"
        scene="https://prod.spline.design/zwd5nAlJZMURvNxm/scene.splinecode"
      />
      <div className="user-select-none pointer-events-none fixed bottom-40 flex w-screen items-center justify-center">
        <h1 className="font-inter font-light uppercase italic opacity-75">
          Hover it
        </h1>
      </div>
      <div className="fixed left-5 top-5 z-10 flex items-center justify-center space-x-2">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center font-inter font-light uppercase"
          >
            <div className="relative h-fit overflow-hidden">
              {[...Array(2)].map((_, index) => (
                <span
                  key={index}
                  className={`${index > 0 ? 'font-regular absolute' : 'opacity-65'} block transition-transform duration-300 ease-in-out group-hover:-translate-y-full`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
