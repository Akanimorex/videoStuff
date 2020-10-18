import React from 'react';
import {Link} from 'react-router-dom';
import avatar from '../img/avatar.png';
import Chat from '../components/chat';
import './video.css';






const Video =()=>{
    return(
        <div className="">
            <div className="chat-wrap">
                <div className="first-flex">
                    <div className="left-side">
                        <Link to="/" className="fa fa-arrow-left text-dark pb-4 chat-back-arrow">

                           Back
                        </Link>
                        <div className="d-flex pl-2">
                            <div >
                                <img src={avatar} className="avatar-img" alt="avatar"/></div>
                            <div className="pl-2"> 
                                <p className='font-weight-bold'>From WoodStuff <br></br>  From Total Hypnosis</p>
                            </div>
                        </div>

                        <div className="mx-auto">
                        <iframe controls="1" className=" mx-auto" src="https://tvstartup2.biz/mng-channel/vpanel/live_clappr.php?user=dsr&pass=117b515c325e61be0d20f5bfa30fada0" seamless="seamless" 
                         allowFullScreen={true} scrolling="no" frameBorder="0" width="100%" height="500" > 
                        </iframe>
                        </div>

                    </div>
                </div>
                <div className="second-flex">
                    <div className="right-side">
                    <div style={{background:'#E1DEE8'}} className="d-flex justify-content-around pt-4">
                        <div className="d-flex">
                            <div>
                                <img src={avatar} className="avatar-img" alt="" />
                            </div>
                            <div>
                                <p className="text-left font-weight-bold">From WoodStuff <br></br>  12 online</p>
                            </div>
                        </div>
                        <div>
                            <p style={{border:'1px solid grey',padding:'5px'}} className="font-weight-bold">&#8505;</p>
                        </div>

                    </div>
                       

                        <div className="chat-box overflow-auto">
                            <Chat/>
                            <Chat/>
                            <Chat/>
                            <Chat/>
                            <Chat/>
                            <Chat/>
                            <Chat/>
                            <Chat/>
                        </div>

                        <div className='mx-auto'>
                            <form className="chat-field mx-auto">
                                <input className='mt-2' type="text" placeholder="Type Your Message" />
                            </form>
                        </div>
                        <div className="foot-text">
                            <p>12 people online</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Video;