import React from "react";

function Accordion({
  title = "Title",
  description = "Description",
  isOpen = false,
}) {
  return (
    <details className="w-80 bg-stone-100 m-1 p-2 rounded" open={isOpen}>
      <summary className="cursor-pointer font-bold text-stone-900 hover:underline">
        {title}
      </summary>
      <p className="text-stone-800">{description}</p>
    </details>
  );
}

export default Accordion;