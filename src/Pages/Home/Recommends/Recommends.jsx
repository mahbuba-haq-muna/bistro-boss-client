import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from "../../../assets/home/recomand.jpg"


const Recommends = () => {
    return (
       <div><SectionTitle
       heading={"CHEF RECOMMENDS"}
       subHeading={"---Should Try---"}
       ></SectionTitle>


         <div className="grid lg:grid-cols-3 mb-20 gap-8">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure ><img src={img} alt="Shoes" className="w-full" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline uppercase text-yellow-600 border-0 border-b-2 mt-5">add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure ><img src={img} alt="Shoes" className="w-full" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline uppercase text-yellow-600 border-0 border-b-2 mt-5">add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure ><img src={img} alt="Shoes" className="w-full" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline uppercase text-yellow-600 border-0 border-b-2 mt-5">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Recommends;