import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Records } from "../../interfaces/Records";

interface TableProps {
  records: Records[];
}

const RecordsTable: React.FC<TableProps> = ({ records }) => {
  const [rows, setRows] = useState<Records[]>([]);

  useEffect(() => {
    setRows(records);
  }, [records]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "dateRecord", headerName: "Fecha de registro", width: 150 },
    { field: "dateEntry", headerName: "Fecha de ingreso", width: 150 },
    { field: "status", headerName: "Estátus", width: 150 },
    { field: "typeOfService", headerName: "Tipo de servicio", width: 150 },

    { field: "nombre(s)", headerName: "Nombre(s)", width: 150 },
    { field: "apellidos", headerName: "Apellidos", width: 150 },
    { field: "Calle", headerName: "Calle", width: 150 },
    { field: "numero de calle", headerName: "Número", width: 150 },
    { field: "ciudad", headerName: "Ciudad", width: 150 },
    { field: "state", headerName: "Estado", width: 150 },
    { field: "municipality", headerName: "Municipio", width: 150 },
    { field: "cologne", headerName: "Colonia", width: 150 },
    { field: "código Postal", headerName: "Código Postal", width: 150 },
    { field: "número local", headerName: "Número local", width: 150 },
    { field: "email", headerName: "Email", width: 150 },

    { field: "brand", headerName: "Marca", width: 150 },
    { field: "model", headerName: "Modelo", width: 150 },
    { field: "serialNumber", headerName: "Número de serie", width: 150 },
    { field: "equipmentType", headerName: "Tipo de equipo", width: 150 },
    { field: "equipmentStatus", headerName: "Estado del equipo", width: 150 },
    { field: "notes", headerName: "Observaciones", width: 150 },
  ];

  return (
    <>
      <div>
        <h2>Registro de equipo</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationMode="server"
          rowCount={rows?.length || 0}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "lightblue",
            },
            "& .MuiDataGrid-cell:hover": {
              backgroundColor: "lightgray",
            },
          }}
        />
      </div>
    </>
  );
};

export default RecordsTable;
