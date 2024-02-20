import React from 'react'

import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'

const Home = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='auth'>
      <Sidebar />
      <MobileNav />
        <div className='home-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Home