import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">

        {/* HEADER */}
        <h1>Contact & Support</h1>
        <p>We're here to help and listen to your feedback</p>

        {/* MAIN GRID */}
        <div className="contact-grid">

          {/* CONTACT FORM */}
          <div className="card">
            <h3>📩 Contact Us</h3>

            <input placeholder="Your Name" />
            <input placeholder="Email / Phone" />
            <textarea placeholder="Your Message" />

            <button className="send">Send Message</button>
          </div>

          {/* FAQ */}
          <div className="card">
            <h3>❓ FAQs</h3>

            <p><b>Is this medical advice?</b><br />No. Informational only.</p>

            <p><b>Can elders edit submissions?</b><br />Yes, before approval.</p>

            <p><b>Is my data safe?</b><br />Yes. Contact details are private.</p>
          </div>

          {/* SUPPORT */}
          <div className="card">
            <h3>🛠 Support</h3>

            <p>Email: support@wisdomvault.ai</p>
            <p>Phone: +91 9XXXXXXXXX</p>
            <p>Working Hours:<br />Mon–Fri, 9 AM – 6 PM</p>
            <p>Languages: Tamil, Telugu, Hindi</p>
          </div>

        </div>

        {/* FOOTER BAR */}
        <div className="contact-footer">
          🌐 Website &nbsp;&nbsp; 📱 Mobile App &nbsp;&nbsp; 🔒 Privacy Policy &nbsp;&nbsp; 📢 Feedback
        </div>

      </div>
    </>
  );
}

export default Contact;