import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skills = () => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 2000);
  }, [isPending]);

  return (
    <div id="services" class="services section">
      {isPending && <SkillsSkeleton />}
      {!isPending && <SkillsData />}
    </div>
  );
};

export default Skills;

const SkillsData = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="section-heading wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            {/* <h6>Skills</h6> */}
            <h4>
              Progamming Skills I have <em>Gained</em>
            </h4>
            <div class="line-dec"></div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="naccs">
            <div class="grid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="menu">
                    <div class="first-thumb active">
                      <div class="thumb">
                        <span class="icon">
                          <img src="assets/images/php.png" alt="" />
                        </span>
                        PHP
                      </div>
                    </div>
                    <div>
                      <div class="thumb">
                        <span class="icon">
                          <img src="assets/images/js.png" alt="" />
                        </span>
                        Javascript
                      </div>
                    </div>
                    <div>
                      <div class="thumb">
                        <span class="icon">
                          <img src="assets/images/ruby.png" alt="" />
                        </span>
                        Ruby
                      </div>
                    </div>
                    <div>
                      {/* <div class="thumb">
                        <span class="icon">
                          <img src="assets/images/angular.svg" alt="" />
                        </span>
                        Typescript
                      </div>
                    </div>
                    <div class="mt-4"> */}
                      <div class="thumb">
                        <span class="icon">
                          <img src="assets/images/docker_img.png" alt="" />
                        </span>
                        Docker
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <ul class="nacc">
                    <li class="active">
                      <div>
                        <div class="thumb">
                          <div class="row">
                            <div class="col-lg-6 align-self-center">
                              <div class="left-text">
                                <h4>PHP</h4>
                                {/* <p>
                                      List of Experience from PHP
                                    </p> */}
                                <div class="ticks-list">
                                  <span>
                                    <i class="fa fa-check"></i> Laravel
                                    Framework (MVC and Repository Pattern )
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i>Lumen Micro
                                    Framework
                                  </span><br/>
                                  <span>
                                    <i class="fa fa-check"></i> Core PHP
                                    Programming
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> PHP Programming
                                    with OOP (MVC)
                                  </span><br/>
                                  <span>
                                    <i class="fa fa-check"></i> Build Restful
                                    API
                                  </span><br/>
                                  <span>
                                    <i class="fa fa-check"></i>Frontend
                                    Intregation with Blade
                                  </span>
                                </div>
                                {/* <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis tempor
                                      incididunt.
                                    </p> */}
                              </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                              <div class="right-image">
                                <img src="assets/images/php.svg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div class="thumb">
                          <div class="row">
                            <div class="col-lg-6 align-self-center">
                              <div class="left-text">
                                <h4>Javascript</h4>
                                {/* <p>
                                      List of Experience from PHP
                                    </p> */}
                                <div class="ticks-list">
                                  <span>
                                    <i class="fa fa-check"></i> Understanding of ES6.
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fa fa-check"></i> Understanding of ChartJS.
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fa fa-check"></i> Basic understading of React JS (Learning).
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fa fa-check"></i> Experience with Angular JS
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fa fa-check"></i> JSON Data Manipulation.
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fa fa-check"></i> Sucessfully build and release application with ionic (with angular)
                                  </span>
                                </div>
                                {/* <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sedr do eiusmod deis tempor
                                      incididunt.
                                    </p> */}
                              </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                              <div class="right-image">
                                <img src="assets/images/js-detail.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div class="thumb">
                          <div class="row">
                            <div class="col-lg-6 align-self-center">
                              <div class="left-text">
                                <h4>Ruby</h4>
                                {/* <p>
                                      List of Experience from PHP
                                    </p> */}
                                <div class="ticks-list">
                                  <span>
                                    <i class="fa fa-check"></i> Ruby on Rails Framework
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Familiarity with concepts of MVC, Mocking, ORM, and RESTful
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Implementation of Unit Tests (Rspecs), Stub, Mock, Webmock
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Implementation of RuboCop for lint and code formatter.
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Familiar with various ruby gems and implementation
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Background processing and task Scheduling [Delayed Job, Sidekiq]
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                              <div class="right-image">
                                <img src="assets/images/ruby_back.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <div>
                        <div class="thumb">
                          <div class="row">
                            <div class="col-lg-6 align-self-center">
                              <div class="left-text">
                                <h4>Online Shopping &amp; Trsacking ID</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sedr do eiusmod deis tempor
                                  incididunt ut labore et dolore kengan darwin
                                  doerski token. dover lipsum lorem and the
                                  others.
                                </p>
                                <div class="ticks-list">
                                  <span>
                                    <i class="fa fa-check"></i> Optimized
                                    Template
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Data Info
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> SEO Analysis
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Data Info
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> SEO Analysis
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Optimized
                                    Template
                                  </span>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sedr do eiusmod deis tempor
                                  incididunt.
                                </p>
                              </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                              <div class="right-image">
                                <img
                                  src="assets/images/typescript_back.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    <li>
                      <div>
                      <div class="thumb">
                          <div class="row">
                            <div class="col-lg-6 align-self-center">
                              <div class="left-text">
                                <h4>Docker</h4>
                                <div class="ticks-list">
                                  <span>
                                    <i class="fa fa-check"></i> Dockerized the rails application.
                                  </span>
                                  <span>
                                    <i class="fa fa-check"></i> Understading of YAML Files.
                                  </span><br/>
                                  <span>
                                    <i class="fa fa-check"></i> Experienced the Docker Hub.
                                  </span><br/>
                                  <span>
                                    <i class="fa fa-check"></i> Familiar with docker images and containers
                                  </span><br/>
                                  <span>
                                    <i class="fa fa-check"></i> Understading with Docker CLI.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                              <div class="right-image">
                                <img src="assets/images/docker_wall.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SkillsSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              {/* <h6>Skills</h6> */}
              <h4>
                <Skeleton width={330} />
              </h4>
              <div class="line-dec"></div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="naccs">
              <div class="grid">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="menu">
                      <div class="first-thumb active">
                        <div class="thumb">
                          <Skeleton width={60} height={60} />
                        </div>
                      </div>
                      <div>
                        <div class="thumb">
                          <Skeleton width={60} height={60} />
                        </div>
                      </div>
                      <div>
                        <div class="thumb">
                          <Skeleton width={60} height={60} />
                        </div>
                      </div>
                      <div>
                        <div class="thumb">
                          <Skeleton width={60} height={60} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <ul class="nacc">
                      <li class="active">
                        <div>
                          <div class="thumb">
                            <div class="row">
                              <div class="col-lg-6 align-self-center">
                                <div class="left-text">
                                  <h4>
                                    <Skeleton width={250} />
                                  </h4>
                                  <div class="ticks-list">
                                    <span>
                                      <Skeleton width={350} count={5} />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6 align-self-center">
                                <div class="right-image">
                                  <Skeleton width={450} height={250} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
