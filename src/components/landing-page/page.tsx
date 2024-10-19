import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Camera, Star, Menu } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="text-2xl font-bold text-gray-900">
                <span className="text-gold">Mingle</span> Eat Talk
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
              <a href="#register" className="text-base font-medium text-gray-500 hover:text-gray-900">Register</a>
              <a href="#events" className="text-base font-medium text-gray-500 hover:text-gray-900">Events</a>
              <a href="#media" className="text-base font-medium text-gray-500 hover:text-gray-900">Media</a>
              <a href="#testimonials" className="text-base font-medium text-gray-500 hover:text-gray-900">Testimonials</a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button className="ml-8 bg-gold text-white hover:bg-yellow-600">Join Now</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Connect. Eat. Talk.</span>
              <span className="block text-gold">Elevate Your Network</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join the premier offline networking platform for professionals. Build meaningful connections over gourmet meals and engaging conversations.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button className="w-full bg-gold text-white hover:bg-yellow-600">Get Started</Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Mingle Eat Talk</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Mingle Eat Talk is a unique offline networking platform that brings professionals together over gourmet meals and engaging conversations.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Curated Events", description: "Carefully planned networking dinners with industry leaders" },
                { title: "Quality Conversations", description: "Engage in meaningful discussions that go beyond small talk" },
                { title: "Exclusive Network", description: "Connect with a select group of professionals from various fields" }
              ].map((item, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gold rounded-md shadow-lg">
                          <Star className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{item.title}</h3>
                      <p className="mt-5 text-base text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section id="register" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How to Register</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Join Mingle Eat Talk in three simple steps
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { icon: Users, title: "Create Profile", description: "Sign up and complete your professional profile" },
                { icon: Calendar, title: "Choose Event", description: "Browse and select from our upcoming events" },
                { icon: Star, title: "Attend & Connect", description: "Join the event and start networking" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gold text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.title}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Upcoming Events</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Don't miss out on our next networking opportunities
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((event) => (
              <Card key={event}>
                <CardHeader>
                  <CardTitle>Networking Dinner {event}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">Join us for an evening of great food and even better conversations.</p>
                  <p className="text-gold font-semibold">Date: October {20 + event}, 2024</p>
                  <p className="text-gray-500">Location: Gourmet Restaurant, City Center</p>
                  <Button className="mt-4 bg-gold text-white hover:bg-yellow-600 w-full">Register</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Media</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Glimpses from our previous events
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <div key={img} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Event photo ${img}`}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-gold text-white hover:bg-yellow-600">
              <Camera className="mr-2 h-4 w-4" /> View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Testimonials</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Hear from our satisfied members
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "John Doe", role: "CEO, TechCorp", quote: "Mingle Eat Talk has been an incredible platform for meeting like-minded professionals. The connections I&apos;ve made here have been invaluable to my career." },
              { name: "Jane Smith", role: "Founder, StartUp Inc.", quote: "The quality of conversations and networking opportunities at Mingle Eat Talk events is unparalleled. It&apos;s become an essential part of my professional growth strategy." },
              { name: "Alex Johnson", role: "Marketing Director, Brand Co.", quote: "I&apos;ve attended numerous networking events, but Mingle Eat Talk stands out for its curated guest list and engaging atmosphere. Highly recommended!" }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-8">
                  <div className="relative text-lg font-medium text-gray-700">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">{testimonial.quote}</p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-base text-gray-500">{testimonial.role}</p>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to elevate your network?</span>
            <span className="block">Join Mingle Eat Talk today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0  lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="bg-white text-gold hover:bg-gray-50">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Company</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Events</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Upcoming</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Past Events</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {/* Add social media icons here */}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2024 Mingle Eat Talk. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}