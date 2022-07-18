# RPN-Calculator

RPN Calculator is a CLI implementation of a Reverse Polish Notation Calculator.
Reverse Polish Notation reads mathematical expressions from right to left such that paranthesis are not required.

4 2 + is equivelant to 4 + 2

3 2 + 4 * is equivelant to (3 + 2) * 4

4 5 2 3 * + - is equivelant to 4 - (5 + (2 * 3))

perfectly readable :)

---
## Why this and that

I decided to create the application in javascript because I felt it would the most entertaining. I primarily use Typescript and don't usually play around with vanilla javascript too much so I had fun with it.

I structured the application to contain two modules: calculator and a calcreader. The calc-reader would accept a calculator module. The calculator needed to be a seperate module simply because its more business logic versus the calc-reader's interface responsibilities.

I left some `//TODO` items in case I ever use this as an example for another project or task in regards to input type. The requirements stated to be 'prepared' for alternative inputs (file, tcp, etc). I didn't necessary prepare for them, more made notes on where I would place that logic if the need every arose. Besides that, I wasn't able to test `Ctrl+D` since I'm on a windows machine; here's hoping the close clause covers it.

If I were to do anything differently, I would have created my tests first. I keep dreaming of the day I'd be a test-driven developer but the situation rarely allows it during my day to day. (Not a lot of infastructures are prepared for that kind of dev-time).

If I were to spend additional time on this project I'd likely add more features, like calculator options (choosing from infix or prefix notations), a few more expressions (`% ^ ++ --`) and probably include a history feature and a clear feature in the reader so the app doesn't have to be restarted.

---

### Usage
`npm i` - to ensure all dependencies are installed

`npm test` - to run jest test cases

`npm start` - to begin the application

---
### Within Application

At the start of the application you will be prompted to begin input ( `>` )

Supported arithmatic includes `+ , - , * , /`

Quick commands while in app

* `q` will quit the application

* `s` will show the current math stack