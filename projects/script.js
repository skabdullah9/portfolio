let folders= ['1_Drum_kit', 'https://covid19-live-report.netlify.app/', '3_FlexBox_Gallery', '4_Mouse_Move_Shadow', '5_Follow_Along_Link_Highlighter','6_Text_To_Speech','7_Stripe_Follow_Along_Nav', '8_Bookmarks_App', 'https://netinfo.netlify.app/','10_Hotel_Menu_Site', '11_Number_Facts', '12_piano_app', '13_Pick_Color_Game', '14_String_to_Array', '15_tabs', '16_Typing_Game', '17_Weather_Api_Website','18_Quote_Generator', '19_randomHex', '20 _reviews' ]

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

