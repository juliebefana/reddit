import React from 'react'


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
                <a href="/">
                    <img src="/reddit-logo.png" alt="Reddit Logo" />
                </a>
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