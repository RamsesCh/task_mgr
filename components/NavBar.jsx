import Link from 'next/link';
import { FaRegCalendarCheck, FaQuestionCircle, FaReact } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="bg-slate-800 text-white py-5 px-20 flex justify-between">
            <h5 className="text-xl flex items-center">
                <FaReact className='me-2' />TaskManager</h5>
            <ul className="flex">
                <li className="mr-10">
                    <Link href="/" className='flex items-center'>
                        <FaRegCalendarCheck className='me-2' /> Tareas
                    </Link>
                </li>
                <li>
                    <Link href="/help" className='flex items-center'>
                        <FaQuestionCircle className='me-2' />Ayuda
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;