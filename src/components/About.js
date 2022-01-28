import useFetch from "../useFetch";
import AboutDetail from "./AboutDetail";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const About = () => {

  const { error, isPending, data:abouts } = useFetch('https://portfolio-me-app.herokuapp.com/api/homeSettings');

    return ( 
        <div id="about" class="about section">
          { error && <div>{ error }</div> }
          { isPending && <AboutSkeleton/> }
          { abouts && <AboutDetail abouts={abouts} /> }
          {/* { abouts && <AboutSkeleton/>} */}
        </div>
     );
}
 
export default About;
const AboutSkeleton = () => {
  return ( 
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <div class="row">
                  <div class="col-lg-6">
                      <div
                      class="about-left-image wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                      >
                      {/* <img src="assets/images/shilotte.png" alt="About Profile" /> */}
                      <Skeleton height={348} width={546}/>
                      </div>
                  </div>
                  <div
                      class="col-lg-6 align-self-center wow fadeInRight"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                  >
                      <div class="about-right-content">
                      <div class="section-heading">
                          {/* <h6>About</h6> */}
                          <h4><Skeleton width={170}/></h4>
                          <div class="line-dec"></div>
                      </div>
                      <p>
                        <Skeleton width={500} count={5}/>
                      </p>
                      <div class="row">
                          <div class="col-lg-4 col-sm-4">
                            <div
                                class="skill-item first-skill-item wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0s"
                            >
                              <Skeleton  width={155} height={155} circle/>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-4">
                          <div
                              class="skill-item second-skill-item wow fadeIn"
                              data-wow-duration="1s"
                              data-wow-delay="0s"
                          >
                            <Skeleton  width={155} height={155} circle/>
                          </div>
                          </div>
                          <div class="col-lg-4 col-sm-4">
                          <div
                              class="skill-item third-skill-item wow fadeIn"
                              data-wow-duration="1s"
                              data-wow-delay="0s"
                          >
                            <Skeleton  width={155} height={155} circle/>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </SkeletonTheme>
   );
}