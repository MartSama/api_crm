import React from 'react'

const Error = ({children}) => {
    return (
        <div className="text-center font-bold text-white m-4 p-4 bg-red-800 rounded-lg">
            {children}
        </div>
    )
}

export default Error