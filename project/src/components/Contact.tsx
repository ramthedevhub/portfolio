import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Download, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Form');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:ram.thedevhub@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume
    window.open('#', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I am actively seeking Full-Stack Developer opportunities with organizations focused on building secure, scalable applications. 
                If you need a developer who can architect reliable end-to-end systems with security-first principles, let's connect.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400 text-sm">ram.thedevhub@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400 text-sm">+91 6303589140</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-400 text-sm">Available for Remote & Hybrid</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8 pt-8 border-t border-gray-700">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-cyan-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <button
                  onClick={downloadResume}
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-green-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="Download Resume"
                >
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors duration-300 peer"
                  placeholder="Your Name"
                />
                <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:bg-gray-900 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-cyan-400 peer-valid:text-sm peer-valid:bg-gray-900 peer-valid:px-2">
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors duration-300 peer"
                  placeholder="your.email@example.com"
                />
                <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:bg-gray-900 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-cyan-400 peer-valid:text-sm peer-valid:bg-gray-900 peer-valid:px-2">
                  Email Address
                </label>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors duration-300 peer"
                  placeholder="Subject"
                />
                <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:bg-gray-900 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-cyan-400 peer-valid:text-sm peer-valid:bg-gray-900 peer-valid:px-2">
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors duration-300 peer resize-none"
                  placeholder="Your message..."
                />
                <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:bg-gray-900 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-cyan-400 peer-valid:text-sm peer-valid:bg-gray-900 peer-valid:px-2">
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;