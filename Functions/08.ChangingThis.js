function playVideo() {
    console.log(this);
}

playVideo.call({
    name: 'shohan'
})
playVideo.apply({
    name: 'shohan'
})
playVideo.bind({
    name: 'shohan'
})();


playVideo() // window object


// changing this -> 3 approach
/* 
1. self = this
2. bind()
3. arrow function
*/