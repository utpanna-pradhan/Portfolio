import { Link } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <section className="page home">
<h4>Hello I'm Utpanna </h4>
<h4 className='text-primary'>
 <TypeAnimation
      sequence={[
        
        'A passionate Developer',
        1500, 
        'A passionate Freelancer',
        1500,
        'A passionate Technical Writer',
        1500,
        'A passionate Learner',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
</h4>


      
     
      <div className="cta mt-4">
      
       <a href="/work">
       <button>
        View My Work</button></a>
       {/* <a href="/contact">
         <button>Contact Me</button>
       </a> */}
      
      </div>
    </section>
  );
}