import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //  color: "black",
  //  backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "rgb(13 20 55)",
    backgroundColor: props.mode === "dark" ? "rgb(29 38 86)" : "white",
    border: "px solid",
    borderColor: "white",
  };

  {
    /* const [btnTxt, setBtnTxt] = useState("Enable dark mode");

  const toggleColor = () => {
    if (myStyle.color === "white") {
      setMyStyle({ color: "black", backgroundColor: "white" });
      setBtnTxt("Enable dark mode");
    } else {
      setMyStyle({ color: "white", backgroundColor: "black" });
      setBtnTxt("Enable light mode");
    }
  }; */
  }
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <b>Analyze your text</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and
              efficiently.Be it word count,character count or preview the text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <b>Free to use</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant
              character count & word count statistics for a given text.Textutils
              reports the number of words and characters.Thus it is suitable for
              writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <b>Browser Compatible</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count
              characters in facebook,blog,books,excel document,pdf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
