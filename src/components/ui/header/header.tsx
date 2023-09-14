import { NextPage } from 'next'
import Link from 'next/link'
import s from '@/components/ui/header/header.module.scss'
import Navigation from './navigation/navigation'


const Header: NextPage = () => {

  const links = [
    {label: 'Home', path: '/'}, 
    {label: 'Blog', path: '/blog'}, 
    {label: 'Contacts', path: '/contacts'}, 
  ]

  return <header className={s.header}>
   <Navigation links={links}/>
    {/* <Link href={'/'}>Home</Link>
    <Link href={'/blog'}>Blog</Link>
    <Link href={'/contacts'}>Contacts</Link> */}
  </header>
}

export default Header