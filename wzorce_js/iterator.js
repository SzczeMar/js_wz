class Facebook{
    createFriendsIterator(profileId){
        return new FacebookIterator(this,profileId,"friends");
    }
    createCoworkersIterator(profileId){
        return new FacebookIterator(this,profileId,"coworkers");
}
}
class ProfileIterator {
    constructor(facebook,profileId,type){
        this.facebook = facebook;
        this.profileId = profileId;
        this.type = type;
        this.currentPosition = 0;
        this.cache = null;
    }

    lazyInit(){
        if(this.cache === null){
            this.cache = this.facebook.socialGraphRequest(this.profileId,this.type);
        }
}
    getNext(){
        if (this.hasMore()){
            return this.cache[this.currentPosition++];
        }
        return null;
    }
    hasMore(){
        this.lazyInit();
        return this.currentPosition < this.cache.length;
    }
}
class SocialSpammer {
    send(iterator,message){
        while(iterator.hasMore()){
            let profile = iterator.getNext();
            console.log("Sending message to: " + profile.getName());
        }
    }
}

class FacebookIterator extends ProfileIterator{
    constructor(facebook,profileId,type){
        super(facebook,profileId,type);
    }
}

class Profile{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
class Application{
    config(workingWithFacebook){
        if (workingWithFacebook){
            this.facebook = new Facebook();
        } else {
            this.facebook = new LinkedIn();
        }
        this.spammer = new SocialSpammer();
    }

sendSpamToFriends(profile){
    let iterator = this.facebook.createFriendsIterator(profile.getId());
    this.spammer.send(iterator,"Very important message");
}
sendSpamToCoworkers(profile){
    let iterator = this.facebook.createCoworkersIterator(profile.getId());
    this.spammer.send(iterator,"Very important message");
}
}

// Path: main.js