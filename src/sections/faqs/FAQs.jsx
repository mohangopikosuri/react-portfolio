import { useEffect } from 'react'
import faqs from './data'
import FAQ from './FAQ'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './faqs.css'

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  })

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Take a look at some commonly asked questions below. Click any question to reveal the answer, and if there's anything else you'd like to know, feel free to reach out through the contact section!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq} />
          ))
        }
      </div>
    </section>
  )
}

export default FAQs
