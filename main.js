var friends = [];
function submit() {
    var name1 = document.getElementById("Friend1").value; 
    var name2 = document.getElementById("Friend2").value;
    var name3 = document.getElementById("Friend3").value;
    var name4 = document.getElementById("Friend4").value;
    var name5 = document.getElementById("Friend5").value;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sortName").style.display = "inline-block";

    friends.push(name1);
    friends.push(name2);
    friends.push(name3);
    friends.push(name4);
    friends.push(name5)
    console.log(friends);
    document.getElementById("displayName").innerHTML = friends;


}

function sort() {
    friends.sort();
    document.getElementById("displayName").innerHTML = friends;
}