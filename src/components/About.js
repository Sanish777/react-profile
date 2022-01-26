import useFetch from "../useFetch";
import AboutDetail from "./AboutDetail";

const About = () => {

  const { error, isPending, data:abouts } = useFetch('http://portfolio-me-app.herokuapp.com/api/homeSettings');

    return ( 
        <div id="about" class="about section">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { abouts && <AboutDetail abouts={abouts} /> }
        </div>
     );
}
 
export default About;