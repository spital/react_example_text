# React example app
This example project (hideable text / autocomplete text box) was created
thanks to [React Beginners Tutorial](https://www.youtube.com/watch?v=NnpISZANByg).
Amended with docker use.

## Requirements
[Install Docker Engine](https://docs.docker.com/install/).
[Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Build
Please note this is example development build.

```bash
git clone https://github.com/spital/react_example_text
cd react_example_text
docker build -t react_example_text .
```

## Run

```bash
docker run -p3030:3000 -d react_example_text
```

## Use
Start web browser and go to (http://localhost:3030/).

The result shall be something like this :
![React example app screenshot](./learn_2019-08-25_17-04.png "React example app screenshot")

## Notes
00:00:00 : simple toggle button hideable text

00:11:58 : autocomplete search box (onChange, render, controlled input text, css)
**Warning !! Check the methods' names are OK ! You will not get error for having onChange={this.WRONGname} !!**

00:30:55 : selecting an item from a list
**Warning !! Check the variable names are OK ! You will not get error for having setState....WRONGvarNAME !!**

00:32:24 : css box shadow generator

00:41:15 : better data - all countries world github plain text, reuse the component for names & countries

**A nice editor with js lint / react support is a must-have.**
