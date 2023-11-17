import React, { useState } from 'react';
import { CardSkeleton } from '~/components/card-skeleton';

function Home() {
  const [state, setState] = useState();
  return (
    <div className='flex flex-wrap gap-x-2 gap-y-10 pl-14 pr-12 pt-8 h-[calc(100vh_-_112px)] overscroll-y-auto'>
      {Array(6)
        .fill(1)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
}
export default Home;
