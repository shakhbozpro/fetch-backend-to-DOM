const URL = 'https://jsonplaceholder.typicode.com/users';
const $list = document.getElementById("list");
const $template = document.getElementById("template").content;

fetch(URL)
    .then(res => res.json())
    .then(res => {
        res.forEach(item => {
            const clonedTemplate = $template.cloneNode(true);

            const tempItem = clonedTemplate.getElementById("item");
            const tempId = clonedTemplate.getElementById("url-id");
            const tempName = clonedTemplate.getElementById("url-name");
            const tempEmail = clonedTemplate.getElementById("url-email");
            const tempAddress = clonedTemplate.getElementById("url-address");
            const tempTel = clonedTemplate.getElementById("url-tel");
            const tempWebSite = clonedTemplate.getElementById("url-web-site");

            tempId.textContent = "Id:" + " " + item.id;
            tempName.textContent = "Name:" + " " + item.name;
            tempEmail.textContent = "Email:" + " " + item.email;
            tempAddress.textContent = "Address:" + " " + item.address.city + " " + item.address.street + " " + item.address.suite;
            tempTel.textContent = "Tel:" + " " + item.phone;
            tempTel.textContent = "Web-site:" + " " + item.website;


            tempItem.appendChild(tempId);
            tempItem.appendChild(tempName);
            tempItem.appendChild(tempEmail);
            tempItem.appendChild(tempAddress);
            tempItem.appendChild(tempTel);
            tempItem.appendChild(tempWebSite);

            $list.appendChild(tempItem);
        });

        console.log(res);
    })