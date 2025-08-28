import React from "react";
import "../assets/css/PageHeader.css"; // custom styles

export default function PageHeader({ title, backgroundImage, breadcrumb }) {
  const [firstWord, ...rest] = title.split(" ");

  return (
    <div
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>
                <span className="yellow-text">{firstWord}</span> {rest.join(" ")}
              </h1>
              <div className="path">
                {breadcrumb.map((item, index) => (
                  <span key={index} className={index === 0 ? "breadcrumb-first" : ""}>
                    {item.link ? (
                      <a href={item.link}>{item.label}</a>
                    ) : (
                      <span className="current">{item.label}</span>
                    )}
                    {index < breadcrumb.length - 1 && <em> / </em>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
