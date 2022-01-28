const AboutDetail = ({abouts}) => {
    return ( 
        <div class="container">
            {abouts.data.map((about) =>(
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div
                                    class="about-left-image wow fadeInLeft"
                                    data-wow-duration="1s"
                                    data-wow-delay="0.5s"
                                    >
                                    <img src={about.about_link} alt="About Profile" />
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
                                        <h4>{about.about_title}</h4>
                                        <div class="line-dec"></div>
                                    </div>
                                    <p>
                                       {about.about_desc}
                                    </p>
                                    <div class="row">
                                        <div class="col-lg-4 col-sm-4">
                                        <div
                                            class="skill-item first-skill-item wow fadeIn"
                                            data-wow-duration="1s"
                                            data-wow-delay="0s"
                                        >
                                            <div class="progress" data-percentage={about.skill1}>
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">
                                                <div>
                                                {about.skill1}%<br />
                                                <span>Backend</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-4">
                                        <div
                                            class="skill-item second-skill-item wow fadeIn"
                                            data-wow-duration="1s"
                                            data-wow-delay="0s"
                                        >
                                            <div class="progress" data-percentage={about.skill2}>
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">
                                                <div>
                                                {about.skill2}%<br />
                                                <span>Frontend</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-4">
                                        <div
                                            class="skill-item third-skill-item wow fadeIn"
                                            data-wow-duration="1s"
                                            data-wow-delay="0s"
                                        >
                                            <div class="progress" data-percentage={about.skill3}>
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">
                                                <div>
                                                {about.skill3}%<br />
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
            ))}
        </div>
     );
}
 
export default AboutDetail;