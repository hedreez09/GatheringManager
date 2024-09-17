class Television{
    private _on: boolean;
    private _channel: number;
    private readonly _number_of_channels: number;

    constructor(numberOfChannels: number){
        this._on = false;
        this._channel=1;
        this._number_of_channels = numberOfChannels;
    }

    public set channel (channel: number){
        if(channel < 1 || channel > this._number_of_channels){
            throw new RangeError("This  channel is outside the range of valid channel")
        }
        this._channel = channel;
    }

    public get channel(): number{
        return this._channel;
    }
    public press_powerButton(){
        this._on = !this._on
    }
    
}
class DVDPlayer{
        private _dvds: string[];
        constructor(){
            this._dvds = [];
        }

        public add_dvd(title: string){
            this._dvds.push(title)
        }

         public play_first_video(): string{
            if(this._dvds.length == 0){
                throw new RangeError("Must be at least one DVD to play")
            }
            let title: string =  this._dvds[0];
            this._dvds.shift();
            return title;
         } 
    }

    //implementing facade design Pattern.
    class MediaCenter{
        private _tv: Television;
        private _dvdPlayer: DVDPlayer;

        constructor(){
            this._tv = new Television(100);
            this._dvdPlayer = new DVDPlayer;
        }
        public add_dvd(title: string){
            this._dvdPlayer.add_dvd(title)
        }
        public set chahnnel(channel: number){
            this._tv.channel = channel;
        }
    }
    let mc: MediaCenter = new MediaCenter();
    mc.chahnnel = 25;
    
     let dvdPlayer: DVDPlayer = new DVDPlayer();
         dvdPlayer.add_dvd("star Wars");
         console.log(dvdPlayer.play_first_video())
    let mytv: Television = new Television(42);




  