import React, { Fragment } from "react";

const Pagination = () => {
  return (
    <div className="pagination" >
      <button className="pagination_button pagination_active">التالي</button>

      <ul>
        <li><a href="" className="page_active">01</a></li>
          -
          <li><a href="" className="">02</a></li>
          -
          <li><a href="" className="">03</a></li>
          -
          <li><a href="" className="">100</a></li>
      </ul>

      <button className="pagination_button pagination_deactive">السابق</button>
    </div>
  );
};

export default Pagination;



