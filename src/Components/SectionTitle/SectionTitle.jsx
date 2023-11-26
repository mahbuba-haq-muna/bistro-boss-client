

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 text-center my-8 mx-auto ">
            <p className="text-yellow-600 mb-2">{subHeading}</p>
            <h2 className="text-3xl border-y-2 py-4">{heading} </h2>
        </div>
    );
};

export default SectionTitle;