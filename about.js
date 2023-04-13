import React from "react";
import "./about.css"
import Image11 from "../img/Image11.png"
import Image12 from "../img/Image12.png"
import Image13 from "../img/Image13.png"
import Image14 from "../img/Image14.png"
import {NavLink} from "react-bootstrap";
const About = () => {
    return (
        <div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>

        <div>

            <div className="content">
                
            <div className="text">
                <p>A port is a maritime facility comprising one or more wharves or loading areas, where ships load and discharge cargo and passengers. Although usually situated on a sea coast or estuary, ports can also be found far inland, such as Hamburg, Manchester and Duluth; these access the sea via rivers or canals. Because of their roles as ports of entry for immigrants as well as soldiers in wartime, many port cities have experienced dramatic multi-ethnic and multicultural changes throughout their histories.</p>
            </div>
            <div>
                <img src={Image11}></img>
            </div>
            </div>
            <div class="content">
                
            <div className="text">
            <p>India has a coastline spanning 7516.6 kilometres, forming one of the biggest peninsulas in the world.<br/> According to the Ministry of Ports, Shipping and Waterways, around 95 per cent of India's trading by volume and 68 per cent by value is done through maritime transport.<br/> It is serviced by 13 major ports (12 Government-owned and one private) and 187 notified minor and intermediate ports.<br/> Port Blair which was notified as major port in 2010 was removed of its status recently.<br/> The total 200 major and non-major ports are present in the following States:<br/> Maharashtra (53);<br/> Gujarat (40);<br/> Kerala (20);<br/> Tamil Nadu (15);<br/> Karnataka (10) and<br/> others (63).<br/> Government of India plans to modernise these ports and associated infrastructure through the 2015 established Sagarmala project, and National Maritime Development Programme.</p>
          </div>
            <div>
                <img src={Image12}></img>
            </div>
            </div>
            <div class="content">
                
            <div className="text">
            <p>A container ship (also called boxship or spelled containership) is a cargo ship that carries all of its load in truck-size intermodal containers, in a technique called containerization. Container ships are a common means of commercial intermodal freight transport and now carry most seagoing non-bulk cargo.Container ship capacity is measured in twenty-foot equivalent units (TEU). Typical loads are a mix of 20-foot (1-TEU) and 40-foot (2-TEU) ISO-standard containers, with the latter predominant.Today, about 90% of non-bulk cargo worldwide is transported by container ships, and the largest modern container ships can carry up to 24,000 TEU (e.g., Ever Ace). Container ships now rival crude oil tankers and bulk carriers as the largest commercial seaborne vessels.</p>
          </div>
            <div>
                <img src={Image13}></img>
            </div>
            </div>
            
            <div class="content">
                
            <div className="text">
            <p>A ship is a large watercraft that travels the world's oceans and other sufficiently deep waterways, carrying cargo or passengers, or in support of specialized missions, such as defense, research and fishing. Ships are generally distinguished from boats, based on size, shape, load capacity and purpose. Ships have supported exploration, trade, warfare, migration, colonization, and science. After the 15th century, new crops that had come from and to the Americas via the European seafarers significantly contributed to world population growth.[1] Ship transport is responsible for the largest portion of world commerce.</p>
          </div>
            <div>
                <img src={Image14}></img>
            </div>
            </div>
        </div>
        <div>
            <footer>
                <h1> Stay connected </h1>
                <button className="blue"><NavLink className="log" to="/signup">Sign in</NavLink></button>
                <button className="green"><NavLink className="log" to="/Login">Log in</NavLink></button>
            </footer>
        </div>
        </div>
    )
}
export default About;