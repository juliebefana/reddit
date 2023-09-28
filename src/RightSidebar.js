import React from 'react'
import './RightSidebar.css'

export default function RightSidar() {
    const menus = [
        { to: '/r/explainlikeimfive', text: "r/explainlikeimfive"},
        { to: '/r/explainlikeimfive', text: "r/IAmA"},
        { to: '/r/classicwow', text: "r/classicwow"},
        { to: '/r/Instagram', text: "r/Instagram"},
        { to: '/r/NintendoSwitch', text: "r/NintendoSwitch"},
        
    ]
    return (
        <div className="RightSidebar">
            
                <ul 
                className="RightSidebar__menu">
                    <h1 
                    className="popular_com">Popular communities</h1>
                    <hr></hr>
                    {menus.map(menu => (
                        <li>
                            <a className="topics" href={menu.to}>{menu.text}</a>
                            </li>
                    ))}
                </ul>
                
                
            
        </div>
    )
}