import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-1/2 mx-auto">
      <img
        src="https://images.pexels.com/photos/33689814/pexels-photo-33689814.jpeg"
        alt=""
      />

      <div className="w-full mx-auto">
            <Image
        src="https://images.pexels.com/photos/33689814/pexels-photo-33689814.jpeg"
        alt="next image"
        width={1920}
        height={1280}
        className="w-full h-auto"
      />
      </div>
    </div>
  );
};

export default Gallery;
