import React, { memo } from "react";

import ProjectSlider from "../component/ProjectSlider";
import PageHeader from "../component/PageHeader";

const Projects = () => {
  return (
    <section className="project-section">
      <PageHeader
        title="Our Projects"
        backgroundImage={"/images/projects/img3.png"}
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Projects" }]}
      />
      <div className="container">
        <ProjectSlider />
      </div>
    </section>
  );
};

export default memo(Projects);
