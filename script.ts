export type QuizQuestion = {
	questionText: string,
	questionOptions: string[],
	correctOptionIndex: number
}

export type Quiz = {
	quizTitle: string
	quizQuestions: QuizQuestion[]
}

export const allQuizzes: Record<string, Quiz> = {
	capitals: {
		quizTitle: "Capitals",
		quizQuestions: [
			{
				questionText: "What is the capital of France?",
				questionOptions: ["Paris", "Berlin", "Rome", "Madrid"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the capital of Italy?",
				questionOptions: ["Venice", "Berlin", "Rome", "Madrid"],
				correctOptionIndex: 2
			},
			{
				questionText: "What is the capital of Spain?",
				questionOptions: ["Barcelona", "Berlin", "Rome", "Madrid"],
				correctOptionIndex: 3
			},
			{
				questionText: "What is the capital of Germany?",
				questionOptions: ["Paris", "Berlin", "Hamburg", "Madrid"],
				correctOptionIndex: 1
			},
			{
				questionText: "What is the capital of United Kingdom?",
				questionOptions: ["London", "Edinburgh", "Rome", "Madrid"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the capital of Portugal?",
				questionOptions: ["Paris", "Berlin", "Lisbon", "Porto"],
				correctOptionIndex: 2
			},
			{
				questionText: "What is the capital of Greece?",
				questionOptions: ["Paris", "Athens", "Thessaloniki", "Madrid"],
				correctOptionIndex: 1
			},
			{
				questionText: "What is the capital of Russia?",
				questionOptions: ["Paris", "Berlin", "Saint Petersburg", "Moscow"],
				correctOptionIndex: 3
			}
		]
	},
	animals: {
		quizTitle: "Animals",
		quizQuestions: [
			{
				questionText: "What is the largest mammal?",
				questionOptions: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
				correctOptionIndex: 1
			},
			{
				questionText: "What is the fastest land animal?",
				questionOptions: ["Cheetah", "Zebra", "Gazelle", "Lion"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the largest bird?",
				questionOptions: ["Ostrich", "Eagle", "Albatross", "Condor"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the tallest animal?",
				questionOptions: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
				correctOptionIndex: 1
			},
			{
				questionText: "What is the smallest mammal?",
				questionOptions: ["Mouse", "Bat", "Shrew", "Hedgehog"],
				correctOptionIndex: 1
			},
			{
				questionText: "What is the longest reptile?",
				questionOptions: ["Crocodile", "Komodo Dragon", "Python", "Anaconda"],
				correctOptionIndex: 3
			}
		],
	},
	webdev: {
		quizTitle: "Web Development",
		quizQuestions: [
			{
				questionText: "What does HTML stand for?",
				questionOptions: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
				correctOptionIndex: 0
			},
			{
				questionText: "What does CSS stand for?",
				questionOptions: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
				correctOptionIndex: 2
			},
			{
				questionText: "What does HTTP stand for?",
				questionOptions: ["Hyper Text Transfer Protocol", "Hyper Text Transfer Package", "Home Transfer Text Protocol", "Hyper Transfer Text Protocol"],
				correctOptionIndex: 0
			},
			{
				questionText: "What does API stand for?",
				questionOptions: ["Application Programming Interface", "Advanced Programming Interface", "Application Performance Index", "Advanced Performance Index"],
				correctOptionIndex: 0
			},
			{
				questionText: "What does JSON stand for?",
				questionOptions: ["JavaScript Object Notation", "JavaScript Object Network", "Java Standard Object Notation", "Java Standard Object Network"],
				correctOptionIndex: 0
			},
			{
				questionText: "What does AJAX stand for?",
				questionOptions: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Asynchronous Java and XML", "Advanced Java and XML"],
				correctOptionIndex: 0
			}
		]
	},
	appdev: {
		quizTitle: "App Development",
		quizQuestions: [
			{
				questionText: "What is the most popular mobile operating system?",
				questionOptions: ["iOS", "Android", "Windows Phone", "BlackBerry"],
				correctOptionIndex: 1
			},
			{
				questionText: "What programming language is used to develop Android apps?",
				questionOptions: ["Java", "Swift", "Kotlin", "Objective-C"],
				correctOptionIndex: 0
			},
			{
				questionText: "What programming language is used to develop iOS apps?",
				questionOptions: ["Java", "Swift", "Kotlin", "Objective-C"],
				correctOptionIndex: 1
			},
			{
				questionText: "What is the most popular programming language for web development?",
				questionOptions: ["JavaScript", "Python", "Java", "C#"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the most popular JavaScript framework for front-end development?",
				questionOptions: ["React", "Vue", "Angular", "Ember"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the most popular JavaScript runtime for back-end development?",
				questionOptions: ["Node.js", "Deno", "Express.js", "Koa.js"],
				correctOptionIndex: 0
			}
		]
	},
	mathematics: {
		quizTitle: "Mathematics",
		quizQuestions: [
			{
				questionText: "What is the square root of 16?",
				questionOptions: ["2", "4", "8", "16"],
				correctOptionIndex: 1
			},
			{
				questionText: "What is the derivative of x^2?",
				questionOptions: ["2x", "x^2", "x", "2x^2"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the integral of 2x?",
				questionOptions: ["x^2", "2x^2", "x", "2x"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the value of Pi up to three decimal places?",
				questionOptions: ["3.141", "3.14", "3.1", "3"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the formula for the area of a circle?",
				questionOptions: ["pi*r^2", "2*pi*r", "pi*r", "r^2"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the Pythagorean theorem?",
				questionOptions: ["a^2 + b^2 = c^2", "a^2 = b^2 + c^2", "a^2 + b^2 = 2c", "a + b = c"],
				correctOptionIndex: 0
			}
		]
	},
	physics: {
		quizTitle: "Physics",
		quizQuestions: [
			{
				questionText: "What is the speed of light in vacuum?",
				questionOptions: ["299,792 km/s", "150,000 km/s", "1,080 km/h", "1,000 km/s"],
				correctOptionIndex: 0
			},
			{
				questionText: "Who is known as the father of modern physics?",
				questionOptions: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the force of gravity on Earth?",
				questionOptions: ["9.8 m/s^2", "10 m/s^2", "9.8 km/s^2", "10 km/s^2"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the first law of thermodynamics?",
				questionOptions: ["Energy cannot be created or destroyed", "Entropy of isolated systems never decreases", "Force equals mass times acceleration", "Every action has an equal and opposite reaction"],
				correctOptionIndex: 0
			},
			{
				questionText: "What does E=mc^2 stand for?",
				questionOptions: ["Energy equals mass times the speed of light squared", "Energy equals mass times current squared", "Electric field equals magnetic field times current squared", "Energy equals mass times charge squared"],
				correctOptionIndex: 0
			},
			{
				questionText: "What is the Heisenberg's uncertainty principle?",
				questionOptions: ["It is impossible to simultaneously measure the exact position and momentum of a particle", "Energy cannot be created or destroyed", "Every action has an equal and opposite reaction", "Entropy of isolated systems never decreases"],
				correctOptionIndex: 0
			}
		]
	}
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleOptionsAndUpdateIndex(allQuizzes: Record<string, Quiz>) {
    for (const quizKey in allQuizzes) {
        const quiz = allQuizzes[quizKey];
        for (const question of quiz.quizQuestions) {
            const correctOption = question.questionOptions[question.correctOptionIndex];
            question.questionOptions = shuffleArray(question.questionOptions);
            question.correctOptionIndex = question.questionOptions.indexOf(correctOption);
        }
    }
}

shuffleOptionsAndUpdateIndex(allQuizzes);

const LOADER_TIME_SECONDS = 0.5

window.addEventListener("load", async () => {
	// Remove me to get rid of that annoying message
	const credits = document.querySelector("#credits")
	if (credits === null || !credits.textContent?.includes("Arnav Deo")){
		alert("Trying to steal content, are we? Don't worry, remove lines 260-263 in file script.ts")
		return
	}
	// Remove me to get rid of that annoying message

	const loaderElement = document.querySelector("#loader")
	if (!loaderElement){
		throw new Error("Loader element not found!")
	}

	loaderElement.classList.toggle("hidden")
	loaderElement.classList.toggle("animate-pulse")

	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(true)
		}, LOADER_TIME_SECONDS * 1000)
	})

	loaderElement.classList.toggle("hidden")
	loaderElement.classList.toggle("animate-pulse")

	const quizList = document.querySelector("#quiz-list")
	if (!quizList){
		throw new Error("Quiz list element not found!")
	}

	quizList.classList.toggle("hidden")
	document.title = "Quizzes"

	const quizBody = document.querySelector("#quiz")

	if (!quizBody){
		throw new Error("Quiz body element not found!")
	}

	const unloadQuiz = () => {
		quizList.classList.toggle("hidden")
		quizBody.classList.toggle("hidden")
		document.title = "Quizzes"
	}

	const loadQuiz = (quizId: string) => {
		let correctCount = 0, incorrectCount = 0;
		const quizData = allQuizzes[quizId]
		if (quizData === undefined){
			throw new Error("Quiz not found!")
		}

		quizList.classList.toggle("hidden")
		document.title = `${quizData.quizTitle} Quiz`

		const loadQuizQuestion = (questionIdx: number) => {
			const quizQuestion = quizData.quizQuestions[questionIdx]
			if (quizQuestion === undefined){
				alert(`You got ${correctCount} answers correct.\nYou got ${incorrectCount} answers wrong.`)
				unloadQuiz()
			} else {
				const questionTitle = document.querySelector("#question")
				const questionOptions = document.querySelector("#question-options")
				if (questionTitle === null){
					throw new Error("Question title element not found!")
				}

				if (questionOptions === null){
					throw new Error("Question options element not found!")
				}

				questionTitle.textContent = quizQuestion.questionText

				const childElements = document.querySelectorAll("#question-options > *")
				childElements.forEach((childElem) => {
					childElem.remove()
				})

				quizQuestion.questionOptions.forEach((quizOption, optionIndex) => {
					const optionButton = document.createElement("button")
					optionButton.textContent = quizOption
					optionButton.classList.add("p-4", "flex-grow", "rounded-xl", "border-2", "border-black", "text-3xl", "font-bold", "hover:text-white", "hover:bg-gray-800", "transition-colors", "duration-300")
					optionButton.addEventListener("click", (ev) => {
						if (optionIndex === quizQuestion.correctOptionIndex){
							alert("Correct answer!")
							correctCount++
						} else {
							alert("Incorrect answer!")
							incorrectCount++
						}
						loadQuizQuestion(questionIdx + 1)
					})
					questionOptions.appendChild(optionButton)
				})
			}
		}

		quizBody.classList.toggle("hidden")
		loadQuizQuestion(0)
	}

	const onQuizButtonClick = (event: MouseEvent) => {
		const targetButton = event.target as (HTMLButtonElement | null)
		if (!targetButton){
			return
		}
		const targetQuiz = targetButton.dataset.quizId
		if (!targetQuiz){
			throw new Error("Quiz ID not found!")
		}

		loadQuiz(targetQuiz)
	}

	Object.entries(allQuizzes).forEach(([quizId, quiz]) => {
		const quizButton = document.createElement("button")
		quizButton.dataset.quizId = quizId
		quizButton.textContent = quiz.quizTitle
		quizButton.addEventListener("click", onQuizButtonClick)
		quizButton.classList.add("flex-grow", "rounded-xl", "border-2", "border-black", "text-3xl", "font-bold", "hover:text-white", "hover:bg-gray-800", "transition-colors", "duration-300")
		quizList.appendChild(quizButton)
	})
})

export {}