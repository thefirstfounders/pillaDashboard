import React from "react";

export default function Progress({
  arrayList = [],
  arrayListI = [],
  pageName,
  col,
}) {
  const findIndex = arrayListI?.findIndex((item) => item === pageName) + 1;

  return (
    <div className="row g-0 mb-4">
      {arrayList?.map((item, i) => (
        <div className={col || "col-4"} key={i}>
          <div className="d-flex align-items-center w-100">
            {/* <GoPrimitiveDot color='#00AA96'/> */}
            <div
              className="d-inline-block"
              style={{
                height: "12px",
                width: "13px",
                borderRadius: "50%",
                backgroundColor: findIndex > i ? "#00AA96" : "#fff",
                border:
                  findIndex > i ? " 2px solid #00AA96" : " 2px solid #CCCCCC",
              }}
            ></div>
            <div
              className="w-100"
              style={{
                padding: "1px 0",
                backgroundColor: findIndex - 1 > i ? "#00AA96" : "#CCCCCC",
              }}
            ></div>
            {i === arrayList?.length - 1 && (
              <div
                className="d-inline-block"
                style={{
                  height: "12px",
                  width: "14px",
                  borderRadius: "50%",
                  backgroundColor: findIndex - 1 > i ? "#00AA96" : "#fff",
                  border:
                    findIndex > i ? " 2px solid #00AA96" : " 2px solid #CCCCCC",
                }}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
