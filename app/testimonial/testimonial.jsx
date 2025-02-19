"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const testimonialData = [
    { image: "/img/avatar/testimonial-1.jpg", name: 'A Ivory', position: 'Business man', des: 'An absolutely wonderful stay! The rooms were spotless, the staff was incredibly welcoming, and the restaurant served the best meals I’ve had in a long time. Can’t wait to come back!' },
    { image: "/img/avatar/testimonial-2.jpg", name: 'David Fincher', position: 'Designer', des: 'From the seamless airport pickup to the cozy, well-maintained rooms, everything was top-notch. The WiFi was fast, and the service was impeccable. Highly recommended!' },
    { image: "/img/avatar/testimonial-3.jpg", name: 'Ridley Scott', position: 'Doctor', des: 'PI loved every moment of my stay! The hotel had such a warm and inviting atmosphere, and the attention to detail was impressive. The food was divine—definitely a five-star experience!' },
]

const Testimonial = () => {
  return (
    <>
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4500,
                  }}
                  loop={true}
                  modules={[Autoplay, Pagination]}
                >
                  {testimonialData?.map((data, id) => (
                    <SwiperSlide key={id}>
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src={data.image}
                            alt="image"
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>{data.name}</h4>
                          <span>{data.position}</span>
                          <p>{data.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
