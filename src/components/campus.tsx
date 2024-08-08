import './campus.css'
import gallery1 from '../../public/gallery-1.jpg'
import gallery2 from '../../public/gallery-2.jpg'
import gallery3 from '../../public/gallery-3.jpg'
import gallery4 from '../../public/gallery-4.jpg'

const campus = () => {
  return (
    <div className='campus'>
<div className="gallery">
    <img src={gallery1} alt="" />
    <img src={gallery2} alt="" />
    <img src={gallery3} alt="" />
    <img src={gallery4} alt="" />
</div>
<button className='btn dark-btn'>See more here &#8594;</button>
    </div>
  )
}

export default campus