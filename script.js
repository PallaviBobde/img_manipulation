let upload_image = document.querySelector("#upload_image");

let file_name = ""
let img;

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// bring image on canvas
upload_image.onchange = (e) =>{
	const file = document.getElementById("upload_image").files[0];

	const reader = new FileReader();

	if(file){
		file_name = file.name;
		reader.readAsDataURL(file);
	}
	
	reader.addEventListener("load",()=>{
		img = new Image();
		img.src = reader.result;

		img.onload = function(){
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img,0,0,img.width,img.height);
			
		}
	})
}


// filters
document.addEventListener("click",(e)=>{
	if(e.target.classList.contains("filter_btn")){
		if(e.target.classList.contains("brightness_remove")){
			Caman(canvas,img,function(){
				this.brightness(-5).render();
			})
		}
		if(e.target.classList.contains("brightness_add")){
			Caman(canvas,img,function(){
				this.brightness(5).render();
			})
		}
		if(e.target.classList.contains("contrast_remove")){
			Caman(canvas,img,function(){
				this.contrast(-5).render();
			})
		}
		if(e.target.classList.contains("contrast_add")){
			Caman(canvas,img,function(){
				this.contrast(5).render();
			})
		}
		if(e.target.classList.contains("vibrance_remove")){
			Caman(canvas,img,function(){
				this.vibrance(-5).render();
			})
		}
		if(e.target.classList.contains("vibrance_add")){
			Caman(canvas,img,function(){
				this.vibrance(5).render();
			})
		}
		if(e.target.classList.contains("saturation_remove")){
			Caman(canvas,img,function(){
				this.saturation(-5).render();
			})
		}
		if(e.target.classList.contains("saturation_add")){
			Caman(canvas,img,function(){
				this.saturation(5).render();
			})
		}
		if(e.target.classList.contains("exposure_remove")){
			Caman(canvas,img,function(){
				this.exposure(-5).render();
			})
		}
		if(e.target.classList.contains("exposure_add")){
			Caman(canvas,img,function(){
				this.exposure(5).render();
			})
		}
		if(e.target.classList.contains("hue")){
			Caman(canvas,img,function(){
				this.hue(5).render();
			})
		}
		if(e.target.classList.contains("gamma")){
			Caman(canvas,img,function(){
				this.gamma(5).render();
			})
		}
		if(e.target.classList.contains("clip")){
			Caman(canvas,img,function(){
				this.clip(5).render();
			})
		}
		if(e.target.classList.contains("stackblur")){
			Caman(canvas,img,function(){
				this.stackBlur(5).render();
			})
		}
		if(e.target.classList.contains("sepia")){
			Caman(canvas,img,function(){
				this.sepia(5).render();
			})
		}
		if(e.target.classList.contains("noise")){
			Caman(canvas,img,function(){
				this.noise(5).render();
			})
		}
		if(e.target.classList.contains("sharpen")){
			Caman(canvas,img,function(){
				this.sharpen(5).render();
			})
		}
		if(e.target.classList.contains("vintage")){
			Caman(canvas,img,function(){
				this.vintage().render();
			})
		}
		if(e.target.classList.contains("lomo")){
			Caman(canvas,img,function(){
				this.lomo().render();
			})
		}
		if(e.target.classList.contains("clarity")){
			Caman(canvas,img,function(){
				this.clarity().render();
			})
		}
		if(e.target.classList.contains("sincity")){
			Caman(canvas,img,function(){
				this.sinCity().render();
			})
		}
		if(e.target.classList.contains("sunrise")){
			Caman(canvas,img,function(){
				this.sunrise().render();
			})
		}
		if(e.target.classList.contains("crossprocess")){
			Caman(canvas,img,function(){
				this.crossProcess().render();
			})
		}
		if(e.target.classList.contains("orangepeel")){
			Caman(canvas,img,function(){
				this.orangePeel().render();
			})
		}
		if(e.target.classList.contains("love")){
			Caman(canvas,img,function(){
				this.love().render();
			})
		}
		if(e.target.classList.contains("grungy")){
			Caman(canvas,img,function(){
				this.grungy().render();
			})
		}
		if(e.target.classList.contains("jarques")){
			Caman(canvas,img,function(){
				this.jarques().render();
			})
		}
		if(e.target.classList.contains("pinhole")){
			Caman(canvas,img,function(){
				this.pinhole().render();
			})
		}
		if(e.target.classList.contains("oldboot")){
			Caman(canvas,img,function(){
				this.oldBoot().render();
			})
		}
		if(e.target.classList.contains("glowingsun")){
			Caman(canvas,img,function(){
				this.glowingSun().render();
			})
		}
		if(e.target.classList.contains("hazydays")){
			Caman(canvas,img,function(){
				this.hazyDays().render();
			})
		}
		if(e.target.classList.contains("hermajesty")){
			Caman(canvas,img,function(){
				this.herMajesty().render();
			})
		}
		if(e.target.classList.contains("nostalgia")){
			Caman(canvas,img,function(){
				this.nostalgia().render();
			})
		}
		if(e.target.classList.contains("hemingway")){
			Caman(canvas,img,function(){
				this.hemingway().render();
			})
		}
		if(e.target.classList.contains("concentrate")){
			Caman(canvas,img,function(){
				this.concentrate().render();
			})
		}
		
	}
})

let download_btn = document.querySelector(".download_btn");
let revert_btn = document.querySelector(".revert_btn");

revert_btn.addEventListener("click",()=>{
	Caman(canvas,img,function(){
		this.revert();
	})
})

download_btn.addEventListener("click",()=>{
	const file_extension = file_name.slice(-4);
	let new_file_name;

	if(file_extension === ".jpg" || file_extension === ".png"){
		new_file_name = file_name.substring(0,file_name.length-4) + "-edited.jpg";
	}
	download(canvas,new_file_name);
})

function download(canvas,filename){
	let e;
	const link = document.createElement("a");
	link.download = file_name;
	link.href = canvas.toDataURL("image/jpeg",0.8);
	e = new MouseEvent("click");
	link.dispatchEvent(e);
}