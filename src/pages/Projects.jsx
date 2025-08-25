import React, { memo } from "react";

import "aos/dist/aos.css";
import ProjectSlider from "../component/ProjectSlider";

const Projects = () => {
  return (
    <section id="projects">
      <ProjectSlider />
    </section>
  );
};

export default memo(Projects);
