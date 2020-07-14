import React from "react"
import Grid from "@material-ui/core/Grid"
import backImage from "../images/back_image.png"

import "../styling/header.css"

export default function Header() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} className="left-side">
          <div className="circle one"></div>
          <img
            src={backImage}
            width="90%"
            height="auto"
            alt="logo"
            loading="lazy"
            className="cover-image"
          />
        </Grid>
        <Grid item xs={6} className="right-side">
          <div className="circle two"></div>
          <h1 className="heading">Comfortable & Cool</h1>
        </Grid>
      </Grid>
    </div>
  )
}
