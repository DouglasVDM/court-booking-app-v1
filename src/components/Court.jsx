import WorkItem from "./WorkItem";

const Court = ({courts}) => {
  return (
    <div id="court" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Courts</h1>
      {courts.map(({court_name, court_id}) => (
        <WorkItem
          key={court_id}
          name={court_name}
        />
      ))}
    </div>
  );
};

export default Court;
