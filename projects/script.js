let folders= ['https://firechatonline.netlify.app', 'https://ipaddresstrackonline.netlify.app', 'https://netinfo.netlify.app', '10_Typing_Game','https://todontodo.netlify.app', '4_Text_To_Speech', 'https://gifffinder.netlify.app', '5_Bookmarks_App', 'https://vuexcart.netlify.app', '6_piano_app',  '8_Pick_Color_Game',     '11_randomHex', '3_Mouse_Move_Shadow',]

document.addEventListener('DOMContentLoaded',()=>{
const thumbnails = document.querySelectorAll('.grid__item')
thumbnails.forEach((item,index)=>{
	item.classList.add(`item-${index}`);
	item.addEventListener('click',()=>{
	if(folders[index].includes('_')) {
		window.open(`${folders[index]}/index.html`,"_blank")
	} else {
		window.open(`${folders[index]}/`,"_blank")
	}
	
	})
})
})

