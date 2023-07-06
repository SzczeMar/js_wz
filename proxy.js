class ThirdPartyYoutubeLib {
  listVideos() {}
  getVideoInfo(id) {}
  downloadVideo(id) {}
}

class CachedYoutubeClass extends ThirdPartyYoutubeLib {
    constructor(service){
        super();
        this.service = service;
        this.listCache = {};
        this.videoCache = {};
    }

    listVideos(){
        if(!this.listCache){
            this.listCache = this.service.listVideos();
        }
        return this.listCache;
    }

    getVideoInfo(id){
        if(!this.videoCache[id]){
            this.videoCache[id] = this.service.getVideoInfo(id);
        }
        return this.videoCache[id];
    }

    downloadVideo(id){
        if(!this.videoCache[id]){
            this.videoCache[id] = this.service.downloadVideo(id);
        }
        return this.videoCache[id];
    }

    downloadExists(id){
        if(!this.videoCache[id]){
            this.videoCache[id] = this.service.downloadExists(id);
        }
        return this.videoCache[id];
    }}

class YoutubeManager {
    constructor(service){
        this.service = service;
    }

    renderVideoPage(id){
        this.service.downloadVideo(id);
        this.service.getVideoInfo(id);
    }
}

const youtubeService = new CachedYoutubeClass(new ThirdPartyYoutubeLib());
const manager = new YoutubeManager(youtubeService);
manager.renderVideoPage('someId');


    