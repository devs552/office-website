import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Globe, Terminal, Cpu, Database } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative tech-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 code-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  <Terminal className="w-4 h-4 mr-2" />
                  Leading Tech Innovation Hub
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Code The
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {" "}
                    Future
                  </span>
                  <br />
                  With KA's Tech
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Master cutting-edge technologies, build real-world projects, and launch your tech career with our
                  comprehensive development courses and professional services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 neon-glow"
                  asChild
                >
                  <Link href="/courses">
                    <Code className="mr-2 h-5 w-5" />
                    Start Learning
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  asChild
                >
                  <Link href="/portfolio">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative floating-animation">
              <div className="relative">
                <Image
                  src="https://www.hpe.com/content/dam/hpe/newsroom/2019/09/image-norend/the-worlds-most-sustainable-technology-company.jpg"
                  alt="Tech Development Illustration"
                  width={1000}
                  height={1000}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full pulse-glow opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full pulse-glow opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Tech Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From development services to comprehensive learning programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all hover:neon-glow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4 border border-cyan-500/30">
                  <Globe className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Development Services</CardTitle>
                <CardDescription className="text-gray-400">
                  Custom web applications built with cutting-edge technologies
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 hover:border-green-500/50 transition-all hover:neon-glow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                  <Code className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-white">Web Dev Courses</CardTitle>
                <CardDescription className="text-gray-400">
                  Comprehensive programming courses from beginner to advanced
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all hover:neon-glow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full flex items-center justify-center mb-4 border border-purple-500/30">
                  <Cpu className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-white">Tech Consulting</CardTitle>
                <CardDescription className="text-gray-400">
                  Strategic technology consulting for digital transformation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              asChild
            >
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Master in-demand skills with our hands-on programming courses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack JavaScript",
                description: "Master React, Node.js, and MongoDB",
                duration: "12 weeks",
                level: "Beginner to Advanced",
                price: "$299",
                gradient: "from-yellow-500 to-orange-600",
              },
              {
                title: "Python & AI Development",
                description: "Learn Python, Django, and Machine Learning",
                duration: "16 weeks",
                level: "Intermediate",
                price: "$399",
                gradient: "from-green-500 to-teal-600",
              },
              {
                title: "DevOps & Cloud",
                description: "AWS, Docker, Kubernetes, and CI/CD",
                duration: "10 weeks",
                level: "Advanced",
                price: "$499",
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((course, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all">
                <CardHeader>
                  <div className={`w-full h-2 bg-gradient-to-r ${course.gradient} rounded-full mb-4`}></div>
                  <CardTitle className="text-white">{course.title}</CardTitle>
                  <CardDescription className="text-gray-400">{course.description}</CardDescription>
                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-cyan-400">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-cyan-400">{course.level}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-green-400">{course.price}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
              asChild
            >
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay ahead with the latest and most powerful development tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Node.js",
              "Python",
              "TypeScript",
              "AWS",
              "Docker",
              "MongoDB",
              "PostgreSQL",
              "Next.js",
              "Vue.js",
              "Kubernetes",
              "GraphQL",
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gray-900/50 rounded-lg flex items-center justify-center mb-3 border border-gray-700 group-hover:border-cyan-500/50 transition-all group-hover:neon-glow">
                  <Database className="h-8 w-8 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 code-bg opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-cyan-100">
            Join thousands of developers who've accelerated their careers with KA's Tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
