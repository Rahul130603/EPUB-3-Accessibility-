import { motion } from "framer-motion";

export default function EPUB3ProjectUI() {
  return (
    <div className="font-sans text-gray-800">

      {/* ================= NAVBAR ================= */}
      <header className="bg-white shadow-md px-10 py-4 flex justify-between items-center rounded-b-xl">

        {/* LOGO */}
        <img
          src="/logo.jpeg"
          alt="Gentize Logo"
          className="h-12 object-contain"
        />

        {/* MENU */}
        <nav className="flex gap-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#highlights">Project Highlights</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#workflow">EPUB 3 Workflow</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
          ENQUIRY
        </button>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-24 bg-gradient-to-r from-orange-100 to-orange-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          EPUB 3 Accessible Digital Publishing
        </motion.h1>

        <p className="text-gray-600 mb-8">
          Transform traditional books into inclusive digital publications.
        </p>

        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
          Explore Project
        </button>
      </section>

      {/* ================= PROJECT HIGHLIGHTS ================= */}
      <section
        id="highlights"
        className="py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <h2 className="text-3xl font-semibold mb-12 text-white">
          Project Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

          {[
            {
              icon: "👤",
              title: "Accessibility First",
              text: "WCAG compliant EPUB 3 workflow ensuring inclusive reading."
            },
            {
              icon: "📚",
              title: "Structured Content",
              text: "Semantic HTML structure for navigation and screen readers."
            },
            {
              icon: "🔍",
              title: "Digital Publishing",
              text: "Convert printed books into responsive digital publications."
            },
            {
              icon: "🚀",
              title: "Future Ready",
              text: "Scalable publishing workflow for global distribution."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-orange-500 text-3xl mb-4">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{card.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 text-center px-10">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>

        <p className="max-w-3xl mx-auto text-gray-600 bg-gray-100 p-6 rounded-xl">
          Gentize Innovations specializes in transforming documents into
          accessible EPUB 3 publications ensuring inclusive reading
          experiences for all users.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      {/* ================= SERVICES ================= */}
<section
  id="services"
  className="py-24 text-center bg-cover bg-center relative"
  style={{ backgroundImage: "url('/services.png')" }}
>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10">
    <h2 className="text-3xl font-semibold mb-12 text-white">
      Our Services
    </h2>

    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

      {[
        "Scanning & Digitization",
        "OCR Processing",
        "Accessible EPUB 3 Creation",
        "Quality Validation"
      ].map((service, i) => (
        <div
          key={i}
          className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition"
        >
          <h3 className="text-orange-500 font-semibold text-lg">
            {service}
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Professional digital publishing solutions.
          </p>
        </div>
      ))}

    </div>
  </div>
</section>  

      {/* ================= WORKFLOW ================= */}
      <section id="workflow" className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          EPUB 3 Workflow
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "High-Quality Scanning",
            "OCR Text Extraction",
            "HTML Structuring",
            "Accessibility Tagging",
            "EPUB 3 Packaging",
            "Validation & QA"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section id="contact" className="py-24 bg-gray-100 flex justify-center">

        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl text-center">

          <h2 className="text-4xl font-bold mb-2">
            Get Started Today
          </h2>

          <p className="text-gray-500 mb-8">
            Feel Free to Reach Us
          </p>

          <form className="space-y-6">

            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-4">
              <span className="text-orange-500 text-xl mr-3">👤</span>
              <input placeholder="Your Name" className="bg-transparent outline-none w-full"/>
            </div>

            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-4">
              <span className="text-orange-500 text-xl mr-3">📞</span>
              <input placeholder="Phone Number" className="bg-transparent outline-none w-full"/>
            </div>

            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-4">
              <span className="text-orange-500 text-xl mr-3">✏</span>
              <input placeholder="Needed Service" className="bg-transparent outline-none w-full"/>
            </div>

            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-4">
              <span className="text-orange-500 text-xl mr-3">✉</span>
              <input placeholder="Your Email Address" className="bg-transparent outline-none w-full"/>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition">
              SUBMIT NOW
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}