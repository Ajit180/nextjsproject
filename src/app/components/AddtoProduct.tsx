'use client'
import { Button } from '@/components/ui/button'

import React from 'react'

const AddtoProduct = () => {
  return (
    <div>
      <Button onClick={()=>console.log('Click')}>Add to cart</Button>
    </div>
  )
}

export default AddtoProduct
