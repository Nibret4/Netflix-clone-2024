import React from "react";
import "./rowList.css";
import Row from "../Row/Row";
import requests from "../../../utlis/Requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
    </>
  );
};

export default RowList;
