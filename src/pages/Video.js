import React,{Component} from 'react';
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
                        <Link to="/" className="fa fa-arrow-left text-dark chat-back-arrow">
                            Back
                        </Link>
                        <div className="d-flex">
                            <div>
                                <img src={avatar} className="avatar-img" alt="avatar"/></div>
                            <div> 
                                <p className='font-weight-bold'>From WoodStuff <br></br>  From Total Hypnosis</p>
                            </div>
                        </div>

                        <div className="video-card mx-auto">
                            Video Here
                        </div>
                    </div>
                </div>
                <div className="second-flex">
                    <div className="right-side">
                        <div className="d-flex">
                            <div>
                                <img src={avatar} className="avatar-img" alt="" />
                            </div>
                            <div>
                                <p className="text-left font-weight-bold">From WoodStuff <br></br>  12 online</p>
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

                        <div>
                            <form>
                                <input type="text" placeholder="Type Your Message" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Video;