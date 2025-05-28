import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and admin dashboard.",
      image: "https://picsum.photos/400/300?random=1",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "Web Application",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management system with appointment scheduling and medical records.",
      image: "https://picsum.photos/400/300?random=2",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Enterprise Software",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with advanced search and virtual tours.",
      image: "https://picsum.photos/400/300?random=3",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      category: "Web Application",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Food Delivery App",
      description: "Mobile app for food ordering with real-time tracking and payment integration.",
      image: "https://picsum.photos/400/300?random=4",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
      category: "Mobile App",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, video streaming, and progress tracking.",
      image: "https://picsum.photos/400/300?random=5",
      technologies: ["Angular", "Django", "PostgreSQL", "Redis"],
      category: "Education",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Financial Dashboard",
      description: "Analytics dashboard for financial data visualization and reporting.",
      image: "https://picsum.photos/400/300?random=6",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "Data Visualization",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = ["All", "Web Application", "Mobile App", "Enterprise Software", "Education", "Data Visualization"]

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Projects That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Define Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects across various industries and technologies
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button key={index} variant={index === 0 ? "default" : "outline"} className="rounded-full">
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-shadow overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-base text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                testimonial:
                  "KA's Tech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
              },
              {
                name: "Michael Chen",
                company: "HealthCare Solutions",
                testimonial:
                  "The healthcare management system they built has streamlined our operations significantly. Professional team with excellent communication.",
              },
              {
                name: "Emily Rodriguez",
                company: "EduLearn Platform",
                testimonial:
                  "Our learning management system is now serving thousands of students. KA's Tech's scalable solution has been crucial to our growth.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="text-left bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-shadow"
              >
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  )
}