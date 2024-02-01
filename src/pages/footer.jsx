import Logo from "../assets/logoimages/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-row gap-1 justify-around py-16 h-[300px] pt-10 bg-base-200 text-base-content">
      <nav>
        <img src={Logo} className={"w-[100px] mx-5 my-2"} alt="logo image" />
        <p className="link link-hover w-[400px] text-sm mx-5">
          Making the world a better place through constructing elegant solutions
          on the internet, and empowering consumers with the voice of the people
          and the compass of consumer choice.
        </p>
        <div
          className={"text-base flex flex-row gap-5 my-5 mx-5 text-slate-600"}
        >
          <a href="" className={"text-2xl hover:text-blue-400"}>
            <FaFacebook />
          </a>
          <a href="" className={"text-2xl hover:text-blue-400"}>
            <FaInstagram />
          </a>
          <a href="" className={"text-2xl hover:text-blue-400"}>
            <FaTwitter />
          </a>
          <a href="" className={"text-2xl hover:text-blue-400"}>
            <FaGithub />
          </a>
          <a href="" className={"text-2xl hover:text-blue-400"}>
            <FaYoutube />
          </a>
        </div>
      </nav>
      <nav className={"text-sm my-10 flex flex-col gap-1 "}>
        <header className={"footer-title font-bold"}>Company</header>
        <a href="/aboutus" className="link hover:text-blue-600 link-hover">
          About us
        </a>
        <a href="/contact" className="link hover:text-blue-600 link-hover">
          Contact
        </a>
        <a href="/jobs" className="link hover:text-blue-600 link-hover">
          Jobs
        </a>
      </nav>
      <nav className={"text-sm my-10 flex flex-col gap-1 "}>
        <header className={"footer-title font-bold"}>Legal</header>
        <a href="/termsofuse" className="link hover:text-blue-600 link-hover">
          Terms of use
        </a>
        <a
          href="/privacypolicy"
          className="link hover:text-blue-600 link-hover"
        >
          Privacy policy
        </a>
        <a
          href="/cookiespolicy"
          className="link hover:text-blue-600 link-hover"
        >
          Cookie policy
        </a>
      </nav>
      <form className={"text-sm my-10 flex flex-col gap-3 "}>
        <header className={"footer-title font-bold"}>Newsletter</header>
        <fieldset className="form-control flex flex-col gap-2 w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
