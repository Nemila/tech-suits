"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const articles = [
  {
    id: 0,
    title: "Macbook Pro 14'' and 16''",
    decsription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt suscipit, laboriosam expedita dolore totam.",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "Headsets Wireless Bluetooth",
    decsription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit, laboriosam expedita dolore totam.",
    image:
      "https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Richard Mille Watch",
    decsription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt suscipit, laboriosam expedita dolore totam.",
    image:
      "https://images.unsplash.com/photo-1601801958048-aa2e1c3e21e3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "IPhone 6s 64GB",
    decsription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt suscipit, laboriosam expedita dolore totam.",
    image:
      "https://images.unsplash.com/photo-1620371001201-5a93043aec34?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BannerSlider = () => {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    if (swiperRef.current) {
      setPrevDisabled(swiperRef.current.isBeginning);
    }
  }, [swiperRef]);

  return (
    <div className="relative">
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log("swiper")}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="relative h-full rounded-md"
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div
              className="flex h-full min-h-[400px] w-full items-center justify-center bg-cover bg-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${article.image})`,
              }}
            >
              <div className="pointer-events-none flex max-w-md flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-4xl font-semibold">{article.title}</h3>
                <p>{article.decsription}</p>
                <div>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div
            className="flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-4 rounded-md bg-cover bg-center p-6 text-white"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="flex max-w-md flex-col items-center justify-center gap-4 text-center">
              <h3 className="text-4xl font-semibold">
                Macbook Pro 14&apos;&apos; and 16&apos;&apos;
              </h3>
              <p>
                Just trade in tour elligible computer for credit toward a new
                one or recycle it for free. It&apos;good for you and the planet.
              </p>

              <div>
                <button className="btn btn-primary">Buy Macbook</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full min-h-[400px] w-full rounded-md bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://images.unsplash.com/photo-1601801958048-aa2e1c3e21e3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="flex max-w-md flex-col items-center justify-center gap-4 text-center">
              <h3 className="text-4xl font-semibold">
                Macbook Pro 14&apos;&apos; and 16&apos;&apos;
              </h3>
              <p>
                Just trade in tour elligible computer for credit toward a new
                one or recycle it for free. It&apos;good for you and the planet.
              </p>

              <div>
                <button className="btn btn-primary">Buy Macbook</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full min-h-[400px] w-full rounded-md bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://images.unsplash.com/photo-1620371001201-5a93043aec34?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="flex max-w-md flex-col items-center justify-center gap-4 text-center">
              <h3 className="text-4xl font-semibold">
                Macbook Pro 14&apos;&apos; and 16&apos;&apos;
              </h3>
              <p>
                Just trade in tour elligible computer for credit toward a new
                one or recycle it for free. It&apos;good for you and the planet.
              </p>

              <div>
                <button className="btn btn-primary">Buy Macbook</button>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>

      <div className="absolute left-0 top-1/2 z-10 flex w-full -translate-y-1/2 items-center justify-between p-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={swiperRef.current?.isEnd}
          className="btn btn-square btn-primary"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={swiperRef.current?.isEnd}
          className="btn btn-square btn-primary"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
