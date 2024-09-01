import React from 'react'
import './home.css'
import Navbar from '../nav/Navbar'
import icon from '../../assets/images/icon.svg'
import star from '../../assets/images/star.svg'
import bullet from '../../assets/images/bullet.svg'
import bul from '../../assets/images/bullet-price.svg'
import play from '../../assets/images/play.svg'
import starr from '../../assets/images/review.svg'
import img from '../../assets/images/img.svg'
import dot from '../../assets/images/dot.svg'
import vid from '../../assets/images/vid.mp4'
import laundry from '../../assets/images/laundry.png'
import { Progress } from '@chakra-ui/react'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
        <Navbar />

        <div className="hero">
          <div className="hero-text">
            <h3>EASEMAN</h3>
            <h1>Laundry Services For All Your Needs</h1>
            <p>Elevate your style effortlessly. Book now for pristine laundry care by trusted professionals and experience unmatched convenience.</p>
          </div>
          <div className="hero-btn">
            <button className='book-btn'>Book Now</button>
            <button className='how-btn'>How it works</button>
          </div>
        </div>

        <div className="pro">
          <div className="pro-box">
            <img src={icon} alt="" />
            <h3>Flexible Scheduling</h3>
            <p>Effortlessly schedule a pickup. Our team collects, cleans, and delivers your items fresh and neatly packaged. Say goodbye to laundromats and care struggles!</p>
          </div>
          <div className="pro-box">
            <img src={icon} alt="" />
            <h3>Professional Staff</h3>
            <p>Our laundry services feature efficient workflows and experienced staff skilled in sorting, washing, drying, folding, and quality checking, ensuring timely delivery.</p>
          </div>
          <div className="pro-box">
            <img src={icon} alt="" />
            <h3>Competitive Pricing</h3>
            <p>At our laundry business, we offer competitive pricing, ensure no hidden fees, maintain quality, and reward loyal customers with discounts.</p>
          </div>
        </div>

        <div className="about">
          <div className="about-left">
            <h3><img src={star} alt="" />About Us</h3>
            <h1>Clean Cloth's with Our Professional Cleaning Services</h1>
            <p>Effortlessly schedule a pickup. Our team collects, cleans, and delivers your items fresh and neatly packaged. Say goodbye to laundromats and care struggles!</p>
          </div>
          <div className="about-right">
            <div className="stat">
              <div className="stat-top">
                <h3>Experienced</h3>
                <p>98%</p>
              </div>
              <Progress value={98} />
            </div>
            <div className="stat">
              <div className="stat-top">
                <h3>Reliable</h3>
                <p>86%</p>
              </div>
              <Progress value={86} />
            </div>
            <div className="stat">
              <div className="stat-top">
                <h3>Skilled & Capable</h3>
                <p>90%</p>
              </div>
              <Progress value={90} />
            </div>
            <div className="stat">
              <div className="stat-top">
                <h3>Flexible</h3>
                <p>80%</p>
              </div>
              <Progress value={80} />
            </div>            
          </div>
        </div>
        
        <div className='video'>
          <video muted loop autoPlay src={vid}></video>
          <img className='play' src={play} alt="" />
        </div>

        <div className="choose">
          <img className='laundry-img' src={laundry} alt="" />
          <div className="choose-left">
            <div className="left-text">
              <h3><img src={star} alt="" />Why Choose Us</h3>
              <h1>Providing Friendly, Reliable Laundry Services</h1>
              <p>Serving <span>4 000+</span> customers every month.</p>
            </div>
            <div className="bullet">
              <div className="bullet-p">
                <h2><img src={bullet} alt="" />High-Quality Cleaning Services</h2>
                <p>With a decade of experience, we deliver high-quality laundry services, serving over 4,000 customers monthly with exceptional results on all fabrics.</p>
              </div>
              <div className="bullet-p">
                <h2><img src={bullet} alt="" />Trained and Professional Staff</h2>
                <p>Our well-trained staff stays current with cleaning methods and best practices, ensuring your items are handled with utmost professionalism and care.</p>
              </div>
              <div className="bullet-p">
                <h2><img src={bullet} alt="" />Exceptional Customer Service</h2>
                <p>Our business is dedicated to exceptional customer service. Our friendly team assists with inquiries and special requests, ensuring a seamless experience.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="price">
          <div className="price-text">
            <h3><img src={star} alt="" />Pricing Table</h3>
            <h1>Pricing Plans for Every Budget</h1>
            <p>We understand each customer’s unique needs and budget, so we offer various pricing plans to cater to diverse requirements and budgets.</p>
          </div>
          <div className="pricing">
            <div className="price-box">
              <h3 className='p-top'><img src={star} alt="" />Basic Cleaning</h3>
              <div className="mon">
                <h2>$350</h2>
                <p>/service</p>
              </div>
              <p className='pri-p'>Our Basic Plan is ideal for individuals or small households, offering washing, drying, and folding at a flat rate.</p>
              <h2 className="line"></h2>
              <ul className='pribul'>
                <p><img src={bul} alt="" />Washing</p>
                <p><img src={bul} alt="" />2 Bedroom Cleaning</p>
                <p><img src={bul} alt="" />3 Bedroom Cleaning</p>
                <p><img src={bul} alt="" />1 Living Room Cleaning</p>
                <p><img src={bul} alt="" />7 Days Guarantee</p>
              </ul>
              <div className="get-btn">Get Started</div>
            </div>

            <div className="price-box box-two">
              <h3 className='p-top'><img src={star} alt="" />Basic Cleaning</h3>
              <div className="mon">
                <h2>$650</h2>
                <p>/service</p>
              </div>
              <p className='pri-p'>Our Basic Plan is ideal for individuals or small households, offering washing, drying, and folding at a flat rate.</p>
              <h2 className="line"></h2>
              <ul className='pribul'>
                <p><img src={bul} alt="" />Washing</p>
                <p><img src={bul} alt="" />2 Bedroom Cleaning</p>
                <p><img src={bul} alt="" />3 Bedroom Cleaning</p>
                <p><img src={bul} alt="" />1 Living Room Cleaning</p>
                <p><img src={bul} alt="" />7 Days Guarantee</p>
              </ul>
              <div className="get-btn get2">Get Started</div>
            </div>

            <div className="price-box">
              <h3 className='p-top'><img src={star} alt="" />Basic Cleaning</h3>
              <div className="mon">
                <h2>$950</h2>
                <p>/service</p>
              </div>
              <p className='pri-p'>Our Basic Plan is ideal for individuals or small households, offering washing, drying, and folding at a flat rate.</p>
              <h2 className="line"></h2>
              <ul className='pribul'>
                <p><img src={bul} alt="" />Washing</p>
                <p><img src={bul} alt="" />2 Bedroom Cleaning</p>
                <p><img src={bul} alt="" />3 Bedroom Cleaning</p>
                <p><img src={bul} alt="" />1 Living Room Cleaning</p>
                <p><img src={bul} alt="" />7 Days Guarantee</p>
              </ul>
              <div className="get-btn">Get Started</div>
            </div>
          </div>
        </div>

        <div className="review">
          <div className="price-text review-text">
            <h3><img src={star} alt="" />Testimonial</h3>
            <h1>Hear What Our Clients Say</h1>
            <p>Genuine feedback from our satisfied customers about their experience with our laundry services.</p>
          </div>

          <div className="reviews">
            <div>
              <div className="review-box">
                <div className="review-top">
                  <div className="stars">
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                  </div>
                  <p>I run a small hotel, and their commercial laundry services have been invaluable. They handle large volumes with ease, and our linens always look crisp and clean.</p>
                  </div>
              </div>
              <div className="review-down">
                <img src={img} alt="" />
                <div className="rename">
                  <h3>James Smith</h3>
                  <p>Office Manager</p>
                </div>
              </div>
            </div>

            <div>
              <div className="review-box">
                <div className="review-top">
                  <div className="stars">
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                  </div>
                  <p>As a busy professional, I don't have time to deal with laundry. Their pickup and delivery service is a lifesaver! The staff is incredibly friendly and accommodating.</p>
                  </div>
              </div>
              <div className="review-down">
                <img src={img} alt="" />
                <div className="rename">
                  <h3>James Smith</h3>
                  <p>Office Manager</p>
                </div>
              </div>
            </div>

            <div>
              <div className="review-box">
                <div className="review-top">
                  <div className="stars">
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                    <img src={starr} alt="" />
                  </div>
                  <p>I have a large family, so laundry is a never-ending battle. Their affordable pricing and efficient turnaround time have been a game-changer for us.</p>
                  </div>
              </div>
              <div className="review-down">
                <img src={img} alt="" />
                <div className="rename">
                  <h3>James Smith</h3>
                  <p>Office Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="revend">
            <h2>Trusted by 5k+ customers</h2>
            <div className="stars">
              <img src={starr} alt="" />
              <img src={starr} alt="" />
              <img src={starr} alt="" />
              <img src={starr} alt="" />
              <img src={starr} alt="" />
              <div className="rev-p">
                <p>4.4/5</p>
                <p><img src={dot} alt="" /></p>
                <p>3,841 Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Home