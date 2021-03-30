let folders= ['1_Drum_kit', '2_Analog_Clock', '3_FlexBox_Gallery', '4_Mouse_Move_Shadow', '5_Follow_Along_Link_Highlighter','6_Text_To_Speech','7_Stripe_Follow_Along_Nav', '8_Bookmarks_App', '9_calculator','10_Hotel_Menu_Site', '11_Number_Facts', '12_piano_app', '13_Pick_Color_Game', '14_String_to_Array', '15_tabs', '16_Typing_Game', '17_Weather_Api_Website','18_Quote_Generator', '19_randomHex', '20 _reviews' ]

document.addEventListener('DOMContentLoaded',()=>{
const thumbnails = document.querySelectorAll('.grid__item')
thumbnails.forEach((item,index)=>{
	item.classList.add(`item-${index}`);
	item.addEventListener('click',()=>{
	window.open(`${folders[index]}/index.html`,"_blank")
	})
})
})

