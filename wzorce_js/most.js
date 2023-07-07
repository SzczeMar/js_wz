class Device {
    isEnabled() {
        // logic for isEnabled
    }

    enable() {
        // logic for enable
    }

    disable() {
        // logic for disable
    }

    getVolume() {
        // logic for getVolume
    }

    setVolume(percent) {
        // logic for setVolume
    }

    getChannel() {
        // logic for getChannel
    }

    setChannel(channel) {
        // logic for setChannel
    }
}

class RemoteControl {
    constructor(device) {
        this.device = device;
    }

    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }

    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}

class AdvancedRemoteControl extends RemoteControl {
    mute() {
        this.device.setVolume(0);
    }
}

class Tv extends Device {
    // ...
}

class Radio extends Device {
    // ...
}

// Gdzieś w kodzie klienckim.
let tv = new Tv();
let remote = new RemoteControl(tv);
remote.togglePower();

let radio = new Radio();
remote = new AdvancedRemoteControl(radio);
remote.mute();
