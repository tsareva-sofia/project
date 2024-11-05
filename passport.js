const node_for_click = document.getElementById("for_click");

        function find_edit() {
            const surname = document.getElementById('block4'); 
            const name = document.getElementById('block5');    
            const patronymic = document.getElementById('block6'); 

            surname.innerText = "TSAREVA"; 
            name.innerText = "SOFIA"; 
            patronymic.innerText = "DMITRIEVNA"; 
        }
        node_for_click.addEventListener("click", find_edit);