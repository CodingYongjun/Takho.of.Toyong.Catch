const St=document.querySelector('.start>a');
        const outTyping=document.querySelector('.outTyping');
        const typingArea=document.querySelector('.typing');
        const textSource=outTyping.innerText;
        const textArray=textSource.split('');
        let index=0;

		St.addEventListener('click',()=>{
			const typing=()=>{
				if(index<textArray.length){
					typingArea.append(textArray[index]);
					index++;
				}else{
					clearInterval(typ);
				}
			}
			let typ=setInterval(typing,50);
		});