import {useState} from 'react'

import arrowUp from "../assets/arrow-up.svg"
import arrowDown from "../assets/arrow-down.svg"

const Accordion = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="race-row shadow" onClick={() => setOpen(!open)}>
        <div
          style={{
            width: `100%`,
            display: `flex`,
            justifyContent: `space-between`,
            minHeight: `70px`,
          }}
        >
          <div className="race-title">{title}</div>
          {open ? (
            <div className="race-close" onClick={() => setOpen(false)}>
              <img src={arrowDown} />
            </div>
          ) : (
            <div className="race-open" onClick={() => setOpen(true)}>
              <img src={arrowUp} />
            </div>
          )}
        </div>
        {open ? (
          <div className="race-content">
            <p>{about}</p>
            <p>{timing}</p>
            <p>{reservation}</p>
            <p>{price}</p>
          </div>
        ) : null}
      </div>
    )
}

export default Accordion