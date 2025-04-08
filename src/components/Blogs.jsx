import React from 'react';
import presentation from '../assets/presentation.png';
import '../stylesheet/Blogs.css'

function Blogs() {
  return (
    <div>
      <a href="https://medium.com/@utpanna828/scroll-to-the-top-of-the-page-the-easy-way-in-react-js-b2c140a296d9"
      target='_blank'>
           <div className="card col-md-10 mx-auto">
        <div className="card-body d-flex">
            <div className="img">
            <img src={presentation} alt='' className='blog1_img' />
            </div>
            <div className="content ps-4 pe-4">
                <h5>Scroll to the Top of the Page-Easy Way (in React.js)</h5>
               <ul>
                <li>Improves user experience (no more painful scrolling).</li>
                <li>Keeps your UI friendly .</li>
                  <li>Makes navigation easier — especially long pages like blogs etc</li>
                  
               </ul>
              
               <button type="button" class="btn btn-dark float-end">Read More</button>
            </div>
            
        </div>  
      </div>

      </a>
      <br></br>
      <a href="https://medium.com/@utpanna828/scroll-to-the-top-of-the-page-the-easy-way-in-react-js-b2c140a296d9"
      target='_blank'>
           <div className="card col-md-10 mx-auto">
        <div className="card-body d-flex">
            <div className="img">
            <img src={presentation} alt='' className='blog1_img' />
            </div>
            <div className="content ps-4 pe-4">
                <h5>Scroll to the Top of the Page-Easy Way (in React.js)</h5>
               <ul>
                <li>Improves user experience (no more painful scrolling).</li>
                <li>Keeps your UI friendly .</li>
                  <li>Makes navigation easier — especially long pages like blogs etc</li>
                  
               </ul>
              
               <button type="button" class="btn btn-dark float-end">Read More</button>
            </div>
            
        </div>  
      </div>

      </a>
   

    </div>
  )
}

export default Blogs
