const { useState, useEffect } = React;

// Mock data storage (in real app, this would be backend APIs)
const mockData = {
  users: {
    pharma: { username: 'pharma@company.com', password: 'pharma123', type: 'pharma' },
    doctor: { username: 'doctor@hospital.com', password: 'doctor123', type: 'doctor' },
    admin: { username: 'admin@pharmasampark.com', password: 'admin123', type: 'admin' }
  },
  campaigns: [
    {
      id: 1,
      title: 'New Cardio Drug Launch',
      company: 'Global Pharma',
      targetSpecialty: 'Cardiology',
      status: 'Active',
      views: 1245,
      engagements: 89,
      feedback: 4.5
    }
  ],
  products: [],
  doctors: [],
  reps: []
};

// Authentication Component
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = Object.values(mockData.users).find(u => u.username === username && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Pharmasampark</h1>
        <p className="text-center text-gray-600 mb-6">Revolutionizing pharma-doctor communication</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p>Pharma: pharma@company.com / pharma123</p>
          <p>Doctor: doctor@hospital.com / doctor123</p>
          <p>Admin: admin@pharmasampark.com / admin123</p>
        </div>
      </div>
    </div>
  );
}

// Pharma Dashboard - Campaign Builder
function CampaignBuilder({ campaigns, setCampaigns }) {
  const [formData, setFormData] = useState({
    title: '',
    brandName: '',
    composition: '',
    indications: '',
    targetSpecialty: '',
    targetRegion: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCampaign = {
      id: campaigns.length + 1,
      ...formData,
      status: 'Draft',
      views: 0,
      engagements: 0,
      feedback: 0,
      createdAt: new Date().toISOString()
    };
    setCampaigns([...campaigns, newCampaign]);
    setFormData({
      title: '',
      brandName: '',
      composition: '',
      indications: '',
      targetSpecialty: '',
      targetRegion: '',
      content: ''
    });
    alert('Campaign created successfully!');
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Create Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Campaign Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Brand Name *</label>
            <input
              type="text"
              value={formData.brandName}
              onChange={(e) => setFormData({...formData, brandName: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Composition *</label>
          <input
            type="text"
            value={formData.composition}
            onChange={(e) => setFormData({...formData, composition: e.target.value})}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Indications *</label>
          <textarea
            value={formData.indications}
            onChange={(e) => setFormData({...formData, indications: e.target.value})}
            className="w-full p-2 border rounded-lg"
            rows="3"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Target Specialty *</label>
            <select
              value={formData.targetSpecialty}
              onChange={(e) => setFormData({...formData, targetSpecialty: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Specialty</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="General Physician">General Physician</option>
              <option value="Oncology">Oncology</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Target Region *</label>
            <select
              value={formData.targetRegion}
              onChange={(e) => setFormData({...formData, targetRegion: e.target.value})}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Region</option>
              <option value="North India">North India</option>
              <option value="South India">South India</option>
              <option value="East India">East India</option>
              <option value="West India">West India</option>
              <option value="All India">All India</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Content Materials</label>
          <input type="file" multiple className="w-full p-2 border rounded-lg" accept=".pdf,.mp4,.jpg,.png" />
          <p className="text-sm text-gray-500 mt-1">Upload PDFs, videos, images, brochures</p>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Campaign Description</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            className="w-full p-2 border rounded-lg"
            rows="4"
          />
        </div>
        <div className="flex gap-4">
          <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
            Create Campaign
          </button>
          <button type="button" className="px-6 py-2 border rounded-lg">
            Save as Draft
          </button>
        </div>
      </form>
    </div>
  );
}

// Pharma Dashboard - Analytics
function Analytics({ campaigns }) {
  const totalViews = campaigns.reduce((sum, c) => sum + c.views, 0);
  const totalEngagements = campaigns.reduce((sum, c) => sum + c.engagements, 0);
  const avgRating = campaigns.length > 0 
    ? (campaigns.reduce((sum, c) => sum + (c.feedback || 0), 0) / campaigns.length).toFixed(1)
    : 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics & Reporting</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-600 mb-2">Total Reach</h3>
          <p className="text-3xl font-bold text-blue-700">{totalViews}</p>
          <p className="text-sm text-gray-500 mt-2">Doctors reached</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-600 mb-2">Engagements</h3>
          <p className="text-3xl font-bold text-green-700">{totalEngagements}</p>
          <p className="text-sm text-gray-500 mt-2">Interactions</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-600 mb-2">Avg Rating</h3>
          <p className="text-3xl font-bold text-yellow-700">{avgRating}</p>
          <p className="text-sm text-gray-500 mt-2">Out of 5.0</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Campaign Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Campaign</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Views</th>
                <th className="text-left p-2">Engagements</th>
                <th className="text-left p-2">Rating</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map(campaign => (
                <tr key={campaign.id} className="border-b">
                  <td className="p-2">{campaign.title}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-sm ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="p-2">{campaign.views}</td>
                  <td className="p-2">{campaign.engagements}</td>
                  <td className="p-2">{campaign.feedback || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Pharma Dashboard - Medical Rep Management
function RepManagement() {
  const [reps, setReps] = useState([
    { id: 1, name: 'Raj Kumar', region: 'North India', assignedDoctors: 45, visits: 120, status: 'Active' },
    { id: 2, name: 'Priya Sharma', region: 'South India', assignedDoctors: 38, visits: 98, status: 'Active' }
  ]);
  const [newRep, setNewRep] = useState({ name: '', email: '', region: '', phone: '' });

  const handleAddRep = (e) => {
    e.preventDefault();
    const rep = {
      id: reps.length + 1,
      ...newRep,
      assignedDoctors: 0,
      visits: 0,
      status: 'Active'
    };
    setReps([...reps, rep]);
    setNewRep({ name: '', email: '', region: '', phone: '' });
    alert('Medical Rep added successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Medical Rep Management</h2>
        <button className="px-4 py-2 bg-blue-700 text-white rounded-lg">+ Add Rep</button>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <form onSubmit={handleAddRep} className="grid md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            value={newRep.name}
            onChange={(e) => setNewRep({...newRep, name: e.target.value})}
            className="p-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={newRep.email}
            onChange={(e) => setNewRep({...newRep, email: e.target.value})}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Region"
            value={newRep.region}
            onChange={(e) => setNewRep({...newRep, region: e.target.value})}
            className="p-2 border rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={newRep.phone}
            onChange={(e) => setNewRep({...newRep, phone: e.target.value})}
            className="p-2 border rounded-lg"
          />
          <button type="submit" className="md:col-span-2 px-4 py-2 bg-blue-700 text-white rounded-lg">
            Add Rep
          </button>
        </form>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Region</th>
                <th className="text-left p-2">Assigned Doctors</th>
                <th className="text-left p-2">Total Visits</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reps.map(rep => (
                <tr key={rep.id} className="border-b">
                  <td className="p-2">{rep.name}</td>
                  <td className="p-2">{rep.region}</td>
                  <td className="p-2">{rep.assignedDoctors}</td>
                  <td className="p-2">{rep.visits}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-sm ${
                      rep.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {rep.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:underline">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Pharma Dashboard - KOL Management
function KOLManagement() {
  const [kols, setKols] = useState([
    { id: 1, name: 'Dr. Amit Patel', specialty: 'Cardiology', influence: 95, region: 'Mumbai', engagement: 87 },
    { id: 2, name: 'Dr. Sunita Reddy', specialty: 'Dermatology', influence: 92, region: 'Delhi', engagement: 82 }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">KOL (Key Opinion Leader) Management</h2>
        <input type="text" placeholder="Search KOLs..." className="px-4 py-2 border rounded-lg" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {kols.map(kol => (
          <div key={kol.id} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold">{kol.name}</h3>
            <p className="text-gray-600">{kol.specialty} • {kol.region}</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Influence Score:</span>
                <span className="font-bold text-blue-700">{kol.influence}/100</span>
              </div>
              <div className="flex justify-between">
                <span>Engagement:</span>
                <span className="font-bold text-green-700">{kol.engagement}%</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm">Invite to Campaign</button>
              <button className="px-4 py-2 border rounded-lg text-sm">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Pharma Dashboard - Compliance Review
function ComplianceReview({ campaigns, setCampaigns }) {
  const pendingCampaigns = campaigns.filter(c => c.status === 'Draft' || c.status === 'Pending Review');

  const handleApprove = (id) => {
    setCampaigns(campaigns.map(c => c.id === id ? {...c, status: 'Active'} : c));
    alert('Campaign approved!');
  };

  const handleReject = (id) => {
    setCampaigns(campaigns.map(c => c.id === id ? {...c, status: 'Rejected'} : c));
    alert('Campaign rejected.');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Compliance & Regulatory Review</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Pending Reviews</h3>
        {pendingCampaigns.length === 0 ? (
          <p className="text-gray-500">No campaigns pending review.</p>
        ) : (
          <div className="space-y-4">
            {pendingCampaigns.map(campaign => (
              <div key={campaign.id} className="border rounded-lg p-4">
                <h4 className="font-bold">{campaign.title}</h4>
                <p className="text-sm text-gray-600">{campaign.brandName} • {campaign.targetSpecialty}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleApprove(campaign.id)}
                    className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(campaign.id)}
                    className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm"
                  >
                    Reject
                  </button>
                  <button className="px-4 py-2 border rounded-lg text-sm">Review Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="font-bold mb-2">Compliance Checklist</h3>
        <ul className="space-y-2 text-sm">
          <li>✅ UCPMP (Uniform Code for Pharmaceutical Marketing Practices) compliant</li>
          <li>✅ GDPR and HIPAA data protection</li>
          <li>✅ Verified doctor access only</li>
          <li>✅ Content approval workflow</li>
          <li>✅ Audit trail maintained</li>
        </ul>
      </div>
    </div>
  );
}

// Pharma Dashboard Main
function PharmaDashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [campaigns, setCampaigns] = useState(mockData.campaigns);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'campaigns', label: 'Campaigns', icon: '📢' },
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'reps', label: 'Medical Reps', icon: '👥' },
    { id: 'kol', label: 'KOL Management', icon: '⭐' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'compliance', label: 'Compliance', icon: '✅' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-700">Pharmasampark</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user.username}</span>
            <button onClick={onLogout} className="px-4 py-2 border rounded-lg">Logout</button>
          </div>
        </div>
        <nav className="flex gap-2 p-4 border-t overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                activeTab === tab.id ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-600 mb-2">Active Campaigns</h3>
                <p className="text-3xl font-bold text-blue-700">{campaigns.filter(c => c.status === 'Active').length}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-600 mb-2">Total Reach</h3>
                <p className="text-3xl font-bold text-green-700">{campaigns.reduce((sum, c) => sum + c.views, 0)}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-600 mb-2">Engagements</h3>
                <p className="text-3xl font-bold text-yellow-700">{campaigns.reduce((sum, c) => sum + c.engagements, 0)}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-600 mb-2">Avg Rating</h3>
                <p className="text-3xl font-bold text-purple-700">
                  {campaigns.length > 0 ? (campaigns.reduce((sum, c) => sum + (c.feedback || 0), 0) / campaigns.length).toFixed(1) : 0}
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'campaigns' && <CampaignBuilder campaigns={campaigns} setCampaigns={setCampaigns} />}
        {activeTab === 'content' && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Content Creation & Distribution</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Upload Content</label>
                <input type="file" multiple className="w-full p-2 border rounded-lg" accept=".pdf,.mp4,.jpg,.png,.doc,.docx" />
                <p className="text-sm text-gray-500 mt-1">Support PDFs, videos, infographics, 3D visuals, clinical studies</p>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Content Type</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Product Brochure</option>
                  <option>MOA Video</option>
                  <option>Clinical Study</option>
                  <option>Infographic</option>
                  <option>CME Module</option>
                  <option>Webinar</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Target Audience</label>
                <select className="w-full p-2 border rounded-lg" multiple>
                  <option>Cardiologists</option>
                  <option>Dermatologists</option>
                  <option>Pediatricians</option>
                  <option>General Physicians</option>
                </select>
              </div>
              <button className="px-6 py-2 bg-blue-700 text-white rounded-lg">Upload & Distribute</button>
            </div>
          </div>
        )}
        {activeTab === 'reps' && <RepManagement />}
        {activeTab === 'kol' && <KOLManagement />}
        {activeTab === 'analytics' && <Analytics campaigns={campaigns} />}
        {activeTab === 'compliance' && <ComplianceReview campaigns={campaigns} setCampaigns={setCampaigns} />}
      </main>
    </div>
  );
}

// Doctor Dashboard - Profile
function DoctorProfile({ profile, setProfile }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Profile & Specialization</h2>
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Qualification *</label>
            <input
              type="text"
              value={profile.qualification}
              onChange={(e) => setProfile({...profile, qualification: e.target.value})}
              className="w-full p-2 border rounded-lg"
              placeholder="MBBS, MD, etc."
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Specialization *</label>
            <select
              value={profile.specialization}
              onChange={(e) => setProfile({...profile, specialization: e.target.value})}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Specialty</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="General Physician">General Physician</option>
              <option value="Oncology">Oncology</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Practice Region *</label>
            <select
              value={profile.region}
              onChange={(e) => setProfile({...profile, region: e.target.value})}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Region</option>
              <option value="North India">North India</option>
              <option value="South India">South India</option>
              <option value="East India">East India</option>
              <option value="West India">West India</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Clinic/Hospital Affiliation</label>
          <input
            type="text"
            value={profile.affiliation}
            onChange={(e) => setProfile({...profile, affiliation: e.target.value})}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Medical License ID *</label>
          <input
            type="text"
            value={profile.license}
            onChange={(e) => setProfile({...profile, license: e.target.value})}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button className="px-6 py-2 bg-green-700 text-white rounded-lg">Save Profile</button>
      </form>
    </div>
  );
}

// Doctor Dashboard - Product Feed
function ProductFeed({ campaigns, onRequestSample, onRate, onAskQuestion }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');

  const filteredCampaigns = campaigns.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         c.brandName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !filterSpecialty || c.targetSpecialty === filterSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 border rounded-lg"
        />
        <select
          value={filterSpecialty}
          onChange={(e) => setFilterSpecialty(e.target.value)}
          className="p-3 border rounded-lg"
        >
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="General Physician">General Physician</option>
        </select>
      </div>
      <div className="space-y-4">
        {filteredCampaigns.map(campaign => (
          <div key={campaign.id} className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{campaign.title}</h3>
                <p className="text-gray-600">{campaign.brandName} • {campaign.targetSpecialty}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="ml-2">{campaign.feedback || 'N/A'}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{campaign.content || campaign.indications}</p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => onRequestSample(campaign.id)}
                className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm"
              >
                Request Sample
              </button>
              <button
                onClick={() => onAskQuestion(campaign.id)}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm"
              >
                Ask Question
              </button>
              <button
                onClick={() => onRate(campaign.id)}
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Rate & Review
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <span>👁️ {campaign.views} views</span>
              <span className="ml-4">💬 {campaign.engagements} engagements</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Doctor Dashboard - Q&A
function QandA() {
  const [questions, setQuestions] = useState([
    { id: 1, product: 'New Cardio Drug', question: 'What are the contraindications?', answer: '', status: 'Pending' },
    { id: 2, product: 'New Cardio Drug', question: 'Dosage for elderly patients?', answer: 'Recommended starting dose is 5mg daily.', status: 'Answered' }
  ]);
  const [newQuestion, setNewQuestion] = useState({ product: '', question: '' });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Q&A with Pharma Reps</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Ask a Question</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Product</label>
            <input
              type="text"
              value={newQuestion.product}
              onChange={(e) => setNewQuestion({...newQuestion, product: e.target.value})}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Your Question</label>
            <textarea
              value={newQuestion.question}
              onChange={(e) => setNewQuestion({...newQuestion, question: e.target.value})}
              className="w-full p-2 border rounded-lg"
              rows="4"
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setQuestions([...questions, { id: questions.length + 1, ...newQuestion, answer: '', status: 'Pending' }]);
              setNewQuestion({ product: '', question: '' });
              alert('Question submitted!');
            }}
            className="px-6 py-2 bg-blue-700 text-white rounded-lg"
          >
            Submit Question
          </button>
        </form>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Your Questions</h3>
        <div className="space-y-4">
          {questions.map(q => (
            <div key={q.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">{q.product}</h4>
                <span className={`px-2 py-1 rounded text-sm ${
                  q.status === 'Answered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {q.status}
                </span>
              </div>
              <p className="text-gray-700 mb-2"><strong>Q:</strong> {q.question}</p>
              {q.answer && <p className="text-gray-600"><strong>A:</strong> {q.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Doctor Dashboard - Sample Requests
function SampleRequests() {
  const [requests, setRequests] = useState([
    { id: 1, product: 'New Cardio Drug', date: '2025-01-15', status: 'Approved', tracking: 'DISPATCHED' },
    { id: 2, product: 'Dermatology Cream', date: '2025-01-10', status: 'Pending', tracking: '' }
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sample Requests</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Request Date</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Tracking</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id} className="border-b">
                  <td className="p-2">{req.product}</td>
                  <td className="p-2">{req.date}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-sm ${
                      req.status === 'Approved' ? 'bg-green-100 text-green-700' :
                      req.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="p-2">{req.tracking || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Doctor Dashboard - Ratings & Reviews
function RatingsReviews({ campaigns, onRate }) {
  const [ratings, setRatings] = useState([]);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [rating, setRating] = useState({ stars: 5, comment: '' });

  const handleSubmitRating = () => {
    setRatings([...ratings, { campaignId: selectedCampaign, ...rating }]);
    setShowRatingModal(false);
    setRating({ stars: 5, comment: '' });
    alert('Thank you for your feedback!');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Rate Campaigns & Products</h3>
        <div className="space-y-4">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{campaign.title}</h4>
                  <p className="text-sm text-gray-600">{campaign.brandName}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCampaign(campaign.id);
                    setShowRatingModal(true);
                  }}
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm"
                >
                  Rate & Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showRatingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Rate Campaign</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(i => (
                    <button
                      key={i}
                      onClick={() => setRating({...rating, stars: i})}
                      className={`text-3xl ${i <= rating.stars ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Comment</label>
                <textarea
                  value={rating.comment}
                  onChange={(e) => setRating({...rating, comment: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  placeholder="Share your feedback..."
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleSubmitRating}
                  className="flex-1 px-4 py-2 bg-blue-700 text-white rounded-lg"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowRatingModal(false)}
                  className="flex-1 px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Doctor Dashboard - Educational Hub
function EducationalHub() {
  const [content, setContent] = useState([
    { id: 1, title: 'Cardiology Updates 2025', type: 'Webinar', date: '2025-01-20', duration: '60 min' },
    { id: 2, title: 'Clinical Case Studies', type: 'CME Module', date: '2025-01-18', duration: '45 min' },
    { id: 3, title: 'New Treatment Protocols', type: 'Video', date: '2025-01-15', duration: '30 min' }
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Educational Hub</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow p-6">
            <div className="mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">{item.type}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">Date: {item.date} • Duration: {item.duration}</p>
            <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg">View Content</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Doctor Dashboard Main
function DoctorDashboard({ user, onLogout, campaigns, setCampaigns }) {
  const [activeTab, setActiveTab] = useState('feed');
  const [profile, setProfile] = useState({
    name: 'Dr. Rajesh Kumar',
    qualification: 'MBBS, MD',
    specialization: 'Cardiology',
    region: 'North India',
    affiliation: 'City Hospital',
    license: 'DL12345'
  });

  const tabs = [
    { id: 'feed', label: 'Product Feed', icon: '📱' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'qa', label: 'Q&A', icon: '❓' },
    { id: 'samples', label: 'Samples', icon: '💊' },
    { id: 'ratings', label: 'Ratings', icon: '⭐' },
    { id: 'education', label: 'Education', icon: '🎓' }
  ];

  const handleRequestSample = (campaignId) => {
    alert('Sample request submitted!');
  };

  const handleRate = (campaignId) => {
    // This will be handled by RatingsReviews component
  };

  const handleAskQuestion = (campaignId) => {
    alert('Redirecting to Q&A section...');
    setActiveTab('qa');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-green-700">Pharmasampark</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {profile.name}</span>
            <button onClick={onLogout} className="px-4 py-2 border rounded-lg">Logout</button>
          </div>
        </div>
        <nav className="flex gap-2 p-4 border-t overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                activeTab === tab.id ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6">
        {activeTab === 'feed' && (
          <ProductFeed
            campaigns={campaigns}
            onRequestSample={handleRequestSample}
            onRate={handleRate}
            onAskQuestion={handleAskQuestion}
          />
        )}
        {activeTab === 'profile' && <DoctorProfile profile={profile} setProfile={setProfile} />}
        {activeTab === 'qa' && <QandA />}
        {activeTab === 'samples' && <SampleRequests />}
        {activeTab === 'ratings' && <RatingsReviews campaigns={campaigns} onRate={handleRate} />}
        {activeTab === 'education' && <EducationalHub />}
      </main>
    </div>
  );
}

// Admin Dashboard
function AdminDashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-purple-700">Pharmasampark Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user.username}</span>
            <button onClick={onLogout} className="px-4 py-2 border rounded-lg">Logout</button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-700">1,245</p>
            <p className="text-sm text-gray-500 mt-2">Doctors: 1,100 | Pharma: 145</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-2">Active Campaigns</h3>
            <p className="text-3xl font-bold text-green-700">89</p>
            <p className="text-sm text-gray-500 mt-2">Across all companies</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-2">Platform Engagement</h3>
            <p className="text-3xl font-bold text-yellow-700">94%</p>
            <p className="text-sm text-gray-500 mt-2">Monthly active users</p>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Admin Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
              <h3 className="font-bold">User Management</h3>
              <p className="text-sm text-gray-600">Manage doctors, pharma companies, and admins</p>
            </button>
            <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
              <h3 className="font-bold">Content Validation</h3>
              <p className="text-sm text-gray-600">Review and approve all content</p>
            </button>
            <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
              <h3 className="font-bold">Platform Analytics</h3>
              <p className="text-sm text-gray-600">View comprehensive platform metrics</p>
            </button>
            <button className="p-4 border rounded-lg text-left hover:bg-gray-50">
              <h3 className="font-bold">Compliance Oversight</h3>
              <p className="text-sm text-gray-600">Monitor regulatory compliance</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Main App Component
function App() {
  const [user, setUser] = useState(null);
  const [campaigns, setCampaigns] = useState(mockData.campaigns);
  const [language, setLanguage] = useState('en');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (user.type === 'pharma') {
    return <PharmaDashboard user={user} onLogout={handleLogout} campaigns={campaigns} setCampaigns={setCampaigns} />;
  }

  if (user.type === 'doctor') {
    return <DoctorDashboard user={user} onLogout={handleLogout} campaigns={campaigns} setCampaigns={setCampaigns} />;
  }

  if (user.type === 'admin') {
    return <AdminDashboard user={user} onLogout={handleLogout} />;
  }

  return <div>Unknown user type</div>;
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));

