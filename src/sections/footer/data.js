import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai'; // Import LinkedIn icon
import { AiFillGithub } from 'react-icons/ai';

export const links = [
    { id: 1, link: '#', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#services', title: 'Services' },
    { id: 4, link: '#portfolio', title: 'Portfolio' },
    { id: 5, link: '#contact', title: 'Contact' }
];

export const socials = [
    { id: 1, link: 'https://instagram.com', icon: <AiOutlineInstagram /> },
    { id: 2, link: 'https://twitter.com', icon: <AiOutlineTwitter /> },
    { id: 3, link: 'https://www.linkedin.com/in/mohangopik/', icon: <AiFillLinkedin /> }, // Your LinkedIn link
    { id: 4, link: 'https://github.com/mohangopikosuri?tab=repositories', icon: <AiFillGithub /> } // Your GitHub link
];
