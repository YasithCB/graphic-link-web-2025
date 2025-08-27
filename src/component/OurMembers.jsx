import React, { memo } from "react";
import TeamSlider from "../component/TeamSlider";
import { TEAM_MEMBERS } from "../data/db";

export default function OurMembers() {
  return (
    <section className="our-members-section mt-3 pb-3 bg-dark-50 ">
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
