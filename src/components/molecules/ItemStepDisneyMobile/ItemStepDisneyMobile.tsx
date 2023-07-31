import React from 'react';
import './ItemStepDisneyMobile.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { DataStepModel } from '../../../models/data-step.model';

export type ItemStepDisneyMobileProps = {
  dataStep: DataStepModel[];
};

const ItemStepDisneyMobile: React.FC<ItemStepDisneyMobileProps> = ({
  dataStep,
}) => {
  return (
    <section className='container-mobile hidde-xs pt-benedicios'>
      <div className='benefits__header'>
        {/* <h5 className='benefits__title-small'>Beneficios</h5> */}
        <h1 className='benefits__title-big'>
          Los mundos mágicos de Disney incluyen:
        </h1>
        {/* <h5 className='benefits__title-midium'>
          Descubre todo lo que puedes hacer con Banca Web.
        </h5> */}
      </div>
      <div className='container-swipper'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          {dataStep.map((data, index) => (
            <SwiperSlide key={index}>
              <div className='benefits-mobile'>
                <div id='bg-mobile' className='benefits-mobile__img'>
                  <img id='assetImageMobile' src={data.imageMobile} alt='' />
                </div>
                <div className='benefits-mobile__body'>
                  <span className='benefits-mobile__title'>{data.title}</span>
                  <p className='benefits-mobile__description'>
                    {data.descripton}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className='footer-link'>
          <a
            className='linkQuestion'
            target='_blank'
            href='https://pichincha-app.onelink.me/Ugt0/3selu8ag
							  '
          >
            ¿No tienes Banca Web? Regístrate
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ItemStepDisneyMobile;
