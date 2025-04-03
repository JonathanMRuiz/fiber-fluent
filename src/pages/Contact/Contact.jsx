import { useState } from "react";
import { Mail, MapPin, Phone, Loader2, CheckCircle } from "lucide-react";
import Banner from '../../assets/banner_contact.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    
    try {
      const response = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex-grow p-4 py-10">
      <div className='w-full max-w-12xl mb-10'>
        <iframe
          title="Google Maps Location"
          className='w-full h-72 rounded-lg shadow-lg border-4 border-orange-500'
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
                className="w-full p-3 border text-[#172550] border-[#172550] rounded-lg"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border text-[#172550] border-[#172550] rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border text-[#172550] border-[#172550] rounded-lg"
              placeholder="Your Message"
              required
            ></textarea>
            <div className="flex items-center gap-4">
              <button 
                type="submit" 
                className={`w-auto px-6 py-3 rounded-lg font-semibold transition ${success ? 'bg-green-500' : 'bg-white text-[#01B4E3] hover:bg-[#172550]'} `}
                disabled={loading || success}
              >
                {loading ? <Loader2 className="animate-spin" /> : success ? <CheckCircle className="text-white" /> : 'SEND MESSAGE'}
              </button>
              {success && <p className="text-green-500">Message sent successfully!</p>}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}