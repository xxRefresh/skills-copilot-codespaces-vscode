function skillsmember() {
    var skills = document.getElementById("skills").value;
    var skills = skills.split(",");
    var skills = skills.map(function(item) {
        return item.trim();
    });
    var skills = skills.filter(function(item) {
        return item.length > 0;
    });
    var skills = skills.map(function(item) {
        return item.toUpperCase();
    });
    var skills = skills.sort();
    var skills = skills.join(", ");
    document.getElementById("skills").value = skills;
}