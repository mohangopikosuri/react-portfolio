import { SiAdobexd } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';

const data = [
    {
        id: 1,
        icon: <SiAdobexd />,
        title: 'UI/UX Design',
        desc: "My designs are user-centered and visually engaging, leveraging industry standards to create intuitive experiences that keep users delighted."
    },
    {
        id: 2,
        icon: <RiReactjsLine />,
        title: 'Frontend Development (React & JavaScript)',
        desc: "Using modern frameworks like React and JavaScript, I build responsive and performant interfaces accessible on all devices for an optimal user experience."
    },
    {
        id: 3,
        icon: <FaServer />,
        title: 'Backend Development (MERN, MongoDB, AWS, EC2)',
        desc: "I design robust backends with the MERN stack, ensuring secure and scalable infrastructures with MongoDB, AWS, and EC2 for enhanced business security and performance."
    },
    {
        id: 4,
        icon: <AiFillAppstore />,
        title: 'Full-Stack Development (MERN Stack)',
        desc: "I build efficient full-stack applications using the MERN stack, ensuring seamless integration across MongoDB, Express, React, and Node.js for a cohesive product."
    }
];

export default data;
