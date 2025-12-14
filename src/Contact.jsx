import React, { useState } from "react";
import Button from "./components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Portfolio Contact Form"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:reginajalandoni13@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    setSubmitMessage("Email client opened! Please send the email from there.");
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitMessage("");
    }, 3000);
  };

  return (
    <section className="my-16 md:my-[10rem] mx-0" id="contact">
      <div className="flex items-center gap-3">
        <p className="text-highlight font-mono text-2xl md:text-4xl">04.</p>
        <p className="font-Poppins font-semibold text-headers text-2xl md:text-4xl whitespace-pre-wrap">
          Get In Touch
        </p>
        <div className="ml-4 border border-[#233554] w-[30%] h-0"></div>
      </div>

      <div className="mt-8 md:mt-12">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-headers font-Poppins text-xl md:text-2xl mb-4">
            Let's Build Something Amazing Together
          </p>
          <p className="text-text font-Poppins text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hello, I'll do my
            best to get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[#112240] border border-[#233554] rounded-lg p-6 md:p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block font-mono text-highlight text-sm mb-2"
                >
                  01. Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-[#233554] rounded-md text-white font-Poppins 
                           focus:border-highlight focus:outline-none transition-colors duration-300
                           hover:border-[#64ffda] placeholder-[#8892b0]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block font-mono text-highlight text-sm mb-2"
                >
                  02. Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-[#233554] rounded-md text-white font-Poppins 
                           focus:border-highlight focus:outline-none transition-colors duration-300
                           hover:border-[#64ffda] placeholder-[#8892b0]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block font-mono text-highlight text-sm mb-2"
              >
                03. Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-[#233554] rounded-md text-white font-Poppins 
                         focus:border-highlight focus:outline-none transition-colors duration-300
                         hover:border-[#64ffda] placeholder-[#8892b0]"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block font-mono text-highlight text-sm mb-2"
              >
                04. Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border-2 border-[#233554] rounded-md text-white font-Poppins 
                         focus:border-highlight focus:outline-none transition-colors duration-300 resize-none
                         hover:border-[#64ffda] placeholder-[#8892b0]"
                placeholder="Tell me about your project, ideas, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
                className="bg-transparent border-2 border-highlight hover:bg-highlight hover:text-[#0a192f] 
                         px-8 py-4 text-highlight font-mono text-sm md:text-base rounded-md transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed transform hover:translate-y-[-2px] 
                         hover:shadow-lg hover:shadow-highlight/20 min-w-[160px]"
              >
                {isSubmitting ? "Opening Email..." : "Send Message"}
              </button>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className="mt-4 p-4 bg-highlight/10 border border-highlight/30 rounded-md text-center">
                <p className="text-highlight font-Poppins text-sm">
                  {submitMessage}
                </p>
              </div>
            )}
          </form>

          {/* Alternative Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-text font-mono text-sm mb-4">
              Or reach out directly:
            </p>
            <a
              href="mailto:reginajalandoni13@gmail.com"
              className="text-highlight hover:underline font-mono text-lg transition-colors duration-300"
            >
              reginajalandoni13@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
