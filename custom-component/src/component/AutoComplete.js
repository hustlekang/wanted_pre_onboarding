import React from 'react'

export default function AutoComplete() {
    
    const dataList = (
        <datalist id="fruits">
            <option>바나나</option>
            <option>사과</option>
            <option>망고</option>
        </datalist>
        )

    return (
        <div>
            <input type="search" autoComplete="on"/>
            {/* {dataList} */}
        </div>
    )
}
