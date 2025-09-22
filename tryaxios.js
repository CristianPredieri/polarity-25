import axios from "axios";

axios.get("http://localhost:3000/random")
    .then((response) => {
        console.log("Random:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /random:", error);
    });

axios.get("http://localhost:3000/name/Luca")
    .then((response) => {
        console.log("Name: Luca:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /name/Luca:", error);
    });

axios.get("http://localhost:3000/double/5")
    .then((response) => {
        console.log("Double: 5:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /double/5:", error);
    });

axios.get("http://localhost:3000/time")
    .then((response) => {
        console.log("Time:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /time:", error);
    });

axios.get("http://localhost:3000/reverse/hello")
    .then((response) => {
        console.log("Reverse: hello:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /reverse/hello:", error);
    });

axios.get("http://localhost:3000/sum/3/7")
    .then((response) => {
        console.log("Sum: 3 + 7:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /sum/3/7:", error);
    });

axios.get("http://localhost:3000/vowels/ciaooooo/o")
    .then((response) => {
        console.log("ciaooooo:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /ciao modndo/o:", error);
    });

axios.get("http://localhost:3000/welcome")
    .then((response) => {
        console.log("Welcome:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /welcome:", error);
    });


axios.get("http://localhost:3000/greeting/Luca")
    .then((response) => {
        console.log("Greeting: Luca:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /greeting/Luca:", error);
    });

axios.get("http://localhost:3000/color/blue")
    .then((response) => {
        console.log("Color: blue:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /color/blue:", error);
    });

axios.get("http://localhost:3000/table/5")
    .then((response) => {
        console.log("Table: 5:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /table/5:", error);
    });

axios.get("http://localhost:3000/search/nel")
    .then((response) => {
        console.log("Search: nel:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching /search/ciao:", error);
    });

axios.post("http://localhost:3000/echo", { message: "Ciao", echo: "ricevuto", error: "Errore: messaggio vuoto" })

    .then((response) => {
        console.log("Echo:", response.data);
    })
    .catch((error) => {
        console.error("Error posting to /echo:", error);
    }
    )
axios.post("http://localhost:3000/repeat", { text: "ciao", times: 3, error: "Errore: messaggio vuoto o times non positivo" })
    .then((response) => {
        console.log("Repeat:", response.data);
    })
    .catch((error) => {
        console.error("Error posting to /repeat:", error);
    })

axios.post("http://localhost:3000/length", { text: "ciao!", error: "Errore: messaggio vuoto" })
    .then((response) => {
        console.log("Length:", response.data);
    })
    .catch((error) => {
        console.error("Error posting to /length:", error);
    })

axios.post("http://localhost:3000/upper", { text: "ciao", error: "Stringa vuota" })
    .then((response) => {
        console.log("ciao: ", response.data);
    })
    .catch((error) => {
        console.error("Error posting to /upper", error);
    })