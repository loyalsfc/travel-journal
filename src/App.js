import React from 'react'
import Earth_icon from './images/svg/earth-africa.svg'
import Page from './component/Content'
import data from './Data'

function App(){
  const newData = data.map(items =>{
    return(
      <Page 
        key={items.location}
        title = {items.title}
        location = {items.location}
        googleMapsUrl = {items.googleMapsUrl}
        startDate = {items.startDate}
        endDate = {items.endDate}
        description = {items.description}
        imageUrl = {items.imageUrl}
      />
    )
 })
  return (
    <div className = "app">
      <Header />
      {newData}
    </div>
  );
}

function Header(){
  return(
    <header>
      <img src={Earth_icon} className='header--earth' />
      <p className='header--title'>my travel journal</p>
    </header>
  )    
}


export default App;