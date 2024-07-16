import { BannerItem } from '@/components/BannerItem.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import React from 'react'

export const Home = () => {
  return (
    <div className='flex flex-col justify-between align-center'>
      <Separator></Separator>
      <BannerItem></BannerItem>
      </div>
  )
}
