// method -> obj
// function -> global(window,global)

const video = {
    title: 'a',
    tags: ['x', 'y', 'z'],
    play() {
        console.log(this);
    },
    showTags() {
        // here callback function
        this.tags.forEach(tag => {
            console.log(this.title, tag)
        })
    }
};

video.play()
/* {
title:"a",
play:f play {...}
} */


video.showTags()

/* 
ax
ay
az */




// if we create another method of the object

video.stop = function () {
    console.log(this);
}
video.stop()
/* {
title:"a",
play:f play {...},
stop: {...}
}*/

// second rule

function playVideo() {
    console.log(this); // this refer global object
}

playVideo() // window object

// this in constructor
// here this reffer to the new empty object

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('myTitle'); // {}
/*
Video {
title:"myTitle"
} 
 */