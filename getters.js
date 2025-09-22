import express from "express"
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log("Ciao, benvenuto nella mia API!")
})

app.get("/time", (req, res) => {
    const now = new Date();
    const time = now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    console.log("time:", time);
    res.json({ time });
});


app.get("/random", (req, res) => {
    const random = Math.floor(Math.random() * 100) + 1;
    console.log("random:", random);
    res.json({ random });
});

async function getNameServer() {
    app.get("/name/:name", (req, res) => {
        const name = req.params.name;
        console.log("name:", name);

        res.send("ciao, " + name);
    });
}
getNameServer();

async function getNumberServer() {
    app.get("/double/:number", (req, res) => {
        const number = req.params.number;
        const double = number * 2;
        console.log("double:", double);
        res.json({ double });
    });
}
getNumberServer();

async function getReverseServer() {
    app.get("/reverse/:text", (req, res) => {
        const text = req.params.text;
        const reverse = text.split("").reverse().join("");
        console.log("reverse:", reverse);
        res.json({ reverse });
    });
}
getReverseServer();


async function sommaServer() {
    app.get("/sum/:num1/:num2", (req, res) => {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        const sum = num1 + num2;
        console.log("sum:", sum);
        res.json({ sum });
    });
}
sommaServer();

async function countServer() {
    app.get("/vowels/:text/:vocale", (req, res) => {
        const text = req.params.text;
        const vocale = req.params.vocale;
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] == vocale) {
                count++;
            }
        }
        console.log("count:", count);
        res.json({ count });
    });
}
countServer();


async function welcomeServer() {

    await app.get("/welcome", (req, res) => {
        let greet = "Benvenuto nella mia API";
        let para = "Esplora gli altri endpoint!";
        let resu = ("<html><body><h1> " + greet + " </h1><p>" + para + "</p></body></html>");
        console.log("welcome:", greet);
        res.send(resu);
    });

}
welcomeServer();

async function greetingServer() {

    await app.get("/greeting/:name", (req, res) => {

        let greet = "Ciao, " + req.params.name;
        let resu = ("<html><body><h1> " + greet + " </h1></body></html>");
        console.log("greeting:", greet);
        res.send(resu);
    });

}
greetingServer();

async function colorServer() {

    await app.get("/color/:color", (req, res) => {

        const color = req.params.color;

        let resu = ("<html><body style='background-color:" + color + "'>" + "</body></html>");

        console.log("color:", color);
        res.send(resu);

    });
}
colorServer();

async function tableServer() {

    await app.get("/table/:number", (req, res) => {
        const number = parseInt(req.params.number);
        let table = "<html><body><table><tr><th>Tabella del " + number + "</th></tr>";
        for (i = 1; i <= 10; i++) {
            table += "<tr><td>" + i + " * " + number + " = " + (number * i) + "</td></tr>";
        }
        table += "</table></body></html>";
        console.log("table:", table);
        res.send(table);
    });
}
tableServer();

async function searchServer() {

    await app.get("/search/:term", (req, res) => {
        const term = req.params.term;
        const ogge = ["benvenuto", "nel", "mondo", "di", "express"];
        let count = 0;
        for (i = 0; i < ogge.length; i++) {
            if (ogge[i] == term) {
                count++;
            }
        }

        let resu = "";
        console.log("Conteggio: " + count);
        if (count == 0) {
            resu = ("<html><body><p>La frase non contiene '" + term + "'</p></body></html>");
        }
        else {
            resu = ("<html><body><p>La frase contiene '" + term + "' " + count + " volte" + "</p></body></html>");
        }

        res.send(resu);

    });
}
searchServer();

app.use(express.json());

async function echoServer() {

    app.post("/echo", (req, res) => {

        if (req.body.message.length == 0) {
            res.send(req.body.error);
            return;
        }

        console.log(req.body);
        res.send(req.body.echo);
    })

}
echoServer();

async function repeatServer() {
    app.post("/repeat", (req, res) => {

        let text = req.body.text;
        let times = req.body.times;
        let result = "";

        if (times <= 0 || text.length == 0 || isNaN(times)) {
            res.send(req.body.error);
            return;
        }


        for (i = 0; i < times; i++) {
            result += text + " ";
        }
        console.log("repeat:", result);
        res.send(result);

    })
}
repeatServer();


async function lengthServer() {
    app.post("/length", (req, res) => {
        let lunghezza = req.body.text.length;

        if (lunghezza == 0) {
            res.send(req.body.error);
            return;
        }
        res.send("length:" + lunghezza);
        console.log("length:", lunghezza);
    })
}
lengthServer();

async function upperCaseServer() {
    app.post("/upper", (req, res) => {
        let upper = req.body.text.toUpperCase();

        if (upper.length == 0) {
            res.send(req.body.error);
            return;
        }
        res.send(upper);
        console.log("upper:", upper);
    })
}
upperCaseServer();