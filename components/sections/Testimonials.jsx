"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    projectImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/da/13/9f/hotel-facade.jpg?w=1400&h=800&s=1",
    projectName: "Hotel Lilac",
    text: "Professional, efficient, and innovative. We are बेहद satisfied with their work and would definitely collaborate again.",
    rating: 5,
  },
  {
    id: 2,
    projectImage: "https://dynamic.realestateindia.com/proj_images/project15040/proj_header_image-15040-770x400.jpg",
    projectName: "Skypark Kota",
    text: "Excellent execution and premium quality service. Their dedication and work ethic make them a trusted choice.",
    rating: 5,
  },
  {
    id: 3,
    projectImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3a/cf/34/entrance.jpg?w=1400&h=800&s=1",
    projectName: "Hotel ORTUS",
    text: "A reliable partner delivering outstanding results. Their attention to detail and commitment to excellence stands out.",
    rating: 5,
  },
  {
    id: 4,
    projectImage: "https://housing-images.n7net.in/4f2250e8/fdabfc1c1a251452db90acc3a0d78ec3/v6/fs-large/sunprime_infratech_sunprime_infratech_skyline-instrumentation_limited_colony-kota-sunprime_infratech_pvtltd.jpg",
    projectName: "Skyline Kota",
    text: "Highly dependable and result-driven team. They consistently deliver quality with a great customer experience.",
    rating: 5,
  },
  {
    id: 5,
    projectImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/543027436.jpg?k=103a5d86c6d6940f386b8c679d879bbfb05491e251c280a27dc0dc1a698296ab&o=",
    projectName: "Hotel Classic Sapphire",
    text: "Smooth experience from start to finish. The team is highly skilled, responsive, and delivers beyond expectations.",
    rating: 5,
  },
  {
    id: 6,
    projectImage: "https://pix8.agoda.net/hotelImages/12548872/-1/e0478fb6280b648adc5c2533373eddaa.jpg?ca=15&ce=1&s=1024x",
    projectName: "Hotel Clarks Premier",
    text: "Exceptional service and top-quality solutions. Their professionalism and timely execution truly impressed us. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  const prev = () => setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-brand-50 dark:bg-brand-950 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3 drop-shadow-sm">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              What Our Clients Say
            </h3>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-surface rounded-3xl overflow-hidden shadow-xl border border-border relative flex flex-col md:flex-row min-h-[400px]"
            >
              {/* Hotel / Project Image Section */}
              <div className="relative h-48 md:h-auto md:w-1/2 flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].projectImage}
                  alt={testimonials[currentIndex].projectName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                  <h4 className="text-white font-bold text-2xl md:text-3xl drop-shadow-md mb-1">{testimonials[currentIndex].projectName}</h4>
                  <p className="text-white/90 text-sm md:text-base font-medium">Featured Hotel Project</p>
                </div>
              </div>
              
              {/* Review Section */}
              <div className="p-6 md:p-12 relative flex-1 flex flex-col justify-center bg-brand-50/50 dark:bg-brand-900/20">
                <Quote size={60} className="text-brand-200/40 absolute top-4 right-4 md:top-8 md:right-8 rotate-180 z-0" />
                
                <div className="relative z-10 flex flex-col items-start text-left w-full">
                  <div className="flex gap-1 mb-4 md:mb-8 text-accent drop-shadow-sm">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={24} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-2xl font-medium text-foreground leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              suppressHydrationWarning
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border bg-surface flex items-center justify-center text-foreground hover:bg-accent hover:text-brand-950 hover:border-accent transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              suppressHydrationWarning
              onClick={next}
              className="w-12 h-12 rounded-full border border-border bg-surface flex items-center justify-center text-foreground hover:bg-accent hover:text-brand-950 hover:border-accent transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
