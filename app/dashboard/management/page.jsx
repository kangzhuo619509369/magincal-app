import Search from '../../ui/dashboard/management/searchbar'
import TableOfM from '../../ui/dashboard/management/table'
import { Suspense } from 'react';
function Temptt(){
    return <div>loading</div>
}
export default async function Page({
    searchParams,
  }) {

    return (
        <div className="h-full flex flex-col">
            <header className='mb-10'>
               
                <Suspense  fallback={<Temptt />}>
                <Search></Search>
      </Suspense>
            </header>
            <div className='flex-1'>
            <Suspense  fallback={<Temptt />}>
            <TableOfM searchParams={searchParams}></TableOfM>
      </Suspense>
              
            </div>
        </div>
    );
}