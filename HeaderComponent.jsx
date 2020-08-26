import React from "react";

function HeaderComponent(props) {
  const styling = {
    backgroundColor: /*"#da70d6"*/ "teal",
    padding: "1rem",
    fontWeight: "750",
  };
  return (
    <div style={styling}>
      <div>
        <img
          style={{ width: "350px", height: "310px" }}
          //rc="$ curl https://api.unsplash.com/photos"
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="problem?"
          //srcset=""
        />
        <h5>Meme Generator</h5>
        <form
          className="form-group"
          action=""
          onClick={props.handleChange}
          onSubmit={props.handleSubmit}
        >
          <label>
            Top Text
            <input
              type="text"
              name="topText"
              onChange={props.handleChange}
              placeholder="top Text"
              value={props.topText}
            />
          </label>

          <label>
            Buttom Text
            <input
              type="text"
              name="buttomText"
              onChange={props.handleChange}
              placeholder="buttom Text"
              value={props.buttomText}
            />
          </label>
          <button type="submit" className="btn btn-danger">
            Gen
          </button>
        </form>
      </div>
      <hr />
      <div
        className="container-padding"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="card" style={{ width: "61%", padding: "0" }}>
          <img className="card-img" src={props.randomImage} alt="" />
          <div className="card-img-overlay  p-6 text-warning">
            <h2 className="top-left">{props.topText}</h2>
            <br />
            <h2 className="bottom-right">{props.buttomText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderComponent;
