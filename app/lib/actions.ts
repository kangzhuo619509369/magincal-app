'use server';
import { sql } from '@vercel/postgres'; // 这里需要注意



import { revalidatePath } from 'next/cache';

import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';


export async function createInvoice(formData) {
  const account = formData.get('account')
  const link = formData.get('link')
  const password = formData.get('password')
  const tag = formData.get('tag')
  const webSite = formData.get('webSite')
  const webSiteAlias = formData.get('webSiteAlias')

  // const account=formData.get('amount')
  //  await  sql`INSERT INTO magicalmanagepassword (account, link, password, tag,webSite,webSiteAlias) VALUES ( 'w' ,'e','r','t','y','u')`;
  try {
    await sql`
      INSERT INTO magicalmanagepassword (account, link, password, tag,webSite,webSiteAlias)
      VALUES (${account}, ${link}, ${password}, ${tag}, ${webSite}, ${webSiteAlias})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/management');
  redirect('/dashboard/management');
}
export async function getPasswordList({ searchParams }) {
  // console.log(searchParams)
  const { account, password, webSite, webSiteAlias, reset } = searchParams
  console.log(searchParams)
  // console.log('account',account)
  console.log('searchParams.account', searchParams.account)
  // console.log('searchParams.account',searchParams.get('account'))
  if (reset) {
    let list = await sql`
    SELECT *  FROM magicalmanagepassword 
  `;
  console.log(list)
    return list
  }
  try {
    const res = await sql`
      SELECT * FROM magicalmanagepassword 
        WHERE account ILIKE ${`%${account}%`} 
        OR password ILIKE ${`%${password}%`}
        OR webSiteAlias ILIKE ${`%${webSiteAlias}%`}
        OR webSite ILIKE ${`%${webSite}%`}
    `;
    // WHERE account ILIKE ${`%${account}%`} 
    // OR password ILIKE ${`%${password}%`}
    // OR webSiteAlias ILIKE ${`%${webSiteAlias}%`}
    // OR webSite ILIKE ${`%${webSite}%`}
    // console.log(searchParams)
    return res
  } catch (error) {
    return {
      message: error,
    };
  }
}


export async function updateinfo(id,formData) {
  const account = formData.get('account')
  const link = formData.get('link')
  const password = formData.get('password')
  const tag = formData.get('tag')
  const webSite = formData.get('webSite')
  const webSiteAlias = formData.get('webSiteAlias')

  // const account=formData.get('amount')
  //  await  sql`INSERT INTO magicalmanagepassword (account, link, password, tag,webSite,webSiteAlias) VALUES ( 'w' ,'e','r','t','y','u')`;
  try {
    await sql`
      UPDATE magicalmanagepassword
      SET account = ${account}, link = ${link}, password = ${password}, tag = ${tag}, webSite = ${webSite}, webSiteAlias = ${webSiteAlias}
          WHERE uid = ${id}
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/management');
  redirect('/dashboard/management');
}