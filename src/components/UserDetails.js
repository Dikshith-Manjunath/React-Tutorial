import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const { userId } = useParams()
  return (
    <div className='my-3 mx-3'>
      Details about Users { userId }:
    </div>
  )
}
