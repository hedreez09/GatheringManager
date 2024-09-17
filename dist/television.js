"use strict";
class Television {
    constructor(numberOfChannels) {
        this._on = false;
        this._channel = 1;
        this._number_of_channels = numberOfChannels;
    }
    set channel(channel) {
        if (channel < 1 || channel > this._number_of_channels) {
            throw new RangeError("This  channel is outside the range of valid channel");
        }
        this._channel = channel;
    }
    get channel() {
        return this._channel;
    }
    press_powerButton() {
        this._on = !this._on;
    }
}
class DVDPlayer {
    constructor() {
        this._dvds = [];
    }
    add_dvd(title) {
        this._dvds.push(title);
    }
    play_first_video() {
        if (this._dvds.length == 0) {
            throw new RangeError("Must be at least one DVD to play");
        }
        let title = this._dvds[0];
        this._dvds.shift();
        return title;
    }
}
//implementing facade design Pattern.
class MediaCenter {
    constructor() {
        this._tv = new Television(100);
        this._dvdPlayer = new DVDPlayer;
    }
    add_dvd(title) {
        this._dvdPlayer.add_dvd(title);
    }
    set chahnnel(channel) {
        this._tv.channel = channel;
    }
}
let mc = new MediaCenter();
mc.chahnnel = 25;
let dvdPlayer = new DVDPlayer();
dvdPlayer.add_dvd("star Wars");
console.log(dvdPlayer.play_first_video());
let mytv = new Television(42);
