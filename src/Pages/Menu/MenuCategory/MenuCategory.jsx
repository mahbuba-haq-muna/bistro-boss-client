import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";


const MenuCategory = ({items, title, img}) => {
    return (
       <div className="pt-8">
        {title && <Cover img={img} title={title} content={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>}
         <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items?.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
               
            </div>
            <div className="mx-auto w-fit">
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-2 mt-5">Order Now</button></Link>
            </div>
       </div>
    );
};

export default MenuCategory;