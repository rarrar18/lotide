# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rarrar18/lotide`

**Require it:**

`const _ = require('@rarrar18/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: Take in two arrays and return true or false based on a perfect match
* assertEqual: Assert function logs a pass/fail message to the console based on match
* assertObjectsEqual: Checks if two objects are equal, logs a pass/fail message to console
* countLetters: Take in a sentence (as a string) and then return a count of each of the letters in that sentence
* countOnly: Report back how many instances of each string were found in an array of strings
* eqArrays: Take in two arrays and return true or false based on a perfect match
* eqObjects: Take in two objects and return true or false based on a perfect match
* findKey: Take in object and callback, scans object for first key with cb as truthy
* findKeyByValue: Search for a key on an object where its value matches a given value
* head: Return the first item in a given array
* letterPositions: Prints out the resulting count of each letter's array of indices when a string is given
* map: Return a new array based on the results of the callback function
* middle: Return an array with only middle element(s) of the provided array
* tail: Returns all items in array except for the first element
* takeUntil: Returns a slice of the array containing elements taken from the beginning
* without: Return a subset of a given array, removing unwanted elements
