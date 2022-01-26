const SliderDetail = ({blogs}) => {
    return ( 
       <>
        <div className="container">
             {blogs.data.map((blog) =>(
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
                          <h2>{blog.slider_title}</h2>
                          <p>
                            {blog.slider_desc}
                          </p>
                        </div>
                        <div className="col-lg-12">
                          <div className="border-first-button slider scroll-to-section">
                            <a className="facebook" href={blog.facebook}><i className="fa fa-facebook"></i></a>
                            <a className="instagram" href={blog.instagram}><i className="fa fa-instagram"></i></a>
                            <a className="github" href={blog.github}><i className="fa fa-github"></i></a>
                            <a className="linkedin" href={blog.linkedin}><i className="fa fa-linkedin"></i></a>
                            <a className="gmail" href={blog.gmail}><i className="fa fa-envelope"></i></a>
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
                      <img src={blog.slider_link} alt="Slider Profile" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       </>
     );
}
 
export default SliderDetail;