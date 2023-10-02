import React from 'react'

function Main(props) {
    console.log(props)
    return (
        <div className="main">
            {props.children}
        </div>
    )
}

export default Main