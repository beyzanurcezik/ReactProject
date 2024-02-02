import React from "react";

const Pagination = ({pageNumber, setPageNumber}) => {
  let next = () => {
    setPageNumber((x)=> x + 1);
  };

  let prev = () => {
    if(pageNumber === 1) return;
    setPageNumber((x)=> x - 1);
  };
  return (
    <div className="container d-flex justify-content-center gap-5">
      <button onClick={prev} className="btn btn-primary">
        Önceki
      </button>
      <button onClick={next} className="btn btn-primary">
       Sonraki
      </button>
    </div>
  );
};
export default Pagination;