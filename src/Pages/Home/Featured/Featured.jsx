import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"


const Featured = () => {
    return (
        <div className="mb-20 featured-item text-white bg-fixed">
            <div className="bg-black bg-opacity-40 pt-10">
            <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug, 2030</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline text-white border-0 border-b-2 mt-5">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;