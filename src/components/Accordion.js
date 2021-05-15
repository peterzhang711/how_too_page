import React, { useContext } from "react";
import { ContentContext } from "../App";
import "../assets/sass/accordion.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Accordion() {
  const contentContext = useContext(ContentContext);
  const toggleDispatch = contentContext?.dispatch;
  const accordionData = contentContext.state.accordionData;


  return (
    <div className="Accordion" data-testid="Accordion-test">
      {accordionData ? 
        accordionData.map((item, index) => {
            return [
              <div
                key={index}
                className="Accordion--item"
                onClick={() => toggleDispatch({ type: "SHOW_HIDE_CONTENT",index })}
              >
                <h5>{item.title}</h5>
                {item.accordionContentToggle ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>,
              <p className={item.accordionContentToggle ? "show" : "hide"}>
                {item.description}
              </p>
            ];
          })
        : 
        null}
    </div>
  );
}

export default Accordion;
