var score = 0;
var hangStage = 0;
var ans_dict = {
        0: ["aabb", "aaa", "aabbbbb", "bbaa", "B"],
        1: ["q1q2q3q4", "q2q3q3q4", "q1q1q2q4", "q1q1q2q2", "C"],
        2: ["εU((aUb)a*b((a(aUb)Ub)a*b)*(εUa))", "((aUb)a*b((a(aUb)Ub)a*b)*(εUa))", "((aUb)a*b((a(aUb)Ub)a*b)(aUb)", "(aUb)a*b((a(aUb)Ub)", "A"],
        3: ["Complement of L(A) is  context free", "There is only one accept state", "A accepts all strings over {0,1} of length at least 2.", "1100 is accepted.", "C"],
        4: ["The start state is q1", "When getting 1 on q1 the state is not changed to q3", "There are two final states.", "q4 is the final state", "C"],
        5: ["x=p, y=qr, z=s", "x=p,z=qrs", "x=pr, y=r, z=s", "All of the mentioned ", "A"],
        6: ["divisible by 2", "divisible by 3", "divisible by 2 and 5", "divisible by 3 and 2", "D"],
        7: ["(0+1)*001(0+1)*", "1*001(0+1)*", "(01)*(0+0+1)(01)*", "None of the mentioned", "A"],
        8: ["q1", "q2", "q1, q2", "q3", "B"],
        9: ["q0, q1", "q0, q2", "q1, q2", "q0, q1, q2", "D"],
        10: ["yes w ∈ L", "no w ∉ L", "M does not halt w ∉ L", "None of the mentioned", "D"],
        11: ["L= {x ϵ {0, 1} * | x ends in 1 and does not contain substring 01}", "L= {x ϵ {0,1} * |x ends in 1 and does not contain substring 00}", "L= {x ϵ {0,1} |x ends in 1 and does not contain substring 00}", "L= {x ϵ {0,1} * |x ends in 1 and does not contain substring 11}", "B"],
        12: ["P->1100", "P->0110", "P->1100ε", "P->0101", "B"],
        13: ["This is DFA", "It has final state q0", "It has final state q1", "This is NFA", "D"],
        14: ["a(bab)*∪a(ba)*", "a(bab)*", "a(bab)*∪a", "a(ba)*", "A"],
        15: ["{q0}", "{q1} U {q0, q1, q2}", "{q2, q1}", "{q3, q1, q2, q0}", "B"],
        16: ["4", "3", "2", "1", "D"],
        17: ["Correct", "Incorrect, Incomplete DFA", "Wrong proposition", "May be correct", "C"],
    }
var question_list = [
    "Given the DFA M1 Out of the following inputs which input is accepted:",
    "Given the DFA M2 ,What sequence of state does machine go on the input aabb?",
    "Given the finite machine below, what is the equivalent regular expression for this?",
    "Consider the DFA A given below. Which of the following are False?",
    "In the given NFA below, which of the following is True?",
    "If d is the final state, which of the following is correct according to the diagram.",
    "Which of the following x is accepted by the given DFA(x is  binary string ∑ ={0,1}?",
    "Which of the following is same as the given DFA?",
    "Which of the following states would be noted as the final state/acceptance state? L= {xϵ∑= {a, b} | length of x is 2}",
    "Which of the following are the final states in the given DFA according to the Language given.? L= {xϵ∑= {a, b} |length of x is at most 2}",
    "A language  is recursively enumerable if L =L(M)  for some Turing Machine M. Which among the following cannot be among A, B and C?",
    " Which of the following is the corresponding Language to the given DFA?",
    "Which of the following does the given parse tree correspond to?",
    "Which of the following is True?",
    "Which is the equivalent regular expression for this?",
    "From the given table, δ*(q0, 011) =?",
    "According to the given table, compute the number of transitions with 1 as its symbol but not 0.",
    "Choose the correct option for the given statement.'The DFA shown represents all strings which has 1 at second last position.'"
]
var random_number, str_random_num, image_file_name;

function loadQA(){
    random_number = Math.floor(((Math.random() * 10) + 1)%17);
    str_random_num = random_number.toString();
    image_file_name = "assets/" + str_random_num + ".png";

    // Change image and choices as per the random number
    document.getElementById("state_machine").src = image_file_name;
    document.getElementById("question_text").innerHTML = question_list[random_number];
    document.getElementById("choice_one").innerHTML = "A) " + ans_dict[random_number][0];
    document.getElementById("choice_two").innerHTML = "B) " + ans_dict[random_number][1];
    document.getElementById("choice_three").innerHTML = "C) " + ans_dict[random_number][2];
    document.getElementById("choice_four").innerHTML = "D) " + ans_dict[random_number][3];
}

function updateScore() {
document.getElementById("score_display").innerHTML = "Score: " + score.toString();
}

function updateHangStage() {
document.getElementById("hang_stage_display").innerHTML = "Hang Stage: " + hangStage.toString();
}

function checkChoiceA() {
    // checkGameStage();
    if (ans_dict[random_number][4] == "A") {
        score += 5;
        updateScore();
    } else {
        hangStage += 1;
        updateHangStage();
    }
    loadQA();
}

function checkChoiceB() {
    // checkGameStage();
    if (ans_dict[random_number][4] == "B") {
        score += 5;
        updateScore();
    } else {
        hangStage += 1;
        updateHangStage();
    }
    loadQA();
}

function checkChoiceC() {
    // checkGameStage();
    if (ans_dict[random_number][4] == "C") {
        score += 5;
        updateScore();
    } else {
        hangStage += 1;
        updateHangStage();
    }
    loadQA();
}

function checkChoiceD() {
    // checkGameStage();
    if (ans_dict[random_number][4] == "D") {
        score += 5;
        updateScore();
    } else {
        hangStage += 1;
        updateHangStage();
    }
    loadQA();
}
