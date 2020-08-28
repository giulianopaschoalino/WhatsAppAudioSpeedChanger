const interval = setInterval(() =>{
	const header = document.querySelector("#side > header > div._3euVJ > div > span")
	if(header){
		clearInterval(interval)
		const button = document.createElement("div")
		button.className = "PVMjB"
		button.innerHTML = "<div role='button' title='Audio Speed'><span data-testid='audio_speed' data-icon='headphones-alt' class=''><svg xmlns='http://www.w3.org/2000/svg' viewBox='-200 0 700 512' width='24' height='24'><path fill='currentColor' d='M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z'></path></svg></span></div><span></span></div>"

		button.addEventListener("click", () => {
			let me = document.querySelector("#side > header > div._3euVJ > div > span > div:nth-child(4)")
			const audios = document.querySelectorAll("audio");
			if(me.className == "PVMjB"){
				me.className = "PVMjB _4QpsN"
				me.innerHTML = "<div role='button' title='Audio Speed'><span data-testid='audio_speed' data-icon='chat' class=''><svg xmlns='http://www.w3.org/2000/svg' viewBox='-200 0 700 512' width='24' height='24'><path fill='currentColor' d='M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z'></path></svg></span></div><span><div tabindex='-1' class='_2s_eZ _1bC39' style='transform-origin: right top; transform: scale(1); opacity: 1;'><ul class='I4jbF'><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='0.25'>0.25x</div></li><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='0.5'>0.5x</div></li><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='0.75'>0.75x</div></li><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='1'>Normal</div></li><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='1.25'>1.25x</div></li><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='1.5'>1.5x</div></li><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='1.75'>1.75x</div></li><li tabindex='-1' class='_1N-3y eP_pD _36Osw' data-animate-dropdown-item='true' style='opacity: 1;'><div class='Ut_N0 n-CQr' role='button' title='2'>2x</div></li></ul></div></span></div>"
				const audios = document.querySelectorAll("audio");
				audios.forEach((audio) => {
					audio.playbackRate = 2;
				})
			}else{
				me.className = "PVMjB"
				me.innerHTML = "<div role='button' title='Audio Speed'><span data-testid='audio_speed' data-icon='menu' class=''><svg xmlns='http://www.w3.org/2000/svg' viewBox='-200 0 700 512' width='24' height='24'><path fill='currentColor' d='M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z'></path></svg></span></div><span></span></div>"
				const audios = document.querySelectorAll("audio");
				audios.forEach((audio) => {
					audio.playbackRate = 1;
				})
			}
		})
		
		header.appendChild(button)
	}
},1000)