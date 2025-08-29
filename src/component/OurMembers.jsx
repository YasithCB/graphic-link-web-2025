import React, { memo, useEffect } from "react";
import TeamSlider from "../component/TeamSlider";
import AOS from "aos";
import { TEAM_MEMBERS } from "../data/db";
import { AOS_CONFIG } from "../data/constants";

export default function OurMembers() {
  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  return (
    <section className="our-members-section mt-3 pb-3 bg-dark-50 " {...AOS_CONFIG.fade}>
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="text pt-5 px-0">
            <div className="text-white">
              <div className="desc text-center">
                <span className="sub-title">Meet the Creative Minds Behind Our Work</span>

                <h2 className={"mb-3"}>
                  <span className="yellow-text">Team</span> Members
                </h2>

                <TeamSlider list={TEAM_MEMBERS} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
