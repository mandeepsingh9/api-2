import React from 'react'

const Lists = ({item}) => {
  return (
    <div className='card'>
        <label><span>Name: </span>{item.Name} </label>
        <label><span>BranchType: </span>{item.BranchType} </label>
        <label><span>District: </span>{item.District} </label>
        <label><span>Division: </span>{item.Division} </label>
        <label><span>Region: </span>{item.Region} </label>
        <label><span>Country: </span>{item.Country} </label>

    </div>
  )
}

export default Lists