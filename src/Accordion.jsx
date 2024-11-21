import React, { useEffect, useState } from 'react';

function Accordion({
  title = 'Title',
  description = 'Description',
  isOpen = false,
  underline = true,
  showWordCount = false,
  onClick = () => {},
}) {
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    fetch('https://wakati.avinashms-3119.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => setReadTime(data.seconds));
  });

  return (
    <details
      className="w-80 bg-stone-100 m-1 p-2 rounded"
      open={isOpen}
      onClick={() => onClick(title)}
    >
      <summary className={`cursor-pointer font-bold text-stone-900`}>
        <span className={`${underline && 'hover:underline'}`}>{title}</span>
        <span className="font-normal text-zinc-600 text-sm ml-3">
          {showWordCount && `${readTime} seconds`}
        </span>
      </summary>
      <p className="text-stone-800">{description}</p>
    </details>
  );
}

export default Accordion;