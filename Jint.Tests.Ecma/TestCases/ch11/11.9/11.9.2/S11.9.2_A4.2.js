// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If x is +0(-0) and y is -0(+0), return false
 *
 * @path ch11/11.9/11.9.2/S11.9.2_A4.2.js
 * @description Checking all combinations
 */

//CHECK#1
if ((+0 != -0) !== false) {
  $ERROR('#1: (+0 != -0) === false');
}

//CHECK#2
if ((-0 != +0) !== false) {
  $ERROR('#2: (-0 != +0) === false');
}

