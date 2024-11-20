import React from "react";
fetch("https://wakati.avinashms-3119.workers.dev/")
  .then((res) => res.json())
  .then((data) => console.log(data));

function Accordion({
  title = "Title",
  description = "Description",
  isOpen = false,
  underline = true,
  showWordCount = true,
  onClick = () => {},
}) {

  return (
    <details className="w-80 bg-stone-100 m-1 p-2 rounded" open={isOpen} onClick={() => onClick(title)}>
      <summary className={`cursor-pointer font-bold text-stone-900 ${underline && "hover:underline"}`}>
        <span className="{`${underline && 'hover:underline'}`}">{title}</span> <span className="font-normal text-zinc-600 text-sm ml-3">{showWordCount && `(${description.split(" ").length} words)`}</span>
      </summary>
      <p className="text-stone-800">{description}</p>
    </details>
  );
}

export default Accordion;