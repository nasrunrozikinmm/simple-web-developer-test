import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Details({ setSelect }) {
    const { user } = useSelector((state) => state.userReducer);
    
    return (
        <div id="toast-notification" className="p-4 m-3 w-full h-32 max-w-xs text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
            <div className="flex items-center mb-3">
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Details notification</span>
                <button
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-notification"
                    aria-label="Close"
                    onClick={() => setSelect(false)}
                >
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="flex items-center">
                <div className="inline-block relative shrink-0">
                    <img className="w-12 h-12 rounded-full" src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="Jese Leos image" />
                </div>
                <div className="ml-3 text-sm font-normal">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</div>
                    <div className="text-sm font-normal">{user.email}</div>
                    <div className="text-sm font-normal">{user.role}</div>
                </div>
            </div>
        </div>
    );
}
