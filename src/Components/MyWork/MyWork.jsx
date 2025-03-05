import React, { useEffect, useState } from 'react'
import './MyWork.css'
import mywork_data from '../../assets/Working_data'
import arrow from '../../assets/arrow.svg'

const MyWork = () => {
  const [visible,setvisible]=useState(3);

  const showmoreitem=()=>{
    if(visible===3){
      setvisible(mywork_data.length);
    }else{
      setvisible(3);
    }
  }
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        {/* <img src="s.svg" alt="img" /> */}
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0,visible).map((work,index)=>(
          <div key={index} className="work-item">
            <img  src={work.w_img} alt="img" />
            <p>{work.w_name}</p>
          </div>
        ))}
      </div>
      <div onClick={showmoreitem} className="mywork-showmore">
        <p >{visible===3?"Show More":"Show Less"}</p>
        <span class="material-symbols-outlined">arrow_forward</span>
      </div>
    </div>
  )
}

export default MyWork
