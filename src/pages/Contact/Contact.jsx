import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from './styles';
import Banner from '../../assets/banner_contact.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section 
        className="bg-cover bg-no-repeat bg-top w-full py-60" // Aumentado el padding vertical para mayor altura
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h1 className="text-5xl text-white text-center">Get in touch.</h1>
        <p className="text-md text-white text-center mt-10">See what we can do for you by reaching out to key contacts or filling out the inquiry form below.</p>
      </section>

      <div className="container mx-auto flex-grow p-4">
      {/* Banner with Image and Centered Text */}
      

      {/* Contact Section */}
      <section className={styles.section}>
        {/* Google Maps */}
        <div className={styles.mapContainer}>
          <iframe
            title="Google Maps Location"
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.7462662611623!2d-80.4290123!3d25.6288777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c17f10801b03%3A0x2e02b6a2c05c3f5e!2s2423%20SW%20147th%20Ave%2C%20Miami%2C%20FL%2033185%2C%20USA!5e0!3m2!1sen!2s!4v1710123456789"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.contactContainer}>
          {/* Contact Information */}
          <div>
            <h3 className={styles.contactTitle}>Contact Information</h3>
            <div className={styles.contactInfo}>
              <MapPin className={styles.contactIcon} />
              <p>2423 SW 147th Ave, Suite 263 Miami, FL 33175</p>
            </div>
            <div className={styles.contactInfo}>
              <Phone className={styles.contactIcon} />
              <p>305-204-8040</p>
            </div>
            <div className={styles.contactInfo}>
              <Mail className={styles.contactIcon} />
              <p>info@fiberfluent.com</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className={styles.contactTitle}>Leave Your Message</h3>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.inputField}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputField}
                  placeholder="Your Email"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={styles.textArea}
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className={styles.submitButton}>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>
    
  );
}
