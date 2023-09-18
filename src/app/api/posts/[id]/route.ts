import { NextResponse } from "next/server";
import { headers, cookies } from 'next/headers'


export async function DELETE(request: Request, {params}: {params: {id: string}}) {
 
    const id = params.id

    const headerList = headers()
    const type = headerList.get('Content-Type')
    console.log(id);
    
    const cookiesList = cookies()
    const cookie2 = cookiesList.get('Cookie_2')?.value


  return NextResponse.json({id, type, cookie2})
}