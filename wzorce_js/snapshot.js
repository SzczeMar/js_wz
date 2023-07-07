class Editor{
    constructor(){
        this.text = '';
        this.curX = 0;
        this.curY = 0;
        this.selectionWidth = 0;
}

    setText(text){
        this.text = text;
    }
    setCursor(x,y){
        this.curX = x;
        this.curY = y;
    }
    setSelectionWidth(width){
        this.selectionWidth = width;
    }

    createSnapshot(){
        return new Snapshot(this,this.text,this.curX,this.curY,this.selectionWidth);
    }
}
class Snapshot{
    constructor(editor,text,curX,curY,selectionWidth){
        this.editor = editor;
        this.text = text;
        this.curX = curX;
        this.curY = curY;
        this.selectionWidth = selectionWidth;
    }
    restore(){
        this.editor.setText(this.text);
        this.editor.setCursor(this.curX,this.curY);
        this.editor.setSelectionWidth(this.selectionWidth);
    }
}

class Command{
    constructor(editor){
        this.editor = editor;
        this.backup = null;
    }
    makeBackup(){
        this.backup = this.editor.createSnapshot();
    }
    undo(){
       if (this.backup !== null){
           this.backup.restore();
       }
    }
}