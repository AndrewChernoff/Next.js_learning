import { NextPage } from 'next'
import Link from 'next/link'
import s from '@/components/ui/header/header.module.scss'


const Header: NextPage = () => {
  return <header className={s.header}>
   
    <Link href={'/'}>Home</Link>
    <Link href={'/blog'}>Blog</Link>
    <Link href={'/contacts'}>Contacts</Link>
  </header>
}

export default Header