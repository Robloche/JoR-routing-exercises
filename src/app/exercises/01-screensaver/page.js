import Link from "next/link";
import React from "react";

const COLORS = ["lavender", "slateblue", "hotpink", "white"];

console.log("page 1");

function ScreenSaverExercise() {
  console.log("page 2");

  return <div>foo</div>;
  /*
  return (
    <main className="screen-saver-wrapper">
      <div>Choose your color:</div>
      <ul>
        {COLORS.map((color) => (
          <li>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
  */
}

export default ScreenSaverExercise;
