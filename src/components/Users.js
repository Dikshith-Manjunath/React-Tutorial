import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

export default function Users() {
    const [searchParams,setSearchParams] = useSearchParams('light');
    const showActiveUsers = searchParams.get('filter') === 'active' //boolean value
  return (
    <>
        <h2>users1</h2>
        <h2>users2</h2>
        <h2>users3</h2>
        <Outlet/>
        <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-primary mx-2" type="button" onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
            <button className="btn btn-primary" type="button" onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUsers ? (<h2 className='mx-3 my-3'>Showing Active Users</h2>):(<h2 className='mx-3 my-3'>Showing All Users</h2>)
        }
    </>
  )
}
