import {Virtual, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from '../Card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

// import {ReactComponent as LeftIcon} from '../left-arr.svg';
// import {ReactComponent as RighttIcon} from '../right-arr.svg';

export default ({data}) =>{
    return <div className='carousel-container'>
      <Swiper
    modules={[Virtual, Navigation, Pagination]}
    // onSwiper={setSwiperRef}
    slidesPerView={7}
    // centeredSlides={true}
    spaceBetween={30}
    // pagination={{
    //     type: 'fraction',
    // }}
    // navigation={true}
    navigation={{nextEl:".arrow-left", prevEl:".arrow-right" }}
    virtual
    >
      {data.map(cardData => <SwiperSlide key={cardData.id}> <Card 
            key={cardData.id}
            imgSrc={cardData.image}
            label={cardData.title}
            followersCount={cardData.follows}
            /></SwiperSlide>)}
    </Swiper>

    <div className='arrow-left arrow'><img src="leftarr.png" alt="" /></div>
    <div className='arrow-right arrow'><img src="rightarr.png" alt="" /></div>
 </div>
  }