import { TypeAnimation } from 'react-type-animation';

const TagLineComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                'Your Dream, Our Theme.',
                1000,
                'Your Vision, Our Creation.',
                1000,
                'Your Moment, Our Commitment.',
                1000,
                'Your Vision, Our Production.',
                1000,
                'Your Celebration, Our Creation.',
                1000,
                'Your Spark, Our Fire.',
                1000,
                'Your Love, Our Lights.'
            ]}
            speed={20}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
        />
    );
};
export default TagLineComponent;