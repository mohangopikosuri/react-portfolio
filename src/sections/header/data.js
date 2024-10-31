import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineDribbble } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai'; // Import LinkedIn icon

const data = [
    { id: 1, link: 'https://instagram.com', icon: <AiOutlineInstagram /> },
    { id: 2, link: 'https://twitter.com', icon: <AiOutlineTwitter /> },
    { id: 3, link: 'https://www.linkedin.com/in/mohangopik/', icon: <AiFillLinkedin /> }, // Your LinkedIn link
    { id: 4, link: 'https://github.com/mohangopikosuri?tab=repositories/', icon: <AiFillGithub /> } // Update with your GitHub username
];

export default data;
