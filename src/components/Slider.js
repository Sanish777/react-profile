/* eslint-disable jsx-a11y/anchor-is-valid */
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

const Slider = () => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
  }, [isPending]);

  return (
    <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      {isPending && <Skeletonn />}
      {!isPending && <SkeletonData />}
    </div>
  );
};
export default Slider;
const Skeletonn = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div
                  className="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>
                        <Skeleton width={100} />
                      </h6>
                      <h2>
                        <Skeleton width={350} />
                      </h2>
                      <p>
                        <Skeleton count={5} />
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button skeleton scroll-to-section">
                        <a href="#"> 
                          <Skeleton
                            containerClassName="skeleton-anchor"
                            width={50}
                            height={50}
                            circle
                          />
                        </a>
                        <a href="#">
                          <Skeleton
                            containerClassName="skeleton-anchor"
                            width={50}
                            height={50}
                            circle
                          />
                        </a>
                        <a href="#">
                          <Skeleton
                            containerClassName="skeleton-anchor"
                            width={50}
                            height={50}
                            circle
                          />
                        </a>
                        <a href="#">
                          <Skeleton
                            containerClassName="skeleton-anchor"
                            width={50}
                            height={50}
                            circle
                          />
                        </a>
                        <a href="#">
                          <Skeleton
                            containerClassName="skeleton-anchor"
                            width={50}
                            height={50}
                            circle
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <Skeleton height={431} width={641} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

const SkeletonData = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div
                  className="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>Hello! I am</h6>
                      <h2>Sanish Shakya</h2>
                      <p>this desc this desc this desc this desc this desc this desc this desc this desc this desc this desc this desc this desc this desc </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button slider scroll-to-section">
                        <a className="facebook" href="www.facebook.com">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a className="instagram" href="www.instagram.com">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a className="github" href="www.github.com">
                          <i className="fa fa-github"></i>
                        </a>
                        <a className="linkedin" href="www.linkedin.com">
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="gmail" href="mailto:shakya.sanish8198@gmail.com">
                          <i className="fa fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="assets/images/slider-profile.png" alt="Slider Profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
