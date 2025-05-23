import video from "../../assets/video.mp4"
function IntroVideo() {
    return (
        <video
            className="h-100vh w-full object-cover animate-clip-from-top-animation "
            autoPlay
            muted
            loop
        >
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default IntroVideo;
