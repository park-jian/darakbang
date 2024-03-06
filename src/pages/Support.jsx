import React, { useState } from "react";

export default function Support() {
  const [selectedButton, setSelectedButton] = useState("button1");
  const buttons = [
    { id: "button1", content: "문의내역" },
    { id: "button2", content: "취소/교환/반품" },
    { id: "button3", content: "주문/결제" },
    { id: "button4", content: "고객의 소리" },
  ];
  const handleButtonClick = (button) => {
    setSelectedButton(button.id);
    debugger;
    //let targetButton = document.getElementById(button.id);
    //targetButton.style.color = "white";
    //targetButton.style.backgroundColor = "rgb(23 37 84)";
  };
  return (
    <div>
      <ul className="w-full h-14 mx-0 my-9">
        {buttons.map((button) => (
          <li
            id={button.id}
            className="flex justify-center items-center cursor-pointer border-solid border border-slate-300 font-bold text-sm float-left px-0 py-5"
            key={button.id}
            onClick={() => handleButtonClick(button)}
            style={{
              backgroundColor:
                selectedButton === button.id ? "rgb(23 37 84)" : "white",
              color: selectedButton === button.id ? "white" : "black",
            }}
          >
            {button.content}
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
