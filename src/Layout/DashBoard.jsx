import { FaBars, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-amber-500 p-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Bistro Boss</h2>
                    <p className="text-xl font-bold tracking-widest">Restaurant</p>
                </div>
                <ul className="menu text-lg">
                    {
                        isAdmin ? <>
                            <li><Link to="/dashboard/adminHome">
                                <FaHome></FaHome> Admin Home</Link>
                            </li>
                            <li><Link to="/dashboard/addItems">
                                <FaUtensils></FaUtensils> Add Items</Link>
                            </li>
                            <li><Link to="/dashboard/items">
                            <FaList></FaList> Manage Items</Link>
                            </li>
                            <li><Link to="/dashboard/bookings">
                                <FaBook></FaBook> Manage Bookings</Link>
                            </li>
                            <li><Link to="/dashboard/users">
                                <FaUsers></FaUsers> All User</Link>
                            </li>
                            <div className="divider"></div>
                        </>
                            :
                            <>
                                <li><Link to="/dashboard/userHome" className="active:bg-white">
                                    <FaHome></FaHome> User Home</Link>
                                </li>
                                <li><Link to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</Link>
                                </li>
                               
                                <li><Link to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar> Reservation</Link>
                                </li>
                                <li><Link to="/dashboard/bookings">
                                    <FaBook></FaBook> My Bookings</Link>
                                </li>
                                <div className="divider"></div>
                            </>
                    }

                    {/* shared list*/}
                    <li><Link to="/">
                        <FaHome></FaHome>Home</Link>
                    </li>
                    <li><Link to="/order/salad">
                        <FaBars></FaBars>Menu</Link>
                    </li>
                    <li><Link to="/">
                        <FaShoppingBag></FaShoppingBag> Shop</Link>
                    </li>
                    <li><Link to="/">
                        <FaEnvelope></FaEnvelope> Contact</Link>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;