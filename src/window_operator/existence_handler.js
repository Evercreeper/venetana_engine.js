const Discord = require("discord.js");
const Default_Hex = "#2C2F33";

function createWindow(hex,title,Description,ftitle,ftext,footer,inline){
	let Temp = new Discord.MessageEmbed()
	.setColor(hex)
	.setTitle(title)
	.setDescription(Description)
	.addField(ftitle, ftext, inline)
	.setFooter(footer)
	.setTimestamp()
	return Temp
};


function createScreen(name,resolution,parent) { 
  if (!name) { name = Date() - 42 % Date()}
   return screen = { 
    "name": name,
    "enabled": false,
    "resolution": resolution,
    "creation": Date(),
    "parent": parent,
    "owner":"NONE",
    "main": [
        {
          "runner":false,
          "content":["DATA_NONE"],
          "designateOwner":false
        }
    ]
}}

class window {

constructor(name,on,parent,timeout) {
  if (!timeout) {timeout = null};
  if (!parent) {parent = "CONTENT_BOT_MAIN"};
  if (!on) {timeout = null};
  this.isTerminal = false;
  this.locked = false;
  this.name = name;
  this.enabled = on;
  this.parent = parent;
  this.created = Date();
  this.children = [];
  this.screens = [];
  this.exists = false;
  this.self = this;
  this.info = "A window object that can operate embed screens. A connection timeout can be made to stop waiting for a window object and it's children when inputs have stopped. ";
  this.timeout = timeout;
}

destroy() {  
for (property in this) {
  delete property;
}
}

init(){

}

create(object,ratio){
  if (object === "screen") return {new /*screen*/};

}

setTerminal(){
  this.isTerminal = true;
}

setNormal(){
  this.isTerminal = false;
}

lock() {
  this.locked = true;
}

unlock(){
  this.locked = false;
}

input(input){
if ((this.isTerminal || input) === (false || null || undefined)) {return "NOT_TERMINAL_OR_INPUT"};


}
}; 
