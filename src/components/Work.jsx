import WorkItem from "./WorkItem";
import sampleData from "../assets/sampleData.json";

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {sampleData.map(({ id, year, title, duration, details }) => (
        <WorkItem
          key={id}
          year={year}
          title={title}
          duration={duration}
          details={details}
        />
      ))}
    </div>
  );
};

export default Work;
