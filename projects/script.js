let folders= ['https://firechatonline.netlify.app', 'https://ipaddresstrackonline.netlify.app', 'https://netinfo.netlify.app', '10_Typing_Game',  'https://covid19-live-report.netlify.app', '4_Text_To_Speech', 'https://gifffinder.netlify.app', '5_Bookmarks_App', 'https://vuexcart.netlify.app', '7_Hotel_Menu_Site', '6_piano_app',  '8_Pick_Color_Game',   'https://todontodo.netlify.app','3_Mouse_Move_Shadow',  '11_randomHex', ]

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

