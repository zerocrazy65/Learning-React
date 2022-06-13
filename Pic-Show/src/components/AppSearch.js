import React from 'react'
import './AppSearch.css'
function AppSearch(props) {
    const {value, onValueChange} = props
    return (
        <div className="app-search">
            <input
                className="app-search-input"
                type="text"
                placeholder="Search"
                value={value}
                onChange={(event) => {onValueChange(event.target.value) }}
            >
            </input>
        </div>)
}

export default AppSearch