import useFetch from "../useFetch";
import SliderDetail from "./SliderDetail";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Slider = () => {

  const { error, isPending, data:blogs } = useFetch('https://portfolio-me-app.herokuapp.com/api/homeSettings');
    return ( 
        <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      { error && <div>{ error }</div> }
      { isPending && <Skeletonn/> }
      { blogs && <SliderDetail blogs={blogs} /> }
      {/* {blogs && <Skeletonn/>} */}
    </div>
     );
}
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
                    <h6><Skeleton width={100}/></h6>
                    <h2><Skeleton width={350}/></h2>
                    <p>
                     <Skeleton count={5}/>
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-first-button skeleton scroll-to-section">
                        <a>
                        <Skeleton containerClassName="skeleton-anchor" width={50} height={50} circle />
                        </a>
                        <a>
                        <Skeleton containerClassName="skeleton-anchor" width={50} height={50} circle />
                        </a>
                        <a>
                        <Skeleton containerClassName="skeleton-anchor" width={50} height={50} circle />
                        </a>
                        <a>
                        <Skeleton containerClassName="skeleton-anchor" width={50} height={50} circle />
                        </a>
                        <a>
                        <Skeleton containerClassName="skeleton-anchor" width={50} height={50} circle />
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
                <Skeleton height={431} width={641}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SkeletonTheme>
   );
}
