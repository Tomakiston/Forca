let player1_name = localStorage.getItem("player1_name");
let player2_name = localStorage.getItem("player2_name");
let player1_score = 0;
let player2_score = 0;


document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Turno de pergunta: " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de resposta: " + player2_name;

function send() {
    let get_word = document.getElementById("word").value;
    let word = get_word.toLowerCase();

    let charAt1 = word.charAt(1);
    let length_divide_2 = Math.floor(word.length/2);
    let charAt2 = word.charAt(length_divide_2);
    let length_minus_1 = word.length - 1;
    let charAt3 = word.charAt(length_minus_1);
    let remove_charAt1 = word.replace(charAt1, "_");
    let remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    let remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    
    let question_word = "<h4 id='word_display'>P. " + remove_charAt3 + "</h4>";
    let input_box = "<br>Resposta: <input type='text' id='input_check_box'>";
    let check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Verificar</button>";
    let row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

let question_turn = "player1";
let answer_turn = "player2";

function check() {
    let get_answer = document.getElementById("input_check_box").value;
    let answer = get_answer.toLowerCase();

    if(answer == word) {
        if(answer_turn === "player2") {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }

    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Turno de pergunta: " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Turno de pergunta: " + player1_name;
    }

    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Turno de resposta: " + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Turno de resposta: " + player1_name;
    }
    
    document.getElementById("output").innerHTML = "";
}