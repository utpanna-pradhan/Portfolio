// import {Link} from 'react-router-dom';
// import { TypeAnimation } from 'react-type-animation';
import '../stylesheet/Home.css';

export default function Home() {
  return (
//     <section className="page home">
// <h4>Hello I'm Utpanna </h4>
// <h4 className='text-primary'>
//  <TypeAnimation
//       sequence={[
        
//         'A passionate Developer',
//         1500, 
//         'A passionate Freelancer',
//         1500,
//         'A passionate Technical Writer',
//         1500,
//         'A passionate Learner',
//         1500
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '2em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
// </h4>


      
     
//       <div className="cta mt-4">
//         <Link to="/work">
//   <button>View My Work</button>
// </Link>
    
//        {/* <a href="/contact">
//          <button>Contact Me</button>
//        </a> */}
      
//        </div>
//     </section>
    <div className='home'>
      <div className="row">
        <div className="col-md-10">
            <div className="sectionleft">
          <h1>Utpanna Pradhan</h1>
          <p>Frontend Developer , Freelancer , Blogger , Learner</p>
          <button>Connect with me</button>
      </div>
        </div>
        <div className="col-md-2">
              <div className="sectionright"></div>
        </div>
      </div>
      
    
    </div>
  );
}