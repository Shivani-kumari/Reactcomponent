import React from 'react'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
  } from './HeroElements';

export default function Hero() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <HeroContainer>
                <Navbar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>
                            Greatest Pizza Ever
                        </HeroH1>
                        <HeroP>
                            Ready in 60 seconds
                        </HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
                 </HeroContainer>
            
           
        </div>
    )
}
