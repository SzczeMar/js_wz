let Westeros;
(function(Westeros) {
    let Ruler = (function() {
        function Ruler() {
            this.house = new Westeros.House.Targaryen();
        }
        return Ruler;
    }
    )();
    Westeros.Ruler = Ruler;
})(Westeros || (Westeros = {}));


let KingJohn = (function(){
    function KingJohn(){    
    }
    KingJohn.prototype.makeDecision = function(){}
    KingJohn.prototype.marry = function(){}

    return KingJohn;
})();

let LordTywin = (function(){
    function LordTywin(){    
    }
    LordTywin.prototype.makeDecision = function(){}

    return LordTywin;
})();


let LannisterFactory = (function(){
    function LannisterFactory(){    
    }
    LannisterFactory.prototype.getKing = function(){
        return new KingJohn();
    }
    LannisterFactory.prototype.getHandOfTheKing = function(){
        return new LordTywin();
    }

    return LannisterFactory;
})();

let TargaryenFactory = (function(){
    function TargaryenFactory(){    
    }
    TargaryenFactory.prototype.getKing = function(){
        return new KingAerus();
    }
    TargaryenFactory.prototype.getHandOfTheKing = function(){
        return new LordConnnigton();
    }

    return TargaryenFactory;
})();



let CourtSession = (function(){
    function CourtSession(abstractFactory){    
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }
    CourtSession.prototype.complaintPresented = function(complaint){
        if(complaint.severity < this.COMPLAINT_THRESHOLD){
            this.abstractFactory.getHandOfTheKing().makeDecision();
        }else{
            this.abstractFactory.getKing().makeDecision();
        };
        return CourtSession;
    }})();

    let courtSession = new CourtSession(new LannisterFactory());
    courtSession.complaintPresented({severity: 8});
    courtSession.complaintPresented({severity: 12});

    let courtSession2 = new CourtSession(new TargaryenFactory());
    courtSession2.complaintPresented({severity: 8});
    courtSession2.complaintPresented({severity: 12});

    
