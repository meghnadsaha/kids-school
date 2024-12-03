import carouselOne from "./assets/photos/cute-schoolgirl-uniform-holding-notepads-classroom.jpg";
import carouselTwo from "./assets/photos/surprised-little-schoolboy-wearing-back-bag-headphones-holding-notebook-raising-pen-isolated-white.jpg";
import carouselThree from "./assets/photos/school-children-dressed-uniform-have-fun-play-schoolyard.jpg";
import carouselFour from "./assets/photos/portrait-group-friends-hanging-out-outdoors-while-going-preschool-together.jpg";


import user from "./assets/user.jpg"; 
import aboutOne from "./assets/about-1.jpg";
import aboutTwo from "./assets/about-2.jpg";
import aboutThree from "./assets/about-3.jpg";
import callTooAction from "./assets/call-to-action.jpg";

import FacilitiesSection from "./FacilitiesSection";
import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";

import SchoolClassesSection from "./SchoolClassesSection.js";
import Navbar from "./Navbar.js";
import AppointmentForm from "./AppointmentForm.js";
import PopularTeachers from "./PopularTeachers.js";
import NItemsPerSlideCarousel from "../component/carousel/NItemsPerSlideCarousel.js"
import FirstCarouselItem from "./carousel/FirstCarouselItem.js";
import SecondCarouselItem from "./carousel/SecondCarouselItem.js";

import Footer from "./Footer.js";
import testimonial1 from './assets/testimonial-1.jpg';
import testimonial2 from './assets/testimonial-2.jpg';
import testimonial3 from './assets/testimonial-3.jpg';
import testimonial4 from './assets/testimonial-3.jpg';
import { Carousel } from "react-bootstrap";


function LandingPage() {
  // Array of carousel items
  const testimonials = [
    {
      image: carouselOne,
      title: "A Safe and Nurturing Environment for Your Child",
      description: 
        "Our kindergarten provides a warm, welcoming atmosphere where every child can thrive. With a focus on creativity and exploration, we help children build a love for learning that lasts a lifetime.",
    },
    {
      image: carouselTwo,
      title: "Empowering the Next Generation of Learners",
      description: 
        "We are committed to shaping the future by offering a curriculum that fosters critical thinking, collaboration, and emotional growth. Let your child develop the skills they need to succeed in a rapidly changing world.",
    },
    {
      image: carouselThree,
      title: "Where Every Child’s Potential is Recognized",
      description: 
        "At our kindergarten, every child is seen as unique and capable. Our experienced educators tailor their teaching to each child's needs, helping them grow socially, emotionally, and academically.",
    },
    {
      image: carouselFour,
      title: "Building Strong Foundations for Lifelong Success",
      description: 
        "We provide a solid foundation for learning with engaging, hands-on activities that stimulate curiosity and growth. Your child will develop essential life skills while having fun in a safe, supportive environment.",
    }
  ];
  
  const defaultTestimonials = [
    {
      id: 1,
      quote: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet...',
      clientName: 'Client Name 1',
      profession: 'Profession 1',
      image: testimonial1,
    },
    {
      id: 2,
      quote: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet...',
      clientName: 'Client Name 2',
      profession: 'Profession 2',
      image: testimonial2,
    },
    {
      id: 3,
      quote: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet...',
      clientName: 'Client Name 3',
      profession: 'Profession 3',
      image: testimonial3,
    },
    {
      id: 4,
      quote: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet...',
      clientName: 'Client Name 4',
      profession: 'Profession 4',
      image: testimonial4,
    },
  ];


  return (
    <div className="container-xxl bg-white p-0">
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center custom-spinner-container"
      >
        <div
          className="spinner-border text-primary custom-spinner"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      {/* <!-- Spinner End --> */}

      <Navbar />
      <NItemsPerSlideCarousel itemsPerSlide={1} colContent={FirstCarouselItem} testimonials={testimonials}/>

      <FacilitiesSection />
      <AboutSection
        user={user}
        aboutOne={aboutOne}
        aboutTwo={aboutTwo}
        aboutThree={aboutThree}
      />
      <CallToActionSection callTooAction={callTooAction} />
      <SchoolClassesSection />

      <AppointmentForm />
      <PopularTeachers />

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "600px",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>

          {/* <TestimonialsCarousel /> */}
          <NItemsPerSlideCarousel itemsPerSlide={2} colContent={SecondCarouselItem} testimonials={defaultTestimonials}/>

        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      <Footer />

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default LandingPage;
