class UserInterface {
    constructor() {
        this.lockButton = { onClick: null };
        this.playButton = { onClick: null };
        this.nextButton = { onClick: null };
        this.prevButton = { onClick: null };
    }
}

class State {
    constructor(player) {
        this.player = player;
    }

    clickLock() {
        throw new Error('Not implemented');
    }

    clickPlay() {
        throw new Error('Not implemented');
    }

    clickNext() {
        throw new Error('Not implemented');
    }

    clickPrevious() {
        throw new Error('Not implemented');
    }
}

class LockedState extends State {
    clickLock() {
        if (this.player.playing)
            this.player.changeState(new PlayingState(this.player));
        else
            this.player.changeState(new ReadyState(this.player));
    }

    clickPlay() {}
    clickNext() {}
    clickPrevious() {}
}

class ReadyState extends State {
    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickPlay() {
        this.player.startPlayback();
        this.player.changeState(new PlayingState(this.player));
    }

    clickNext() {
        this.player.nextSong();
    }

    clickPrevious() {
        this.player.previousSong();
    }
}

class PlayingState extends State {
    clickLock() {
        this.player.changeState(new LockedState(this.player));
    }

    clickPlay() {
        this.player.stopPlayback();
        this.player.changeState(new ReadyState(this.player));
    }

    clickNext(event) {
        if (event.doubleclick)
            this.player.nextSong();
        else
            this.player.fastForward(5);
    }

    clickPrevious(event) {
        if (event.doubleclick)
            this.player.previous();
        else
            this.player.rewind(5);
    }
}

class AudioPlayer {
    constructor() {
        this.state = new ReadyState(this);
        this.UI = new UserInterface();
        this.UI.lockButton.onClick = this.clickLock.bind(this);
        this.UI.playButton.onClick = this.clickPlay.bind(this);
        this.UI.nextButton.onClick = this.clickNext.bind(this);
        this.UI.prevButton.onClick = this.clickPrevious.bind(this);
    }

    changeState(state) {
        this.state = state;
    }

    clickLock() {
        this.state.clickLock();
    }

    clickPlay() {
        this.state.clickPlay();
    }

    clickNext() {
        this.state.clickNext();
    }

    clickPrevious() {
        this.state.clickPrevious();
    }

    startPlayback() {
        console.log('Start playing');
    }

    stopPlayback() {
        console.log('Stop playing');
    }

    nextSong() {
        console.log('Next song');
    }

    previousSong() {
        console.log('Previous song');
    }

    fastForward(time) {
        console.log(`Fast forward ${time} seconds`);
    }

    rewind(time) {
        console.log(`Rewind ${time} seconds`);
    }
}
