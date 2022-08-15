import { useSearchParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react'
import Cake from './Cake'

function Search(){

    var [query,setQuery] = useSearchParams();
    var abj = query.get("q")
    var [cakes,setCakes] = useState([])


    useEffect(()=>{
        axios({
          url: "https://apifromashu.herokuapp.com/api/searchcakes",
          method: "get",
          params: {
              q:query.get("q")
          },
        }).then((response)=>{
          setCakes(response.data.data)
        },
        (error)=>{
          console.log("Error Occured:")
        })
      },[])
    

      if(cakes.length == 0){
        return <img class="h-100" src="Images/ZZ5H.gif"></img>
      }else{
        
     
        return (
        <>
        <div className="container">
        <div className="row">
          
          <hr className="dropdown-divider"/>
          {cakes.map(function(each,index){
            return <Cake name={each.name} cakeid={each.cakeid}  cakeDesc={each.price} cakeImg={each.image}/>
          })}
  
        </div>
      </div>
  
      </>
        )
      }
}

export default Search