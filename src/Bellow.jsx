import Accordion from "./Accordion";

function Bellow({ data = [], filterKeyword = "", isOpen = false }) {
  return (
    <div className="border-2 border-zinc-600 rounded-lg">
      {data
        .filter((d) =>
          d.title.toLowerCase().includes(filterKeyword.toLowerCase())
        )
        .map((d) => (
          <Accordion
            key={crypto.randomUUID()}
            title={d.title}
            description={d.description}
            isOpen={isOpen}
          />
        ))}
    </div>
  );
}

export default Bellow;