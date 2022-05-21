import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faTwitter,fainstagram,faYoutube,faLinkedIn, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './Menu.css';
import jimmy from './Scoop.json';

const Menu = () => {

    return (
        <Fragment>
            <div className="virgineve">
                <div className="whole_dropdown">
                    <div className="dropdown_frstline"><span className="frsthover">companies</span></div>
                    <div className="dropdown_frstline frtsonabt"><span className="frsthover"> about us<FontAwesomeIcon className="drop_arwdwn" icon={faAngleDown}></FontAwesomeIcon></span>
                        <div className="drop_options_wrap aboutwrap">
                            <div className="options_scndline">our story</div>
                            <div className="options_scndline">timeline</div>
                            <div className="options_scndline">working at virgin</div>
                            <div className="options_scndline">latest</div>
                            <div className="options_scndline">virgin group</div>
                        </div>
                    </div>
                    <div className="dropdown_frstline frtonour"><span className="frsthover">our foundation<FontAwesomeIcon className="drop_arwdwn" icon={faAngleDown}></FontAwesomeIcon></span>
                        <div className="drop_options_wrap ourwrap">

                            <div className="options_scndline">latest</div>
                            <div className="options_scndline">virgin unite website</div>
                        </div>
                    </div>
                    <div className="dropdown_frstline frtonbran"><span className="frsthover">branson family<FontAwesomeIcon className="drop_arwdwn" icon={faAngleDown}></FontAwesomeIcon></span>
                        <div className="drop_options_wrap famwrap">
                            <div className="options_scndline">richard branson's blog</div>
                            <div className="options_scndline">holly branson's blog</div>
                            <div className="options_scndline">books</div>
                            <div className="options_scndline">books of branson</div>

                        </div>
                    </div>
                    <div className="dropdown_frstline frtonvirgi"><span className="frsthover">virgin red<FontAwesomeIcon className="drop_arwdwn vrgred" icon={faAngleDown}></FontAwesomeIcon></span>
                        <div className="drop_options_wrap redwrap">
                            <div className="options_scndline">spend</div>
                            <div className="options_scndline">earn</div>

                            <div className="options_scndline">my rewards</div>

                        </div>
                    </div>
                </div>
                <div className="redcontent">
                    <div className="redtexts">
                        <p >VIRGIN LIMITED EDITION</p>
                        <h1><p>Virign Limited Edition to<p> open new luxury hotel in</p>  Mallorca</p></h1>
                        <p>TAKE A PEEK <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></p>
                    </div>
                    <div className="redhotelcrc"></div>
                </div>
                <div className="redcontent_triangle"></div>
                <div className="redcontent_triangle_line"></div>
                <div className="seewhat">See what we're made of<span className="reddot">.</span>
                    <div className="virgin_cards">
                        <div className="virgin_card galactic_cards">
                            <div className="virgin_card_image galactic_card"></div>
                            <div className="virgin_card_text">
                                Virgin Galactic<FontAwesomeIcon className="virgin_card_arrow" icon={faAngleRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="virgin_card virginred_cards">
                            <div className="virgin_card_image virginred_card"></div>
                            <div className="virgin_card_text">
                                Virgin Red<FontAwesomeIcon className="virgin_card_arrow" icon={faAngleRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="virgin_card orbit_cards">
                            <div className="virgin_card_image orbit_card"></div>
                            <div className="virgin_card_text">
                                Virgin Orbit<FontAwesomeIcon className="virgin_card_arrow" icon={faAngleRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="virgin_card lasthalf">
                            <div className="virgin_card_image virgingroup_card"></div>
                            <div className="virgin_card_text">
                                Virgin Group<FontAwesomeIcon className="virgin_card_arrow" icon={faAngleRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                        <button className="vrgn_card_btn">See all Virgin Companies</button>
                      </div>
                      </div>
                      <div className="whitetrang "></div>
                <div className="redcontent_triangle_line whitebar"></div>
               <div className="scoop">
                   <div className="scoop_headline">Get the inside scoop<span className="reddot">.</span></div>
               <div className="scoopwrap">
                   {   jimmy.map((e)=>
                        <div className="scoop_card">
                        <div className="scoop_image"style={{backgroundImage: "url(" + `${e.url}` + ")"}}></div>
                        <div className="scoop_label">{e.label}</div>
                        <div className="scoop_frsttxt">{e.text}</div>
                        <div className="scoopdate">{e.date}</div>
                     </div>
                   )
                   }
                  
                   
               </div>
               </div>
               <button className="viewmore">View more from Virgin</button>
                   <div className="virgin_eachus">
                      <div className="virgin_eachus_two"> <div className="reachus_image"></div>
                       <div className="reachus_scndline">Reach us on social</div>
                       <div className="reachus_trdline">Be part of the conversation on our latest ventures</div>
                       <div className="reachus_icons">
                           <FontAwesomeIcon className="scoopicons" icon={faFacebook}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faTwitter}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faInstagram}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faYoutube}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faLinkedinIn}></FontAwesomeIcon>
                           
                       </div>
                       </div>
                   </div>
                   <div className="last_pink_slip">
                     <div className="pink_card_wrap">
                       <div className="pink_slip_card">

                           <div className="pink_slip_imgsec secone" ></div>
                           <div className="pin_cover_txtx">
                           <div className="pink_slip_frstline">Looking to start your own business?</div>
                           <div className="pink_slip_scnd_line">In 2013, Virgin StartUp was launched to support the next generation of founders who are looking to do the same</div>
                           <div className="pink_slip_trd_line">Learn More<FontAwesomeIcon className="pink_one" icon={faAngleRight}></FontAwesomeIcon></div>
                      
                           </div>
                       </div>
                       <div className="pink_slip_card">

                           <div className="pink_slip_imgsec sectwo" ></div>
                           <div className="pin_cover_txtx">
                           <div className="pink_slip_frstline">Our foundation.</div>
                           <div className="pink_slip_scnd_line">Virgin Unite is the independent entrepreneurial foundation of the Virgin Group and the Branson family.</div>
                           <div className="pink_slip_trd_line">Support Virgin Unit<FontAwesomeIcon className="pink_one" icon={faAngleRight}></FontAwesomeIcon></div>
                       </div></div>
                       <div className="pink_slip_card">

                           <div className="pink_slip_imgsec secthree" ></div>
                           <div className="pin_cover_txtx">
                           <div className="pink_slip_frstline">Our timeline.</div>
                           <div className="pink_slip_scnd_line">Our story begins in 1967 when Richard launched Student magazine, aged 15.</div>
                           <div className="pink_slip_trd_line">Explore our timeline<FontAwesomeIcon className="pink_one" icon={faAngleRight}></FontAwesomeIcon></div>
                      </div> </div>
                       <div className="pink_slip_card">

                           <div className="pink_slip_imgsec secfour" ></div>
                           <div className="pin_cover_txtx">
                           <div className="pink_slip_frstline">Travel, Play, Stay Well.</div>
                           <div className="pink_slip_scnd_line">We're working with Pandefense to implement safety initiatives across Virgin companies.</div>
                           <div className="pink_slip_trd_line">Learn more<FontAwesomeIcon className="pink_one" icon={faAngleRight}></FontAwesomeIcon></div>
                     </div>  </div>
                     </div>
                   </div>
                   <div className="pinktriangle_cut"></div>
                   <div className="redcontent_triangle_line"></div>
                   <div className="menu_conclusion">
                       <div className="menu_conclusion_img"></div>
                       <div className="menu_conclusion_bars">
                           <div className="conclusion_bars_cols">
                               <div className="bars_cols_frst">
                                   <span className="cols_frst_list">Contact Virgin</span>
                                   <span className="cols_frst_list">Web Terms of Use</span>
                                   <span className="cols_frst_list">Web Privacy Policy</span>
                                   <span className="cols_frst_list">Web Cookie Policy</span>
                                   <span className="cols_frst_list">Report a Scam</span>
                               </div>
                               <div className="bars_cols_scnd">
                               <span className="cols_frst_list">Virgin Modren Slavery Statement</span>
                                   <span className="cols_frst_list">Virgin Tax Strategy Statement</span>
                                   <span className="cols_frst_list">Virgin Corporate Governance</span>
                                   <span className="cols_frst_list">Virgin Group FAQs</span>
                                   <span className="cols_frst_list">Newsletter</span>
                              
                               </div>
                           </div>
                           <div className="conclusion_bars_branwords">
                               <div className="branwords_word">"In order to grow,you must be able to let go."</div>
                                <div className="branwords_name">Richard Branson</div>
                           </div>
                       </div>
                       <div className="reachus_icons">
                           <FontAwesomeIcon className="scoopicons" icon={faFacebook}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faTwitter}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faInstagram}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faYoutube}></FontAwesomeIcon>
                           <FontAwesomeIcon className="scoopicons"icon={faLinkedinIn}></FontAwesomeIcon>
                           
                       </div>
                       <div className="menu_conclusion_rights">&#169; Virgin 2022.All rights reserved.</div>
                   </div>
        </Fragment>
    )
}
export default Menu;