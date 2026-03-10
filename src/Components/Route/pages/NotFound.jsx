import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-xl mt-4 text-gray-700">Page Not Found</p>

                <Link
                    to="/"
                    className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </>
    )
}

export default NotFound