import { Fragment } from "react";
import './Close.css';

const Close = () =>{
const display =(e)=>{
    const all = document.getElementsByClassName("close_scnd");
    const alltext = document.getElementsByClassName('close_frst_items');
    for(let i=0;i<all.length;i++){
        all[i].style.display='none';
        alltext[i].style.color='black';
    }
    console.log(e.target.id+'z');
    document.getElementById(e.target.id).style.color='red';
    const exp = document.getElementById(e.target.id+'z');
    exp.style.display='flex';
}
    return(
        <Fragment>
                <div className="close_wrapper">
                    <div className="close_wrap_frst_part">
                        <div className="close_frst_items "id="main_frst"onClick={display}>Home</div>
                        <div className="close_frst_items "id="main_scnd"onClick={display}>Companies</div>
                        <div className="close_frst_items "id="main_trd"onClick={display}>About Us</div>
                        <div className="close_frst_items "id="main_four"onClick={display}>Our Foundation</div>
                        <div className="close_frst_items "id="main_five"onClick={display}>Branson Family</div>
                        <div className="close_frst_items "id="main_six"onClick={display}>Virgin Red</div>
                    </div>
                   <div className="close_wrap_scnd_part">
                       <div className="close_scnd frst_parts"id="main_frstz">
                           <div className="close_scnd_text"></div>
                           <div className="close_imagesec frst_img">
                           
                       </div>
                       </div>
                       <div className="close_scnd scnd_part"id="main_scndz">
                       <div className="close_scnd_text"></div>
                       <div className="close_imagesec scnd_img">
                           
                       </div>
                       </div>
                       <div className="close_scnd trd_part"id="main_trdz">
                       <div className="close_scnd_text">
                           <span className="close_options">ABOUT US</span>
                           <span className="close_options">OUR STORY</span>
                           <span className="close_options">TIMELINE</span>
                           <span className="close_options">WORKING AT VIRGIN</span>
                           <span className="close_options">LATEST</span>
                           <span className="close_options">VIRGIN GROUP</span>
                           <span className="close_options">OVERVIEW</span>
                           <span className="close_options">SENIOR TEAM</span>
                           <span className="close_options">NEWS</span>
                       </div>
                       <div className="close_imagesec trd_img">

                       </div>
                       </div>
                       <div className="close_scnd four_part"id="main_fourz">
                       <div className="close_scnd_text">
                       <span className="close_options">OUR FOUNDATION</span>
                           <span className="close_options">LATEST</span>
                           <span className="close_options">VIRGIN UNITE WEBSITE</span>
                       </div>
                       <div className="close_imagesec four_img">

</div>
                       </div>
                       <div className="close_scnd five_part"id="main_fivez">
                       <div className="close_scnd_text">
                       <span className="close_options">BRANSON FAMILY</span>
                           <span className="close_options">RICHARD BRANSON'S BLOG</span>
                           <span className="close_options">HOLLY BRANSON'S BLOG</span>
                           <span className="close_options">BOOKS</span>
                           <span className="close_options">BOOK A BRANSON</span>
                       </div>
                       <div className="close_imagesec five_img">

</div>
                       </div>
                       <div className="close_scnd six_part"id="main_sixz">
                       <div className="close_scnd_text">
                       <span className="close_options">HOME</span>
                           <span className="close_options">SPEND</span>
                           <span className="close_options">EARN</span>
                           <span className="close_options">MY REWARDS</span>
                       </div>
                       </div>
                   </div>
                 
                 
                </div>
        </Fragment>
    )
}
export default Close;
