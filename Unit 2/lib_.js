"use strict";

const select = selector => document.querySelector(selector);

class Person
{
    constructor(fname, lname)
    {
        this.firstName = fname;
        this.lastName = lname;
    }
    
    get fullName()
    {
        return this.firstName + " " + this.lastName;

    }

    logValues()
    {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.fullName);
    }

}