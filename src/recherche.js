import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
function Recherche(props) {
   

   const handleChange = (e) => 
    props.setFilter({...props.filter,text:e.target.value} )
    
    return (
        <div>
            <input
                type="text"
                placeholder="tape your favorite movie"
                onChange ={handleChange}
            />
            <StarRatingComponent onStarClick={(nextValue, prevValue, name)=>props.setFilter({...props.filter,star:nextValue} )}/>
        </div>
    )
}

export default Recherche
