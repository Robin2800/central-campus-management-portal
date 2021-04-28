function search() {
    var input = document.getElementById("searchInput");
    var searchValue = input.value.toUpperCase();
    var table = document.getElementById("table");
    var tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            var value = td.textContent.toUpperCase();
            if (value.indexOf(searchValue) > -1) {
                tr[i].style.display = "table-row";
            }
            else tr[i].style.display = "none";
        }
    }
}
