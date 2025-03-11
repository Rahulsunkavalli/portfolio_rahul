import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Download } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gr5g117", // 🔹 Replace with your EmailJS Service ID
        "template_hyu4v2g", // 🔹 Replace with your EmailJS Template ID
        formData,
        "BFvaVuyf-trYz8fVB" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setFormStatus({ success: true, message: "Message sent successfully!" });
          setFormData({ from_name: "", email: "", subject: "", message: "" });

          setTimeout(() => setFormStatus(null), 5000);
        },
        () => {
          setFormStatus({ success: false, message: "Failed to send message." });
        }
      );
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1GkYwUYbFBA65z0x3Y6g4Shv70rgTNJzg/view?usp=sharing";
    link.setAttribute("download", "Rahul_Sunkavalli_Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">Contact Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Feel free to reach out if you have any questions or would like to discuss potential opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:sunkavallirahul6@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Sunkavallirahul6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/rahul--sunkavalli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/rahul--sunkavalli/
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Download size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Resume</h4>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" onClick={handleResumeDownload}>
                    Download Resume (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 text-white resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium">
              Send Message
            </button>

            {formStatus && (
              <div className={`mt-4 p-3 rounded-md ${formStatus.success ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
