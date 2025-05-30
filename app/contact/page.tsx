"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  MessageSquare,
  CheckCircle,
} from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    courseInterest: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e:any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Course Interest: ${formData.courseInterest}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from KA's Tech Contact Form
    `.trim()

    const mailtoLink = `mailto:info@kastech.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(emailBody)}`
    
    window.location.href = mailtoLink
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        courseInterest: "",
      })
    }, 3000)
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "+923001234567" // Replace with your actual WhatsApp number
    const message = "Hi! I'd like to get in touch regarding KA's Tech courses. Can you please assist me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const courses = [
    "Full Stack JavaScript Development", 
    "Python & AI Development", 
    "DevOps & Cloud Engineering",
    "Mobile App Development",
    "Cybersecurity",
    "Data Science",
    "Other"
  ]

  return (
    <div className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              KA's Tech
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our courses? Need personalized guidance? We're here to help you start your tech journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">Send us an email anytime</p>
                <a 
                  href="mailto:info@kastech.com" 
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  info@kastech.com
                </a>
                <br />
                <a 
                  href="mailto:support@kastech.com" 
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  support@kastech.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </div>
                  WhatsApp Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Get instant support via WhatsApp</p>
                <Button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">Speak directly with our team</p>
                <a 
                  href="tel:+923001234567" 
                  className="text-purple-400 hover:text-purple-300 font-semibold block"
                >
                  +92 300 123 4567
                </a>
                <a 
                  href="tel:+923001234568" 
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  +92 300 123 4568
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-orange-500/30">
                    <Clock className="h-5 w-5 text-orange-400" />
                  </div>
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-400">
                  <p><span className="text-white font-semibold">Monday - Friday:</span> 9:00 AM - 8:00 PM</p>
                  <p><span className="text-white font-semibold">Saturday:</span> 10:00 AM - 6:00 PM</p>
                  <p><span className="text-white font-semibold">Sunday:</span> Closed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center border border-red-500/30">
                    <MapPin className="h-5 w-5 text-red-400" />
                  </div>
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">Our training center location</p>
                <address className="text-white not-italic">
                  KA's Tech Academy<br />
                  123 Tech Street, IT Plaza<br />
                  Rawalpindi, Punjab<br />
                  Pakistan
                </address>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Your email client should open with the pre-filled message. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          <Building className="w-4 h-4 inline mr-2" />
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Course Interest
                        </label>
                        <select
                          name="courseInterest"
                          value={formData.courseInterest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        >
                          <option value="">Select a course</option>
                          {courses.map((course) => (
                            <option key={course} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg py-3"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do I enroll in a course?",
                answer: "You can enroll by clicking 'Enroll Now' on any course card, which will open WhatsApp for instant registration assistance."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes! We offer flexible payment plans. Contact us via WhatsApp or email to discuss payment options that work for you."
              },
              {
                question: "Are the courses suitable for beginners?",
                answer: "Absolutely! Our courses are designed for all skill levels, from complete beginners to advanced developers."
              },
              {
                question: "Do I get a certificate after completion?",
                answer: "Yes, you'll receive an industry-recognized certificate upon successful completion of your course."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}