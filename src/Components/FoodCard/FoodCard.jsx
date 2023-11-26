import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = UseAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = () =>{
        if(user && user.email) {
            // send cart item to database
            
            const cartItem = {
                menuId : _id,
                name,
                image,
                price,
                email: user.email
                
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name}Successfully added to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to update the cart items count
                    refetch();
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send the user to the login page
                navigate('/login', {state:{from: location}})
                }
              });
        }
    }
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure ><img src={image} alt="Shoes" className="w-full" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 py-2 text-white bg-black ">${price}</p>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                    <button onClick={handleAddToCart}
                    className="btn btn-outline uppercase text-yellow-600 border-0 border-b-2 mt-5">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;