class Buttons {
    constructor(parentNode, nameList, titleList, buttonWrapperName, callBack = null){
        this.nameList = nameList;
        this.titleList = titleList;
        this.parentNode = parentNode;

        this.div = document.createElement('div');
        this.div.setAttribute('class', 'buttonWrapper ' + buttonWrapperName);
        this.parentNode.appendChild(this.div);

        for (let i = 0; i < this.nameList.length; i++) {
            let createdButton = document.createElement('button');
            createdButton.setAttribute('class', 'b1');
            createdButton.innerHTML = "<span class='colorText'>"+ this.nameList[i] +"</span>";
            createdButton.setAttribute('title', this.titleList[i]);
            this.div.appendChild(createdButton);
        }

        if(this.div.childNodes.length === 1){
            for (let i = 0; i < this.div.childNodes.length; i++) {
                const btn = this.div.childNodes[i];
    
                btn.addEventListener('mousedown', ()=>{
                    btn.setAttribute('active', true);
                    for (let j = 0; j < this.div.childNodes.length; j++) {
                        if(i!==j){
                            this.div.childNodes[j].setAttribute('active', false);
                        }
                    }
                });
                btn.addEventListener('mouseup', () => {
                    btn.setAttribute('active', false);
                })
            }
        }
        else {
            for (let i = 0; i < this.div.childNodes.length; i++) {
                const btn = this.div.childNodes[i];
                btn.addEventListener('click', (ev)=>{
                    btn.setAttribute('active', true);
                    for (let j = 0; j < this.div.childNodes.length; j++) {
                        if(i!==j){
                            this.div.childNodes[j].setAttribute('active', false);
                        }
                    }
                });
            }
        }
    }
}

// let createdTopBar = document.querySelector('#topBar .topBarWrapper');
// let majorDiv = document.querySelector('.major');

// let menuButtons = new Buttons(createdTopBar, ['Appointment', 'History', 'About Us', 'Subscription'], ['Appointment', 'History', 'About Us', 'Subscription'], "menuButtons");
// let searchButton = new Buttons(createdTopBar, ['Search'], ['Search'], 'searchButton');

// let leftColumnButtons = new Buttons(majorDiv, ['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'c', 'd', 'e'], "three");

// let rightColumnButtons = new Buttons(majorDiv, ['f', 'g', 'h', 'i', 'j'], ['f', 'g', 'h', 'i', 'j'], "four");

// let leftMiddleButtons = new Buttons(majorDiv, ['Appointment', 'History', 'About Us', 'Subscription'], ['Appointment', 'History', 'About Us', 'Subscription'], "one");

// let rightMiddleButtons = new Buttons(majorDiv, ['Appointment', 'History', 'About Us', 'Subscription'], ['Appointment', 'History', 'About Us', 'Subscription'], "two");

export default Buttons;