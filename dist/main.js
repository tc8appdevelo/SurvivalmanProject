!function(){var t,e={2763:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.ctx=i,this.pos=[Math.floor(555*Math.random()),Math.floor(555*Math.random())],this.image=new Image,this.image.src="../src/images/boar_left.png",this.width=this.image.width,this.height=this.image.height,this.setMovement(),this.moving=!0,setInterval(this.setMovement.bind(this),this.timeMoving)}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.drawImage(this.image,0,0,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height)}},{key:"middle",value:function(){return[this.pos[0]+this.width/2,this.pos[1]+this.height/2]}},{key:"move",value:function(t){this.timeMoving>0&&(this.pos[0]+=this.speed*t*this.unitVector[0],this.pos[1]+=this.speed*t*this.unitVector[1])}},{key:"setMovement",value:function(){var t=99*Math.random(),e=99*Math.random(),i=Math.sqrt(t*t+e*e),n=[t/i,e/i];this.timeMoving=1e3*(4*Math.random()+1);var r=Math.floor(6*Math.random()+1);return this.speed=r%2==0?-1*r:r,this.unitVector=n,this.timeMoving}}])&&e(i.prototype,n),t}();t.exports=i},6037:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.pos=i,this.isCooked=!1,this.calories=1e3,this.width=44,this.height=22,this.color="Coral"}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height)}},{key:"cook",value:function(){console.log("cook ran"),setTimeout(this.switchToCooked.bind(this),5e3)}},{key:"switchToCooked",value:function(){console.log("timeout ran"),this.color="brown",this.isCooked=!0}}])&&e(i.prototype,n),t}();t.exports=i},2944:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.pos=i,this.fireImage=new Image,this.fireImage.src="../src/images/Fire.png",this.width=this.fireImage.width,this.height=this.fireImage.height}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.drawImage(this.fireImage,0,0,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height)}},{key:"showMiddlePos",value:function(){var t=this.pos[0]+this.height/2,e=this.pos[1]+this.width/2;this.ctx.fillStyle="cyan",this.ctx.fillRect(t,e,10,10)}},{key:"middlePos",value:function(){return[this.pos[0]+this.width/2,this.pos[1]+this.height/2]}}])&&e(i.prototype,n),t}();t.exports=i},9602:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.pos=i,this.width=16,this.height=16,this.calories=100,Math.floor(Math.random()*["red","orange","purple","yellow","blue"].length),this.color="red"}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height)}},{key:"middlePosition",value:function(){return[this.pos[0]+this.width/2,this.pos[1]+this.height/2]}}])&&e(i.prototype,n),t}();t.exports=i},273:function(t,e,i){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i(1539),i(4747),i(561);var r=i(3451),o=i(2944),s=i(9657),a=i(4232),h=i(9602),c=i(1451),u=i(2763),l=i(6037),f=i(8548),p=(i(464),!1),d=!1,v=!1,g=[0,0],y=[0,0],m=function(){"use strict";function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=i,this.ctx=e}var e,i;return e=t,(i=[{key:"start",value:function(){this.restart()}},{key:"restart",value:function(){this.gameOver=!1,this.fires=[],this.boars=[],this.waters=[],this.foods=[],this.wood=[],this.spears=[],this.groundTiles=[],this.trees=[];var t=new o(this.ctx,[200,400]);this.fires.push(t),this.keydownListener=document.addEventListener("keydown",this.keyDownHandler.bind(this),!1),this.keyupListener=document.addEventListener("keyup",this.keyUpHandler.bind(this),!1),this.clickListener=document.addEventListener("click",this.mouseDownHandler.bind(this),!1),this.layGroundTiles(0,0),this.player=this.createPlayer(this,this.ctx),this.spear=this.createSpear([222,222],this.ctx);var e=new a({pos:[555,111],radius:55,ctx:this.ctx});this.lastUpdateTime=0,this.waters.push(e),this.spawnFoods(5);var i=new u(this,this.ctx);this.boars.push(i),this.spawnTrees(3),this.drawGame(),requestAnimationFrame(this.myUpdate.bind(this))}},{key:"drawGame",value:function(){this.ctx.clearRect(0,0,800,800);for(var t=0;t<this.groundTiles.length;t++)this.groundTiles[t].draw();for(var e=0;e<this.waters.length;e++)this.waters[e].createWater();for(var i=0;i<this.boars.length;i++)this.boars[i].draw();for(var n=0;n<this.fires.length;n++)this.fires[n].draw();for(var r=0;r<this.trees.length;r++)this.trees[r].draw();this.player.holding.length>0&&this.player.holding.forEach((function(t){t.draw()}));for(var o=0;o<this.foods.length;o++)this.foods[o].draw();this.spear.draw(),this.player.drawAnim()}},{key:"layGroundTiles",value:function(t,e){for(var i=0;i<6;i++){t=0;for(var n=0;n<6;n++){var r=new f({ctx:this.ctx,pos:[t,e]});this.groundTiles.push(r),t+=99}e+=99}}},{key:"spawnBoars",value:function(){var t=this;setInterval((function(){var e=new u(t,t.ctx);t.boars.push(e)}),1e4)}},{key:"createFood",value:function(t){return new h(this.ctx,t)}},{key:"spawnFoods",value:function(t){for(var e=0;e<t;e++){var i=[Math.floor(555*Math.random()),Math.floor(555*Math.random())],n=this.createFood(i);this.foods.push(n)}}},{key:"spawnTrees",value:function(t){for(var e=0;e<t;e++){var i=this.createTree();this.trees.push(i)}}},{key:"createTree",value:function(){var t=[Math.floor(555*Math.random()),Math.floor(555*Math.random())];return new s({ctx:this.ctx,pos:t})}},{key:"createSpear",value:function(t,e){return new c({pos:t,vel:[77,77],width:22,height:22,color:"#666699",player:this.player,ctx:e})}},{key:"createPlayer",value:function(t,e){return new r({game:t,ctx:e,pos:[44,44],vel:[44,44],width:32,height:32,color:"#404040"})}},{key:"myUpdate",value:function(t){var e=(t-this.lastUpdateTime)/100;this.lastUpdateTime=t;for(var i=0;i<this.boars.length;i++)this.boars[i].move(e);this.spear.isMoving&&!v&&this.spearClickMove(y,e),v&&(v=!1,this.spear.isMoving=!0,this.spear.isPlayerHolding=!1,this.spearClickMove(y,e)),this.player.isMoving&&!p&&this.mouseClickMove(g,e),p&&(p=!1,this.player.isMoving=!0,this.mouseClickMove(g,e)),this.player.collisionDetection(),this.collisionDetection(),this.drawGame();var n=requestAnimationFrame(this.myUpdate.bind(this));this.gameOver&&cancelAnimationFrame(n)}},{key:"collisionDetection",value:function(){this.player.middlePosition()[0],this.player.middlePosition()[1];for(var t=0;t<this.boars.length;t++){var e=this.boars[t].middle(),i=this.boars[t],n=this.spear;if(Math.sqrt(Math.pow(n.pos[0]-e[0],2)+Math.pow(n.pos[1]-e[1],2))<=i.width/2+n.width/2){var r=[e[0],e[1]];this.boars.splice(t,1);var o=new l(this.ctx,r);this.foods.push(o)}}for(var s=0;s<this.fires.length;s++){var a=this.fires[s].middlePos(),h=this.player.middlePosition();Math.sqrt(Math.pow(a[0]-h[0],2)+Math.pow(a[1]-h[1],2))<2*this.player.width&&(this.player.byFire=!0)}}},{key:"mouseClickMove",value:function(t,e){this.player.moveTo(t,e),this.drawGame()}},{key:"spearClickMove",value:function(t,e){this.spear.move(t,e),this.drawGame()}},{key:"mouseDownHandler",value:function(t){this.player.clickedOn=-1;var e=canvas.getBoundingClientRect(),i=t.pageX-e.left,n=t.pageY-e.top;console.log(i);var r=[i,n];i<0||(this.checkClickedOn(r),-1!=this.player.clickedOn&&(console.log(this.player.distanceFrom(this.player.clickedOn)),this.player.distanceFrom(this.player.clickedOn)),d?this.player.holding[0]===this.spear&&(this.player.holding.shift(),v=!0,y=[i,n]):(p=!0,g=[i,n]))}},{key:"checkClickedOn",value:function(t){for(var e=t[0],i=t[1],n=this.player.middlePosition(),r=0;r<this.fires.length;r++)if(this.player.holding[0]instanceof l){var o=this.fires[r];console.log(o),console.log("x "+e),console.log("y "+i),e>=o.pos[0]&&e<=o.pos[0]+o.width&&i>=o.pos[1]&&i<=o.pos[1]+o.height&&(this.player.dropItem(),this.foods[this.foods.length-1].cook())}for(var s=0;s<this.foods.length;s++){var a=this.foods[s];if(e>=a.pos[0]&&e<=a.pos[0]+a.width&&i>=a.pos[1]&&i<=a.pos[1]+a.height)return Math.sqrt(Math.pow(a.pos[0]-n[0],2)+Math.pow(a.pos[1]-n[1],2))<=2*this.player.width&&(this.player.pickUpItem(a),this.foods.splice(s,1)),a}e>=this.spear.pos[0]&&e<=this.spear.pos[0]+this.spear.width&&i>=this.spear.pos[1]&&i<=this.spear.pos[1]+this.spear.height&&Math.sqrt(Math.pow(this.spear.pos[0]-n[0],2)+Math.pow(this.spear.pos[1]-n[1],2))<=this.player.width&&this.player.pickUpItem(this.spear)}},{key:"keyDownHandler",value:function(t){82==t.keyCode&&(d=!0),68==t.keyCode&&this.player.dropItem()}},{key:"keyUpHandler",value:function(t){82==t.keyCode&&(d=!1)}}])&&n(e.prototype,i),t}();t.exports=m},8548:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.ctx,this.pos=e.pos,this.bgImage=new Image,this.bgImage.src="../src/images/bg_dark.png",this.width=this.bgImage.width,this.height=this.bgImage.height}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.drawImage(this.bgImage,0,0,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height)}}])&&e(i.prototype,n),t}();t.exports=i},464:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=e,this.width=i,this.height=n}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.fillStyle="Orange",this.ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height)}}])&&e(i.prototype,n),t}();t.exports=i},3451:function(t,e,i){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i(5438),i(273),i(1451),i(4232);var r=i(9602),o=i(6037),s=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),console.log(this),this.game=e.game,this.ctx=e.ctx,this.pos=[222,222],this.vel=e.vel,this.width=e.width,this.height=e.height,this.color="#484848",this.holdingPosition=[this.pos[0]-22,this.pos[1]+this.height/2],this.clickedOn=[],this.holding=[],this.isHolding=!1,console.log(this.holding),this.isMoving=!1,this.isDrinking=!1,this.isDay=!0,this.byFire=!1,this.inShade=!1,this.calories=2e3,this.hydration=100,this.bodyTemp=100,this.x=0,this.y=0,this.srcX=0,this.srcY=0,this.sheetWidth=128,this.sheetHeight=128,this.cols=4,this.rows=4,this.movingLeft=!0,this.characterImageLeft=new Image,this.characterImageLeft.src="../src/images/spritesheet_caveman_left.png",this.characterImageRight=new Image,this.characterImageRight.src="../src/images/spritesheet_caveman_right.png",this.currentFrame=0,this.setUpHtmlTexts(),setInterval(this.incrementHydration.bind(this),2e3),setInterval(this.incrementCalories.bind(this),2e3),setInterval(this.incrementBodyTemp.bind(this),2e3),addEventListener("keydown",this.keyDownListener.bind(this)),requestAnimationFrame(this.playerUpdate.bind(this))}var e,i;return e=t,(i=[{key:"updateFrame",value:function(){this.currentFrame=(this.currentFrame+1)%this.cols,this.srcX=this.currentFrame*this.width,96===this.srcX&&(this.srcY+=32),this.srcY>96&&(this.srcY=0)}},{key:"drawAnim",value:function(){var t=this.movingLeft?this.characterImageLeft:this.characterImageRight;this.isMoving&&this.updateFrame(),this.ctx.drawImage(t,this.srcX,this.srcY,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height)}},{key:"drawStationary",value:function(){this.ctx.drawImage(this.characterImageLeft,this.srcX,this.srcY,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height)}},{key:"drawAnimRight",value:function(){this.updateFrame(),this.ctx.drawImage(this.characterImageRight,this.srcX,this.srcY,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height)}},{key:"playerUpdate",value:function(){this.playerHolding(),requestAnimationFrame(this.playerUpdate.bind(this))}},{key:"playerHolding",value:function(){if(this.holding.length>0){var t=this.holding[0];Math.hypot(this.pos[0]-t.pos[0],this.pos[1]-t.pos[1])>2&&(t.pos=[this.pos[0]-t.width/2,this.pos[1]+this.height/2])}}},{key:"pickUpItem",value:function(t){this.holding.length>0&&this.dropItem(),this.holding.push(t)}},{key:"dropItem",value:function(){this.holding.length>0&&(this.holding[0]instanceof o||this.holding[0]instanceof r)&&(console.log("instanceof works"),this.game.foods.push(this.holding[0])),this.holding.shift()}},{key:"keyDownListener",value:function(t){69==t.keyCode&&this.holding[0]instanceof o?(console.log("eating boar meat"),this.eatFood()):69==t.keyCode&&this.holding[0]instanceof r&&(console.log("eating food food"),this.eatFood())}},{key:"incrementHydration",value:function(){this.isDrinking?this.hydration+=10:this.hydration-=5,this.hydrationText.innerHTML="Hydration: ".concat(this.hydration),this.hydration<=0&&this.gameOver()}},{key:"gameOver",value:function(){this.game.gameOver=!0}},{key:"incrementCalories",value:function(){this.calories-=100,this.caloriesText.innerHTML="Calories: ".concat(this.calories),this.calories<=0&&this.gameOver()}},{key:"incrementBodyTemp",value:function(){this.isDay?this.inShade?(this.bodyTemp-=5,console.log("in shade: ".concat(this.bodyTemp))):this.bodyTemp+=5:this.byFire?this.bodyTemp+=10:(this.bodyTemp-=5,console.log(this.bodyTemp)),this.tempText.innerHTML="Body Temp: ".concat(this.bodyTemp),(this.bodyTemp<=0||this.bodyTemp>=200)&&this.gameOver()}},{key:"move",value:function(t,e){this.pos[0]+=this.vel[0]*(.2*t)*e[0],this.pos[1]+=this.vel[1]*(.2*t)*e[1]}},{key:"teleport",value:function(t){this.pos[0]=t[0]-this.width/2,this.pos[1]=t[1]-this.height/2}},{key:"moveTo",value:function(t,e){var i=t[0]-this.pos[0]-this.width/2,n=t[1]-this.pos[1]-this.height/2;if(Math.abs(i)<1&&Math.abs(n<1))this.isMoving=!1;else{var r=Math.sqrt(i*i+n*n),o=i/r,s=n/r,a=this.vel[0]*e*.3*o,h=this.vel[1]*e*.3*s;this.pos[0]+=a,this.pos[1]+=h,this.movingLeft=a<=0,this.isMoving=!0}}},{key:"middlePosition",value:function(){return[this.pos[0]+this.width/2,this.pos[1]+this.height/2]}},{key:"setUpHtmlTexts",value:function(){this.hydrationText=document.getElementById("hydration-text"),this.caloriesText=document.getElementById("calories-text"),this.tempText=document.getElementById("temp-text"),this.hydrationText.innerHTML="Hydration: ".concat(this.hydration),this.caloriesText.innerHTML="Calories: ".concat(this.calories),this.tempText.innerHTML="Temp: ".concat(this.bodyTemp)}},{key:"eatFood",value:function(){console.log("eating food!"),this.calories+=this.holding[0].calories,this.setUpHtmlTexts(),this.holding.shift(),this.game.drawGame(),console.log(this.holding)}},{key:"collisionDetection",value:function(){for(var t=this.middlePosition()[0],e=this.middlePosition()[1],i=!1,n=0;n<this.game.waters.length;n++){var r=this.game.waters[n];Math.sqrt(Math.pow(t-r.pos[0],2)+Math.pow(e-r.pos[1],2))<=r.radius+this.width/2&&(i=!0)}return this.isDrinking=i,i}}])&&n(e.prototype,i),t}();t.exports=s},1451:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=e.pos,this.width=e.width,this.height=e.height,this.vel=e.vel,this.ctx=e.ctx,this.player=e.player,this.color=e.color,this.isMoving=!1,this.isPlayerHolding=!1,this.clickPos=[0,0],this.checkClick=!1}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height)}},{key:"playerHolding",value:function(){this.distanceFrom(this.player)>2&&(this.pos=[this.player.pos[0]-this.width/2,this.player.pos[1]+this.player.height/2])}},{key:"distanceFrom",value:function(t){var e=[t.pos[0]-this.width/2,t.pos[1]+t.height/2],i=e[0]-this.pos[0],n=e[1]-this.pos[1];return Math.sqrt(i*i+n*n)}},{key:"move",value:function(t,e){var i=t[0]-this.pos[0]-this.width/2,n=t[1]-this.pos[1]-this.height/2;if(Math.abs(i)<3&&Math.abs(n)<3)this.isMoving=!1;else{var r=Math.sqrt(i*i+n*n),o=i/r,s=n/r;this.pos[0]+=this.vel[0]*e*.3*o,this.pos[1]+=this.vel[1]*e*.3*s,this.isMoving=!0}}}])&&e(i.prototype,n),t}();t.exports=i},9657:function(t){function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.ctx,this.pos=e.pos,this.topColor="Green",this.trunkColor="Brown",this.treeImage=new Image,this.treeImage.src="../src/images/tree.png",this.width=this.treeImage.width,this.height=this.treeImage.height}var i,n;return i=t,(n=[{key:"draw",value:function(){this.ctx.drawImage(this.treeImage,0,0,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height)}}])&&e(i.prototype,n),t}();t.exports=i},4232:function(t,e,i){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i(3290);var r=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=e.pos,this.radius=e.radius,this.ctx=e.ctx,this.color="DarkSlateBlue"}var e,i;return e=t,(i=[{key:"createWater",value:function(){this.ctx.fillStyle=this.color,this.ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI),this.ctx.fill()}}])&&n(e.prototype,i),t}();t.exports=r},9662:function(t,e,i){var n=i(7854),r=i(614),o=i(6330),s=n.TypeError;t.exports=function(t){if(r(t))return t;throw s(o(t)+" is not a function")}},1223:function(t,e,i){var n=i(5112),r=i(30),o=i(3070),s=n("unscopables"),a=Array.prototype;null==a[s]&&o.f(a,s,{configurable:!0,value:r(null)}),t.exports=function(t){a[s][t]=!0}},9670:function(t,e,i){var n=i(7854),r=i(111),o=n.String,s=n.TypeError;t.exports=function(t){if(r(t))return t;throw s(o(t)+" is not an object")}},1285:function(t,e,i){"use strict";var n=i(7908),r=i(1400),o=i(6244);t.exports=function(t){for(var e=n(this),i=o(e),s=arguments.length,a=r(s>1?arguments[1]:void 0,i),h=s>2?arguments[2]:void 0,c=void 0===h?i:r(h,i);c>a;)e[a++]=t;return e}},8533:function(t,e,i){"use strict";var n=i(2092).forEach,r=i(9341)("forEach");t.exports=r?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,i){var n=i(5656),r=i(1400),o=i(6244),s=function(t){return function(e,i,s){var a,h=n(e),c=o(h),u=r(s,c);if(t&&i!=i){for(;c>u;)if((a=h[u++])!=a)return!0}else for(;c>u;u++)if((t||u in h)&&h[u]===i)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},2092:function(t,e,i){var n=i(9974),r=i(1702),o=i(8361),s=i(7908),a=i(6244),h=i(5417),c=r([].push),u=function(t){var e=1==t,i=2==t,r=3==t,u=4==t,l=6==t,f=7==t,p=5==t||l;return function(d,v,g,y){for(var m,w,b=s(d),x=o(b),k=n(v,g),M=a(x),T=0,O=y||h,S=e?O(d,M):i||f?O(d,0):void 0;M>T;T++)if((p||T in x)&&(w=k(m=x[T],T,b),t))if(e)S[T]=w;else if(w)switch(t){case 3:return!0;case 5:return m;case 6:return T;case 2:c(S,m)}else switch(t){case 4:return!1;case 7:c(S,m)}return l?-1:r||u?u:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},1194:function(t,e,i){var n=i(7293),r=i(5112),o=i(7392),s=r("species");t.exports=function(t){return o>=51||!n((function(){var e=[];return(e.constructor={})[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:function(t,e,i){"use strict";var n=i(7293);t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},7475:function(t,e,i){var n=i(7854),r=i(3157),o=i(4411),s=i(111),a=i(5112)("species"),h=n.Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,(o(e)&&(e===h||r(e.prototype))||s(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?h:e}},5417:function(t,e,i){var n=i(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:function(t,e,i){var n=i(1702),r=n({}.toString),o=n("".slice);t.exports=function(t){return o(r(t),8,-1)}},648:function(t,e,i){var n=i(7854),r=i(1694),o=i(614),s=i(4326),a=i(5112)("toStringTag"),h=n.Object,c="Arguments"==s(function(){return arguments}());t.exports=r?s:function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=h(t),a))?i:c?s(e):"Object"==(n=s(e))&&o(e.callee)?"Arguments":n}},9920:function(t,e,i){var n=i(2597),r=i(3887),o=i(1236),s=i(3070);t.exports=function(t,e){for(var i=r(e),a=s.f,h=o.f,c=0;c<i.length;c++){var u=i[c];n(t,u)||a(t,u,h(e,u))}}},8880:function(t,e,i){var n=i(9781),r=i(3070),o=i(9114);t.exports=n?function(t,e,i){return r.f(t,e,o(1,i))}:function(t,e,i){return t[e]=i,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,i){"use strict";var n=i(4948),r=i(3070),o=i(9114);t.exports=function(t,e,i){var s=n(e);s in t?r.f(t,s,o(0,i)):t[s]=i}},9781:function(t,e,i){var n=i(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,i){var n=i(7854),r=i(111),o=n.document,s=r(o)&&r(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,i){var n=i(317)("span").classList,r=n&&n.constructor&&n.constructor.prototype;t.exports=r===Object.prototype?void 0:r},8113:function(t,e,i){var n=i(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,i){var n,r,o=i(7854),s=i(8113),a=o.process,h=o.Deno,c=a&&a.versions||h&&h.version,u=c&&c.v8;u&&(r=(n=u.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!r&&s&&(!(n=s.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/))&&(r=+n[1]),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,i){var n=i(7854),r=i(1236).f,o=i(8880),s=i(1320),a=i(3505),h=i(9920),c=i(4705);t.exports=function(t,e){var i,u,l,f,p,d=t.target,v=t.global,g=t.stat;if(i=v?n:g?n[d]||a(d,{}):(n[d]||{}).prototype)for(u in e){if(f=e[u],l=t.noTargetGet?(p=r(i,u))&&p.value:i[u],!c(v?u:d+(g?".":"#")+u,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;h(f,l)}(t.sham||l&&l.sham)&&o(f,"sham",!0),s(i,u,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,i){var n=i(1702),r=i(9662),o=n(n.bind);t.exports=function(t,e){return r(t),void 0===e?t:o?o(t,e):function(){return t.apply(e,arguments)}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:function(t,e,i){var n=i(9781),r=i(2597),o=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,a=r(o,"name"),h=a&&"something"===function(){}.name,c=a&&(!n||n&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:h,CONFIGURABLE:c}},1702:function(t){var e=Function.prototype,i=e.bind,n=e.call,r=i&&i.bind(n);t.exports=i?function(t){return t&&r(n,t)}:function(t){return t&&function(){return n.apply(t,arguments)}}},5005:function(t,e,i){var n=i(7854),r=i(614),o=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(n[t]):n[t]&&n[t][e]}},8173:function(t,e,i){var n=i(9662);t.exports=function(t,e){var i=t[e];return null==i?void 0:n(i)}},7854:function(t,e,i){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof i.g&&i.g)||function(){return this}()||Function("return this")()},2597:function(t,e,i){var n=i(1702),r=i(7908),o=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,i){var n=i(5005);t.exports=n("document","documentElement")},4664:function(t,e,i){var n=i(9781),r=i(7293),o=i(317);t.exports=!n&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,i){var n=i(7854),r=i(1702),o=i(7293),s=i(4326),a=n.Object,h=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?h(t,""):a(t)}:a},2788:function(t,e,i){var n=i(1702),r=i(614),o=i(5465),s=n(Function.toString);r(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},9909:function(t,e,i){var n,r,o,s=i(8536),a=i(7854),h=i(1702),c=i(111),u=i(8880),l=i(2597),f=i(5465),p=i(6200),d=i(3501),v="Object already initialized",g=a.TypeError,y=a.WeakMap;if(s||f.state){var m=f.state||(f.state=new y),w=h(m.get),b=h(m.has),x=h(m.set);n=function(t,e){if(b(m,t))throw new g(v);return e.facade=t,x(m,t,e),e},r=function(t){return w(m,t)||{}},o=function(t){return b(m,t)}}else{var k=p("state");d[k]=!0,n=function(t,e){if(l(t,k))throw new g(v);return e.facade=t,u(t,k,e),e},r=function(t){return l(t,k)?t[k]:{}},o=function(t){return l(t,k)}}t.exports={set:n,get:r,has:o,enforce:function(t){return o(t)?r(t):n(t,{})},getterFor:function(t){return function(e){var i;if(!c(e)||(i=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return i}}}},3157:function(t,e,i){var n=i(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,i){var n=i(1702),r=i(7293),o=i(614),s=i(648),a=i(5005),h=i(2788),c=function(){},u=[],l=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,p=n(f.exec),d=!f.exec(c),v=function(t){if(!o(t))return!1;try{return l(c,u,t),!0}catch(t){return!1}};t.exports=!l||r((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!p(f,h(t))}:v},4705:function(t,e,i){var n=i(7293),r=i(614),o=/#|\.prototype\./,s=function(t,e){var i=h[a(t)];return i==u||i!=c&&(r(e)?n(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},h=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},111:function(t,e,i){var n=i(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){t.exports=!1},2190:function(t,e,i){var n=i(7854),r=i(5005),o=i(614),s=i(7976),a=i(3307),h=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&s(e.prototype,h(t))}},6244:function(t,e,i){var n=i(7466);t.exports=function(t){return n(t.length)}},133:function(t,e,i){var n=i(7392),r=i(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,i){var n=i(7854),r=i(614),o=i(2788),s=n.WeakMap;t.exports=r(s)&&/native code/.test(o(s))},30:function(t,e,i){var n,r=i(9670),o=i(6048),s=i(748),a=i(3501),h=i(490),c=i(317),u=i(6200)("IE_PROTO"),l=function(){},f=function(t){return"<script>"+t+"<\/script>"},p=function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e},d=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e;d="undefined"!=typeof document?document.domain&&n?p(n):((e=c("iframe")).style.display="none",h.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(f("document.F=Object")),t.close(),t.F):p(n);for(var i=s.length;i--;)delete d.prototype[s[i]];return d()};a[u]=!0,t.exports=Object.create||function(t,e){var i;return null!==t?(l.prototype=r(t),i=new l,l.prototype=null,i[u]=t):i=d(),void 0===e?i:o(i,e)}},6048:function(t,e,i){var n=i(9781),r=i(3070),o=i(9670),s=i(5656),a=i(1956);t.exports=n?Object.defineProperties:function(t,e){o(t);for(var i,n=s(e),h=a(e),c=h.length,u=0;c>u;)r.f(t,i=h[u++],n[i]);return t}},3070:function(t,e,i){var n=i(7854),r=i(9781),o=i(4664),s=i(9670),a=i(4948),h=n.TypeError,c=Object.defineProperty;e.f=r?c:function(t,e,i){if(s(t),e=a(e),s(i),o)try{return c(t,e,i)}catch(t){}if("get"in i||"set"in i)throw h("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},1236:function(t,e,i){var n=i(9781),r=i(6916),o=i(5296),s=i(9114),a=i(5656),h=i(4948),c=i(2597),u=i(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=h(e),u)try{return l(t,e)}catch(t){}if(c(t,e))return s(!r(o.f,t,e),t[e])}},8006:function(t,e,i){var n=i(6324),r=i(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,i){var n=i(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,e,i){var n=i(1702),r=i(2597),o=i(5656),s=i(1318).indexOf,a=i(3501),h=n([].push);t.exports=function(t,e){var i,n=o(t),c=0,u=[];for(i in n)!r(a,i)&&r(n,i)&&h(u,i);for(;e.length>c;)r(n,i=e[c++])&&(~s(u,i)||h(u,i));return u}},1956:function(t,e,i){var n=i(6324),r=i(748);t.exports=Object.keys||function(t){return n(t,r)}},5296:function(t,e){"use strict";var i={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!i.call({1:2},1);e.f=r?function(t){var e=n(this,t);return!!e&&e.enumerable}:i},288:function(t,e,i){"use strict";var n=i(1694),r=i(648);t.exports=n?{}.toString:function(){return"[object "+r(this)+"]"}},2140:function(t,e,i){var n=i(7854),r=i(6916),o=i(614),s=i(111),a=n.TypeError;t.exports=function(t,e){var i,n;if("string"===e&&o(i=t.toString)&&!s(n=r(i,t)))return n;if(o(i=t.valueOf)&&!s(n=r(i,t)))return n;if("string"!==e&&o(i=t.toString)&&!s(n=r(i,t)))return n;throw a("Can't convert object to primitive value")}},3887:function(t,e,i){var n=i(5005),r=i(1702),o=i(8006),s=i(5181),a=i(9670),h=r([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),i=s.f;return i?h(e,i(t)):e}},1320:function(t,e,i){var n=i(7854),r=i(614),o=i(2597),s=i(8880),a=i(3505),h=i(2788),c=i(9909),u=i(6530).CONFIGURABLE,l=c.get,f=c.enforce,p=String(String).split("String");(t.exports=function(t,e,i,h){var c,l=!!h&&!!h.unsafe,d=!!h&&!!h.enumerable,v=!!h&&!!h.noTargetGet,g=h&&void 0!==h.name?h.name:e;r(i)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(i,"name")||u&&i.name!==g)&&s(i,"name",g),(c=f(i)).source||(c.source=p.join("string"==typeof g?g:""))),t!==n?(l?!v&&t[e]&&(d=!0):delete t[e],d?t[e]=i:s(t,e,i)):d?t[e]=i:a(e,i)})(Function.prototype,"toString",(function(){return r(this)&&l(this).source||h(this)}))},4488:function(t,e,i){var n=i(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:function(t,e,i){var n=i(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(n,t,{value:e,configurable:!0,writable:!0})}catch(i){n[t]=e}return e}},6200:function(t,e,i){var n=i(2309),r=i(9711),o=n("keys");t.exports=function(t){return o[t]||(o[t]=r(t))}},5465:function(t,e,i){var n=i(7854),r=i(3505),o="__core-js_shared__",s=n[o]||r(o,{});t.exports=s},2309:function(t,e,i){var n=i(1913),r=i(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,i){var n=i(9303),r=Math.max,o=Math.min;t.exports=function(t,e){var i=n(t);return i<0?r(i+e,0):o(i,e)}},5656:function(t,e,i){var n=i(8361),r=i(4488);t.exports=function(t){return n(r(t))}},9303:function(t){var e=Math.ceil,i=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?i:e)(n)}},7466:function(t,e,i){var n=i(9303),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},7908:function(t,e,i){var n=i(7854),r=i(4488),o=n.Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,i){var n=i(7854),r=i(6916),o=i(111),s=i(2190),a=i(8173),h=i(2140),c=i(5112),u=n.TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var i,n=a(t,l);if(n){if(void 0===e&&(e="default"),i=r(n,t,e),!o(i)||s(i))return i;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),h(t,e)}},4948:function(t,e,i){var n=i(7593),r=i(2190);t.exports=function(t){var e=n(t,"string");return r(e)?e:e+""}},1694:function(t,e,i){var n={};n[i(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:function(t,e,i){var n=i(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:function(t,e,i){var n=i(1702),r=0,o=Math.random(),s=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++r+o,36)}},3307:function(t,e,i){var n=i(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,i){var n=i(7854),r=i(2309),o=i(2597),s=i(9711),a=i(133),h=i(3307),c=r("wks"),u=n.Symbol,l=u&&u.for,f=h?u:u&&u.withoutSetter||s;t.exports=function(t){if(!o(c,t)||!a&&"string"!=typeof c[t]){var e="Symbol."+t;a&&o(u,t)?c[t]=u[t]:c[t]=h&&l?l(e):f(e)}return c[t]}},3290:function(t,e,i){var n=i(2109),r=i(1285),o=i(1223);n({target:"Array",proto:!0},{fill:r}),o("fill")},561:function(t,e,i){"use strict";var n=i(2109),r=i(7854),o=i(1400),s=i(9303),a=i(6244),h=i(7908),c=i(5417),u=i(6135),l=i(1194)("splice"),f=r.TypeError,p=Math.max,d=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var i,n,r,l,y,m,w=h(this),b=a(w),x=o(t,b),k=arguments.length;if(0===k?i=n=0:1===k?(i=0,n=b-x):(i=k-2,n=d(p(s(e),0),b-x)),b+i-n>v)throw f(g);for(r=c(w,n),l=0;l<n;l++)(y=x+l)in w&&u(r,l,w[y]);if(r.length=n,i<n){for(l=x;l<b-n;l++)m=l+i,(y=l+n)in w?w[m]=w[y]:delete w[m];for(l=b;l>b-n+i;l--)delete w[l-1]}else if(i>n)for(l=b-n;l>x;l--)m=l+i-1,(y=l+n-1)in w?w[m]=w[y]:delete w[m];for(l=0;l<i;l++)w[l+x]=arguments[l+2];return w.length=b-n+i,r}})},5438:function(t,e,i){var n=i(2109),r=Math.hypot,o=Math.abs,s=Math.sqrt;n({target:"Math",stat:!0,forced:!!r&&r(1/0,NaN)!==1/0},{hypot:function(t,e){for(var i,n,r=0,a=0,h=arguments.length,c=0;a<h;)c<(i=o(arguments[a++]))?(r=r*(n=c/i)*n+1,c=i):r+=i>0?(n=i/c)*n:i;return c===1/0?1/0:c*s(r)}})},1539:function(t,e,i){var n=i(1694),r=i(1320),o=i(288);n||r(Object.prototype,"toString",o,{unsafe:!0})},4747:function(t,e,i){var n=i(7854),r=i(8324),o=i(8509),s=i(8533),a=i(8880),h=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var c in r)r[c]&&h(n[c]&&n[c].prototype);h(o)}},i={};function n(t){var r=i[t];if(void 0!==r)return r.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t=n(273),n(3451),n(2763),n(1451),n(4232),n(2944),n(9657),n(6037),window.addEventListener("DOMContentLoaded",(function(e){console.log("DOM loaded");var i=document.getElementById("canvas"),n=i.getContext("2d"),r=new t(n,i);document.getElementById("restart").addEventListener("click",(function(){r.start()}))}))}();
//# sourceMappingURL=main.js.map