"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Shield, CheckCircle, Clock, Star, ArrowLeft, Play } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function CourseRegistrationPage() {
  const params = useParams()
  const courseId = params.id

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
    paymentMethod: "",
    agreeTerms: false,
    newsletter: false,
  })

  // Mock course data - in real app, fetch based on courseId
  const course = {
    id: courseId,
    title: "Full Stack JavaScript Development",
    description:
      "Master modern web development with React, Node.js, Express, and MongoDB. Build real-world applications from scratch.",
    price: 299,
    originalPrice: 399,
    duration: "12 weeks",
    lessons: 45,
    students: 1250,
    rating: 4.9,
    level: "Beginner to Advanced",
    instructor: "Sarah Johnson",
    features: [
      "React 18 & Hooks",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "Authentication & Security",
      "Deployment & DevOps",
      "Real-world Projects",
      "1-on-1 Mentorship",
      "Career Support",
    ],
    includes: [
      "45 HD Video Lessons",
      "Downloadable Resources",
      "Coding Exercises",
      "Final Project",
      "Certificate of Completion",
      "Lifetime Access",
      "Community Access",
      "Job Placement Assistance",
    ],
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration data:", formData)
    alert("Registration successful! Welcome to KA's Tech!")
  }

  return (
    <div className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" className="border-gray-700 text-gray-400 hover:bg-gray-800" asChild>
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Course Registration</CardTitle>
                <CardDescription className="text-gray-400">Complete your enrollment for {course.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-gray-900 border-gray-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-gray-900 border-gray-600 text-white"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-900 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-gray-900 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Background Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Background Information</h3>
                    <div>
                      <Label htmlFor="experience" className="text-gray-300">
                        Programming Experience
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger className="bg-gray-900 border-gray-600 text-white">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-600">
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="some">Some Experience</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="motivation" className="text-gray-300">
                        Why do you want to take this course?
                      </Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange("motivation", e.target.value)}
                        className="bg-gray-900 border-gray-600 text-white"
                        rows={3}
                        placeholder="Tell us about your goals and motivation..."
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Payment Method</h3>
                    <Select onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                      <SelectTrigger className="bg-gray-900 border-gray-600 text-white">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-600">
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="installments">3-Month Installments</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        className="border-gray-600"
                      />
                      <Label htmlFor="terms" className="text-gray-300 text-sm">
                        I agree to the{" "}
                        <Link href="#" className="text-cyan-400 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-cyan-400 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        className="border-gray-600"
                      />
                      <Label htmlFor="newsletter" className="text-gray-300 text-sm">
                        Subscribe to our newsletter for updates and exclusive content
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg py-3"
                    disabled={!formData.agreeTerms}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Complete Registration - ${course.price}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Course Summary */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">{course.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Play className="h-4 w-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    {course.rating}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Course Price:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-400">${course.price}</span>
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">You Save:</span>
                    <span className="text-green-400 font-semibold">${course.originalPrice - course.price}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <Shield className="w-3 h-3 mr-1" />
                      30-Day Money Back Guarantee
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {course.includes.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Features */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
