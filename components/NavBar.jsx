import Link from 'next/link';
import { FaRegCalendarCheck, FaQuestionCircle, FaReact } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="bg-slate-800 text-white py-5 px-4 sm:px-4 md:px-20 flex justify-between">
            <h5 className="text-xl flex items-center">
                <FaReact className='me-2' />TaskManager</h5>
            <ul className="flex items-center">
                <li className="mr-5 sm:mr-10">
                    <Link href="/" className='flex items-center'>
                        <FaRegCalendarCheck className='sm:me-2' /><span className='hidden sm:inline-block'>Tareas</span>
                    </Link>
                </li>
                <li>
                    <Link href="/help" className='flex items-center'>
                        <FaQuestionCircle className='sm:me-2' /><span className='hidden sm:inline-block'>Ayuda</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;