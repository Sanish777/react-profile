import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

const About = () => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
    
  }, [isPending]);
  return (
    <div id="about" className="about section">
      {isPending && <AboutSkeleton />}
      {!isPending && <AboutDataField />}
    </div>
  );
};

export default About;
const AboutSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-left-image wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  {/* <img src="assets/images/shilotte.png" alt="About Profile" /> */}
                  <Skeleton height={348} width={546} />
                </div>
              </div>
              <div
                className="col-lg-6 align-self-center wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="about-right-content">
                  <div className="section-heading">
                    {/* <h6>About</h6> */}
                    <h4>
                      <Skeleton width={170} />
                    </h4>
                    <div className="line-dec"></div>
                  </div>
                  <p>
                    <Skeleton width={500} count={5} />
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item first-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <Skeleton width={155} height={155} circle />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item second-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <Skeleton width={155} height={155} circle />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item third-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <Skeleton width={155} height={155} circle />
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
};

const AboutDataField = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-left-image wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/images/shilotte.png" alt="About Profile" />
                </div>
              </div>
              <div
                className="col-lg-6 align-self-center wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="about-right-content">
                  <div className="section-heading">
                    <h4>About Us</h4>
                    <div className="line-dec"></div>
                  </div>
                  <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item first-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage="60">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              60%
                              <br />
                              <span>Backend</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item second-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage="60">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              60%<br />
                              <span>Frontend</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item third-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage="50">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              50%<br />
                              <span>Server</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
