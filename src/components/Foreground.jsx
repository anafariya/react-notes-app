import React from "react";
import Card from "./Card";

function Foreground() {
    const data= [
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download now", tagColor: "green"}
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download now", tagColor: "pink"}
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download now", tagColor: "green"}
        },
    ]
  return (
  <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-7">
    {data.map((item,index) => (
        <Card data={item}/>
    ) )}
  </div>
  )
}

export default Foreground;
