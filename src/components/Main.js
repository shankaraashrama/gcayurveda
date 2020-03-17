import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Image from '../components/Image'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Introduction</h2>
          <p>
          Garhapatya Chikitsalayaha is an ayurveda center with a very rich traditional 
          background. The centre is built on the foundations of more than 100 years of 
          spiritual practices, with great saints visiting the place and blessing the 
          inmates. Many social gatherings working towards social, and spiritual enlistment 
          of humanity has provided a very strong positive influence on the ailing people 
          who come to the center for restoration, and rejuvenation.
          </p>
          <p>
          This center is unique in following all paths of treatment as per the 
          classics of Ayurveda called the Samhitas . It advocates and practices 
          spiritual therapy, vedic rituals, medicinal therapy, and also psycho 
          therapy which are the main paths of treatment.
          </p>
          {close}
        </article>

        <article
          id="testimonial"
          className={`${this.props.article === 'testimonial' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Testimonials</h2>
          <p>
          “My daughter had skin problems for which she had taken lot of antibiotics 
          which did not help. She was treated here and has been completely cured. 
          She conveyed this to her brother who later had treatment for his nervousness 
          before facing exams and the result is his present career in the US for higher 
          studies. He is fully transformed into healthy individual with lot of confidence 
          in himself. All the tips given by the doctor helped overcome his defects. 
          All of us are very thankful to the doctor.”
          </p>
          <p>
          - Sreedevi, Principal
          </p>
          <p>
          “I had severe varicose vein problems and leg pain due to that. 
          I was referred by my friend and now thanks to the doctor and his 
          staff for their excellent treatment. I am much better now.”
          </p>
          <p>
          - Dakshayani, Software Engineer
          </p>
          {close}
        </article>

        <article
          id="address"
          className={`${this.props.article === 'address' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>The center is open Monday to Saturday 7.30 AM to 11.30 AM, 
            except on festival days and holidays.
            <br/>Please book your appointments before coming.
          </p>
          <p>Garhapatya Chikitsalayaha
          <br/>103/62, Ratnavilasa Road, 
          <br/>Basavanagudi,
          <br/>Bangalore (South)-560004
          <br/>Karnataka
          <br/>India
          </p>
          <p>
          Phone: +91-80-41114554(Clinic)
          <br/>Mobile: +91 9845257723
          </p>
          <p>
          Email: doctor At gcayurveda.in
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
