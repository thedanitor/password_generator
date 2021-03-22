# Password Generator

https://thedanitor.github.io/password_generator/

This project is from the Day 31 code along video from Udemy's 50 projects in 50 days series focused on web development. I have added some comments to the CSS and JavaScript to make notes to myself why certain choices are being made and what particular lines of code do.

### Overall Impression

I made a password generator as one of my first JavaScript projects about a year ago, so it was interesting to revisit that concept. I believe the functions to get random characters were largely the same, but the function to actually generate the password was done in a different way (I believe there were a lot of if/else if statements in my first one). I don't like how it doesn't randomize the order in which types of characters appear, so I think I will add that feature at some point.

### Things Learned

* ```String.fromCharCode()``` will return a character that corresponds to the UTF-16 number 
* Putting a + in front of a string of numbers parses it to a number
* checked property returns boolean from checkbox input type
* ```.select()``` method will select all the text in a textarea or input element
* ```document.execCommand("copy")``` can be used to copy selected text. Can also use with paste and cut (method is deprecated though)