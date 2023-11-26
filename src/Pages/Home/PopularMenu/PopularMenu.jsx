
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    
    return (
        <div className="my-20">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular?.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline  border-0 border-b-2 mt-5">See Full Menu</button>
            </div>

        </div>
    );
};

export default PopularMenu;