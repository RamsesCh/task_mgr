"use client";

import { FaQuestionCircle } from "react-icons/fa";

function HelpPage() {
    return (
        <div>
            <div className="bg-white mb-2 w-100 p-4 rounded-md text-black">
                <h1 className="font-bold flex items-center">
                    <FaQuestionCircle className='me-2' />Help Page</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias error sit deleniti natus quos laborum quia illo quaerat nisi quam excepturi accusamus doloribus eaque reiciendis nam dolores, incidunt nemo?</p>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, itaque totam, quibusdam ab tempore est quos deserunt voluptatum debitis porro officia quidem. Laboriosam, vero minima! Porro animi recusandae pariatur laudantium.</p>
            </div>
        </div>
    )
}

export default HelpPage;