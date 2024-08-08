import'./testimonial.css'
import next from '../../public/next-icon.png'
import back from '../../public/back-icon.png'
import user1 from '../../public/user-1.png'
import user2 from '../../public/user-2.png'
import user3 from '../../public/user-3.png'
import user4 from '../../public/user-4.png'
import { useRef } from 'react'

const testimonial = () => {
    const slide = useRef(null);
    let tx = 0;
const slideForward = ()=>{
     if(tx> -50){
        tx-=25;
     }
     if(slide.current){
        slide.current.style.transform = `translate(${tx}%)`;
     }

}
const slideBackward = ()=>{
    if(tx<0){
        tx+=25;
     }
     if(slide.current){
        slide.current.style.transform = `translate(${tx}%)`;
     }

}
  return (
    <div className='testimonials'>
       <img src={next} alt="" className='next-btn' onClick={slideForward}/>
       <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
       <div className="slider">
        <ul ref={slide}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>Jackson william</h3>
                            <span>Boulevard,India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia odio illo est veritatis dolore inventore expedita? Quaerat, quisquam error? Doloribus, eveniet nemo? Deserunt voluptatem perspiciatis et molestias sapiente unde!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>Jackson william</h3>
                            <span>Boulevard,India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia odio illo est veritatis dolore inventore expedita? Quaerat, quisquam error? Doloribus, eveniet nemo? Deserunt voluptatem perspiciatis et molestias sapiente unde!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>Jackson william</h3>
                            <span>Boulevard,India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia odio illo est veritatis dolore inventore expedita? Quaerat, quisquam error? Doloribus, eveniet nemo? Deserunt voluptatem perspiciatis et molestias sapiente unde!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3>Jackson william</h3>
                            <span>Boulevard,India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia odio illo est veritatis dolore inventore expedita? Quaerat, quisquam error? Doloribus, eveniet nemo? Deserunt voluptatem perspiciatis et molestias sapiente unde!</p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default testimonial