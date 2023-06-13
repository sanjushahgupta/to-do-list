function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue !== "") {
        $('#list').append(li);
    } else {
        alert("Input field is empty.");
    }

    li.on("dblclick", () => {
        li.toggleClass("strike");
    });

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", () => {
        li.addClass("delete");
    })

    $('#list').sortable();

}




