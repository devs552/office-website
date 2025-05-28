import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Smartphone,
  Code,
  Database,
  Cloud,
  Shield,
  Search,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks",
      features: ["React & Next.js", "Node.js Backend", "Responsive Design", "SEO Optimized"],
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["React Native", "iOS & Android", "Progressive Web Apps", "App Store Deployment"],
      color: "green",
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions for your business needs",
      features: ["API Development", "System Integration", "Legacy Modernization", "Microservices"],
      color: "purple",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design and management",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
      color: "orange",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment",
      features: ["AWS & Azure", "DevOps", "Auto Scaling", "Monitoring"],
      color: "cyan",
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing security and maintenance services",
      features: ["Security Audits", "Regular Updates", "Performance Monitoring", "24/7 Support"],
      color: "red",
    },
  ]

  const additionalServices = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and online visibility",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface and experience design",
    },
  ]

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end solutions that drive your business forward
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all h-full"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-gray-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Deployment", description: "Launching and providing ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that exceeds your expectations.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
          >
            Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
