
import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="wrapper">
            <div className="inputs">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="EMail"/>
                <input type="text" placeholder="Age"/>
            </div>
            </div>
            <div className="button">
                <button type="submit">Vote</button>
            </div>
        </form>
    )
}

export default Form
