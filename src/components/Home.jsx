import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='container home' id='home'>
        <main>
            <h1>Hi I'm TechyStar</h1>
            <p>solution for all your problem</p>
        </main>
    </div>

    <div className='container home2'>
       <img src={vg} alt="graphics" />
       <div>
        <p>
            we are your one and only solution to tech problems you face every day. we are leading tech company whose aim is to increase the problem solving ability in childern.
        </p>
       </div>
    </div>

    <div className='home3 ' id='about'>
      <div>
      <h1>who we are?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem vero quisquam enim dicta harum fuga voluptatibus nostrum assumenda vel, possimus quia nulla ullam error voluptates neque architecto temporibus asperiores? Dolorum aliquam numquam recusandae cum id molestias, facere ipsam nam harum laboriosam magni esse eveniet. Delectus nihil omnis reprehenderit quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad animi officiis recusandae soluta fugit explicabo, pariatur sint illum voluptatibus, ratione error fugiat optio ducimus sequi temporibus nam consectetur molestiae atque, unde qui! Qui repellendus obcaecati magni nemo, accusamus assumenda deserunt, in excepturi impedit corrupti dolor.
      </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h2>brands</h2>
        <article>
        <div style={{animationDelay:"0.7s",}}>
          <AiFillGoogleCircle/>
          <p>google</p>
        </div>

        <div style={{animationDelay:"0.5s",}}>
          <AiFillAmazonCircle/>
          <p>amazon</p>
        </div>

        <div style={{animationDelay:"0.3s",}}>
          <AiFillYoutube/>
          <p>youtube</p>
        </div>

        <div style={{animationDelay:"0.1s",}}>
          <AiFillInstagram/>
          <p>instagram</p>
        </div>

        </article>
      </div>
    </div>
    
    </>
  )
}

export default Home