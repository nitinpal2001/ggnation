import React from 'react'
import Screen from '../assets/screen.png'
import Logo from '../assets/logo2.svg'
import CsGo from '../assets/csgo.svg'
import CsGoBlack from '../assets/csgoblack.svg'
import Join from '../assets/join.svg'


export default function HomeContainer() {
    return (
        <div className='main-container'>
            <div className="cardbg">
                <img src={Logo} alt="not found" />
                <p id='cardpara'>GG One (esports) operates a fully formatted and structured competitive gaming program in high schools and colleges in parallel to the academic curriculum with the objective.

                    GG One (esports) operates a fully formatted and structured competitive gaming program in high schools and colleges in parallel to the academic curriculum with the objective.
                </p>
            </div>
            <img className='screen' src={Screen} alt="screen" />
            <div className="csgo">
                <img src={CsGo} alt="" />
                <img src={CsGoBlack} alt="" />
                <img src={CsGo} alt="" />
            </div>
            <a href=""><img className='join' src={Join} alt="" /></a>
        </div>
    )
}
