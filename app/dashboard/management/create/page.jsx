import { Breadcrumb } from "antd";
import Link from "next/link";
import { Suspense } from 'react';
import Create from '../../../ui/dashboard/management/create'
export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
      
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
     
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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
       
        <Suspense  fallback={<InvoicesTableSkeleton />}>
        <Create></Create>
      </Suspense>
      </div>
    </main>
  );
}
