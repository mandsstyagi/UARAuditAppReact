import React, { useState, useEffect } from "react";
import { variables } from "../../../Routes/Variables";
import EclipseManagerNav from "../../Nav/Eclipse/Manager/EclipseManagerNav";
import DataTable from "../../../Shared/Datatable";

function EclipseMangerApproved() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "ChangeRequests")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="EclipseManagerApproved">
      <div className="container-fluid request-data">
        <EclipseManagerNav heading="APPROVED" />
        {load === "loaded" ? (
          <DataTable
            loaded={true}
            data={data}
            submitButton={"Submit Approval"}
            path="EclipseMangerApproved"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default EclipseMangerApproved;