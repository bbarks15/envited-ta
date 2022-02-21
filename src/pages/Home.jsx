import { Link } from "react-router-dom";

/*
TODO
Add social media icons
fix image layout
minor resizing stuff at lg breakpoint
*/

export default function Home() {
  return (
    <div className="bg-envited-background bg-cover h-screen overflow-auto">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between px-4 py-[14px] max-w-full md:max-w-7xl mx-auto md:pt-10">
      <div className="flex items-center space-x-2">
        <img
          src="/public/envited_e_white background.png"
          alt="envited e logo"
          className="w-[30px] rounded-full md:w-8"
        />
        <h1 className="text-white font-bold text-xl md:text-3xl">envited</h1>
      </div>

      <div>
        <button
          className="rounded-full px-[19px] py-[2px] text-white text-sm md:text-lg md:px-8 font-bold"
          style={{
            background:
              "linear-gradient(107.04deg, #C346D5 52.6%, #501FC1 118.32%)",
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="">
      <h1 className="pt-28 font-extrabold text-[32px] text-white text-center lg:text-7xl md:pt-48">
        Facebook events without Facebook.
      </h1>
      <h3 className="pt-8 text-white text-center text-lg px-[40px] lg:text-3xl">
        Easily host and share events with your friends across any social media.
      </h3>
      <div className="flex justify-center pt-8 lg:pt-14">
        <button
          className="rounded-full px-[18px] py-[13px] text-white text-md font-bold lg:text-xl lg:px-8 lg:py-5"
          style={{
            background:
              "linear-gradient(107.04deg, #06D6A0 48.99%, #5794F7 118.32%)",
          }}
        >
          <Link to="/create"> 🎉 Create my next event </Link>
        </button>
      </div>

      <div className="flex items-center justify-center md:justify-center max-w-xl mx-auto bg-social-media-background bg-contain bg-no-repeat bg-center">
        <img
          src="/public/Product_Image_Left.png"
          alt=""
          className="w-[96px] md:w-[192px] lg:w-[288px]"
        />
        <img
          src="/public/Product_Image_Middle.png"
          alt=""
          className="w-[136px] md:w-[272px] lg:w-[408px]"
        />
        <img
          src="/public/Product_Image_Right.png"
          alt=""
          className="w-[96px] md:w-[192px] lg:w-[288px]"
        />
      </div>
    </div>
  );
}
