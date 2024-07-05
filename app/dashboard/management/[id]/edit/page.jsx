import { Breadcrumb } from "antd";
import Link from "next/link";

import Edit from '../../../../ui/dashboard/management/edit'

export default async function Page({ params }) {
  const id = params.id;
  console.log('id',id)
  return (
    <main className="h-full flex flex-col">
      <Breadcrumb
        items={[
          {
            title:<Link href="/dashboard">dashboard</Link> ,
          },
          {
            title: <Link href="/dashboard/management">management</Link>,
          },
          {
            title: "edit",
          },
        ]}
      />
      <div className="flex flex-1">
        <Edit uid={id}></Edit>
      </div>
    </main>
  );
}
