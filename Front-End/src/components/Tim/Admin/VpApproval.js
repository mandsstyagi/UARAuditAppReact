import React, { useState, useEffect } from "react";
import { variables } from "../../../Variables";
import TimAdminNav from "../../Nav/Tim/Admin/TimAdminNav";
import DataTable from "../../DataTable/index";

function TimAdminVpApproval() {
  const [data, setData] = useState([]);
  const [load, setload] = useState("");

  useEffect(() => {
    fetch(variables.API_URL + "VMAuditKpi")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(setload("loaded"));
  }, []);

  return (
    <div className="TimManagerRequest">
      <div className="container-fluid request-data">
        <TimAdminNav heading="REQUEST FOR CHANGES" />
        {load === "loaded" ? (
          <DataTable
            className="tim-admin-table"
            data={data}
            submitButton={"Reset Records"}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default TimAdminVpApproval;
