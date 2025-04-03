import "./HairDresser_Profile.css"
import { useState,useEffect } from "react";
import { hairDresserDataBase ,customHairDresser_list} from "../../projectFiles"
import { MdEdit } from "react-icons/md";
import { CgSmartHomeCooker } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaWallet } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoMdTrendingUp } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { TbBrandCashapp, TbFlagSearch } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { SideBarContent } from "../../iconAdder";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdAppstore } from "react-icons/io";
import { SiBitcoincash } from "react-icons/si";
import { FaPersonRays } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";


function HairDresser_Profile(){



    return<>
    <section className="user-profile-1"> 
    <div className="profile-nav"> <HairDresserNav_1/> </div>
    <div className="profile-side-bar">
    <HairDresserSideBar/>
    </div>
    <div className="profile-main-area">
    <HaiDresserUserMainArea   />
    </div>
    </section>
   
    
    </>
}


function HairDresserNav_1(){



    return <>
    <section className="Nav_1">
        <div className="nav_1-logo">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP2OLZ_txhfbv0XKr1QudxakW4W3kTWCMQ2RWZEW-S_adeIW7&s" className="brand-lg-1"/>
            <div className="main-brand-name-1">Blackcess</div>
            </div>
        
        <div className="nav_1-details">
            <div className="nav_1-user-image">
                
            </div>
            <div className="nav_1-user-data">
            <div className="nav_1-name">Thomas</div>
            <div className="nav_1-email">teygdj@gmail.com</div>
            <div className="nav_1-phone">+9176503380</div>

            </div>
        </div>
    </section>
    </>
}


function HairDresserSideBar(){
    
    // let [mobileMenu,setMobileMenu]=useState(false);
    // let [lock,setLock]=useState(0);
    //defination of the two major states\
    var [largeSreen,setLargeSreen]=useState(false);
    var [mobileScreen,setMobileScreen]=useState(false);
    var [startState,setStartState]=useState(false);
    var [displayState,setDisplayState]=useState(false);

    let elements= ["My Plans","Wallet","Plus membership","My Ratings","Manage Adresses","Manage Payment Methods","Settings","About Blackcess"]
    let icons = [<IoDocumentTextOutline />,<FaWallet />,<MdOutlineCardMembership />, <FaRegStar />,<CiLocationOn />,<MdOutlinePayments />,<CiSettings />,<FcAbout />];
   
     //function to add an element to the sidebar 
     function  addSideBarContent(value,icon){
        elements.push(value);
        icons.push(icon);
    }
        //initialisation
    let listElements=[];
    for(let i=0;i<elements.length;i++){
        let temp = new SideBarContent(elements[i]);
        temp.addIcon(icons[i]);
        listElements.push(temp)
    }
    useEffect(()=>{
        let width= window.innerWidth;
            if(width<600){
                setMobileScreen(true)
                setLargeSreen(false)
            }
            else{
                setMobileScreen(false)
                setLargeSreen(true)
            }
        
    })

    //work with the largeScreen state
    useEffect(()=>{
         //get the close icon and the menuSide bar
         let closeIcon = document.querySelector(".side-bar-close")
         let menuButton= document.querySelector(".menu-none-button")
         let s_contents= document.querySelector(".side_bar-1-template")
        if(largeSreen){
           closeIcon.classList.add("hide");
           menuButton.classList.add("hide");

        }
        else{ 
        if(mobileScreen){
            s_contents.classList.add("hide")
            console.log("Im in thesmall screen")
            setStartState(true)
            if(startState){
                menuButton.classList.remove("hide");
                menuButton.classList.add("show");
                setDisplayState(false)

            }
            if(displayState){
                setStartState(false)
                menuButton.classList.add("hide")
                menuButton.classList.remove("show")
                // menuButton.style.display="none"
                s_contents.classList.remove("hide");
                s_contents.classList.add("show")
                closeIcon.classList.add("show");
                closeIcon.classList.remove("hide");
            }
        }
    }
    })

    useEffect(()=>{
        console.log("Large screen size",largeSreen)
        console.log("small screen size",mobileScreen)
       
    })
    let handleIconClose=(event)=>{
        //can only be done in the mobile view so is independant of the large screen state
        setStartState(true);
        setDisplayState(false)
    }
    let handleMenuBtn=(event)=>{
        //can also only target the mobile view
        setStartState(false);
        setDisplayState(true)
    }





//     let handleMenu=(event)=>{
//         setLock(lock+1)
//         setMobileMenu(true);
//     }
//     useEffect(()=>{
//         let width= window.innerWidth;
//         if(width>600){
//             setMobileMenu(false)
//         }
//     })
//     useEffect(()=>{
//         let width= window.innerWidth;
//         let menuBtn= document.querySelector(".menu-none-button")
//         let menuContent= document.querySelector(".side_bar-1-template")
//         let close= document.querySelector(".side-bar-close")
//         // let height=window.height;
//         console.log(typeof(width))
//         if(width<600){
//             menuBtn.classList.add("show")
//         if(lock){ 
//         if(mobileMenu){
//             menuBtn.classList.remove("show")
//             menuContent.style.display="block"
//             close.classList.remove("hide")
//         }
//         else{
//             menuBtn.classList.add("show")
//              menuContent.style.display="none"
//         }
//     }
// }
//     else{
//         menuBtn.remove("show")
//         menuContent.style.display="block"
//     }
//     })
//     let handleSidebarClose=(event)=>{
//         setMobileMenu(false);
//         setLock(1)
//     }

    return<>
    <section className="pliz-work">
    <div className="side_bar-1-template">
        <ul className="side_bar-1-ul">
            { listElements.map((element)=>( 
                <li key={Math.random()*10000}> <HairDresserSideBar_Helper value={{value:element.value,icon:element.icon}}/></li>
                
            ))}
            
        </ul>
        <div className="side-bar-close hide" onClick={handleIconClose}><IoCloseOutline /></div>
    </div>

    <div><button className="menu-none-button" onClick={handleMenuBtn}><MdOutlineMenu /></button></div>
    </section>
  
    
    </>
}


function HairDresserSideBar_Helper(props){


    return <>
    <div className="sidebar-helper-template">
        <div className="sideBar-helper-icon">{props.value.icon}</div>
        <div className="sideBar-helper-icon">{props.value.value}</div>
    </div>
    </>
}



function HaiDresserUserMainArea(){



    return<>
    <section className="user-main-area-template">
        <div className="user-main-area-row-1"><MainAreaRow1/> </div>
        <div className="user-main-area-row-2"><MainAreaRow2/> </div>
    </section>
    
    </>
}

function MainAreaRow1(){

    let details=["Popular Trends","Competitions","Cashback","Customisation"]
    let icons=[<IoMdTrendingUp />,<MdEmojiEvents />,<TbBrandCashapp />,<GiAutoRepair />]
      //initialisation
      let listElements=[];
      for(let i=0;i<details.length;i++){
          let temp = new SideBarContent(details[i]);
          temp.addIcon(icons[i]);
          listElements.push(temp)
      }
      console.log(listElements)

    return<>
    <div className="m-a-row-1">
        <div className="additional-child-1">
        {listElements.map((element)=>(
            <div key={Math.random()*676778}><MainAreaRow1Helper value={{value:element.value,icon:element.icon}}/></div>
        ))}
        </div>
        <div className="additional-child-1">
        ..

        </div>
       
    </div>
    </>
}


function MainAreaRow1Helper(props){

       

    return<>
    <div className="main-area-helper-1">
        <span>{props.value.icon}</span>
        <span>{props.value.value}</span>
    </div>
    </>
}

function MainAreaRow2(){


        let values=["Home","Bookings","Store","Clients","Friends"]
        let icons=[ <FaWallet/>,<TbBrandBooking />,<IoMdAppstore />,<FaPersonRays />,<GiThreeFriends />];
          //initialisation
      let listElements=[];
      for(let i=0;i<values.length;i++){
          let temp = new SideBarContent(values[i]);
          temp.addIcon(icons[i]);
          listElements.push(temp)
      }
      

    return <>
    <div className="shiot">
        {listElements.map((element)=>(
            <div key={Math.random()*5353}><MainAreaRow2_helper value={{value:element.value,icon:element.icon}}/></div>
        ))}
    </div>
    
    </>
}

function MainAreaRow2_helper(props){


    return<>
    <div className="r-2-helper-template">
        <span className="shiot-icon" >{props.value.icon}</span>
        <span>{props.value.value}</span>
    </div>
    
    </>
}
export default HairDresser_Profile