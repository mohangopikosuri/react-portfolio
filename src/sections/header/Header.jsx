import { useEffect } from 'react';
import HeaderImage from '../../assets/header.jpg';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with a duration for animations
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos="fade-up">Mohan Gopi Kosuri</h3>
        <p data-aos="fade-up">
          Welcome! I’m Mohan Gopi Kosuri, a MERN stack developer passionate about crafting digital experiences using modern web technologies. I specialize in front-end development with React and JavaScript.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="#portfolio" className="btn light">My Experience</a>
        </div>
        <div className="header__socials">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
