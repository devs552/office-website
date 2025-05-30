import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Users, Heart, Coffee, Laptop, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description:
        "We're looking for an experienced full stack developer to join our growing team and work on exciting client projects.",
      requirements: ["5+ years experience", "React/Next.js", "Node.js", "TypeScript", "Database design"],
      posted: "2 days ago",
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$60,000 - $90,000",
      description: "Join our frontend team to create beautiful and responsive user interfaces for web applications.",
      requirements: ["3+ years experience", "React/Vue.js", "CSS/SCSS", "JavaScript/TypeScript", "Responsive design"],
      posted: "1 week ago",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$55,000 - $85,000",
      description: "Create intuitive and engaging user experiences for our web and mobile applications.",
      requirements: ["3+ years experience", "Figma/Sketch", "User research", "Prototyping", "Design systems"],
      posted: "3 days ago",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$70,000 - $110,000",
      description: "Help us build and maintain scalable infrastructure for our client applications.",
      requirements: ["4+ years experience", "AWS/Azure", "Docker/Kubernetes", "CI/CD", "Monitoring"],
      posted: "5 days ago",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote / Chicago",
      type: "Full-time",
      salary: "$65,000 - $95,000",
      description: "Lead project delivery and coordinate between clients and development teams.",
      requirements: [
        "3+ years PM experience",
        "Agile/Scrum",
        "Client communication",
        "Technical background",
        "Leadership",
      ],
      posted: "1 week ago",
    },
    {
      title: "Junior Developer (Internship)",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      salary: "$20 - $25/hour",
      description: "Perfect opportunity for recent graduates to gain hands-on experience in web development.",
      requirements: [
        "CS degree or bootcamp",
        "Basic web technologies",
        "Eagerness to learn",
        "Problem-solving",
        "Team player",
      ],
      posted: "4 days ago",
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: Coffee,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and remote options",
    },
    {
      icon: Laptop,
      title: "Latest Equipment",
      description: "Top-of-the-line hardware and software tools",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities and conference attendance",
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team building activities and company retreats",
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-competitive compensation and performance bonuses",
    },
  ]

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            <Users className="w-4 h-4 mr-2" />
            Join Our Team
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Build Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Career
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join a passionate team of developers, designers, and innovators creating cutting-edge web solutions
          </p>
        </div>

        {/* Company Culture */}
        <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 mb-16 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-lg text-gray-400 mb-6">
                At KA's Tech, we believe in fostering a collaborative environment where creativity meets technology.
                We're not just building websites; we're crafting digital experiences that make a difference.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Work on diverse and challenging projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Collaborate with industry experts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Continuous learning and growth opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Remote-first culture with global team
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://wcc.academy/wp-content/uploads/2022/12/we-are-hiring-digital-collage-scaled.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow bg-gray-800 border border-gray-700"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-gray-400">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings?.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800 border border-gray-700">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge >{job.department}</Badge>
                      <span className="text-sm text-gray-500">Posted {job.posted}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex}  className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href={"contact"}>
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Application", description: "Submit your resume and cover letter" },
              { step: "02", title: "Screening", description: "Initial phone/video call with HR" },
              { step: "03", title: "Technical", description: "Technical interview and coding challenge" },
              { step: "04", title: "Final", description: "Meet the team and culture fit interview" },
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
          <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Match?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to
            contribute to our team.
          </p>
        <a href="mailto:info@kastech.com">
  <Button
    size="lg"
    variant="outline"
    className="text-lg px-8 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
  >
    Send Your Resume
  </Button>
</a>

        </div>
      </div>
    </div>
  )
}
