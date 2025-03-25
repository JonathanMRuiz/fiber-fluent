import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <div className="container mx-auto flex-grow p-4 py-10">
       <div className='w-full max-w-12xl mb-10'>
          <iframe
            title="Google Maps Location"
            className='w-full h-72 rounded-lg shadow-lg'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.7462662611623!2d-80.4290123!3d25.6288777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c17f10801b03%3A0x2e02b6a2c05c3f5e!2s2423%20SW%20147th%20Ave%2C%20Miami%2C%20FL%2033185%2C%20USA!5e0!3m2!1sen!2s!4v1710123456789"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      {/* Contact Section */}
      <section className="flex flex-col md:flex-row items-stretch bg-white rounded-lg" style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}>
        
        {/* Contact Information - Left Side */}
        <div className="w-full md:w-1/2 p-8 bg-opacity-50 text-white mt-40">
          <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
          <div className="flex items-center gap-3 text-white mb-6">
            <MapPin className="text-white" />
            <p>2423 SW 147th Ave, Suite 263 Miami, FL 33175</p>
          </div>
          <div className="flex items-center gap-3 text-white mb-6">
            <Phone className="text-white" />
            <p>305-204-8040</p>
          </div>
          <div className="flex items-center gap-3 text-white mb-6">
            <Mail className="text-white" />
            <p>info@fiberfluent.com</p>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Leave Your Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-[#172550] rounded-lg focus:border-[#172550] focus:ring-2 focus:ring-[#172550] placeholder-gray-600 transition-all duration-200"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-[#172550] rounded-lg focus:border-[#172550] focus:ring-2 focus:ring-[#172550] placeholder-gray-600 transition-all duration-200"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-[#172550] rounded-lg focus:border-[#172550] focus:ring-2 focus:ring-[#172550] placeholder-gray-600 transition-all duration-200"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="w-auto px-6 bg-white text-[#01B4E3] font-semibold py-3 rounded-lg hover:bg-[#172550] transition cursor-pointer">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Map Section - Right Side */}
        
      </section>
    </div>
  );
}
