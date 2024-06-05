const socket = io();

socket.emit("hello world")

socket.on("hello dear", function () {
    console.log("hello dear well");
})