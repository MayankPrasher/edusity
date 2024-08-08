import './program.css'
import program1 from '../../public/cse.jpg'
import program2 from '../../public/auto-mobile.jpg'
import program3 from '../../public/mba.jpg'

const program = () => {
  return (
    <div className='programs'id='program'>
   <div className="program">
    <img src={program1}>
    </img>
    <div className="caption">
        <i className='fa fa-graduation-cap'></i>
        <p>Graduation Degree</p>
    </div>
   </div>
   <div className="program">
    <img src={program2}>
    </img>
    <div className="caption">
        <i className='fa fa-graduation-cap'></i>
        <p>Master Degree</p>
    </div>
   </div>
   <div className="program">
    <img src={program3}>
    </img>
    <div className="caption">
        <i className='fa fa-graduation-cap'></i>
        <p>Interview Preprations</p>
    </div>
   </div>
    </div>
  )
}

export default program