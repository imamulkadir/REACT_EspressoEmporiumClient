import errorBg from "../assets/404.gif";
import Header from "./Header";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "./Footer";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Header />
      <div className="flex justify-center py-12">
        <button
          onClick={() => navigate("/")}
          className="font-rancho flex items-center gap-4 text-2xl font-semibold text-slate-800 transition-all duration-300 hover:text-slate-950"
        >
          <FaArrowLeft className="text-xl" />
          Back to Home
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={errorBg} alt="error" className="w-1/2" />
        <h1 className="font-rancho text-4xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a]">
          Page Not Found
        </h1>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
