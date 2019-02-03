function loadDoc() {
    let users;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            users = JSON.parse(this.responseText);
            // console.log(users);
            for (let user of users) {
                // col-lg-4
                let col4 = document.createElement('div');
                col4.setAttribute('class', 'col-lg-3 mb-4');
                // card
                let card = document.createElement('div');
                card.setAttribute('class', 'card');
                // img
                let img = document.createElement('img');
                img.setAttribute('src', user.avatar_url);
                img.setAttribute('class', 'card-img-top');
                // card body
                let cardBody = document.createElement('div');
                cardBody.setAttribute('class', 'card-body');
                // card-title
                let cardTitle = document.createElement('h5');
                cardTitle.setAttribute('class', 'card-title');
                cardTitle.textContent = user.login;

                // card body 1
                let cardBody1 = document.createElement('div');
                cardBody1.setAttribute('class', 'card-body');

                // card body btn
                let cardBodyBtn = document.createElement('button');
                cardBodyBtn.setAttribute('class', 'btn btn-primary btn-sm show');
                cardBodyBtn.setAttribute('data-toggle', 'modal');
                cardBodyBtn.setAttribute('id', user.avatar_url);
                // cardBodyBtn.setAttribute('data-toggle', '#modelId');
                cardBodyBtn.setAttribute('type', 'button');

                let btnText = document.createTextNode('show');
                cardBodyBtn.appendChild(btnText);
                cardBody1.appendChild(cardBodyBtn);

                card.appendChild(img);
                card.appendChild(cardBody);
                card.appendChild(cardTitle);
                card.appendChild(cardBody1);
                col4.appendChild(card);

                document.getElementById('demo').appendChild(col4);
            }


        }
    };
    xhttp.open("GET", "https://api.github.com/users", true);
    xhttp.send();
}

document.getElementById("load").addEventListener('click', loadDoc, false);

