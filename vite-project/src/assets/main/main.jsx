import './main.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'

import Face1 from '../img/face1.png'
import Face2 from '../img/face2.png'
import Face3 from '../img/face3.png'
import Face4 from '../img/face4.png'
import Face5 from '../img/face5.png'

import Sketching from '../img/sketching.png'
import Finalizing from '../img/finalizing.png'
import Building from '../img/building.png'

import Hill from '../img/hillHayes.png'
import Studio from '../img/studioCai.png'
import Rick from '../img/riksgransen.png'
import Chill from '../img/chillIndustries.png'

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
                    <img src={Face1} alt="" />
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
        <SwiperSlide>
          <section className='sect_three'>
            <div className='sect_three_con'>
              <div className='sect_three_title'>
                <p>Our process</p>
              </div>
              <div className='sect_three_desc'>
                <p>How we do what we do.</p>
              </div>
              <div className='sect_three_cards'>
                <div className='sect_three_cards_left'>
                  <img src={Sketching} alt="" />
                  <p>Sketching</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis.</p>
                </div>
                <div className='sect_three_cards_mid'>
                  <img src={Finalizing} alt="" />
                  <p>Finalizing</p>
                  <p>Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae.</p>
                </div>
                <div className='sect_three_cards_right'>
                  <img src={Building} alt="" />
                  <p>Building</p>
                  <p>Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.</p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='sect_four'>
            <div className='sect_four_con'>
              <p>The marble staircase</p>
              <p>Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.</p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='sect_five'>
            <div className='sect_five_con'>
              <div className='sect_five_left'>
                <p>prior clients</p>
                <p>Happy customers.</p>
                <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
              </div>
              <div className='sect_five_right'>
                <div className='sect_five_right_imgs'>
                  <div><img src={Hill} alt="" /></div>
                  <div><img src={Rick} alt="" /></div>
                  <div><img src={Studio} alt="" /></div>
                  <div><img src={Chill} alt="" /></div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='sect_six'>
            <div className='sect_six_con'>
              <p>The swirling staircase</p>
              <p>Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.</p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='sect_seven'>
            <div className='sect_seven_con'>
              <div className='sect_seven_top'>
                <p>Featured projects</p>
                <p>Some of the latest and greatest projects from us here at Wishbone+Partners.</p>
              </div>
              <div className='sect_seven_mid'>
                <div className='sect_seven_mid_top'></div>
                <div className='sect_seven_mid_mid'>
                  <div>
                    <div>
                      <p>New York</p>
                      <p>Big Road Brewery</p>
                    </div>
                    <div>
                      <button type="button">Read more</button>
                    </div>
                  </div>
                </div>
                <div className='sect_seven_mid_bot'></div>
              </div>
              <div className='sect_seven_bot'>
                <button type="button">View all projects</button>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='sect_eight'>
            <div className='sect_eight_con'>
              <div className='sect_eight_left'>
                <p>Meet our team</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.</p>
                <button type="button">See team</button>
              </div>
              <div className='sect_eight_right'>
                <div className='sect_eight_right_left'>
                  <div className='sect_eight_right_card'>
                    <div className='sect_eight_right_card_img'>
                      <img src={Face1} alt="" />
                    </div>
                    <div className='sect_eight_right_card_text'>
                      <p>Stephen Collier</p>
                      <p>Senior Partner</p>
                    </div>
                  </div>
                  <div className='sect_eight_right_card'>
                    <div className='sect_eight_right_card_img'>
                      <img src={Face2} alt="" />
                    </div>
                    <div className='sect_eight_right_card_text'>
                      <p>Ferris Wonder</p>
                      <p>Associate Partner</p>
                    </div>
                  </div>
                  <div className='sect_eight_right_card'>
                    <div className='sect_eight_right_card_img'>
                      <img src={Face3} alt="" />
                    </div>
                    <div className='sect_eight_right_card_text'>
                      <p>Niko Ferry</p>
                      <p>Partner</p>
                    </div>
                  </div>
                </div>
                <div className='sect_eight_right_right'>
                  <div className='sect_eight_right_card'>
                    <div className='sect_eight_right_card_img'>
                      <img src={Face4} alt="" />
                    </div>
                    <div className='sect_eight_right_card_text'>
                      <p>Nolan Peters</p>
                      <p>Associate</p>
                    </div>
                  </div>
                  <div className='sect_eight_right_card'>
                    <div className='sect_eight_right_card_img'>
                      <img src={Face5} alt="" />
                    </div>
                    <div className='sect_eight_right_card_text'>
                      <p>Aria Stone</p>
                      <p>Senior Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='sect_nine'>
            <div className="sect_nine_con">
              <div className='sect_nine_left'>
                <p>Get in touch</p>
                <p>Think we would be a good fit for your next project?</p>
              </div>
              <div className='sect_nine_right'>
                <button type="button">Get in touch</button>
              </div>
            </div>
          </section>
          <Footer/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}