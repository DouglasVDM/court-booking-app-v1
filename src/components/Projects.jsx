import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/property.jpg";
import cryptoImg from "../assets/crypto.jpg";
import twitchImg from "../assets/twitch.jpg";
import netflixImg from "../assets/netflix.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        voluptas beatae perferendis inventore vero veritatis sapiente esse
        doloremque itaque, porro dolorem. Libero mollitia vero laborum facilis
        dignissimos quisquam. Omnis, sint.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={cryptoImg} title="Crypto App" />
        <ProjectItem img={netflixImg} title="Netflix App" />
        <ProjectItem img={propertyImg} title="Property App" />
        <ProjectItem img={twitchImg} title="Twitch App" />
      </div>
    </div>
  );
};

export default Projects;
