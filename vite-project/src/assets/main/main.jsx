import './main.css'
import Header from '../header/header.jsx'

import Face from '../img/face.png'

import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

export default function Main() {
  return (
    <>
    <Swiper
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        autoHeight={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Navigation, Pagination]}
        className="swiperItself"
      >
        <SwiperSlide className='swiperHeader'>
          <Header/>
        </SwiperSlide>
        <SwiperSlide className='swiperSectOne'>
          <section className='sect_one'>
            <div className='sect_one_con'>
              <div className='sect_one_left'>
                <p>Our firm</p>
              </div>
              <div className='sect_one_right'>
                <div className='sect_one_right_top'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <div className='sect_one_right_bot'>
                  <div className='sect_one_right_bot_img'>
                    <img src={Face} alt="" />
                  </div>
                  <div className='sect_one_right_bot_text'>
                    <p>Stephen Collier</p>
                    <p>Senior Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className='swiperSectTwo'>
          <section className='sect_two'>
            <div className='sect_two_con'>
              <p>Reeding House</p>
              <p>Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.</p>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  )
}