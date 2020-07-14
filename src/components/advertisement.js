import React from "react"
import { Paper, Grid, Box, Typography } from "@material-ui/core"

// IMAGES
import women from "../images/2.png"
import men from "../images/1.png"
import kids from "../images/4.png"

// STYLING
import styled from "../styling/main.module.css"

export function New_Arrival() {
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
            <img src={women} className="card-img-top"></img>
            <div className="card-body text-center">
              <h3 className="card-title">Women Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={men} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Men Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={kids} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Kids Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export function Eid_Collection() {
  return (
    <div>
      <h1 className={styled.h1}>
        <Box textAlign="center" m={1}>
          Eid Collections
        </Box>
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={women} className="card-img-top"></img>
            <div className="card-body text-center">
              <h3 className="card-title">Women Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={men} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Men Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={kids} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Kids Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export function Sports() {
  return (
    <div>
      <h1 className={styled.h1}>
        <Box textAlign="center" m={1}>
          Sports
        </Box>
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={women} className="card-img-top"></img>
            <div className="card-body text-center">
              <h3 className="card-title">Women Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={men} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Men Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={kids} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Kids Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export function Formal() {
  return (
    <div>
      <h1 className={styled.h1}>
        <Box textAlign="center" m={1}>
          Formal
        </Box>
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={women} className="card-img-top"></img>
            <div className="card-body text-center">
              <h3 className="card-title">Women Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={men} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Men Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={kids} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Kids Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export function Casuals() {
  return (
    <div>
      <h1 className={styled.h1}>
        <Box textAlign="center" m={1}>
          Causuals
        </Box>
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={women} className="card-img-top"></img>
            <div className="card-body text-center">
              <h3 className="card-title">Women Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={men} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Men Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styled.main_card}>
            <img src={kids} className="card-img-top" />
            <div className="card-body text-center">
              <h3 className="card-title">Kids Collection</h3>
              <a href="#" class="card-link">
                View Products
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
