import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import appStylesHref from './app.css';
import { Logo } from '~/components/logo';
import { ListBulletIcon } from './components/icon/list-bullet-icon';
import { HomeIcon } from './components/icon/home-icon';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='antialised'>
        <main className='w-full flex min-h-screen bg-[#2E335A] '>
          <div
            id='sidebar'
            className='w-[248px] bg-[linear-gradient(168deg_,_#2E335A_1.62%,_#1C1B33_95.72%)]'>
            <div className='px-6 pt-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='52'
                height='12'
                viewBox='0 0 52 12'
                fill='none'>
                <circle cx='6' cy='6' r='6' fill='#ED695E' />
                <circle cx='26' cy='6' r='6' fill='#F4BF4F' />
                <circle cx='46' cy='6' r='6' fill='#61C554' />
              </svg>
            </div>
            <div className='flex items-center px-6 pt-7  gap-x-4'>
              <ListBulletIcon className='stroke-white w-6 h-6' />
              <Logo />
            </div>
            <div className='h-[calc(100vh_-_36px)] overflow-y-scroll'>
              <div className='mt-5'>
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    // <button
                    //   key={index}
                    //   className='w-full p-6 border-b border-b-[#454B79] py-4 flex items-center '>
                    //   <div className='w-5 h-5 rounded-full bg-[#454B79] mr-4' />
                    //   <div className='w-[104px] h-5 rounded-full bg-[#454B79]' />
                    // </button>
                    <button
                      key={index}
                      className='group w-full flex items-center gap-x-4 p-6  hover:bg-[radial-gradient(50%_128.57%_at_50%_-36.61%,_#8015A7_0%,_rgba(97,_54,_144,_0.00)_100%)] border-b  border-b-[#454B79] px-4 '>
                      <span className='relative'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='34'
                          height='34'
                          viewBox='0 0 34 34'
                          fill='none'
                          className='opacity-0 group-hover:opacity-100'>
                          <circle
                            cx='17'
                            cy='17'
                            r='16'
                            stroke='url(#paint0_linear_2206_5214)'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_2206_5214'
                              x1='6.2'
                              y1='5'
                              x2='29.4'
                              y2='25.8'
                              gradientUnits='userSpaceOnUse'>
                              <stop stop-color='#C427FB' />
                              <stop offset='1' stop-color='#22D7FF' />
                            </linearGradient>
                          </defs>
                        </svg>
                        <HomeIcon className='absolute inset-1/2 -translate-x-1/2 -translate-y-1/2  w-5 h-5 stroke-[#EBEBF5]' />
                      </span>
                      <span className='text-[17px] text-[#EBEBF5] group-hover:text-white'>
                        Home
                      </span>
                    </button>
                  ))}
              </div>
              <div className='mt-5'>
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    <button
                      key={index}
                      className='w-full p-6 border-b border-b-[#454B79] py-4 flex items-center '>
                      <div className='w-5 h-5 rounded-full bg-[#454B79] mr-4' />
                      <div className='w-[104px] h-5 rounded-full bg-[#454B79]' />
                    </button>
                  ))}
              </div>
              <div className='mt-5'>
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    <button
                      key={index}
                      className='w-full p-6 border-b border-b-[#454B79] py-4 flex items-center '>
                      <div className='w-5 h-5 rounded-full bg-[#454B79] mr-4' />
                      <div className='w-[104px] h-5 rounded-full bg-[#454B79]' />
                    </button>
                  ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col flex-1 bg-[#0C1033] h-screen'>
            <header className=' w-full'>
              <div className='h-[56px] bg-[#454B79] flex '>
                <div className='flex-1 w-full flex items-center justify-center'>
                  <div className='max-w-[442px] w-full inline-block h-[40px] bg-[#1D234D] rounded-full' />
                </div>
                <div className='flex items-center gap-x-6 pr-6'>
                  <div className='bg-[#1D234D] w-9 h-9 rounded-full' />
                  <div className='bg-[#1D234D] w-9 h-9 rounded-full' />
                  <div className='bg-[#1D234D] w-9 h-9 rounded-full' />
                </div>
              </div>
              <div className='h-[56px] bg-[#1D234D]'></div>
            </header>
            <div className='flex-1'>
              <Outlet />
            </div>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
