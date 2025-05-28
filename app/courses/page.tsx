import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Clock,
  Users,
  Star,
  Play,
  Download,
  Award,
  CheckCircle,
  BookOpen,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Full Stack JavaScript Development",
      description:
        "Master modern web development with React, Node.js, Express, and MongoDB. Build real-world applications from scratch.",
      image: "https://picsum.photos/400/250?random=10",
      price: 299,
      originalPrice: 399,
      duration: "12 weeks",
      lessons: 45,
      students: 1250,
      rating: 4.9,
      level: "Beginner to Advanced",
      category: "Web Development",
      instructor: "Sarah Johnson",
      features: [
        "React 18 & Hooks",
        "Node.js & Express",
        "MongoDB & Mongoose",
        "Authentication & Security",
        "Deployment & DevOps",
        "Real-world Projects",
      ],
      gradient: "from-yellow-500 to-orange-600",
      popular: true,
    },
    {
      id: 2,
      title: "Python & AI Development",
      description: "Learn Python programming, Django framework, and dive into Machine Learning and AI development.",
      image: "https://picsum.photos/400/250?random=11",
      price: 399,
      originalPrice: 499,
      duration: "16 weeks",
      lessons: 60,
      students: 890,
      rating: 4.8,
      level: "Intermediate",
      category: "AI & Machine Learning",
      instructor: "Dr. Michael Chen",
      features: [
        "Python Fundamentals",
        "Django Framework",
        "Machine Learning",
        "Data Science",
        "AI Model Deployment",
        "Portfolio Projects",
      ],
      gradient: "from-green-500 to-teal-600",
      popular: false,
    },
    {
      id: 3,
      title: "DevOps & Cloud Engineering",
      description:
        "Master cloud infrastructure, containerization, and CI/CD pipelines with AWS, Docker, and Kubernetes.",
      image: "https://picsum.photos/400/250?random=12",
      price: 499,
      originalPrice: 599,
      duration: "10 weeks",
      lessons: 35,
      students: 650,
      rating: 4.9,
      level: "Advanced",
      category: "DevOps",
      instructor: "Alex Rodriguez",
      features: [
        "AWS Cloud Services",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Best Practices",
      ],
      gradient: "from-purple-500 to-indigo-600",
      popular: false,
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile apps with React Native and Flutter. Deploy to iOS and Android app stores.",
      image: "https://picsum.photos/400/250?random=13",
      price: 349,
      originalPrice: 449,
      duration: "14 weeks",
      lessons: 50,
      students: 720,
      rating: 4.7,
      level: "Intermediate",
      category: "Mobile Development",
      instructor: "Emily Davis",
      features: [
        "React Native",
        "Flutter Development",
        "Native Features",
        "App Store Deployment",
        "Push Notifications",
        "Real-time Features",
      ],
      gradient: "from-pink-500 to-rose-600",
      popular: false,
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking, penetration testing, and security best practices to protect digital assets.",
      image: "https://picsum.photos/400/250?random=14",
      price: 449,
      originalPrice: 549,
      duration: "12 weeks",
      lessons: 40,
      students: 480,
      rating: 4.8,
      level: "Intermediate to Advanced",
      category: "Cybersecurity",
      instructor: "James Wilson",
      features: [
        "Ethical Hacking",
        "Penetration Testing",
        "Network Security",
        "Web Application Security",
        "Incident Response",
        "Security Certifications",
      ],
      gradient: "from-red-500 to-orange-600",
      popular: false,
    },
    {
      id: 6,
      title: "UI/UX Design & Frontend",
      description: "Master modern design principles and frontend development with Figma, HTML, CSS, and JavaScript.",
      image: "https://picsum.photos/400/250?random=15",
      price: 249,
      originalPrice: 329,
      duration: "8 weeks",
      lessons: 30,
      students: 950,
      rating: 4.6,
      level: "Beginner",
      category: "Design",
      instructor: "Lisa Thompson",
      features: [
        "Figma Design",
        "HTML5 & CSS3",
        "JavaScript ES6+",
        "Responsive Design",
        "User Experience",
        "Design Systems",
      ],
      gradient: "from-blue-500 to-cyan-600",
      popular: false,
    },
  ]

  const categories = [
    { name: "All Courses", icon: BookOpen, count: courses.length },
    { name: "Web Development", icon: Monitor, count: 2 },
    { name: "Mobile Development", icon: Smartphone, count: 1 },
    { name: "AI & Machine Learning", icon: Database, count: 1 },
    { name: "DevOps", icon: Cloud, count: 1 },
    { name: "Cybersecurity", icon: Shield, count: 1 },
  ]

  return (
    <div className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            <Code className="w-4 h-4 mr-2" />
            Learn & Build
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modern Development
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your career with industry-leading courses designed by experts. Build real projects and get
            job-ready skills.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all cursor-pointer group"
                >
                  <CardContent className="p-4 text-center">
                    <IconComponent className="h-8 w-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-sm text-white">{category.name}</h3>
                    <p className="text-xs text-gray-400">{category.count} courses</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all overflow-hidden group"
            >
              {course.popular && (
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                  🔥 Most Popular
                </div>
              )}

              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div
                  className={`absolute top-4 left-4 w-full h-2 bg-gradient-to-r ${course.gradient} rounded-full max-w-20`}
                ></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-gray-600">
                    {course.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">{course.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-gray-400 text-base">{course.description}</CardDescription>

                <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Play className="h-4 w-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">What you'll learn:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {course.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-400">${course.price}</span>
                        <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-400">Instructor: {course.instructor}</p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      asChild
                    >
                      <Link href={`/courses/${course.id}/register`}>Enroll Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose KA's Tech Courses?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Industry Certification",
                description: "Get recognized certificates upon completion",
              },
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of experience",
              },
              {
                icon: Download,
                title: "Lifetime Access",
                description: "Access course materials forever, including updates",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-cyan-500/30">
                    <IconComponent className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
            >
              Browse All Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              Free Trial Available
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}