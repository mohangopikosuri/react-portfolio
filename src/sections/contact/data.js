import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const data = [
    { id: 1, icon: <HiOutlineMail />, link: 'mailto:589gopi@gmail.com' }, // Updated email link
    { id: 2, icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/mohangopik/' }, // Your LinkedIn profile
    { id: 3, icon: <FaWhatsapp />, link: 'https://wa.me/7729836586' } // Updated WhatsApp link
];

// alternative WhatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
