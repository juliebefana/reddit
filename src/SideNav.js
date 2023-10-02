import React from 'react'
import './SideNav.css'

export default function SideNav() {
    const menus = [
        { to: '/r/popular', text: "Popular"},
        { to: '/r/all', text: "All"},
        { to: '/r/random', text: "Random"}
    ]

    const topics = [
        "Gaming",
        "Sports",
        "Business",
        "Crypto",
        "Television",
        "Celebirty",
    ]
    const subreddits = [
        "About Reddit",
        "Advertise",
        "Help",
        "Blog",
        "Careers",
        "Press",
    ]
    return (
        <div className="sidenav">
            <div className="sidenav__logo">
                <img src="data:image/png;base64,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" />
            </div>
            <div className="sidenav__link">
                <ul className="sidenav__menu">
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}

                </ul>
                <hr />
                <ul className="sidenav__topics">
                    <h2>TOPICS</h2>
                    {topics.map(topics =>(
                       <li><a href={`/r/${topics}`}>{topics}</a></li> 
                    ))}
                    <hr />
                </ul>
                <ul className="sidenav__subreddit">
                    <h2>RESOURCES</h2>
                    {subreddits.map(subreddit => (
                        <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                    ))}

                </ul>
            </div>
        </div>
    )
}