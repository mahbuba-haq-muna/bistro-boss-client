import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Call from "./Call/Call";
import Category from "./Category/Category";
import Content from "./Content/Content";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Recommends from "./Recommends/Recommends";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <Content></Content>
           <PopularMenu></PopularMenu>
           <Call></Call>
           <Recommends></Recommends>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;