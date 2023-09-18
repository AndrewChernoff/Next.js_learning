import { NextResponse } from 'next/server'
import { pizzas } from './pizzas'
 
export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)

    const query = searchParams.get('q')

    let pizzasItems = pizzas

    if(query) {
        pizzasItems = pizzas.filter(pizza => pizza.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) 
    }
    

  return NextResponse.json({pizzasItems})
}

export async function POST(request: Request) {
 
    const body = await request.json()
    console.log(body);
    

  return NextResponse.json({body})
}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
 
    const id = params.id
    console.log(id);
    

  return NextResponse.json({id})
}