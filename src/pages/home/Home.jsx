import './home.css'
import Navbar from '../../comppnent/Navbar/Navbar'
import { useEffect, useState } from 'react'
import Cards from '../../comppnent/Cards/Cards';


const Home = () => {
    const [data,setData]=useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTermFromNavbar, setSearchTermFromNavbar] = useState('');

  const updateSearchTerm = (searchTerm) => {
    setSearchTermFromNavbar(searchTerm);
  };
    
    const fetchData=async()=>{
        const res=await fetch('https://api.punkapi.com/v2/beers').catch((err)=>console.log(err))

        const jsonData=await res.json();
        setData(jsonData);
        setFilteredData(jsonData);
    }

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(() => {
      const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchTermFromNavbar.toLowerCase()));

      console.log(filteredData)
      setFilteredData(filteredData);
  }, [searchTermFromNavbar, data])

    
  return (
    <div className='home'>
        <Navbar updateSearchTerm={updateSearchTerm}/>
        <Cards data={filteredData}/>
    </div>
  )
}

export default Home