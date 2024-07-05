'use client';
import {updateinfo} from '../../../lib/actions'
import { Input, Select, Button } from 'antd';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
export default function Edit({uid}) {
    let searchObj = {
        webSite: undefined,
        webSiteAlias: '',
        account: '',
        password: '',
        link: '',
        tag: '',
    }

    const searchParams = useSearchParams();
    const pathname = usePathname();//当前路径
    const { replace } = useRouter();

    const handleSearch = (term) => {

        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    const updateInvoiceWithId = updateinfo.bind(null, uid);


    {/* <Input value={searchObj.webSite} onChange={(e) => { searchObj = { ...searchObj, webSite: e };console.log(searchObj) }} placeholder="Basic usage" /> */ }
    return (
        <form className='flex flex-1 flex-col' action={updateInvoiceWithId}>
            <div className="flex flex-col">
                <div className='h-8'></div>
                <Input
                    name='webSite'
                    placeholder='webSite'
                    // defaultValue={searchParams.get('query')?.toString()}
                    onChange={(e) => { searchObj = { ...searchObj, webSite: e.target.value }; }}
                />
                <div className='h-4'></div>
                <Input
                    placeholder='webSiteAlias'
                    name='webSiteAlias'
                    className='m-8'
                    onChange={(e) => { searchObj = { ...searchObj, webSiteAlias: e.target.value };  }}
                />
                <div className='h-4'></div>
                <Input
                    placeholder='account'
                    name='account'
                    onChange={(e) => { searchObj = { ...searchObj, account: e.target.value }; }}
                />
                <div className='h-4'></div>
                <Input
                    placeholder='password'
                    name='password'
                    onChange={(e) => { searchObj = { ...searchObj, password: e.target.value };  }}
                />
                <div className='h-4'></div>
                <Input
                    placeholder='link'
                    name='link'
                    onChange={(e) => { searchObj = { ...searchObj, link: e.target.value };}}
                />
                <div className='h-4'></div>
                <Input
                    placeholder='tag'
                    name='tag'
                    onChange={(e) => { searchObj = { ...searchObj, tag: e.target.value };  }}
                />



            </div>

            <div>
                <div className='h-4'></div>
                {/* <Button type='primary'> Add</Button> */}
                <button type="submit"> Update</button>
            </div>
        </form>

    );
}
