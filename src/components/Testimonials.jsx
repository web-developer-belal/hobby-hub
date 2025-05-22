import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-10">
      <h2 className="text-3xl text-accent font-bold text-center mb-10">
        What Our Users Say
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="p-6 rounded-lg shadow-lg bg-base-100 h-full">
            <div className="flex items-center mb-4">
              <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold">Emily Johnson</h4>
                <p className="text-sm text-gray-500">Craft Enthusiast</p>
              </div>
            </div>
            <p>
              “HobbyHub introduced me to a knitting group in my area. I've made lifelong friends!”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 rounded-lg shadow-lg bg-base-100 h-full">
            <div className="flex items-center mb-4">
              <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold">Mark Chen</h4>
                <p className="text-sm text-gray-500">Photography Lover</p>
              </div>
            </div>
            <p>
              “I found an amazing photography club through HobbyHub. Great people and events.”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 rounded-lg shadow-lg bg-base-100 h-full">
            <div className="flex items-center mb-4">
              <img src="https://i.pravatar.cc/100?img=13" alt="User" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold">Sara Lee</h4>
                <p className="text-sm text-gray-500">Painting Aficionado</p>
              </div>
            </div>
            <p>
              “Thanks to HobbyHub, I joined a local painting class that meets every weekend!”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 rounded-lg shadow-lg bg-base-100 h-full">
            <div className="flex items-center mb-4">
              <img src="https://i.pravatar.cc/100?img=14" alt="User" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold">David Smith</h4>
                <p className="text-sm text-gray-500">Gaming Community Member</p>
              </div>
            </div>
            <p>
              “Found my perfect gaming squad here. It's more than a group—it's a family!”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 rounded-lg shadow-lg bg-base-100 h-full">
            <div className="flex items-center mb-4">
              <img src="https://i.pravatar.cc/100?img=15" alt="User" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold">Lisa Romero</h4>
                <p className="text-sm text-gray-500">Book Club Organizer</p>
              </div>
            </div>
            <p>
              “I’ve discovered and organized book readings with incredible people through HobbyHub.”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-6 rounded-lg shadow-lg bg-base-100 h-full">
            <div className="flex items-center mb-4">
              <img src="https://i.pravatar.cc/100?img=16" alt="User" className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-semibold">Alex Nguyen</h4>
                <p className="text-sm text-gray-500">Cycling Enthusiast</p>
              </div>
            </div>
            <p>
              “HobbyHub helped me join a cycling group that meets weekly. Best decision ever!”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
