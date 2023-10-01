import React from 'react'
import './SideNav.css'

export default function SideNav() {
    const menus = [
        { to: '/r/popular', text: "Popular"},
        { to: '/r/all', text: "All"},
        { to: '/r/random', text: "Random"}
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "askreddit",
        "mildlyinteresting",
        "showerthoughts",
        "aww",
        "dataisbeautiful",
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
                <ul className="sidenav__subreddit">
                    {subreddits.map(subreddit => (
                        <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                    ))}

                </ul>
            </div>
        </div>
    )
}