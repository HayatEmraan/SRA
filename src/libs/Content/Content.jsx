import React, { useState } from "react";

const Content = () => {
  const [changeState, setChangeState] = useState([]);
  const contentList = (e) => {
    e.preventDefault();
    const textData = e.target.contentData.value;
    setChangeState([...changeState, textData]);
    e.target.reset();
  };
  return (
    <div className="mt-5" style={{ minHeight: "500px" }}>
      <form onSubmit={contentList} className="mb-5">
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">
            Content TextArea
          </label>
          <textarea
            name="contentData"
            className="form-control font-link"
            id="textarea"
            rows="3"
          ></textarea>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
      {changeState &&
        changeState.map((item, index) => (
          <div key={index} className="border rounded px-3 pt-3 font-link mb-2">
            <p>
              {index + 1}. {item}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Content;
