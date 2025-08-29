import React, { useEffect, useState } from "react";
import { AOS_CONFIG } from "../data/constants";
import AOS from "aos";

export default function CareerForm() {
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };
  return (
    <div className="col-12 d-flex" {...AOS_CONFIG.zoom}>
      <div className="contact-wrap w-100 p-md-5 p-4">
        <form onSubmit={() => {}} id="contactForm" name="contactForm" className="contactForm">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="label" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <label className="label" htmlFor="subject">
                  Experience
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-5">
              <div className="form-group">
                <label className="label" htmlFor="message">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder=""
                ></textarea>
              </div>
            </div>

            {/*  buttons */}
            <div className="col-md-12">
              {fileName && <p className="yellow-text mt-3">{fileName}</p>}

              <div className="d-flex align-items-center gap-3">
                <div className="cv-upload d-flex align-items-center gap-2">
                  <label htmlFor="cvUpload" className="custom-btn mb-0">
                    Attach CV
                  </label>
                  <input
                    type="file"
                    id="cvUpload"
                    name="cvUpload"
                    accept=".pdf,.doc,.docx"
                    hidden
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-group mb-0">
                  <input type="submit" value="Send Message" className="btn custom-btn" />
                  <div className="submitting"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
