import axios from "axios"

axios.get("http://52.59.242.238:8080/signup?team=piplup&password=1234")
    .then((response) => {
        console.log("Signup response:", response.data);
    })
    .catch((error) => {
        console.error("Error during signup:", error);
    })
let a = false;
let array = [{}]
//do {
//map
if (a == false) {
    a=true
} else {
    setTimeout(2000)
}

let temp
axios.get("http://52.59.242.238:8080/map")
    .then((response) => {
        temp = response.data
        console.log("-----")
        array = [{}]
        for (let i = 0; i < 49; i++) {
            for (let j = 0; j < 49; j++) {
                if (temp[i][j].dug == false) {
                    array.push({ x: temp[i][j].x, y: temp[i][j].y})
                }
            }
        }
        console.log(array)
        })
    .catch((error) => {
        console.error("Error fetching map:", error);
        a = false;
    })
//dig
axios.get("http://52.59.242.238:8080/map")

//} while (a)