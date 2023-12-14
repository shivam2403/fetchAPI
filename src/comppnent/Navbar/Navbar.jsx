import { useEffect, useState } from 'react'
import './navbar.css'

const Navbar = ({updateSearchTerm}) => {
    const [searchItem,setSearchItem]=useState("");
    

    const handleChange=(e)=>{
      setSearchItem(e.target.value);
      updateSearchTerm(searchItem);
    }
    
    return (
      <div className='n'>
        <div className="left">Logo</div>
        <div className="right">
            <input className='search' type="text" placeholder='🔍 Search Here' value={searchItem} onChange={(e)=>handleChange(e)} />
        </div>
    </div>
  )
}

export default Navbar