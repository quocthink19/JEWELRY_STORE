import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard=()=> {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img  className="h-16 w-16"src="https://cdn.pnj.io/images/detailed/202/on-sbxm00w000049-bong-tai-bac-dinh-ngoc-trai-pnjsilver-1.jpg" alt="" />
        <div>
            <p>Biryani</p>
            <p>$299</p>
        </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'style={{ color: 'blue' }}>
                complete
            </Button>
        </div>


    </Card>
  )
}