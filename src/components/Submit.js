import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Submit() {
    const navigate = useNavigate()
  return (
    <div>
      <h1 className='heading my-3 mx-5'>Data submitted successfully.</h1>
      <button type="button" class="btn btn-info my-1 mx-5" onClick={() => {navigate(-1)}}>Go back</button>
    </div>
  )
}
