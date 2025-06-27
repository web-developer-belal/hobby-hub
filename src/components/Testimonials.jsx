import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Craft Enthusiast",
      img: "https://i.pravatar.cc/100?img=11",
      quote:
        "HobbyHub introduced me to a knitting group in my area. I've made lifelong friends!",
    },
    {
      id: 2,
      name: "Mark Chen",
      role: "Photography Lover",
      img: "https://i.pravatar.cc/100?img=12",
      quote:
        "I found an amazing photography club through HobbyHub. Great people and events.",
    },
    {
      id: 3,
      name: "Sara Lee",
      role: "Painting Aficionado",
      img: "https://i.pravatar.cc/100?img=13",
      quote:
        "Thanks to HobbyHub, I joined a local painting class that meets every weekend!",
    },
    {
      id: 4,
      name: "David Smith",
      role: "Gaming Community Member",
      img: "https://i.pravatar.cc/100?img=14",
      quote:
        "Found my perfect gaming squad here. It's more than a group—it's a family!",
    },
    {
      id: 5,
      name: "Lisa Romero",
      role: "Book Club Organizer",
      img: "https://i.pravatar.cc/100?img=15",
      quote:
        "I've discovered and organized book readings with incredible people through HobbyHub.",
    },
    {
      id: 6,
      name: "Alex Nguyen",
      role: "Cycling Enthusiast",
      img: "https://i.pravatar.cc/100?img=16",
      quote:
        "HobbyHub helped me join a cycling group that meets weekly. Best decision ever!",
    },
  ];
  return (
    <section className="py-16 md:py-20 px-4 md:px-10 bg-base-300 relative">
    <SectionTitle title="What users say" ></SectionTitle>

      <div className="relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
            type: "bullets",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-30"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 rounded-lg bg-base-100/30 backdrop-blur-md border border-white/10 h-full min-h-[230px] flex flex-col">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3 border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-semibold text-base-content">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-base-content/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-base-content/80 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="mt-2 text-primary">★★★★★</div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="testimonial-prev cursor-pointer absolute left-0 top-1/2 z-10 -translate-y-1/2 transform bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hidden md:flex items-center justify-center">
          <FaChevronLeft className="text-xl" />
        </button>

        <button className="testimonial-next cursor-pointer absolute right-0 top-1/2 z-10 -translate-y-1/2 transform bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hidden md:flex items-center justify-center">
          <FaChevronRight className="text-xl" />
        </button>

        {/* Custom Pagination */}
        <div className="testimonial-pagination flex justify-center gap-2 mt-6 !relative" />
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--p));
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
