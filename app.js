const questions = [
  {
    question: "Quelle est la signification de la lettre 'S' dans l'acronyme SOLID ?",
    options: ["Single Responsibility (Responsabilité Unique)", "Sequential Operation (Opération Séquentielle)", "Simple Structure (Structure Simple)", "Shared Object Model (Modèle d'Objet Partagé)"],
    answer: 1
  },
  {
    question: "Selon le Principe de Responsabilité Unique (SRP), une classe doit avoir un seul et unique motif de changement. Que signifie 'motif de changement' ici ?",
    options: ["Le nombre de méthodes qu'elle contient", "Une raison ou un domaine de responsabilité distinct", "La fréquence des mises à jour du code", "Le niveau de complexité algorithmique"],
    answer: 1
  },
  {
    question: "Le Principe Ouvert/Fermé (OCP) stipule que les entités logicielles doivent être...",
    options: ["Ouvertes aux extensions mais fermées aux modifications", "Fermées aux extensions mais ouvertes aux modifications", "Ouvertes tant aux extensions qu'aux modifications", "Fermées tant aux extensions qu'aux modifications"],
    answer: 0
  },
  {
    question: "Dans le contexte du Principe de Substitution de Liskov (LSP), si la classe B est un sous-type de la classe A, alors des objets de type A peuvent être remplacés par des objets de type B sans altérer...",
    options: ["La syntaxe du programme", "Les performances de l'exécution", "La lisibilité du code source", "La correction du fonctionnement du programme"],
    answer: 3
  },
  {
    question: "Quel problème principal le Principe de Séparation des Interfaces (ISP) vise-t-il à résoudre par rapport au principe de Hiérarchie d'Interfaces Large (LIP) ?",
    options: ["La redondance des codes sources", "Le manque de polymorphisme", "Les interfaces 'gras' qui obligent les implémentations à fournir des méthodes inutiles", "La difficulté de debugger le code hérité"],
    answer: 2
  },
  {
    question: "Le Principe d'Inversion de Dépendance (DIP) propose que les modules de haut niveau ne doivent pas dépendre de modules de bas niveau, mais plutôt de...",
    options: ["Des classes concrètes fortement couplées", "Des abstractions", "Des fonctions statiques globales", "Des bibliothèques tierces externes"],
    answer: 1
  },
  {
    question: "Quelle est la principale critique adressée aux grandes interfaces monolithiques selon le principe ISP ?",
    options: ["Elles forcent les classes clientes à dépendre de méthodes qu'elles n'utilisent pas", "Elles ralentissent excessivement la compilation du projet", "Elles empêchent l'utilisation de l'héritage multiple", "Elles augmentent la consommation mémoire de manière significative"],
    answer: 0
  },
  {
    question: "Si une classe fille peut lever une exception non prévue lors de l'appel d'une méthode héritée, cela viole généralement quel principe ?",
    options: ["Le principe SRP", "Le principe OCP", "Le principe ISP", "Le principe LSP"],
    answer: 3
  },
  {
    question: "Dans le cadre du DIP, pourquoi est-il préférable de dépendre d'une abstraction plutôt que d'une classe concrète ?",
    options: ["Car les abstractions sont plus rapides à exécuter", "Car cela permet de changer l'implémentation sous-jacente sans modifier le code client", "Car cela supprime le besoin de tests unitaires", "Car les abstractions occupent moins d'espace mémoire"],
    answer: 1
  },
  {
    question: "Un développeur modifie une bibliothèque existante pour ajouter une nouvelle fonctionnalité au lieu de créer une nouvelle classe qui étend le comportement. Quelle violation SOLID commet-il potentiellement ?",
    options: ["Violation du SRP", "Violation du LSP", "Violation de l'OCP", "Violation du DIP"],
    answer: 2
  },
  {
    question: "Lequel des énoncés suivants décrit correctement le Principe de Responsabilité Unique (SRP) ?",
    options: ["Une classe ne devrait avoir qu'une seule raison de changer", "Une classe devrait contenir toutes les fonctionnalités possibles", "Plusieurs classes peuvent partager la même responsabilité", "Les responsabilités doivent être réparties sur autant de classes que possible"],
    answer: 0
  },
  {
    question: "L'injection de dépendances est une technique courante utilisée pour respecter quel principe SOLID ?",
    options: ["Le principe de Responsabilité Unique (SRP)", "Le principe Ouvert/Fermé (OCP)", "Le principe de Substitution de Liskov (LSP)", "Le principe d'Inversion de Dépendance (DIP)"],
    answer: 3
  },
  {
    question: "Si une interface impose trente méthodes mais qu'une implémentation n'en utilise que cinq, quelle recommandation issue de SOLID s'applique ?",
    options: ["Augmenter l'utilisation des cinquante méthodes restantes", "Diviser l'interface en plusieurs interfaces plus petites et spécifiques", "Implémenter les vingt-cinq méthodes manquantes avec des corps vides", "Ignorer cette règle car les interfaces sont flexibles"],
    answer: 1
  },
  {
    question: "Pour qu'un principe soit conforme à l'OCP, l'ajout de nouvelles fonctionnalités doit idéalement se faire via...",
    options: ["La modification directe des classes déjà compilées", "L'édition des fichiers binaires", "L'ajout de nouveau code (héritage, composition, interfaces)", "La suppression des anciennes fonctionnalités obsolètes"],
    answer: 2
  },
  {
    question: "Quelle conséquence découle souvent d'une mauvaise application du SRP sur la maintenance du code ?",
    options: ["Une classe devient difficile à comprendre, tester et modifier car elle gère trop de concepts", "Le code devient automatiquement plus rapide", "Les autres principes SOLID deviennent automatiquement valides", "Il n'y a aucune conséquence sur la maintenance"],
    answer: 0
  },
  {
    question: "Un parent définit une méthode qui retourne toujours une valeur positive, mais son enfant override cette méthode pour retourner une valeur négative dans certains cas, ce qui brise les attentes des clients. Quelle violation SOLID s'agit-il ?",
    options: ["Violation du SRP", "Violation de l'OCP", "Violation de l'ISP", "Violation du LSP"],
    answer: 3
  },
  {
    question: "Lors de la conception orientée objet, favorise-t-on la composition ou l'héritage profond pour faciliter le respect de l'OCP ?",
    options: ["L'héritage profond est préféré car il réutilise plus de code", "La composition est souvent préférée car elle permet de changer le comportement à la volée sans modifier la hiérarchie", "Les deux sont strictement équivalents dans tous les contextes", "Ni l'un ni l'autre n'a d'importance"],
    answer: 1
  },
  {
    question: "Que signifie que le 'code client' ne doit pas inclure d'instructions 'import' ou 'new' pointant vers des implémentations concrètes selon le DIP ?",
    options: ["Cela rend le code plus difficile à lire", "Cela augmente la taille finale de l'application", "Cela permet de swapping des implémentations (ex: remplacement d'une base de données) sans toucher au code client", "Cela interdit l'utilisation de bibliothèques externes"],
    answer: 2
  },
  {
    question: "Parmi les options suivantes, laquelle est une pratique recommandée pour appliquer l'ISP ?",
    options: ["Créer des interfaces spécialisées par comportement métier", "Regrouper tous les comportements liés dans une seule interface massive", "Éviter d'utiliser des interfaces", "Utiliser uniquement des classes abstraites sans méthodes"],
    answer: 0
  },
  {
    question: "Lequel des éléments suivants n'est PAS un avantage direct du respect des principes SOLID ?",
    options: ["Meilleure maintenabilité du code", "Code exécutable plus rapidement au niveau machine", "Plus grande testabilité des composants", "Flexibilité accrue face aux changements de besoins"],
    answer: 1
  }
];

const state = {
  index: 0,
  score: 0,
  selected: null,
  answers: []
};

const quizCard = document.getElementById("quiz-card");
const resultCard = document.getElementById("result-card");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const LETTERS = ["A", "B", "C", "D"];

function renderQuestion() {
  const q = questions[state.index];
  state.selected = null;

  progressFill.style.width = `${(state.index / questions.length) * 100}%`;
  progressText.textContent = `Question ${state.index + 1} sur ${questions.length}`;

  quizCard.innerHTML = "";

  const title = document.createElement("h2");
  title.className = "question-title";
  title.textContent = q.question;
  quizCard.appendChild(title);

  const list = document.createElement("ul");
  list.className = "options";

  q.options.forEach((text, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.dataset.index = i;

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = LETTERS[i];

    const label = document.createElement("span");
    label.textContent = text;

    btn.append(letter, label);
    btn.addEventListener("click", () => selectOption(i));
    li.appendChild(btn);
    list.appendChild(li);
  });

  quizCard.appendChild(list);

  const feedback = document.createElement("p");
  feedback.id = "feedback";
  feedback.className = "feedback";
  quizCard.appendChild(feedback);

  const actions = document.createElement("div");
  actions.className = "actions";

  const validateBtn = document.createElement("button");
  validateBtn.type = "button";
  validateBtn.className = "btn btn-primary";
  validateBtn.id = "validate-btn";
  validateBtn.textContent = "Valider";
  validateBtn.disabled = true;
  validateBtn.addEventListener("click", validateAnswer);

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "btn btn-secondary";
  nextBtn.id = "next-btn";
  nextBtn.textContent = state.index === questions.length - 1 ? "Voir le résultat" : "Suivant";
  nextBtn.disabled = true;
  nextBtn.addEventListener("click", nextQuestion);

  actions.append(validateBtn, nextBtn);
  quizCard.appendChild(actions);
}

function selectOption(i) {
  if (state.answers[state.index] !== undefined) return;
  state.selected = i;
  document.querySelectorAll(".option-btn").forEach((btn, idx) => {
    btn.classList.toggle("selected", idx === i);
    btn.setAttribute("aria-pressed", idx === i ? "true" : "false");
  });
  document.getElementById("validate-btn").disabled = false;
}

function validateAnswer() {
  if (state.selected === null || state.answers[state.index] !== undefined) return;
  const q = questions[state.index];
  const isCorrect = state.selected === q.answer;
  state.answers[state.index] = state.selected;
  if (isCorrect) state.score++;

  document.querySelectorAll(".option-btn").forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add("correct");
    else if (idx === state.selected) btn.classList.add("wrong");
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = isCorrect ? "Bonne réponse !" : "Mauvaise réponse. La bonne réponse est surlignée en vert.";
  feedback.classList.add(isCorrect ? "ok" : "ko");

  document.getElementById("validate-btn").disabled = true;
  document.getElementById("next-btn").disabled = false;
  document.getElementById("next-btn").focus();
}

function nextQuestion() {
  state.index++;
  if (state.index < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizCard.classList.add("hidden");
  progressFill.style.width = "100%";
  progressText.textContent = `Terminé : ${questions.length} questions`;

  const percent = Math.round((state.score / questions.length) * 100);
  document.getElementById("score-text").textContent = `${state.score} / ${questions.length} (${percent} %)`;

  let message = "Il reste du travail sur les principes SOLID, relisez les définitions.";
  if (percent >= 80) message = "Excellent, vous maîtrisez les principes SOLID !";
  else if (percent >= 50) message = "Bon travail, quelques notions méritent une relecture.";
  document.getElementById("score-message").textContent = message;

  resultCard.classList.remove("hidden");
  document.getElementById("restart-btn").focus();
}

function restart() {
  state.index = 0;
  state.score = 0;
  state.selected = null;
  state.answers = [];
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
}

document.getElementById("restart-btn").addEventListener("click", restart);
renderQuestion();
