import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import studies from '../images/study.jpg';
import projects from '../images/projects.jpg';
import blog from '../images/blog.jpg';
import '../App.css';



export default class HomeTiles extends Component {
  constructor(props) {
    super(props);
}




  render() {
    const mystyle = {

    };
    return (
      <div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <div class="col">
             <div class="card shadow-sm card-edges">
                <img class ="card-image overlay" src={studies} alt="Werk" width="100%" height="100%" onClick="{render}"/>
                <div class="card-body">
                  <h2 align = "left">Studies</h2>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">9 mins</small>
                   </div>
                </div>
             </div>
             <br/>
          </div>

          <div class="col">
             <div class="card shadow-sm card-edges">
                <img class ="card-image" src={projects} alt="Werk" width="100%" height="100%"/>
                <div class="card-body">
                <h2 align = "left">Projects</h2>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">9 mins</small>
                   </div>
                </div>
             </div>
             <br/>
          </div>

          <div class="col">
             <div class="card shadow-sm card-edges">
                <img class ="card-image" src={blog} alt="Werk" width="100%" height="100%"/>
                <div class="card-body">
                <h2 align = "left">Blog</h2>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">9 mins</small>
                   </div>
                </div>
             </div>
             <br/>
          </div>

        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <div class="col studies">

        </div>

        <div class="col projects">

        </div>

        <div class="col blog">

        </div>

        </div>
        </div>


    )
  }
}
