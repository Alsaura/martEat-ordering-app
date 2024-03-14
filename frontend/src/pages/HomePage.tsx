import landingImage from "../assets/MockupApps.png";
import ImageDownload from "../assets/ImageDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg py-8 flex flex-col gap-5 text-center -mt-24 up">
        <h1 className="text-5xl font-bold tracking-tight text-[#222831]">
          Makanan Tradisional Indonesia
        </h1>
        <span className="text-xl">Anda Pesan Kami Antar!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} className="px-9" alt="" />
        <div className="flex flex-col items-center justify gap-4 text-center pt-12">
          <span className=" font-bold text-3xl tracking-tighter text-[#222831]">
            Order takeaway ever faster!
          </span>
          <span>
            Download Dapur Nusantara App for faster ordering and personalised
            recommendations
          </span>
          <img src={ImageDownload} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
