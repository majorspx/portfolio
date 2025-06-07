import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-portfolio-teal mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-portfolio-blue-light hover:underline">
                    Tamratalemayehu58@gmail.com 
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="h-6 w-6 text-portfolio-teal mr-4 mt-1">📞</span>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <span className="text-portfolio-blue-light">+251 910565526</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="mailto:tamratalemayehu58@gmail.com" 
                  className="bg-portfolio-teal text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
