import { Card, CardContent } from "@mui/material";
import { FC } from "react";
import { EmployeeFilterForm } from "./employee-filter-form";

export const EmployeeFilterPanel: FC = () => {
  return <Card>
    <CardContent sx={{ display: 'flex' }}>
      <EmployeeFilterForm></EmployeeFilterForm>
    </CardContent>
  </Card>
}