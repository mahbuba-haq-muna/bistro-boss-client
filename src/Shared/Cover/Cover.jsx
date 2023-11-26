import { Parallax } from 'react-parallax';

const Cover = ({img, title, content}) => {
    return (
        <div className=''>
            <Parallax
        blur={{ min: -20, max: 20 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero h-[600px] mb-20 bg-fixed">
             <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center lg:px-36 lg:py-16 bg-black bg-opacity-50 text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-semibold uppercase">{title}</h1>
                        <p className="mb-5">{content}</p>
                    </div>
                </div>
            </div>
    </Parallax>
             
        </div>
    );
};

export default Cover;