import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/context';

const Main = () => {

     const{onSent, recentPrompt,showResult,loading,resultData,setInput,input } = useContext(Context)

  return (
    <>
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt='user_icon'/>
        </div>
{/* use ternary operator to hide the class when loading is true */}

        <div className="main_container">
             {!showResult? <>
                <div className="greet">
                <p><span>Hi Rishabh.</span></p>
                <p>How can I help you...?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest some beautiful places to see on upcomig Road trip</p>
                    <img src={assets.compass_icon} alt='compass_icon'/>
                </div>
                <div className="card">
                    <p>Brifely Summarize this text: Rural Development</p>
                    <img src={assets.bulb_icon} alt='compass_icon'/>
                </div>
                <div className="card">
                    <p>Different climate conditions of India</p>
                    <img src={assets.message_icon} alt='compass_icon'/>
                </div>
                <div className="card">
                    <p>Improve the readability of this code</p>
                    <img src={assets.code_icon} alt='compass_icon'/>
                </div>
            </div>
             </>
             :<div className='result'>
                <div className="result_title">
                    <img src={assets.user_icon} alt='' />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result_data">
                    <img src={assets.gemini_icon} alt=''/>
                     {/* making state for loading data animation */}
                    {loading?
                      <div className='loader'>
                             <hr />
                             <hr />
                             <hr />
                        </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p> }
                </div>
            </div>
             }
           
            <div className="main_bottom">
                <div className="search_box">
                    <input onChange={(e)=> setInput(e.target.value)} value={input} type='text' placeholder='Enter a promt here'/>
                     <div>
                      <img src={assets.gallery_icon} alt="" />
                      <img src={assets.mic_icon} alt="" />
                     {input? <img onClick={()=> onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
               </div>
               <p className='bootom_info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>

    </div>
        
    </>
  )
}

export default Main