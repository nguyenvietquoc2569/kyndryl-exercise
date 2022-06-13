import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

export const IntroCard: FC = () => {
  return <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Kyndryl exercise
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        you can find source code at : <a href='https://github.com/nguyenvietquoc2569/kyndryl-exercise'>github</a><br/>
        Please use : <em>yarn start</em> to start the project from local
      </Typography>
    </CardContent>
  </Card>
}