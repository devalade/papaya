export function CardSkeleton() {
  return (
    <div>
      <div className='h-52 w-[376px] bg-[#1D234D] rounded-t-xl' />
      <div className='p-3 pr-4 h-32 flex gap-x-3  bg-[#2E335A] rounded-b-xl'>
        <div>
          <div className='bg-[#454B79] w-10 h-10 rounded-full' />
        </div>
        <div className='space-y-2'>
          <div className='h-6 rounded-full bg-[#454B79] w-full' />
          <div className='h-3 rounded-full bg-[#454B79] w-[104px]' />
          <div className='h-3 rounded-full bg-[#454B79] w-[128px]' />
        </div>
      </div>
    </div>
  );
}
