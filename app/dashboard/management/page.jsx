import Search from '../../ui/dashboard/management/searchbar'
import TableOfM from '../../ui/dashboard/management/table'
export default async function Page({
    searchParams,
  }) {

    return (
        <div className="h-full flex flex-col">
            <header className='mb-10'>
                <Search></Search>
            </header>
            <div className='flex-1'>
                <TableOfM searchParams={searchParams}></TableOfM>
            </div>
        </div>
    );
}