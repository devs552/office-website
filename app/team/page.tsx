import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import wap from "../../images/wap.jpg"
import {
  Users,
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
  Code,
  Palette,
  Database,
  Shield,
  Briefcase,
  GraduationCap,
  Award,
  Coffee,
} from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Abdullah  Shahab",
      role: "Founder & CEO",
      department: "Leadership",
      image: wap,
      bio: "Visionary leader with 10+ years in tech industry. Founded KA's Tech to bridge the gap between education and industry needs.",
      skills: ["Strategic Planning", "Business Development", "Team Leadership", "Product Vision"],
      experience: "4+ years",
      location: "Islamabad, ISB",
      education: "BSCS, Arid University",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "abdullah.baig1998@gmail.com.com",
      },
      achievements: ["Forbes 30 Under 30", "Tech Entrepreneur of the Year", "Startup Mentor"],
      gradient: "from-cyan-500 to-blue-600",
    },
   
  ]

  const departments = [
    { name: "Leadership", icon: Briefcase, count: 1, color: "cyan" },
    { name: "Engineering", icon: Code, count: 4, color: "blue" },
    { name: "Design", icon: Palette, count: 1, color: "purple" },
    { name: "Infrastructure", icon: Database, count: 1, color: "orange" },
    { name: "Security", icon: Shield, count: 1, color: "red" },
    { name: "Operations", icon: Users, count: 1, color: "green" },
  ]

  const companyValues = [
    {
      icon: Code,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and innovative solutions",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and knowledge sharing",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "We invest in our team's growth and professional development",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "We strive for excellence in everything we do",
    },
  ]

  return (
    <div className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            <Users className="w-4 h-4 mr-2" />
            Meet Our Team
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Brilliant Minds
            </span>{" "}
            Behind KA's Tech
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the passionate professionals who make KA's Tech a leader in web development and tech education
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all text-center"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4 border border-cyan-500/30">
                      <IconComponent className="h-8 w-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg text-white">{value.title}</CardTitle>
                    <CardDescription className="text-gray-400">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all cursor-pointer group"
                >
                  <CardContent className="p-4 text-center">
                    <IconComponent
                      className={`h-8 w-8 text-${dept.color}-400 mx-auto mb-2 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="font-semibold text-sm text-white">{dept.name}</h3>
                    <p className="text-xs text-gray-400">
                      {dept.count} member{dept.count > 1 ? "s" : ""}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all overflow-hidden group"
            >
              {/* Profile Header */}
              <div className="relative">
                <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                <div className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-gray-700 group-hover:border-cyan-500/50 transition-colors"
                    />
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center`}
                    >
                      <Badge variant="secondary" className="w-6 h-6 p-0 bg-white text-gray-900 text-xs">
                        {member.department.charAt(0)}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center justify-center text-sm text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {member.location}
                  </div>
                </div>
              </div>

              <CardContent className="px-6 pb-6">
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Experience & Education */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <Briefcase className="h-3 w-3 mr-1" />
                      Experience
                    </div>
                    <div className="text-cyan-400 font-medium">{member.experience}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      Education
                    </div>
                    <div className="text-cyan-400 font-medium text-xs">{member.education}</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 4).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                    {member.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        +{member.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Achievements</h4>
                  <div className="space-y-1">
                    {member.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-400">
                        <Award className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-gray-700">
                  {member.social.linkedin && (
                    <Button size="sm" variant="outline" className="p-2 border-gray-600 hover:border-cyan-500">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {/* {member.social?.github && (
                    <Button size="sm" variant="outline" className="p-2 border-gray-600 hover:border-cyan-500">
                      <Github className="h-4 w-4" />
                    </Button>
                  )} */}
                  {member.social.twitter && (
                    <Button size="sm" variant="outline" className="p-2 border-gray-600 hover:border-cyan-500">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.email && (
                    <Button size="sm" variant="outline" className="p-2 border-gray-600 hover:border-cyan-500">
                      <Mail className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Team by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{teamMembers.length}</div>
              <div className="text-cyan-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-cyan-100">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-cyan-100">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-cyan-100">Remote-Friendly</div>
            </div>
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 mb-16 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg text-gray-400 mb-6">
                At KA's Tech, we've built a culture that celebrates diversity, encourages innovation, and supports
                continuous learning. Our team is our greatest asset, and we invest in creating an environment where
                everyone can thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Weekly team coffee chats and virtual hangouts</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Learning stipend for courses and conferences</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Quarterly team retreats and hackathons</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Recognition programs and career advancement</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://citizenside.com/wp-content/uploads/2023/11/what-is-technology-company-1699896868.jpg"
                alt="Team culture"
                width={1000}
                height={1000}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join Our Amazing Team?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              asChild
            >
              <a href="/careers">View Open Positions</a>
            </Button> */}
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
    </div>
  )
}
