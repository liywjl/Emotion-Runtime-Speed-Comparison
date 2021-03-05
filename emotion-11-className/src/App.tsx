import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";

import { data } from "./namesData";

const NameCard = ({
  id,
  first_name,
  last_name,
  email,
}: {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}) => (
  <div>
    <p
      className={css`
        color: blue;
      `}
    >
      {id}
    </p>
    <p
      className={css`
        color: green;
      `}
    >
      {first_name}
    </p>
    <p
      className={css`
        color: red;
      `}
    >
      {last_name}
    </p>
    <p
      className={css`
        purple: blue;
      `}
    >
      {email}
    </p>
  </div>
);

let endTime: null | number = null;
let startTime: null | number = null;

function App() {
  const [showList, setShowList] = useState(false);
  const [renderTime, setRenderTime] = useState<number | undefined>();

  useEffect(() => {
    if (!showList) {
      startTime = performance.now();
      setShowList(true);
    } else {
      endTime = performance.now();
    }

    if (startTime && endTime) {
      console.log(`startTime ${startTime}`);
      console.log(`endTime ${endTime}`);
      console.log(`Render time ${endTime - startTime}`);
      setRenderTime(endTime - startTime);
    }
  }, [showList, setShowList, setRenderTime]);

  return (
    <div>
      {renderTime && <h1>Render time {renderTime}</h1>}
      {showList && (
        <div
          className={css`
            background-color: lightgrey;
          `}
        >
          {data.map(({ id, first_name, last_name, email }) => (
            <NameCard
              key={id}
              id={id}
              first_name={first_name}
              last_name={last_name}
              email={email}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
