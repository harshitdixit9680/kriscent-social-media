import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
import Createpost from "./timeline/Post/Createpost";

const Homepageto = () => {
  return (
<div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Createpost/>
      </div>
    </div>
  )
}

export default Homepageto