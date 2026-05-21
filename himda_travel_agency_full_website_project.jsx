export default function HimdaTravelAgencyWebsite() {
  const services = [
    {
      title: "Flight Booking",
      description: "International and domestic flight reservations with affordable prices and flexible schedules.",
    },
    {
      title: "Visa Assistance",
      description: "Professional visa processing support for tourism, business, education, and medical travel.",
    },
    {
      title: "Hajj & Umrah",
      description: "Complete Hajj and Umrah packages including flights, accommodation, and guidance.",
    },
    {
      title: "Hotel Reservation",
      description: "Book hotels worldwide with comfort, convenience, and best-value pricing.",
    },
    {
      title: "Tour Packages",
      description: "Customized tour experiences for families, students, companies, and groups.",
    },
    {
      title: "Travel Consultation",
      description: "Expert travel advice, destination planning, and documentation guidance.",
    },
  ];

  const destinations = [
    "Dubai",
    "Turkey",
    "Malaysia",
    "Saudi Arabia",
    "Kenya",
    "Qatar",
  ];

  const testimonials = [
    {
      name: "Ahmed Ali",
      review:
        "Himda Travel Agency provided excellent service and helped me secure my visa and ticket quickly.",
    },
    {
      name: "Hodan Hassan",
      review:
        "Very professional agency with affordable prices and great customer support.",
    },
    {
      name: "Mohamed Yusuf",
      review:
        "Their Hajj package was organized perfectly from beginning to end.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold tracking-wide">HIMDA TRAVEL AGENCY</h1>
            <p className="text-sm text-blue-200">Somalia</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-300">Home</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#services" className="hover:text-yellow-300">Services</a>
            <a href="#destinations" className="hover:text-yellow-300">Destinations</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[90vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Your Trusted Travel Partner in Somalia
            </h2>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Himda Travel Agency provides professional travel solutions including flight booking, visa services, Hajj & Umrah packages, hotel reservations, and international tours.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg transition">
                Book Now
              </button>

              <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-2xl font-semibold transition">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=2069&auto=format&fit=crop"
              alt="Travel"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6 text-blue-950">
              About Himda Travel Agency
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Himda Travel Agency is a professional travel and tourism company based in Somalia. We are committed to providing high-quality travel services with reliability, affordability, and customer satisfaction.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to make travel easier and more accessible for individuals, families, students, and businesses by offering complete travel solutions under one trusted agency.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h4 className="text-3xl font-bold text-blue-950">500+</h4>
                <p>Successful Travelers</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h4 className="text-3xl font-bold text-blue-950">24/7</h4>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-blue-950 mb-4">
              Our Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide comprehensive travel services designed to make your journey smooth, safe, and affordable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-blue-950 hover:text-white transition p-8 rounded-3xl shadow-lg"
              >
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-blue-950 mb-4">
              Popular Destinations
            </h3>
            <p className="text-gray-600 text-lg">
              Travel to the world’s most exciting destinations with Himda Travel Agency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-xl group"
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
                  alt={destination}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h4 className="text-white text-3xl font-bold">
                    {destination}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-blue-950 mb-4">
              Client Testimonials
            </h3>
            <p className="text-gray-600 text-lg">
              What our customers say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow-lg"
              >
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  “{testimonial.review}”
                </p>

                <h4 className="font-bold text-xl text-blue-950">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-4xl font-bold mb-6">Contact Us</h3>

            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Get in touch with Himda Travel Agency for bookings, travel advice, visa assistance, and customer support.
            </p>

            <div className="space-y-5 text-lg">
              <p>📍 Mogadishu, Somalia</p>
              <p>📞 +252 61 0000000</p>
              <p>✉️ info@himdatravel.com</p>
              <p>🌐 www.himdatravel.com</p>
            </div>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Send a Message</h4>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              ></textarea>

              <button className="bg-blue-950 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl font-semibold w-full transition">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-2xl font-bold text-white mb-3">
            HIMDA TRAVEL AGENCY
          </h4>

          <p className="mb-4">
            Professional Travel & Tourism Services in Somalia
          </p>

          <div className="flex justify-center gap-6 mb-4 text-sm">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">WhatsApp</a>
          </div>

          <p className="text-sm">
            © 2026 Himda Travel Agency. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
