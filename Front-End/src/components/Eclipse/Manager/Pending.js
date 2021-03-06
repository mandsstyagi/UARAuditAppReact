import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import EclipseManagerNav from "../../Nav/Eclipse/Manager/EclipseManagerNav";
import DataTable from "../../DataTable/index";

function EclipseMangerPending() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "ChangeRequests")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="EclipseManagerPending">
      <div className="container-fluid request-data">
        <EclipseManagerNav heading="PENDING FOR REVIEW" />
        {load === "loaded" ? (
          <DataTable
            loaded={true}
            data={data}
            submitButton={"Submit Approval"}
          />
        ) : (
          <DataTable
            loaded={false}
            data={data}
            submitButton={"Submit Approval"}
          />
        )}
      </div>
    </div>
  );
}

export default EclipseMangerPending;
