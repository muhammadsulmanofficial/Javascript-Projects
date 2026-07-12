function show() {
    console.log(this.name);
}

const user = {
    name: "Salman"
};

show.call(user);


