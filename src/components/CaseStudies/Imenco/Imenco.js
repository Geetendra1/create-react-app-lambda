import React from 'react'
import Image from 'react-bootstrap/Image'
// import one from '../../../assets/svg/about/overlay.svg'
import two from '../../../assets/png/IMENCO CS banner.png'


const Imenco = (props) => {
    const themes = props.themes
    console.log('themes', themes);

  return (
    
    <div style={{backgroundColor: themes.secondary}}>
    <div style={{width:"100%", height:"100%"}} >
        <Image src={two} alt={'Employee Management'} style={{width:"100%", height:"100%"}} fluid />
    </div>
    </div>
  )
}

export default Imenco