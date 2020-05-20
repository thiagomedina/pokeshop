import React from 'react'
import './spinner.css'
const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow size" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
export default Spinner;