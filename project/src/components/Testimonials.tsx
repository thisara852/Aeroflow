import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Business Traveler",
      company: "Tech Executive",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "AeroFlow's AI predicted my flight delay 45 minutes before the airline announced it. The AR navigation saved me from missing my connection at Heathrow. This is the future of travel.",
      rating: 5,
      highlight: "Saved 45 minutes"
    },
    {
      name: "Marcus Johnson",
      role: "Family Traveler",
      company: "Father of 3",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Traveling with kids used to be chaos. The family hub keeps us coordinated, and queue management eliminated hours of waiting. My children actually enjoy airports now!",
      rating: 5,
      highlight: "Family-friendly"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Accessibility Advocate",
      company: "Medical Professional",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Finally, an app that considers accessibility from the ground up. The navigation finds elevator routes automatically, and every feature works perfectly with assistive technology.",
      rating: 5,
      highlight: "Accessibility first"
    },
    {
      name: "James Park",
      role: "Frequent Flyer",
      company: "200+ flights/year",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "I've tried every travel app. AeroFlow is different—it learns my patterns, predicts my needs, and consistently delivers accurate information. It's become indispensable.",
      rating: 5,
      highlight: "AI-powered insights"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #023e8a 25%, transparent 25%), linear-gradient(-45deg, #023e8a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #023e8a 75%), linear-gradient(-45deg, transparent 75%, #023e8a 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 text-sm font-semibold">
            ⭐ Trusted Worldwide
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Loved by
            <span className="block bg-gradient-to-r from-[#023e8a] to-blue-600 bg-clip-text text-transparent">
              50,000+ Travelers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From business executives to families, see how AeroFlow transforms airport experiences across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:border-[#023e8a]/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-[#023e8a] to-blue-600 text-white text-xs font-semibold rounded-full">
                {testimonial.highlight}
              </div>

              <Quote className="w-8 h-8 text-[#023e8a]/60 mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#023e8a]/20"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-[#023e8a] font-semibold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#023e8a] via-blue-600 to-[#023e8a]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative p-12 md:p-16 text-center text-white">
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Join Them?
            </h3>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the future of airport travel. Start your stress-free journey with AeroFlow today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-white text-[#023e8a] rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Download Mobile App
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#023e8a] transition-all duration-300">
                Try Web Version
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;