
import Link from 'next/link';
import { Input, Select, Button, Tooltip } from 'antd';

export function AddRecoard() {
  return (
    <Link
      href="/dashboard/management/create"
    >
     <Button type="primary" className='mr-4'>Add</Button>
    </Link>
  );
}
export function EditRecoard({ id }) {
  return (
    <Link
      href={`/dashboard/management/${id}/edit`}
    >
     <Button type="primary" className='mr-4'>Edit</Button>
    </Link>
  );
}




