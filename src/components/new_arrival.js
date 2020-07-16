import React from "react"
import { Grid, Box } from "@material-ui/core"
import { Link } from "gatsby"

// IMAGES
import women from "../images/2.png"
import men from "../images/1.png"
import kids from "../images/4.png"

// STYLING
import styled from "../styling/main.module.css"

export default function New_Arrival() {
  return (
    <div>
      <h1 className={styled.h1}>
        <Box textAlign="center" m={1}>
          New Arrival
        </Box>
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={women} alt="women shoes" className="card-img-top"></img>
            <div className="card-body text-center">
              <h3 className="card-title">Women Collection</h3>
              <Link to="/products" className="card-link">
                View Products
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={men} alt="men shoes" className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Men Collection</h3>
              <Link to="/products" className="card-link">
                View Products
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={kids} alt="kids shoes" className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Kids Collection</h3>
              <Link to="/products" className="card-link">
                View Products
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
