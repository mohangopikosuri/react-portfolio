import Card from '../../components/Card';
import data from './data';
import './services.css';

const Services = () => {
  return (
    <section id="services">
      <div className="services__header" data-aos="fade-up">
        <h2>My Services</h2>
        <p>Discover the diverse range of services I offer, tailored to meet your unique needs and help you succeed.</p>
      </div>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4 className="service__title">{item.title}</h4>
              <p className="service__desc">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
