import React, { useContext } from "react";
// import PropTypes from 'prop-types'
import { ContentContext } from "../App";
import "../assets/sass/accordion.scss";
import { MdKeyboardArrowDown,  MdKeyboardArrowUp} from "react-icons/md"


function Accordion() {
  const contentContext = useContext(ContentContext);
  const toggleDispatch = contentContext?.dispatch;
  // const contentToggle = contentContext.state.accordionContentToggle;
  const accordionData = contentContext.state.accordionData;

  return (
    <div className="Accordion">
        {
          accordionData.map((item,index) => {
            // console.log(index)
            return [
            <div key={index} className="Accordion--item" onClick={ () => toggleDispatch({ type: 'SHOW_HIDE_CONTENT', index, }) }>
              <h5>{item.title}</h5>
              {item.accordionContentToggle ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown />}
            </div>,
            <p className={item.accordionContentToggle ? 'show' : 'hide'}>{item.description}</p>
              ]
            }
          )
        }
    </div>
  );
}

export default Accordion;
