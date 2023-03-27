// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: March 2023
// This file contains the JS functions for index.html

'use strict'
/**
* This function is for calculating the area of a triangle
*/
function calculateArea() {
// input
  const base = parseInt(document.getElementById('base').value)
  const height = parseInt(document.getElementById('height').value)

// process
  const area = (base * height) / 2

// output
  document.getElementById('area-of-triangle').innerHTML = "The area is: " + area + "cm²"
}