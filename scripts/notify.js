const ws = new WebSocket("wss://h9fiht0is8.execute-api.us-west-2.amazonaws.com/test");

ws.onopen = () => {
    console.log("Connected");
}

ws.onclose = e => {
    console.log("Disconnect");
    console.log(e);
}

ws.onerror = e => {
    console.log("Error");
    console.log(e);
}

ws.onmessage = e => {
    const msg = JSON.parse(e.data);
    console.log(msg);
}

const sendMeesage = (obj) => {
    ws.send(JSON.stringify(obj));
}

