import { useState } from 'react';
import './animationBannerHome.scss';
import brandsAnimate1 from '../../../shared/images/brandsAnimate1.png';
import brandsAnimate2 from '../../../shared/images/brandsAnimate2.png';
import brandsAnimate3 from '../../../shared/images/brandsAnimate3.png';
import brandsAnimate4 from '../../../shared/images/brandsAnimate4.png';
import brandsAnimate5 from '../../../shared/images/brandsAnimate5.png';
import brandsAnimateColor1 from '../../../shared/images/brandsAnimateColor1.png';
import brandsAnimateColor2 from '../../../shared/images/brandsAnimateColor2.png';
import brandsAnimateColor3 from '../../../shared/images/brandsAnimateColor3.png';
import brandsAnimateColor4 from '../../../shared/images/brandsAnimateColor4.png';
import brandsAnimateColor5 from '../../../shared/images/brandsAnimateColor5.png';
import brandsAnimateColor7 from '../../../shared/images/brandsAnimateColor7.png';

export default function AnimationBannerHome() {

  const [elements] = useState([
     {
      id: 1,
      name: 'Фаворит',
      image: brandsAnimate1,
      imageColor: brandsAnimateColor1
     },
     {
      id: 2,
      name: 'Юникс',
      image: brandsAnimate2,
      imageColor: brandsAnimateColor2
     },
     {
      id: 3,
      name: 'Аккумуляторный мир',
      image: brandsAnimate3,
      imageColor: brandsAnimateColor3
     },
     {
      id: 4,
      name: 'Маслон',
      image: brandsAnimate4,
      imageColor: brandsAnimateColor4
     },
     {
      id: 5,
      name: 'Бином',
      image: brandsAnimate5,
      imageColor: brandsAnimateColor5
     },
     {
      id: 7,
      name: 'Бином',
      image: brandsAnimate5,
      imageColor: brandsAnimateColor7
     }

  ]); 



  return (
    <section className='animation-banner-home__parent'> 
        <div className="container">
          <div className="animation-banner-home__parent-items">
            {
              elements.map((item) => {
                return (
                  <div key={item.id} className='animation-banner-home__parent-items-block'>
                    <img 
                    src={item.imageColor}
                    alt={item.name} 
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>
  )
}
