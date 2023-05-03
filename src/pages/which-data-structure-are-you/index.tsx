import Head from 'next/head';
import React, {useCallback, useState} from "react";

type PersonalityName = "array"
  | "linked-list"
  | "stack"
  | "queue"
  | "binary-tree"
  | "heap"
  | "hash-map"
  | "graph"
  | "fibonacci"


type Personality = {
  name: PersonalityName,
  display: string,
  description: string,
}

const personalities: Array< Personality> = [
  {
    name: "array",
    display: "an Array",
    description: "You are a traditional person. You like to do things the way they were always done before. With you, " +
      "what you see is what you get",
  },
  {
    name: "linked-list",
    display: "a Linked List",
    description: "You live life for the journey, not the destination. With you, people never know where they might end " +
      "up!",
  },
  {
    name: "stack",
    display: "a Stack",
    description: "You are a person of order. You enjoy optimal solutions over fair solutions. With the Trolley Problem, " +
      "you would pull the lever to save five people over one.",
  },
  {
    name: "queue",
    display: "a Queue",
    description: "You are a person of justice! Everyone deserves a chance, and everyone gets their turn. You never cut " +
      "in line.",
  },
  {
    name: "binary-tree",
    display: "a ",
    description: "You are a person that sees the world in dualities. You believe in good and evil and like to explore " +
      "your options before you make choices.",
  },
  {
    name: "heap",
    display: "a Heap",
    description: "You are a person that enjoys life. In groups, you live more in the background. You believe small actions " +
      "can impact your life in major ways, but you are fine with that.",
  },
  {
    name: "hash-map",
    display: "a Hash-Map",
    description: "You are a perfectionist. You do not settle for a solution that is anything less than perfect.",
  },
  {
    name: "graph",
    display: "a Graph",
    description: "You are a social person. Everyone in the group might know each other, but they all get along well " +
      "with you.",
  },
  {
    name: "fibonacci",
    display: "a Fibonacci Heap",
    description: "You are a lone wolf. Nobody truly \"gets you\". Everyone knows you are really smart, but they just do " +
      "not understand what in the world you are talking about most of the time.",
  }
]

type Score = {
  personality: PersonalityName,
  delta: number,
}

type ScoreTracker = {
  array: number,
  ['linked-list']: number,
  stack: number,
  queue: number,
  ['binary-tree']: number,
  heap: number,
  ['hash-map']: number,
  graph: number,
  fibonacci: number,
}

  type Answer = {
  text: string,
  scores: Array<Score>,
}

type Question = {
  prompt: string,
  answers: Array<Answer>,
}

const questions: Array<Question> = [
  {
    prompt: "What is your take on trains?",
    answers: [
      {
        text: "I love how fast they are.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 0},
          {personality: "queue", delta: 0},
          {personality: "binary-tree", delta: 1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 5},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 5},
        ],
      },
      {
        text: "I like it when all passengers first get out before other passengers get in.",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 5},
          {personality: "queue", delta: 4},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 0},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "I love how the wagons are all connected one by one.",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: 5},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "I prefer quantum-entangled transportation systems.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: 0},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 4},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: 5},
        ],
      },
    ],
  },
  {
    prompt: "Who do you look at if plans need to be made?",
    answers: [
      {
        text: "Well, me of course. I organize everything in our friend group.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 2},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: 2},
          {personality: "graph", delta: 5},
          {personality: "fibonacci", delta: 1},
        ],
      },
      {
        text: "I believe everyone should make some plans at least every once in a while.",
        scores: [
          {personality: "array", delta: 5},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 3},
          {personality: "queue", delta: 5},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: 1},
          {personality: "graph", delta: -1},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "I just assume the person that always does it will do it again.",
        scores: [
          {personality: "array", delta: 1},
          {personality: "linked-list", delta: 2},
          {personality: "stack", delta: 5},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 2},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: -1},
          {personality: "fibonacci", delta: 1},
        ],
      },
      {
        text: "I do not make plans, that would be too structured for me.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: 3},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 4},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: 1},
        ],
      },
      {
        text: "I don't make plans, things usually spontaneously happen.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: 1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: 0},
          {personality: "heap", delta: 5},
          {personality: "hash-map", delta: 2},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: 0},
        ],
      },
    ],
  },
  /*
  {
    prompt: "What is your take on trains?",
    answers: [
      {
        text: "I love how fast they are.",
        scores: [
          {personality: "array", delta: -2},
          {personality: "linked-list", delta: -2},
          {personality: "stack", delta: 0},
          {personality: "queue", delta: 0},
          {personality: "binary-tree", delta: 1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 5},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 5},
        ],
      },
      {
        text: "I like it when all passengers first get out before other passengers get in.",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 5},
          {personality: "queue", delta: 4},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 0},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "I love how the wagons are all connected one by one.",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: 5},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "I prefer quantum-entangled transportation systems.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: 0},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 4},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: 5},
        ],
      },
    ],
  },
  {
    prompt: "What is your take on trains?",
    answers: [
      {
        text: "I love how fast they are.",
        scores: [
          {personality: "array", delta: -2},
          {personality: "linked-list", delta: -2},
          {personality: "stack", delta: 0},
          {personality: "queue", delta: 0},
          {personality: "binary-tree", delta: 1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 5},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 5},
        ],
      },
      {
        text: "I like it when all passengers first get out before other passengers get in.",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 5},
          {personality: "queue", delta: 4},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 0},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "I love how the wagons are all connected one by one.",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: 5},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "I prefer quantum-entangled transportation systems.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: 0},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 4},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: 5},
        ],
      },
    ],
  },
  */
  {
    prompt: "What is love?",
    answers: [
      {
        text: "Baby don't hurt me.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: 4},
          {personality: "binary-tree", delta: 1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 2},
          {personality: "graph", delta: 5},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "Love is the best antidote to everything!",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: 5},
          {personality: "stack", delta: 5},
          {personality: "queue", delta: 4},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 3},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 0},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "I don't know...",
        scores: [
          {personality: "array", delta: 3},
          {personality: "linked-list", delta: 2},
          {personality: "stack", delta: 3},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 5},
          {personality: "hash-map", delta: 2},
          {personality: "graph", delta: 0},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "Some type of chemical in our brains.",
        scores: [
          {personality: "array", delta: 1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 3},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 2},
          {personality: "graph", delta: -1},
          {personality: "fibonacci", delta: 5},
        ],
      },
    ],
  },
]

export default function WhichDataStructureAreYou() {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answerIndex, setAnswerIndex] = useState<number>(-1);
  const [scores, setScores] = useState<ScoreTracker>({
    array: 0,
    ['linked-list']: 0,
    stack: 0,
    queue: 0,
    ['binary-tree']: 0,
    heap: 0,
    ['hash-map']: 0,
    graph: 0,
    fibonacci: 0,
  });
  const [personality, setPersonality] = useState<Personality>(personalities[0]);

  const onAnswer = useCallback((answerIndex: number) => {
    setAnswerIndex(answerIndex);
  }, [setAnswerIndex]);

  const calculatePersonality = useCallback(() => {
    const maxScore = Object.keys(scores).reduce((a, b) => scores[a as keyof ScoreTracker] > scores[b as keyof ScoreTracker] ? a : b);
    personalities.forEach((personality) => {
      if (personality.name === maxScore) {
        setPersonality(personality);
      }
    })
  }, [scores, setPersonality]);

  const onNextQuestion = useCallback(() => {
    const currentScores = scores;
    const answerScores = questions[questionIndex].answers[answerIndex].scores;
    answerScores.forEach((score) => {
      currentScores[score.personality] += score.delta;
    });
    setScores(currentScores);
    calculatePersonality();
    setAnswerIndex(-1);
    setQuestionIndex(questionIndex + 1);
  }, [questionIndex, setQuestionIndex, answerIndex, setAnswerIndex, scores, setScores, calculatePersonality]);

  return (
    <>
      <Head>
        <title>Data structure personality test</title>
        <meta name="description" content="Data structure personality test. Which data structure fits your personality best?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 min-h-screen">
        <h1 className="text-center w-full mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-6xl dark:text-white">
          Which data structure are you?
        </h1>
        {questionIndex < questions.length &&
        <div className="px-4 mx-auto max-w-sm">
          <p className="text-center text-2xl">
            Question {questionIndex + 1}
          </p>
          <p className="text-center text-md">
            {questions[questionIndex].prompt}
          </p>
          {questions[questionIndex].answers.map((answer, index) => {
            const currentAnswerStyle = answerIndex === index ? "bg-green-500" : "hover:bg-gray-100 dark:hover:bg-gray-700";
            return <div key={index} className="flex justify-center w-full my-4">
              <button className={`${currentAnswerStyle} inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:focus:ring-gray-600`}
                      onClick={() => onAnswer(index)}>
                {answer.text}
              </button>
            </div>;
          })}
          <div className="flex justify-center w-full">
            <button className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    disabled={answerIndex === -1}
                    onClick={onNextQuestion}>
              Next question
            </button>
          </div>
        </div>
        }
        {questionIndex >= questions.length &&
        <div className="text-center px-4 mx-auto max-w-sm">
          <p>
            You did it! You are {personality.display}!
          </p>
          <p>
            {personality.description}
          </p>
        </div>
        }
      </main>
    </>
  )
}
