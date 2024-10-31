import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                "I’m a MERN Stack Developer with over 3 years of experience, specializing in React.js, JavaScript, Node.js, and TypeScript. With a Master’s degree in Computer Science, I have a strong foundation in creating efficient, user-friendly applications. My technical expertise includes Redux Toolkit, SCSS, and Micro Frontend architecture.</p>
                <p>
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About