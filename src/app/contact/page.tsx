'use client';

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Shield, 
  Users, 
  AlertTriangle, 
  Send, 
  CheckCircle, 
  ExternalLink,
  Heart,
  MapPin
} from 'lucide-react';

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  organizationType: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'emergency';
}

interface EmergencyContact {
  id: number;
  name: string;
  number: string;
  type: 'police' | 'women' | 'emergency' | 'ngo';
  description: string;
  available24x7: boolean;
}

// Mock emergency contacts data
const emergencyContacts: EmergencyContact[] = [
  {
    id: 1,
    name: "Women Helpline",
    number: "181",
    type: "women",
    description: "24x7 helpline for women in distress",
    available24x7: true
  },
  {
    id: 2,
    name: "Police Emergency",
    number: "100",
    type: "police", 
    description: "Immediate police assistance",
    available24x7: true
  },
  {
    id: 3,
    name: "National Emergency",
    number: "112",
    type: "emergency",
    description: "Unified emergency helpline",
    available24x7: true
  },
  {
    id: 4,
    name: "Child Helpline",
    number: "1098",
    type: "ngo",
    description: "Support for children in need",
    available24x7: true
  },
  {
    id: 5,
    name: "Senior Citizen Helpline",
    number: "14567",
    type: "ngo",
    description: "Assistance for elderly citizens",
    available24x7: false
  }
];

export default function ContactSupportPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organizationType: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organizationType: '',
        subject: '',
        message: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'emergency': return '#ef4444';
      case 'high': return '#f97316';
      case 'medium': return '#eab308';
      default: return '#22c55e';
    }
  };

  const getContactTypeIcon = (type: string) => {
    switch (type) {
      case 'police': return <Shield className="h-5 w-5" />;
      case 'women': return <Users className="h-5 w-5" />;
      case 'emergency': return <AlertTriangle className="h-5 w-5" />;
      default: return <Heart className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D2E0FB] to-[#F9F3CC] font-sans">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#8EACCD] mb-2">Contact & Support</h1>
          <p className="text-gray-600">Get help, collaborate with us, or reach emergency services</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Contacts - Takes priority on mobile */}
          <div className="lg:col-span-1 space-y-6 lg:order-2">
            {/* Emergency Helplines */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#D2E0FB]">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <h3 className="text-xl font-bold text-[#8EACCD]">Emergency Helplines</h3>
              </div>
              
              <div className="space-y-4">
                {emergencyContacts.map((contact: EmergencyContact) => (
                  <div key={contact.id} className="bg-[#F9F3CC]/30 rounded-lg p-4 border border-[#D7E5CA]">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getContactTypeIcon(contact.type)}
                        <h4 className="font-semibold text-[#8EACCD]">{contact.name}</h4>
                      </div>
                      {contact.available24x7 && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          24x7
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{contact.description}</p>
                    
                    <a 
                      href={`tel:${contact.number}`}
                      className="inline-flex items-center gap-2 bg-[#8EACCD] text-white px-4 py-2 rounded-lg hover:bg-[#7A9BC4] transition-colors text-sm font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      Call {contact.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#D2E0FB]">
              <h3 className="text-lg font-bold text-[#8EACCD] mb-4">Safety Tips</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#8EACCD] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Keep emergency numbers saved in your phone</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#8EACCD] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Share your location with trusted contacts</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#8EACCD] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Trust your instincts and seek help when needed</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#8EACCD] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Use well-lit and populated routes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:order-1">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#D2E0FB]">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-[#8EACCD]" />
                <h3 className="text-xl font-bold text-[#8EACCD]">Get in Touch</h3>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#8EACCD] mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Type
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                      >
                        <option value="">Select organization type</option>
                        <option value="ngo">NGO/Non-Profit</option>
                        <option value="government">Government Agency</option>
                        <option value="corporate">Corporate</option>
                        <option value="educational">Educational Institution</option>
                        <option value="individual">Individual</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                        placeholder="Brief subject of your message"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                      >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-[#D7E5CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EACCD] bg-white/90"
                      placeholder="Please describe your inquiry, feedback, or collaboration proposal..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getPriorityColor(formData.priority) }}
                      ></div>
                      <span className="text-sm text-gray-600 capitalize">{formData.priority} Priority</span>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#8EACCD] text-white px-6 py-3 rounded-lg hover:bg-[#7A9BC4] transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#D2E0FB]">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-[#8EACCD]" />
                  <h3 className="text-lg font-semibold text-[#8EACCD]">Email Us</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>General Inquiries: <a href="mailto:info@saferoute.org" className="text-[#8EACCD] hover:underline">info@saferoute.org</a></div>
                  <div>Partnerships: <a href="mailto:partners@saferoute.org" className="text-[#8EACCD] hover:underline">partners@saferoute.org</a></div>
                  <div>Support: <a href="mailto:support@saferoute.org" className="text-[#8EACCD] hover:underline">support@saferoute.org</a></div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#D2E0FB]">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-[#8EACCD]" />
                  <h3 className="text-lg font-semibold text-[#8EACCD]">Visit Us</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>SafeRoute Foundation</div>
                  <div>123 Safety Street, Sector 45</div>
                  <div>Gurugram, Haryana 122001</div>
                  <div>India</div>
                  <div className="pt-2">
                    <a href="#" className="text-[#8EACCD] hover:underline flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}