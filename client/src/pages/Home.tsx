import { Button } from "@/components/ui/button";
import { Phone, MapPin, Building2, Package, Truck, Lock, Mail, Globe } from "lucide-react";
import { useState } from "react";
import React from "react";

/**
 * Swift Movers UAE - Professional Moving Services Landing Page
 * Design: Professional & Trustworthy with Modern Accents
 * Color Scheme: Navy Primary (#1F3A5F) + Gold Accent (#F59E0B)
 * Typography: Playfair Display (headings) + Inter (body)
 */

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', serviceType: 'residential' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // Apply RTL/LTR on initial load
  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const translations = {
    en: {
      tareeqSaree: 'TAREEQ SAREE',
      services: 'Services',
      whyUs: 'Why Us',
      coverage: 'Coverage',
      contact: 'Contact',
      phone: 'Phone',
      email: 'Email',
      serviceArea: 'Service Area',
      company: 'Company',
      getQuote: 'For Urgent Call Now',
      learnMore: 'Learn More',
      callNow: 'Call Now',
      professionalMoving: 'Professional Moving Services',
      yourMove: 'Your Move, Our Care',
      companyDesc: 'TAREEQ SAREE MOVERS PACKERS FURNITURE TRANSFER L.L.C delivers professional, stress-free moving services across all of UAE and Dubai. From residential relocations to commercial transfers, we handle everything with precision and care.',
      happyClients: 'Happy Clients',
      yearsExperience: 'Years Experience',
      satisfaction: 'Satisfaction',
      serviceTitle: 'Our Services',
      whyChoose: 'Why Choose TAREEQ SAREE?',
      coverageTitle: 'Coverage Across UAE',
      coverageDesc: 'We serve all major emirates and cities',
      getInTouch: 'Get In Touch',
      readyToMove: 'Ready to move? Contact us for a free quote',
      allEmiratesDesc: 'All Emirates - Dubai, Abu Dhabi, Sharjah & More',
      readyToMoveBtn: 'Ready to Move?',
      callUs: 'Call us today for a free consultation and quote. Our team is ready to help!',
      professionalService: 'Professional service available',
      experiencedTeam: 'Experienced Team',
      experiencedDesc: 'Over 15 years of professional moving experience',
      modernEquipment: 'Modern Equipment',
      modernDesc: 'Latest moving trucks and professional handling equipment',
      storage: 'Storage Solutions',
      storageDesc: 'Secure, climate-controlled storage facilities available',
      professionalServiceTitle: 'Professional Service',
      professionalServiceDesc: 'Dedicated team committed to your satisfaction',
      residentialMoving: 'Residential Moving',
      residentialDesc: 'Professional house shifting with careful handling of all your belongings',
      packingUnpacking: 'Packing & Unpacking',
      packingDesc: 'Expert packing with premium materials to ensure safe transport',
      furnitureTransfer: 'Furniture Transfer',
      furnitureDesc: 'Safe and secure furniture moving with specialized equipment',
      storageService: 'Storage Solutions',
      storageServiceDesc: 'Secure, climate-controlled storage facilities for your items',
    },
    ar: {
      tareeqSaree: 'طريق سري',
      services: 'الخدمات',
      whyUs: 'لماذا نحن',
      coverage: 'التغطية',
      contact: 'اتصل',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      serviceArea: 'منطقة الخدمة',
      company: 'الشركة',
      getQuote: 'للاتصال العاجل الآن',
      learnMore: 'تعرف على المزيد',
      callNow: 'اتصل الآن',
      professionalMoving: 'خدمات النقل المهنية',
      yourMove: 'نقلتك، رعايتنا',
      companyDesc: 'تقدم شركة طريق سري للنقل والتغليف نقل الأثاث خدمات نقل احترافية وخالية من الإجهاد في جميع أنحاء الإمارات ودبي. من نقل المنازل إلى التحويلات التجارية، نتعامل مع كل شيء بدقة وعناية.',
      happyClients: 'عملاء سعداء',
      yearsExperience: 'سنة خبرة',
      satisfaction: 'رضا',
      serviceTitle: 'خدماتنا',
      whyChoose: 'لماذا تختار طريق سري؟',
      coverageTitle: 'التغطية في جميع أنحاء الإمارات',
      coverageDesc: 'نخدم جميع الإمارات والمدن الرئيسية',
      getInTouch: 'تواصل معنا',
      readyToMove: 'هل أنت مستعد للانتقال؟ تواصل معنا للحصول على عرض مجاني',
      allEmiratesDesc: 'جميع الإمارات - دبي وأبو ظبي والشارقة والمزيد',
      readyToMoveBtn: 'هل أنت مستعد للانتقال؟',
      callUs: 'اتصل بنا اليوم للحصول على استشارة مجانية وعرض. فريقنا مستعد لمساعدتك!',
      professionalService: 'الخدمة المهنية متاحة',
      experiencedTeam: 'فريق ذو خبرة',
      experiencedDesc: 'أكثر من 15 سنة من خبرة النقل المهنية',
      modernEquipment: 'معدات حديثة',
      modernDesc: 'أحدث شاحنات نقل ومعدات معالجة احترافية',
      storage: 'حلول التخزين',
      storageDesc: 'مرافق تخزين آمنة ومكيفة متاحة',
      professionalServiceTitle: 'الخدمة المهنية',
      professionalServiceDesc: 'فريق مخصص ملتزم برضاك',
      residentialMoving: 'نقل المنازل',
      residentialDesc: 'نقل منزل احترافي مع معالجة حذرة لجميع متعلقاتك',
      packingUnpacking: 'التغليف والفك',
      packingDesc: 'تغليف خبير بمواد عالية الجودة لضمان النقل الآمن',
      furnitureTransfer: 'نقل الأثاث',
      furnitureDesc: 'نقل أثاث آمن وموثوق مع معدات متخصصة',
      storageService: 'حلول التخزين',
      storageServiceDesc: 'مرافق تخزين آمنة ومكيفة لمتعلقاتك',
    },
  };

  const t = translations[language];

  const getServices = () => [
    {
      id: 1,
      title: t.residentialMoving,
      description: t.residentialDesc,
      icon: Building2,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/residential-moving-AqaKyGCYdhvUPBTuhUBpa7.webp",
    },
    {
      id: 2,
      title: t.packingUnpacking,
      description: t.packingDesc,
      icon: Package,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/packing-service-5HjhddU24tCPEu9yQpeLHH.webp",
    },
    {
      id: 3,
      title: t.furnitureTransfer,
      description: t.furnitureDesc,
      icon: Truck,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/furniture-transfer-bPSDijrKm5d72y68TcPjbA.webp",
    },
    {
      id: 4,
      title: t.storageService,
      description: t.storageServiceDesc,
      icon: Lock,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663434615536/j7CZjLGcgrp63CmChGp6VF/storage-solutions-cwKJhPaMaPoGvMdg3NvW8G.webp",
    },
  ];

  const services = getServices();

  const coverage = [
    { name: "Dubai", emoji: "🏙️" },
    { name: "Abu Dhabi", emoji: "🏛️" },
    { name: "Sharjah", emoji: "🌆" },
    { name: "Ajman", emoji: "🏘️" },
    { name: "Ras Al Khaimah", emoji: "⛰️" },
    { name: "Fujairah", emoji: "🌊" },
  ];

  const getWhyChooseUs = () => [
    {
      title: t.experiencedTeam,
      description: t.experiencedDesc,
    },
    {
      title: t.modernEquipment,
      description: t.modernDesc,
    },
    {
      title: t.storage,
      description: t.storageDesc,
    },
    {
      title: t.professionalServiceTitle,
      description: t.professionalServiceDesc,
    },
  ];

  const whyChooseUs = getWhyChooseUs();

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
              {t.services}
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-primary transition-colors">
              {t.whyUs}
            </a>
            <a href="#coverage" className="text-gray-700 hover:text-primary transition-colors">
              {t.coverage}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              {t.contact}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary font-bold text-sm hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
              title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <a
              href="tel:+971528102191"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-opacity-80 transition-colors"
            >
              <Phone size={20} />
              0528102191
            </a>
          </div>

          <a
            href="tel:+971528102191"
            className="md:hidden bg-primary text-white hover:bg-opacity-90 px-4 py-2 rounded-lg font-semibold transition-all"
          >
            {t.getQuote}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <p className="text-accent font-semibold text-lg mb-4">{t.professionalMoving}</p>
              <h1 className="text-primary mb-6 leading-tight">{t.yourMove}</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t.companyDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="cta-button cta-button-primary text-lg">{t.getQuote}</Button>
                <Button className="cta-button cta-button-secondary text-lg">{t.learnMore}</Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="stat-number">500+</p>
                  <p className="stat-label">{t.happyClients}</p>
                </div>
                <div>
                  <p className="stat-number">15+</p>
                  <p className="stat-label">{t.yearsExperience}</p>
                </div>
                <div>
                  <p className="stat-number">100%</p>
                  <p className="stat-label">{t.satisfaction}</p>
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
            <h2 className="text-primary mb-4">{t.serviceTitle}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {language === 'en' ? 'Comprehensive moving solutions tailored to your needs' : 'حلول نقل شاملة مصممة حسب احتياجاتك'}
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
            <h2 className="text-primary mb-4">{t.whyChoose}</h2>
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
            <h2 className="text-primary mb-4">{t.coverageTitle}</h2>
            <p className="text-gray-600 text-lg">{t.coverageDesc}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {coverage.map((city, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-4xl mb-3">{city.emoji}</p>
                <h3 className="text-primary font-bold">{city.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{t.professionalService}</p>
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
            <h2 className="text-white mb-4">{t.getInTouch}</h2>
            <p className="text-gray-100 text-lg">{t.readyToMove}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.phone}</h3>
              <a href="tel:+971528102191" className="text-gray-100 hover:text-accent transition-colors">
                0528102191
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.email}</h3>
              <a href="mailto:ramoversandpackers33@gmail.com" className="text-gray-100 hover:text-accent transition-colors break-all">
                ramoversandpackers33@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.serviceArea}</h3>
              <p className="text-gray-100">All Emirates - Dubai, Abu Dhabi, Sharjah & More</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.company}</h3>
              <p className="text-gray-100">TAREEQ SAREE MOVERS PACKERS FURNITURE TRANSFER L.L.C</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">{t.readyToMoveBtn}</h3>
            <p className="text-gray-100 mb-6">
              {t.callUs}
            </p>
            <a
              href="tel:+971528102191"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all"
            >
              <Phone className="mr-2" size={20} />
              {t.callNow} 0528102191
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">{language === 'en' ? 'Contact Us' : 'تواصل معنا'}</h2>
            <p className="text-gray-600 text-lg">
              {language === 'en' ? 'Fill out the form below and we will get back to you shortly' : 'املأ النموذج أدناه وسنعود إليك قريباً'}
            </p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setFormSubmitting(true);
              try {
                const response = await fetch('https://formspree.io/f/xvgzpnzg', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    serviceType: formData.serviceType,
                    message: formData.message,
                  }),
                });
                if (response.ok) {
                  setFormMessage(language === 'en' ? 'Thank you! We will contact you soon.' : 'شكراً! سنتواصل معك قريباً.');
                  setFormData({ name: '', email: '', phone: '', message: '', serviceType: 'residential' });
                } else {
                  setFormMessage(language === 'en' ? 'Error sending message. Please try again.' : 'خطأ في إرسال الرسالة. حاول مرة أخرى.');
                }
              } catch (error) {
                setFormMessage(language === 'en' ? 'Error sending message. Please try again.' : 'خطأ في إرسال الرسالة. حاول مرة أخرى.');
              }
              setFormSubmitting(false);
              setTimeout(() => setFormMessage(''), 5000);
            }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {language === 'en' ? 'Name' : 'الاسم'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder={language === 'en' ? 'Your name' : 'اسمك'}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder={language === 'en' ? 'Your email' : 'بريدك الإلكتروني'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {language === 'en' ? 'Phone' : 'الهاتف'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder={language === 'en' ? 'Your phone' : 'هاتفك'}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {language === 'en' ? 'Service Type' : 'نوع الخدمة'}
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="residential">{language === 'en' ? 'Residential Moving' : 'نقل المنازل'}</option>
                  <option value="commercial">{language === 'en' ? 'Commercial Moving' : 'نقل تجاري'}</option>
                  <option value="packing">{language === 'en' ? 'Packing & Unpacking' : 'التغليف والفك'}</option>
                  <option value="storage">{language === 'en' ? 'Storage Solutions' : 'حلول التخزين'}</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                {language === 'en' ? 'Message' : 'الرسالة'}
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary h-32 resize-none"
                placeholder={language === 'en' ? 'Your message' : 'رسالتك'}
              />
            </div>

            {formMessage && (
              <div className={`mb-6 p-4 rounded-lg text-center font-semibold ${
                formMessage.includes('Thank') || formMessage.includes('شكراً')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {formMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={formSubmitting}
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {formSubmitting
                ? language === 'en' ? 'Sending...' : 'جاري الإرسال...'
                : language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
            </button>
          </form>
        </div>
      </section>

      {/* Floating Call Button */}
      <a
        href="tel:+971528102191"
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-accent text-primary rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
        title="Call us now"
      >
        <Phone size={28} className="animate-bounce" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center">
          <p>© 2026 TAREEQ SAREE MOVERS PACKERS FURNITURE TRANSFER L.L.C. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
