export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-700">Digital Bridge</h1>
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#about">About</a>
          <a href="#pharma">For Pharma</a>
          <a href="#doctors">For Doctors</a>
          <a href="#how">How It Works</a>
          <a href="#case">Case Studies</a>
          <a href="#compliance">Compliance</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg">Login</button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-lg">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Drug Awareness in Hours, Not Months</h2>
        <p className="mb-6 text-lg text-gray-700">Instant, verified, and measurable engagement between pharma and doctors.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-700 text-white rounded-xl">I’m a Pharma Company</button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl">I’m a Doctor</button>
        </div>
      </section>

      {/* Value Highlights */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto py-16" id="about">
        <div className="bg-white shadow rounded-2xl p-6 text-center">
          <span className="text-3xl">⏱️</span>
          <h3 className="font-bold mt-2">Faster Reach</h3>
          <p>New drug info delivered in hours instead of months.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center">
          <span className="text-3xl">📊</span>
          <h3 className="font-bold mt-2">Measurable ROI</h3>
          <p>Analytics dashboards track engagement and feedback.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center">
          <span className="text-3xl">✅</span>
          <h3 className="font-bold mt-2">Trusted & Compliant</h3>
          <p>UCPMP, GDPR, and HIPAA compliant with verified doctors.</p>
        </div>
      </section>

      {/* For Doctors */}
      <section className="bg-white py-16 px-6 md:px-20" id="doctors">
        <h2 className="text-3xl font-bold text-center mb-8">For Doctors</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <ul className="space-y-4 text-lg">
              <li>💊 Verified drug info (videos, brochures, research papers)</li>
              <li>🎥 CME webinars & continuous learning</li>
              <li>❓ Direct Q&A with pharma experts</li>
              <li>📚 Single trusted source for updates</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl">Sign Up as a Verified Doctor</button>
          </div>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500">
            Doctor App Mockup Here
          </div>
        </div>
      </section>

      {/* For Pharma */}
      <section className="bg-gray-50 py-16 px-6 md:px-20" id="pharma">
        <h2 className="text-3xl font-bold text-center mb-8">For Pharmaceutical Companies</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <ul className="space-y-4 text-lg">
              <li>📢 Launch updates directly to doctors</li>
              <li>📊 Engagement analytics & feedback reports</li>
              <li>💰 Save on reps, travel, & events</li>
              <li>🌍 Reach 1,000+ doctors nationwide instantly</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-xl">Request a Demo</button>
          </div>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-500">
            Pharma Dashboard Mockup Here
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white" id="how">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <div className="text-center">1️⃣ Pharma uploads product info</div>
          <div className="text-2xl">➡️</div>
          <div className="text-center">2️⃣ Digital Bridge delivers instantly</div>
          <div className="text-2xl">➡️</div>
          <div className="text-center">3️⃣ Doctors engage & analytics measured</div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-6" id="case">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Global Pharma</h3>
            <p>+63% prescriptions after digital detailing.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Aventis</h3>
            <p>14% sales increase via video-detailing.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">India Tier 2/3</h3>
            <p>42% more engagement with omnichannel approach.</p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-white py-16 px-6 md:px-20" id="compliance">
        <h2 className="text-3xl font-bold text-center mb-8">Compliance & Security</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          <div className="bg-gray-50 p-6 rounded-xl shadow">✅ Doctor Verification</div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">🔒 Data Security</div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">📜 Regulatory Compliance</div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">🧾 Audit Trails</div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-16 px-6 md:px-20" id="contact">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="font-bold">For Pharma Companies</h3>
            <input type="text" placeholder="Company Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Tell us about your launch needs" className="w-full p-2 border rounded" rows="4"></textarea>
            <button className="px-6 py-2 bg-blue-700 text-white rounded">Request a Demo</button>
          </form>
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <h3 className="font-bold">For Doctors</h3>
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Specialty" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Medical License ID" className="w-full p-2 border rounded" />
            <button className="px-6 py-2 bg-green-600 text-white rounded">Sign Up</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>© 2025 Digital Bridge | Terms & Privacy | Compliance Policy</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>
      </footer>
    </div>
  );
}
