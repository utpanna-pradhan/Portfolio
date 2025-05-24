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
        2000, 
        'A passionate Freelancer',
        2000,
        'A passionate Technical Writer',
        2000,
        'A passionate Learner',
        2000
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
      
        <button>Contact Me</button>
      </div>
    </section>
  );
}