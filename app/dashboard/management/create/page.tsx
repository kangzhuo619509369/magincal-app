import { Breadcrumb } from "antd";
import Link from "next/link";

import Create from '../../../ui/dashboard/management/create'

export default async function Page() {
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
            title: "add",
          },
        ]}
      />
      <div className="flex flex-1">
        <Create></Create>
      </div>
    </main>
  );
}
