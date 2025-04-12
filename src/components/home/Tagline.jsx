import { TypeAnimation } from 'react-type-animation';

const TagLineComponent = () => {

    return (
        <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 tracking-tight">
            <TypeAnimation
                sequence={[
                    'Your Dream, Our Theme.',
                    2000,
                    'Your Vision, Our Creation.',
                    2000,
                    'Your Moment, Our Commitment.',
                    2000,
                    'Your Vision, Our Production.',
                    2000,
                    'Your Celebration, Our Creation.',
                    2000,
                    'Your Spark, Our Fire.',
                    2000,
                    'Your Love, Our Lights.',
                    2000,
                ]}
                speed={5}
                style={{ fontSize: '1.8 rem' }}
                repeat={Infinity}
                wrapper="h2"
            />
        </div>
    );
};

export default TagLineComponent;