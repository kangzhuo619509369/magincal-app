'use client';
// import { useDebouncedCallback } from 'use-debounce';
import { Input, Select, Button, Tooltip } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { AddRecoard } from '../../../ui/dashboard/button'
import { getPasswordList } from '../../../lib/actions';
export default function Search({ placeholder }) {
  let searchObj = {
    webSite: '',
    webSiteAlias: '',
    account: '',
    password: '',
    link: '',
    tag: '',
  }

  const searchParams = useSearchParams();
  const pathname = usePathname();//当前路径
  const { replace } = useRouter();

  const handleSearch = (isReset) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (searchObj) {
      console.log('searchObj', searchObj)
      Object.keys(searchObj).forEach((key) => {
        if (searchObj[key])
          params.set(key, searchObj[key]);
        else
          params.delete(key);
      })
    } else {
      Object.keys(searchObj).forEach((key) => {
        params.delete(key);
      })
    }
    if(isReset){
      params.set('reset', true);
    }else{
      params.delete('reset');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  {/* <Input value={searchObj.webSite} onChange={(e) => { searchObj = { ...searchObj, webSite: e };console.log(searchObj) }} placeholder="Basic usage" /> */ }
  return (
    <div className="flex flex-1 justify-between flex-shrink-0">
      <div className='w-10/12 flex '>
        <Input
          placeholder='webSite'
          // defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => { searchObj = { ...searchObj, webSite: e.target.value }; }}
        />
        <Input
          placeholder='webSiteAlias'
          // defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => { searchObj = { ...searchObj, webSiteAlias: e.target.value }; }}
        />
        <Input
          placeholder='account'
          // defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => { searchObj = { ...searchObj, account: e.target.value }; }}
        />
        <Input
          placeholder='password'
          // defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => { searchObj = { ...searchObj, password: e.target.value }; }}
        />
        <Select placeholder='tag' style={{
          minWidth: '20%',
        }}
          onChange={(e) => { searchObj = { ...searchObj, tag: e }; }} options={[{ value: 'sample', label: <span>sample</span> }]} /></div>

      <div>
        {/* <Button type="primary" className='mr-4'>Add</Button> */}
        <AddRecoard></AddRecoard>

        <Tooltip title="search">

          <Button onClick={() => { handleSearch(false) }} type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Tooltip title="ResSearch">

          <Button className='ml-4' onClick={() => {
            searchObj = {
              webSite: '',
              webSiteAlias: '',
              account: '',
              password: '',
              link: '',
              tag: '',
            }; handleSearch(true)
          }} type="primary" shape="circle" icon={<ReloadOutlined />} />
        </Tooltip>
      </div>
    </div>
  );
}
