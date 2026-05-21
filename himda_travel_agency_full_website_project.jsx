<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HIMDA Travel Agency</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header" id="home">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="#home" aria-label="HIMDA Travel Agency home">
          <span class="brand-mark">H</span>
          <span>
            <strong>HIMDA</strong>
            <small>Travel Agency</small>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links" id="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero" aria-label="Travel booking introduction">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <p class="eyebrow">Mogadishu based travel experts</p>
          <h1>Your trusted partner for flights, visas, Hajj, Umrah and global tours.</h1>
          <p>
            HIMDA Travel Agency helps families, professionals, students and pilgrims plan smooth,
            well-supported journeys from Somalia to the world.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Book Now</a>
            <a class="btn secondary" href="#services">Explore Services</a>
          </div>
        </div>
        <div class="hero-panel" aria-label="Quick booking highlights">
          <span>500+ Travelers</span>
          <span>24/7 Support</span>
          <span>Visa Guidance</span>
        </div>
      </section>

      <section class="section about" id="about">
        <div class="section-heading">
          <p class="eyebrow">About us</p>
          <h2>Professional travel planning with personal care.</h2>
        </div>
        <div class="about-grid">
          <div>
            <p>
              HIMDA Travel Agency provides reliable travel services for customers who need clear
              guidance, fast coordination and dependable support before, during and after travel.
            </p>
            <p>
              Our mission is to make international travel easier through honest consultation,
              accurate documentation support and carefully selected travel options.
            </p>
          </div>
          <div class="stats">
            <div>
              <strong>500+</strong>
              <span>Travelers served</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Customer support</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section services" id="services">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>Everything you need for a confident trip.</h2>
        </div>
        <div class="card-grid">
          <article class="service-card">
            <span>01</span>
            <h3>Flight Booking</h3>
            <p>Compare routes, timings and fares with booking support from start to finish.</p>
          </article>
          <article class="service-card">
            <span>02</span>
            <h3>Visa Assistance</h3>
            <p>Document checklists, application guidance and appointment preparation.</p>
          </article>
          <article class="service-card">
            <span>03</span>
            <h3>Hajj &amp; Umrah</h3>
            <p>Organized pilgrimage travel support for flights, hotels and ground arrangements.</p>
          </article>
          <article class="service-card">
            <span>04</span>
            <h3>Hotel Reservation</h3>
            <p>Comfortable hotel options selected around your budget, location and schedule.</p>
          </article>
          <article class="service-card">
            <span>05</span>
            <h3>Tour Packages</h3>
            <p>Planned leisure and business trips to popular regional and international cities.</p>
          </article>
          <article class="service-card">
            <span>06</span>
            <h3>Travel Consultation</h3>
            <p>Practical advice for travel requirements, routes, budgets and trip readiness.</p>
          </article>
        </div>
      </section>

      <section class="section destinations" id="destinations">
        <div class="section-heading">
          <p class="eyebrow">Destinations</p>
          <h2>Popular routes for HIMDA travelers.</h2>
        </div>
        <div class="destination-grid">
          <article style="--bg: linear-gradient(135deg, #0e6f9d, #d5a21d)">
            <h3>Dubai</h3>
            <p>Shopping, business and family travel.</p>
          </article>
          <article style="--bg: linear-gradient(135deg, #0b3c73, #c83c38)">
            <h3>Turkey</h3>
            <p>Medical, tourism and study routes.</p>
          </article>
          <article style="--bg: linear-gradient(135deg, #0f766e, #6fbf73)">
            <h3>Malaysia</h3>
            <p>Education, holidays and conferences.</p>
          </article>
          <article style="--bg: linear-gradient(135deg, #385d2f, #c9972b)">
            <h3>Saudi Arabia</h3>
            <p>Hajj, Umrah and family visits.</p>
          </article>
          <article style="--bg: linear-gradient(135deg, #111827, #b23b2d)">
            <h3>Kenya</h3>
            <p>Regional trips, business and transit.</p>
          </article>
          <article style="--bg: linear-gradient(135deg, #6b1238, #f2c94c)">
            <h3>Qatar</h3>
            <p>Work, transit and premium stays.</p>
          </article>
        </div>
      </section>

      <section class="section testimonials" aria-label="Customer testimonials">
        <div class="section-heading">
          <p class="eyebrow">Testimonials</p>
          <h2>Good experiences from happy customers.</h2>
        </div>
        <div class="testimonial-grid">
          <article>
            <p>HIMDA handled my visa documents and flight booking quickly. The team kept me updated at every step.</p>
            <strong>Amina Hassan</strong>
            <span>Dubai traveler</span>
          </article>
          <article>
            <p>Our Umrah trip was organized with care. Hotels, transport and support were all clear before we traveled.</p>
            <strong>Abdirahman Ali</strong>
            <span>Umrah package customer</span>
          </article>
          <article>
            <p>I needed travel advice for Turkey and the consultation saved me time. Very professional service.</p>
            <strong>Fadumo Mohamed</strong>
            <span>Tour consultation</span>
          </article>
        </div>
      </section>

      <section class="section contact" id="contact">
        <div class="section-heading">
          <p class="eyebrow">Contact</p>
          <h2>Start planning your next journey.</h2>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <div>
              <span>Address</span>
              <strong>Mogadishu, Somalia</strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>+252 61 000 0000</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>info@himdatravel.com</strong>
            </div>
            <div>
              <span>Website</span>
              <strong>www.himdatravel.com</strong>
            </div>
          </div>
          <form class="contact-form" id="contact-form">
            <label>
              Full name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Phone or email
              <input name="contact" type="text" placeholder="How can we reach you?" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell us about your trip" required></textarea>
            </label>
            <button class="btn primary" type="submit">Send Message</button>
            <p class="form-note" role="status" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div>
        <strong>HIMDA Travel Agency</strong>
        <p>Flights, visas, hotels, pilgrimage packages and travel consultation from Mogadishu.</p>
      </div>
      <div class="social-links" aria-label="Social media links">
        <a href="#" aria-label="Facebook">Fb</a>
        <a href="#" aria-label="Instagram">Ig</a>
        <a href="#" aria-label="WhatsApp">Wa</a>
      </div>
      <p>Copyright <span id="year"></span> HIMDA Travel Agency. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
