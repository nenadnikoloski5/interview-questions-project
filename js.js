const app = (function() {

    'use strict';


    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const submit = document.querySelector("#submitNew");
    const main = document.querySelector("#main");
    const length = document.querySelector("#length");


    submit.addEventListener("click", createNote)


   


    function createNote(){
        let newNote = document.createElement("li");
        newNote.innerHTML = `
        <div>
            <span>
    
                <div class="styleDivTitle">
            <p class="styleTitle">${title.value}</p>
        </div>
        <input type="text" class="hiddenTitleInput" value="">


        <div class="styleDivDesc">
            <p class="styleDesc">${description.value}</p>
            <textarea name="" class="hiddenDescriptionInput" cols="30" rows="10" ></textarea>

        </div>

            </span>
    
    
            
            <input type="button" class="changeNote" onclick="app.changeNote()" value="Change">
            <input type="button" class="deleteNote" onclick="app.deleteNote()" value="Delete">
        </div>        `;
        newNote.setAttribute("class", "notesNum")
        main.appendChild(newNote);
        length.textContent = Number(length.textContent) + 1
        title.value = "";
        description.value = "";
    }


    function deleteNote(click){
        event.target.parentElement.parentElement.remove();
        length.textContent = Number(length.textContent) - 1
    }

    

    function changeNote(click){

        let titleInputClass = event.target.previousElementSibling.children[1].attributes[1];
        let textareaInputClass = event.target.previousElementSibling.children[2].children[1].attributes[1];
        let titleInputValue = event.target.previousElementSibling.children[1];
        let textareaInputValue = event.target.previousElementSibling.children[2].children[1];

        let titleValue = event.target.previousElementSibling.children[0].children[0];
        let descValue = event.target.previousElementSibling.children[2].children[0];

        titleInputValue.addEventListener("keyup", editTitle);
        textareaInputValue.addEventListener("keyup", editDesc)


        function editTitle(){
            titleValue.textContent = titleInputValue.value
        }

        function editDesc(){
            descValue.textContent = textareaInputValue.value
        }

        if(titleInputClass.value === "hiddenTitleInput"){
            titleInputClass.value = "shownTitleInput";
            textareaInputClass.value = "shownDescriptionInput";
            titleInputValue.value = titleValue.textContent
            textareaInputValue.value = descValue.textContent
        } else {
            titleInputClass.value = "hiddenTitleInput";
            textareaInputClass.value = "hiddenDescriptionInput"
        }
    }



    return {
        createNote: createNote,
        deleteNote: deleteNote,
        changeNote: changeNote
    };

})();