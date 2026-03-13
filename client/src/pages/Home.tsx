import { Button } from "@/components/ui/button";
import { Phone, MapPin, Building2, Package, Truck, Lock } from "lucide-react";
import { useState } from "react";

/**
 * Swift Movers UAE - Professional Moving Services Landing Page
 * Design: Professional & Trustworthy with Modern Accents
 * Color Scheme: Navy Primary (#1F3A5F) + Gold Accent (#F59E0B)
 * Typography: Playfair Display (headings) + Inter (body)
 */

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Residential Moving",
      description: "Professional house shifting with careful handling of all your belongings",
      icon: Building2,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/residential-moving-AqaKyGCYdhvUPBTuhUBpa7.webp",
    },
    {
      id: 2,
      title: "Packing & Unpacking",
      description: "Expert packing with premium materials to ensure safe transport",
      icon: Package,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/packing-service-5HjhddU24tCPEu9yQpeLHH.webp",
    },
    {
      id: 3,
      title: "Furniture Transfer",
      description: "Safe and secure furniture moving with specialized equipment",
      icon: Truck,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/furniture-transfer-bPSDijrKm5d72y68TcPjbA.webp",
    },
    {
      id: 4,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage facilities for your items",
      icon: Lock,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/storage-solutions-cwKJhPaMaPoGvMdg3NvW8G.webp",
    },
  ];

  const coverage = [
    { name: "Dubai", emoji: "🏙️" },
    { name: "Abu Dhabi", emoji: "🏛️" },
    { name: "Sharjah", emoji: "🌆" },
    { name: "Ajman", emoji: "🏘️" },
    { name: "Ras Al Khaimah", emoji: "⛰️" },
    { name: "Fujairah", emoji: "🌊" },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Team",
      description: "Over 15 years of professional moving experience",
    },
    {
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind",
    },
    {
      title: "Modern Equipment",
      description: "Latest moving trucks and professional handling equipment",
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TS</span>
            </div>
            <span className="font-display font-bold text-primary text-lg">TAREEQ SAREE</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#coverage" className="text-gray-700 hover:text-primary transition-colors">
              Coverage
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <a
            href="tel:+971528102191"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-opacity-80 transition-colors"
          >
            <Phone size={20} />
            0528102191
          </a>

          <Button className="md:hidden bg-primary text-white hover:bg-opacity-90">
            Get Free Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <p className="text-accent font-semibold text-lg mb-4">Professional Moving Services</p>
              <h1 className="text-primary mb-6 leading-tight">Your Move, Our Care</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                TAREEQ SAREE MOVERS PACKERS FURNITURE TRANSFER L.L.C delivers professional,
                stress-free moving services across all of UAE and Dubai. From residential
                relocations to commercial transfers, we handle everything with precision and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="cta-button cta-button-primary text-lg">Get Free Quote</Button>
                <Button className="cta-button cta-button-secondary text-lg">Learn More</Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="stat-number">500+</p>
                  <p className="stat-label">Happy Clients</p>
                </div>
                <div>
                  <p className="stat-number">15+</p>
                  <p className="stat-label">Years Experience</p>
                </div>
                <div>
                  <p className="stat-number">100%</p>
                  <p className="stat-label">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/hero-movers-8ivPfwjt5h2p6cvKAqYJg8.webp"
                alt="Professional movers in Dubai"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-card cursor-pointer group"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="mb-4 relative h-40 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-4 p-3 bg-accent bg-opacity-10 rounded-lg w-fit">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-primary font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4">Why Choose TAREEQ SAREE?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-primary font-bold mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="cta-button cta-button-primary text-lg">
              <Phone className="mr-2" size={20} />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4">Coverage Across UAE</h2>
            <p className="text-gray-600 text-lg">We serve all major emirates and cities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {coverage.map((city, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-4xl mb-3">{city.emoji}</p>
                <h3 className="text-primary font-bold">{city.name}</h3>
                <p className="text-gray-600 text-sm mt-2">Professional service available</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-primary to-primary bg-opacity-5 p-8 rounded-lg">
            <p className="text-gray-700 mb-4">And all other emirates across UAE</p>
            <Button className="cta-button cta-button-secondary text-lg">
              <MapPin className="mr-2" size={20} />
              Get Quote for Your Location
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-primary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Get In Touch</h2>
            <p className="text-gray-100 text-lg">Ready to move? Contact us for a free quote</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+971528102191" className="text-gray-100 hover:text-accent transition-colors">
                0528102191
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Area</h3>
              <p className="text-gray-100">All Emirates - Dubai, Abu Dhabi, Sharjah & More</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Company</h3>
              <p className="text-gray-100">TAREEQ SAREE MOVERS PACKERS FURNITURE TRANSFER L.L.C</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready to Move?</h3>
            <p className="text-gray-100 mb-6">
              Call us today for a free consultation and quote. Our team is ready to help!
            </p>
            <a
              href="tel:+971528102191"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all"
            >
              <Phone className="mr-2" size={20} />
              Call 0528102191
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center">
          <p>© 2026 TAREEQ SAREE MOVERS PACKERS FURNITURE TRANSFER L.L.C. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with Manus</p>
        </div>
      </footer>
    </div>
  );
}
