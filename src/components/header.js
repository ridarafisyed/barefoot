import React from "react"
import Grid from "@material-ui/core/Grid"
import backImage from "../images/back_image2.png"

import "../styling/header.css"

export default function Header() {
  return (
    <div className=" jumbotron jumbotron-fluid header_container">
      <Grid container spacing={3}>
        <Grid item xs={6} className="left-side">
          <img src={backImage} className="cover-image" />
        </Grid>
        <Grid item xs={6} className="right-side">
          <h1 className="display1 text-center">Comfortable & Cool</h1>
        </Grid>
      </Grid>
    </div>
  )
}
