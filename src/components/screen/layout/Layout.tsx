
import Header from '@/components/ui/header/header'
import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {}

const Layout: NextPage<{children: ReactNode}> = ({children}) => {
  return <div>
    <Header />
    {children}
  </div>
}

export default Layout