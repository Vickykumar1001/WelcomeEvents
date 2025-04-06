import { TypeAnimation } from 'react-type-animation';

const TagLineComponent = () => {
    return (
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
            style={{ fontSize: '2em' }}
            repeat={Infinity}
        />
    );
};
export default TagLineComponent;