import useFetch from "../useFetch";
import SliderDetail from "./SliderDetail";


const Slider = () => {

  const { error, isPending, data:blogs } = useFetch('http://portfolio-me-app.herokuapp.com/api/homeSettings');
    return ( 
        <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <SliderDetail blogs={blogs} /> }
    </div>
     );
}
export default Slider;
