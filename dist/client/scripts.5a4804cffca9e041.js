var pJS=function(c,d){var l=document.querySelector("#"+c+" > .particles-js-canvas-el");this.pJS={canvas:{el:l,w:l.offsetWidth,h:l.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var e=this.pJS;d&&Object.deepExtend(e,d),e.tmp.obj={size_value:e.particles.size.value,size_anim_speed:e.particles.size.anim.speed,move_speed:e.particles.move.speed,line_linked_distance:e.particles.line_linked.distance,line_linked_width:e.particles.line_linked.width,mode_grab_distance:e.interactivity.modes.grab.distance,mode_bubble_distance:e.interactivity.modes.bubble.distance,mode_bubble_size:e.interactivity.modes.bubble.size,mode_repulse_distance:e.interactivity.modes.repulse.distance},e.fn.retinaInit=function(){e.retina_detect&&window.devicePixelRatio>1?(e.canvas.pxratio=window.devicePixelRatio,e.tmp.retina=!0):(e.canvas.pxratio=1,e.tmp.retina=!1),e.canvas.w=e.canvas.el.offsetWidth*e.canvas.pxratio,e.canvas.h=e.canvas.el.offsetHeight*e.canvas.pxratio,e.particles.size.value=e.tmp.obj.size_value*e.canvas.pxratio,e.particles.size.anim.speed=e.tmp.obj.size_anim_speed*e.canvas.pxratio,e.particles.move.speed=e.tmp.obj.move_speed*e.canvas.pxratio,e.particles.line_linked.distance=e.tmp.obj.line_linked_distance*e.canvas.pxratio,e.interactivity.modes.grab.distance=e.tmp.obj.mode_grab_distance*e.canvas.pxratio,e.interactivity.modes.bubble.distance=e.tmp.obj.mode_bubble_distance*e.canvas.pxratio,e.particles.line_linked.width=e.tmp.obj.line_linked_width*e.canvas.pxratio,e.interactivity.modes.bubble.size=e.tmp.obj.mode_bubble_size*e.canvas.pxratio,e.interactivity.modes.repulse.distance=e.tmp.obj.mode_repulse_distance*e.canvas.pxratio},e.fn.canvasInit=function(){e.canvas.ctx=e.canvas.el.getContext("2d")},e.fn.canvasSize=function(){e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e&&e.interactivity.events.resize&&window.addEventListener("resize",function(){e.canvas.w=e.canvas.el.offsetWidth,e.canvas.h=e.canvas.el.offsetHeight,e.tmp.retina&&(e.canvas.w*=e.canvas.pxratio,e.canvas.h*=e.canvas.pxratio),e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e.particles.move.enable||(e.fn.particlesEmpty(),e.fn.particlesCreate(),e.fn.particlesDraw(),e.fn.vendors.densityAutoParticles()),e.fn.vendors.densityAutoParticles()})},e.fn.canvasPaint=function(){e.canvas.ctx.fillRect(0,0,e.canvas.w,e.canvas.h)},e.fn.canvasClear=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h)},e.fn.particle=function(a,i,t){if(this.radius=(e.particles.size.random?Math.random():1)*e.particles.size.value,e.particles.size.anim.enable&&(this.size_status=!1,this.vs=e.particles.size.anim.speed/100,e.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*e.canvas.w,this.y=t?t.y:Math.random()*e.canvas.h,this.x>e.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>e.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),e.particles.move.bounce&&e.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof a.value)if(a.value instanceof Array){var s=a.value[Math.floor(Math.random()*e.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else null!=a.value.r&&null!=a.value.g&&null!=a.value.b&&(this.color.rgb={r:a.value.r,g:a.value.g,b:a.value.b}),null!=a.value.h&&null!=a.value.s&&null!=a.value.l&&(this.color.hsl={h:a.value.h,s:a.value.s,l:a.value.l});else"random"==a.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof a.value&&(this.color=a,this.color.rgb=hexToRgb(this.color.value));this.opacity=(e.particles.opacity.random?Math.random():1)*e.particles.opacity.value,e.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=e.particles.opacity.anim.speed/100,e.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(e.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}e.particles.move.straight?(this.vx=n.x,this.vy=n.y,e.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=e.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var o=r[Math.floor(Math.random()*r.length)];this.shape=o}}else this.shape=r;if("image"==this.shape){var v=e.particles.shape;this.img={src:v.image.src,ratio:v.image.width/v.image.height},this.img.ratio||(this.img.ratio=1),"svg"==e.tmp.img_type&&null!=e.tmp.source_svg&&(e.fn.vendors.createSvgImg(this),e.tmp.pushing&&(this.img.loaded=!1))}},e.fn.particle.prototype.draw=function(){var a=this;if(null!=a.radius_bubble)var i=a.radius_bubble;else i=a.radius;if(null!=a.opacity_bubble)var t=a.opacity_bubble;else t=a.opacity;if(a.color.rgb)var s="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+t+")";else s="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+t+")";switch(e.canvas.ctx.fillStyle=s,e.canvas.ctx.beginPath(),a.shape){case"circle":e.canvas.ctx.arc(a.x,a.y,i,0,2*Math.PI,!1);break;case"edge":e.canvas.ctx.rect(a.x-i,a.y-i,2*i,2*i);break;case"triangle":e.fn.vendors.drawShape(e.canvas.ctx,a.x-i,a.y+i/1.66,2*i,3,2);break;case"polygon":e.fn.vendors.drawShape(e.canvas.ctx,a.x-i/(e.particles.shape.polygon.nb_sides/3.5),a.y-i/.76,2.66*i/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,1);break;case"star":e.fn.vendors.drawShape(e.canvas.ctx,a.x-2*i/(e.particles.shape.polygon.nb_sides/4),a.y-i/1.52,2*i*2.66/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,2);break;case"image":let o=function(){e.canvas.ctx.drawImage(n,a.x-i,a.y-i,2*i,2*i/a.img.ratio)};if("svg"==e.tmp.img_type)var n=a.img.obj;else n=e.tmp.img_obj;n&&o()}e.canvas.ctx.closePath(),e.particles.shape.stroke.width>0&&(e.canvas.ctx.strokeStyle=e.particles.shape.stroke.color,e.canvas.ctx.lineWidth=e.particles.shape.stroke.width,e.canvas.ctx.stroke()),e.canvas.ctx.fill()},e.fn.particlesCreate=function(){for(var a=0;a<e.particles.number.value;a++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value))},e.fn.particlesUpdate=function(){for(var a=0;a<e.particles.array.length;a++){var i=e.particles.array[a];if(e.particles.move.enable){var t=e.particles.move.speed/2;i.x+=i.vx*t,i.y+=i.vy*t}if(e.particles.opacity.anim.enable&&(1==i.opacity_status?(i.opacity>=e.particles.opacity.value&&(i.opacity_status=!1),i.opacity+=i.vo):(i.opacity<=e.particles.opacity.anim.opacity_min&&(i.opacity_status=!0),i.opacity-=i.vo),i.opacity<0&&(i.opacity=0)),e.particles.size.anim.enable&&(1==i.size_status?(i.radius>=e.particles.size.value&&(i.size_status=!1),i.radius+=i.vs):(i.radius<=e.particles.size.anim.size_min&&(i.size_status=!0),i.radius-=i.vs),i.radius<0&&(i.radius=0)),"bounce"==e.particles.move.out_mode)var s={x_left:i.radius,x_right:e.canvas.w,y_top:i.radius,y_bottom:e.canvas.h};else s={x_left:-i.radius,x_right:e.canvas.w+i.radius,y_top:-i.radius,y_bottom:e.canvas.h+i.radius};if("bounce"===(i.x-i.radius>e.canvas.w?(i.x=s.x_left,i.y=Math.random()*e.canvas.h):i.x+i.radius<0&&(i.x=s.x_right,i.y=Math.random()*e.canvas.h),i.y-i.radius>e.canvas.h?(i.y=s.y_top,i.x=Math.random()*e.canvas.w):i.y+i.radius<0&&(i.y=s.y_bottom,i.x=Math.random()*e.canvas.w),e.particles.move.out_mode)&&((i.x+i.radius>e.canvas.w||i.x-i.radius<0)&&(i.vx=-i.vx),(i.y+i.radius>e.canvas.h||i.y-i.radius<0)&&(i.vy=-i.vy)),isInArray("grab",e.interactivity.events.onhover.mode)&&e.fn.modes.grabParticle(i),(isInArray("bubble",e.interactivity.events.onhover.mode)||isInArray("bubble",e.interactivity.events.onclick.mode))&&e.fn.modes.bubbleParticle(i),(isInArray("repulse",e.interactivity.events.onhover.mode)||isInArray("repulse",e.interactivity.events.onclick.mode))&&e.fn.modes.repulseParticle(i),e.particles.line_linked.enable||e.particles.move.attract.enable)for(var n=a+1;n<e.particles.array.length;n++){var r=e.particles.array[n];e.particles.line_linked.enable&&e.fn.interact.linkParticles(i,r),e.particles.move.attract.enable&&e.fn.interact.attractParticles(i,r),e.particles.move.bounce&&e.fn.interact.bounceParticles(i,r)}}},e.fn.particlesDraw=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h),e.fn.particlesUpdate();for(var a=0;a<e.particles.array.length;a++)e.particles.array[a].draw()},e.fn.particlesEmpty=function(){e.particles.array=[]},e.fn.particlesRefresh=function(){cancelRequestAnimFrame(e.fn.checkAnimFrame),cancelRequestAnimFrame(e.fn.drawAnimFrame),e.tmp.source_svg=void 0,e.tmp.img_obj=void 0,e.tmp.count_svg=0,e.fn.particlesEmpty(),e.fn.canvasClear(),e.fn.vendors.start()},e.fn.interact.linkParticles=function(a,i){var t=a.x-i.x,s=a.y-i.y,n=Math.sqrt(t*t+s*s);if(n<=e.particles.line_linked.distance){var r=e.particles.line_linked.opacity-n/(1/e.particles.line_linked.opacity)/e.particles.line_linked.distance;if(r>0){var o=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+o.r+","+o.g+","+o.b+","+r+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(a.x,a.y),e.canvas.ctx.lineTo(i.x,i.y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}},e.fn.interact.attractParticles=function(a,i){var t=a.x-i.x,s=a.y-i.y;if(Math.sqrt(t*t+s*s)<=e.particles.line_linked.distance){var r=t/(1e3*e.particles.move.attract.rotateX),o=s/(1e3*e.particles.move.attract.rotateY);a.vx-=r,a.vy-=o,i.vx+=r,i.vy+=o}},e.fn.interact.bounceParticles=function(a,i){var t=a.x-i.x,s=a.y-i.y;Math.sqrt(t*t+s*s)<=a.radius+i.radius&&(a.vx=-a.vx,a.vy=-a.vy,i.vx=-i.vx,i.vy=-i.vy)},e.fn.modes.pushParticles=function(a,i){e.tmp.pushing=!0;for(var t=0;t<a;t++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value,{x:i?i.pos_x:Math.random()*e.canvas.w,y:i?i.pos_y:Math.random()*e.canvas.h})),t==a-1&&(e.particles.move.enable||e.fn.particlesDraw(),e.tmp.pushing=!1)},e.fn.modes.removeParticles=function(a){e.particles.array.splice(0,a),e.particles.move.enable||e.fn.particlesDraw()},e.fn.modes.bubbleParticle=function(a){if(e.interactivity.events.onhover.enable&&isInArray("bubble",e.interactivity.events.onhover.mode)){let u=function(){a.opacity_bubble=a.opacity,a.radius_bubble=a.radius};var i=a.x-e.interactivity.mouse.pos_x,t=a.y-e.interactivity.mouse.pos_y,n=1-(s=Math.sqrt(i*i+t*t))/e.interactivity.modes.bubble.distance;if(s<=e.interactivity.modes.bubble.distance){if(n>=0&&"mousemove"==e.interactivity.status){if(e.interactivity.modes.bubble.size!=e.particles.size.value)if(e.interactivity.modes.bubble.size>e.particles.size.value)(r=a.radius+e.interactivity.modes.bubble.size*n)>=0&&(a.radius_bubble=r);else{var r;a.radius_bubble=(r=a.radius-(a.radius-e.interactivity.modes.bubble.size)*n)>0?r:0}if(e.interactivity.modes.bubble.opacity!=e.particles.opacity.value)if(e.interactivity.modes.bubble.opacity>e.particles.opacity.value)(v=e.interactivity.modes.bubble.opacity*n)>a.opacity&&v<=e.interactivity.modes.bubble.opacity&&(a.opacity_bubble=v);else{var v;(v=a.opacity-(e.particles.opacity.value-e.interactivity.modes.bubble.opacity)*n)<a.opacity&&v>=e.interactivity.modes.bubble.opacity&&(a.opacity_bubble=v)}}}else u();"mouseleave"==e.interactivity.status&&u()}else if(e.interactivity.events.onclick.enable&&isInArray("bubble",e.interactivity.events.onclick.mode)){let u=function(m,w,x,b,y){if(m!=w)if(e.tmp.bubble_duration_end)null!=x&&(_=m+(m-(b-f*(b-m)/e.interactivity.modes.bubble.duration)),"size"==y&&(a.radius_bubble=_),"opacity"==y&&(a.opacity_bubble=_));else if(s<=e.interactivity.modes.bubble.distance){if(null!=x)var p=x;else p=b;if(p!=m){var _=b-f*(b-m)/e.interactivity.modes.bubble.duration;"size"==y&&(a.radius_bubble=_),"opacity"==y&&(a.opacity_bubble=_)}}else"size"==y&&(a.radius_bubble=void 0),"opacity"==y&&(a.opacity_bubble=void 0)};if(e.tmp.bubble_clicking){i=a.x-e.interactivity.mouse.click_pos_x,t=a.y-e.interactivity.mouse.click_pos_y;var s=Math.sqrt(i*i+t*t),f=((new Date).getTime()-e.interactivity.mouse.click_time)/1e3;f>e.interactivity.modes.bubble.duration&&(e.tmp.bubble_duration_end=!0),f>2*e.interactivity.modes.bubble.duration&&(e.tmp.bubble_clicking=!1,e.tmp.bubble_duration_end=!1)}e.tmp.bubble_clicking&&(u(e.interactivity.modes.bubble.size,e.particles.size.value,a.radius_bubble,a.radius,"size"),u(e.interactivity.modes.bubble.opacity,e.particles.opacity.value,a.opacity_bubble,a.opacity,"opacity"))}},e.fn.modes.repulseParticle=function(a){if(e.interactivity.events.onhover.enable&&isInArray("repulse",e.interactivity.events.onhover.mode)&&"mousemove"==e.interactivity.status){var i=a.x-e.interactivity.mouse.pos_x,t=a.y-e.interactivity.mouse.pos_y,s=Math.sqrt(i*i+t*t),n={x:i/s,y:t/s},v=clamp(1/(r=e.interactivity.modes.repulse.distance)*(-1*Math.pow(s/r,2)+1)*r*100,0,50),f={x:a.x+n.x*v,y:a.y+n.y*v};"bounce"==e.particles.move.out_mode?(f.x-a.radius>0&&f.x+a.radius<e.canvas.w&&(a.x=f.x),f.y-a.radius>0&&f.y+a.radius<e.canvas.h&&(a.y=f.y)):(a.x=f.x,a.y=f.y)}else if(e.interactivity.events.onclick.enable&&isInArray("repulse",e.interactivity.events.onclick.mode))if(e.tmp.repulse_finish||(e.tmp.repulse_count++,e.tmp.repulse_count==e.particles.array.length&&(e.tmp.repulse_finish=!0)),e.tmp.repulse_clicking){let b=function(){var y=Math.atan2(h,g);if(a.vx=m*Math.cos(y),a.vy=m*Math.sin(y),"bounce"==e.particles.move.out_mode){var p={x:a.x+a.vx,y:a.y+a.vy};(p.x+a.radius>e.canvas.w||p.x-a.radius<0)&&(a.vx=-a.vx),(p.y+a.radius>e.canvas.h||p.y-a.radius<0)&&(a.vy=-a.vy)}};var r=Math.pow(e.interactivity.modes.repulse.distance/6,3),g=e.interactivity.mouse.click_pos_x-a.x,h=e.interactivity.mouse.click_pos_y-a.y,u=g*g+h*h,m=-r/u*1;u<=r&&b()}else 0==e.tmp.repulse_clicking&&(a.vx=a.vx_i,a.vy=a.vy_i)},e.fn.modes.grabParticle=function(a){if(e.interactivity.events.onhover.enable&&"mousemove"==e.interactivity.status){var i=a.x-e.interactivity.mouse.pos_x,t=a.y-e.interactivity.mouse.pos_y,s=Math.sqrt(i*i+t*t);if(s<=e.interactivity.modes.grab.distance){var n=e.interactivity.modes.grab.line_linked.opacity-s/(1/e.interactivity.modes.grab.line_linked.opacity)/e.interactivity.modes.grab.distance;if(n>0){var r=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(a.x,a.y),e.canvas.ctx.lineTo(e.interactivity.mouse.pos_x,e.interactivity.mouse.pos_y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}}},e.fn.vendors.eventsListeners=function(){e.interactivity.el="window"==e.interactivity.detect_on?window:e.canvas.el,(e.interactivity.events.onhover.enable||e.interactivity.events.onclick.enable)&&(e.interactivity.el.addEventListener("mousemove",function(a){if(e.interactivity.el==window)var i=a.clientX,t=a.clientY;else i=a.offsetX||a.clientX,t=a.offsetY||a.clientY;e.interactivity.mouse.pos_x=i,e.interactivity.mouse.pos_y=t,e.tmp.retina&&(e.interactivity.mouse.pos_x*=e.canvas.pxratio,e.interactivity.mouse.pos_y*=e.canvas.pxratio),e.interactivity.status="mousemove"}),e.interactivity.el.addEventListener("mouseleave",function(a){e.interactivity.mouse.pos_x=null,e.interactivity.mouse.pos_y=null,e.interactivity.status="mouseleave"})),e.interactivity.events.onclick.enable&&e.interactivity.el.addEventListener("click",function(){if(e.interactivity.mouse.click_pos_x=e.interactivity.mouse.pos_x,e.interactivity.mouse.click_pos_y=e.interactivity.mouse.pos_y,e.interactivity.mouse.click_time=(new Date).getTime(),e.interactivity.events.onclick.enable)switch(e.interactivity.events.onclick.mode){case"push":e.particles.move.enable||1==e.interactivity.modes.push.particles_nb?e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb,e.interactivity.mouse):e.interactivity.modes.push.particles_nb>1&&e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb);break;case"remove":e.fn.modes.removeParticles(e.interactivity.modes.remove.particles_nb);break;case"bubble":e.tmp.bubble_clicking=!0;break;case"repulse":e.tmp.repulse_clicking=!0,e.tmp.repulse_count=0,e.tmp.repulse_finish=!1,setTimeout(function(){e.tmp.repulse_clicking=!1},1e3*e.interactivity.modes.repulse.duration)}})},e.fn.vendors.densityAutoParticles=function(){if(e.particles.number.density.enable){var a=e.canvas.el.width*e.canvas.el.height/1e3;e.tmp.retina&&(a/=2*e.canvas.pxratio);var t=e.particles.array.length-a*e.particles.number.value/e.particles.number.density.value_area;t<0?e.fn.modes.pushParticles(Math.abs(t)):e.fn.modes.removeParticles(t)}},e.fn.vendors.checkOverlap=function(a,i){for(var t=0;t<e.particles.array.length;t++){var s=e.particles.array[t],n=a.x-s.x,r=a.y-s.y;Math.sqrt(n*n+r*r)<=a.radius+s.radius&&(a.x=i?i.x:Math.random()*e.canvas.w,a.y=i?i.y:Math.random()*e.canvas.h,e.fn.vendors.checkOverlap(a))}},e.fn.vendors.createSvgImg=function(a){var s=e.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,function(f,g,h,u){if(a.color.rgb)var m="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+a.opacity+")";else m="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+a.opacity+")";return m}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,o=r.createObjectURL(n),v=new Image;v.addEventListener("load",function(){a.img.obj=v,a.img.loaded=!0,r.revokeObjectURL(o),e.tmp.count_svg++}),v.src=o},e.fn.vendors.destroypJS=function(){cancelAnimationFrame(e.fn.drawAnimFrame),l.remove(),pJSDom=null},e.fn.vendors.drawShape=function(a,i,t,s,n,r){var o=n*r,v=n/r,g=Math.PI-Math.PI*(180*(v-2)/v)/180;a.save(),a.beginPath(),a.translate(i,t),a.moveTo(0,0);for(var h=0;h<o;h++)a.lineTo(s,0),a.translate(s,0),a.rotate(g);a.fill(),a.restore()},e.fn.vendors.exportImg=function(){window.open(e.canvas.el.toDataURL("image/png"),"_blank")},e.fn.vendors.loadImg=function(a){if(e.tmp.img_error=void 0,""!=e.particles.shape.image.src)if("svg"==a){var i=new XMLHttpRequest;i.open("GET",e.particles.shape.image.src),i.onreadystatechange=function(s){4==i.readyState&&(200==i.status?(e.tmp.source_svg=s.currentTarget.response,e.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),e.tmp.img_error=!0))},i.send()}else{var t=new Image;t.addEventListener("load",function(){e.tmp.img_obj=t,e.fn.vendors.checkBeforeDraw()}),t.src=e.particles.shape.image.src}else console.log("Error pJS - No image.src"),e.tmp.img_error=!0},e.fn.vendors.draw=function(){"image"==e.particles.shape.type?"svg"==e.tmp.img_type?e.tmp.count_svg>=e.particles.number.value?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):null!=e.tmp.img_obj?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame))},e.fn.vendors.checkBeforeDraw=function(){"image"==e.particles.shape.type?"svg"==e.tmp.img_type&&null==e.tmp.source_svg?e.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(e.tmp.checkAnimFrame),e.tmp.img_error||(e.fn.vendors.init(),e.fn.vendors.draw())):(e.fn.vendors.init(),e.fn.vendors.draw())},e.fn.vendors.init=function(){e.fn.retinaInit(),e.fn.canvasInit(),e.fn.canvasSize(),e.fn.canvasPaint(),e.fn.particlesCreate(),e.fn.vendors.densityAutoParticles(),e.particles.line_linked.color_rgb_line=hexToRgb(e.particles.line_linked.color)},e.fn.vendors.start=function(){isInArray("image",e.particles.shape.type)?(e.tmp.img_type=e.particles.shape.image.src.substr(e.particles.shape.image.src.length-3),e.fn.vendors.loadImg(e.tmp.img_type)):e.fn.vendors.checkBeforeDraw()},e.fn.vendors.eventsListeners(),e.fn.vendors.start()};function hexToRgb(c){c=c.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,a,i,t){return a+a+i+i+t+t});var l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function clamp(c,d,l){return Math.min(Math.max(c,d),l)}function isInArray(c,d){return d.indexOf(c)>-1}Object.deepExtend=function(c,d){for(var l in d)d[l]&&d[l].constructor&&d[l].constructor===Object?(c[l]=c[l]||{},arguments.callee(c[l],d[l])):c[l]=d[l];return c},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c){window.setTimeout(c,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(c,d){"string"!=typeof c&&(d=c,c="particles-js"),c||(c="particles-js");var l=document.getElementById(c),e="particles-js-canvas-el",a=l.getElementsByClassName(e);if(a.length)for(;a.length>0;)l.removeChild(a[0]);var i=document.createElement("canvas");i.className=e,i.style.width="100%",i.style.height="100%",null!=document.getElementById(c).appendChild(i)&&pJSDom.push(new pJS(c,d))},window.particlesJS.load=function(c,d,l){var e=new XMLHttpRequest;e.open("GET",d),e.onreadystatechange=function(a){if(4==e.readyState)if(200==e.status){var i=JSON.parse(a.currentTarget.response);window.particlesJS(c,i),l&&l()}else console.log("Error pJS - XMLHttpRequest status: "+e.status),console.log("Error pJS - File config not found")},e.send()};