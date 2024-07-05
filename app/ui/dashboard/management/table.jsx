"use server"
import { Tag, Tooltip } from 'antd';
import { getPasswordList } from '../../../lib/actions';
import { EditRecoard } from '../button';
export default async function TableOfM(searchParams) {
  const columns = [
    {
      key: "website",
      label: "webSite",
    },
    {
      key: "websitealias",
      label: "webSiteAlias",
    },
    {
      key: "account",
      label: "account",
    },
    {
      key: "password",
      label: "password",
    },
    {
      key: "link",
      label: "link",
    },
    {
      key: "tag",
      label: "tag",
    },
    {
      key: "edit",
      label: "edit",
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  let { rowCount,
    rows } = await getPasswordList(searchParams)
  console.log('rowCount', rowCount)
  console.log('rows', rows)
  if (!rows) rows = []
  return (
    <div className="h-full">
      <header className='flex bg-slate-200 h-10 '>
        {columns.map((item) => {
          return <div key={item.key} className='w-7/12 h-10 flex items-center pl-2'>{item.label}</div>
        })}
      </header>
      <section className='h-3/5 overflow-auto'>
        {rows.map((record, index) => {
          return <div key={index} className='flex'>
            {columns.map((key) => {
              return key.key=='edit'?<div className='w-7/12 flex items-center'><EditRecoard  id={record.uid}></EditRecoard> </div> :
              <Tooltip placement="topLeft" title={record[key.key]}>
                <div className='w-7/12 overflow-hidden h-11 flex items-center pl-2'>{record[key.key]}</div>
              </Tooltip>
            })}

          </div>
        })}
      </section>
    </div>
  );
}