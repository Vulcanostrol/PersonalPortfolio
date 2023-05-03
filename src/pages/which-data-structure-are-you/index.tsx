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
      "what you see is what you get" +
      "\n" +
      "The Array personality is traditional and values order and structure in their life. They prefer to stick to what they know works and are resistant to change. Arrays are reliable and consistent, but can sometimes come across as rigid and inflexible." +
      "\n" +
      "Arrays like to plan and organize their lives in advance, often creating schedules and routines that they stick to religiously. They enjoy familiar experiences and take comfort in knowing what to expect. They are often resistant to trying new things, and may take longer to adapt to change." +
      "\n" +
      "Arrays are detail-oriented and have a great memory for facts and figures. They are methodical and prefer to work through problems systematically, step by step. They value precision and accuracy and take pride in doing things the right way." +
      "\n" +
      "Arrays tend to be dependable and responsible individuals, who take their commitments seriously. They can be counted on to show up on time and follow through on their promises. They value loyalty and are often close with a small group of trusted friends." +
      "\n" +
      "While the Array personality may be seen as conservative or traditional, they provide stability and reliability in all aspects of their life. They may not be the most exciting or adventurous individuals, but they are a crucial foundation for any group or organization.",
  },
  {
    name: "linked-list",
    display: "a Linked List",
    description: "You live life for the journey, not the destination. With you, people never know where they might end " +
      "up!" +
      "\n" +
      "The Linked List personality is adaptable and versatile. They are creative problem solvers who are always willing to try new things. They enjoy exploring and experimenting with different approaches to see what works best." +
      "\n" +
      "Linked Lists value variety and spontaneity in their lives. They can become bored easily with routine and need to mix things up frequently. They are quick to adapt to new situations and can easily change course when necessary." +
      "\n" +
      "Linked Lists tend to be sociable and outgoing individuals who enjoy meeting new people and making connections. They are comfortable in new environments and enjoy trying new things. They value relationships and are often the life of the party." +
      "\n" +
      "While Linked Lists may seem impulsive or flighty to some, they are actually quite strategic in their approach. They are able to quickly assess a situation and come up with a plan that is both creative and effective. They are excellent at thinking outside the box and finding unique solutions to problems." +
      "\n" +
      "Linked Lists are independent and self-reliant individuals who value freedom and autonomy. They are not afraid to take risks and are willing to try new things even if it means taking a chance. They are adaptable and can thrive in a wide range of environments." +
      "\n" +
      "Overall, the Linked List personality is characterized by their flexibility, creativity, and adaptability. They are constantly seeking new experiences and opportunities for growth and are not afraid to take risks to achieve their goals. They are an asset to any team or organization, bringing a fresh perspective and a willingness to try new things.",
  },
  {
    name: "stack",
    display: "a Stack",
    description: "You are a person of order. You enjoy optimal solutions over fair solutions. With the Trolley Problem, " +
      "you would pull the lever to save five people over one." +
      "\n" +
      "The Stack personality is focused and determined. They have a clear sense of purpose and are driven to achieve their goals. Stacks are excellent at prioritizing tasks and are able to stay focused on the task at hand." +
      "\n" +
      "Stacks are not easily distracted and can work for long periods of time without getting sidetracked. They are able to put aside their personal needs and preferences in order to accomplish their objectives. They value efficiency and are always looking for ways to streamline their processes." +
      "\n" +
      "Stacks are independent and self-sufficient individuals who prefer to work alone. They are not afraid to take on new challenges and are willing to work hard to achieve success. They are often seen as leaders and are admired for their strong work ethic and determination." +
      "\n" +
      "Stacks tend to be analytical and logical thinkers who enjoy solving complex problems. They have a great memory and are able to recall details quickly. They are able to see the big picture and are excellent at breaking down complex ideas into smaller, more manageable parts." +
      "\n" +
      "While Stacks may seem focused to the point of being inflexible to some, they are actually quite adaptable when it comes to changing circumstances. They are able to adjust their plans quickly and are not easily thrown off course. They have a great sense of timing and are able to anticipate what comes next." +
      "\n" +
      "Overall, the Stack personality is characterized by their focus, determination, and independence. They are driven to succeed and are not easily deterred by obstacles. They may not be the most social or outgoing individuals, but they are a crucial asset to any team or organization.",
  },
  {
    name: "queue",
    display: "a Queue",
    description: "You are a person of justice! Everyone deserves a chance, and everyone gets their turn. You never cut " +
      "in line." +
      "\n" +
      "The Queue personality is patient and organized. They are methodical and systematic in their approach to life. Queues are great at managing time and are able to prioritize tasks effectively." +
      "\n" +
      "Queues are excellent at waiting their turn and following the rules. They understand the importance of order and structure and are willing to wait their turn to ensure fairness. They value predictability and prefer to plan their lives in advance." +
      "\n" +
      "Queues are dependable and reliable individuals who can be counted on to follow through on their commitments. They take their responsibilities seriously and are often seen as pillars of the community. They value loyalty and are fiercely committed to their family and friends." +
      "\n" +
      "Queues tend to be introverted and reserved individuals who prefer their own company or the company of a small group of close friends. They are not comfortable in large crowds or unfamiliar environments, and can become overwhelmed by too much stimulation." +
      "\n" +
      "While Queues may seem rigid or inflexible to some, they are actually quite adaptable when it comes to changing circumstances. They are able to adjust their plans quickly and are not easily thrown off course. They have a great sense of timing and are able to anticipate what comes next." +
      "\n" +
      "Overall, the Queue personality is characterized by their patience, organization, and dependability. They are a steady presence in the lives of those around them, providing a sense of order and structure. They may not be the most outgoing or adventurous individuals, but they are a crucial foundation for any group or organization.",
  },
  {
    name: "binary-tree",
    display: "a ",
    description: "You are a person that sees the world in dualities. You believe in good and evil and like to explore " +
      "your options before you make choices." +
      "\n" +
      "The Binary Tree personality is curious and analytical. They have a natural inclination for learning and exploring new ideas. Binary Trees are excellent at synthesizing information and are able to see connections and patterns where others may not." +
      "\n" +
      "Binary Trees are comfortable with complexity and enjoy solving challenging problems. They are highly analytical and are able to think logically through complex issues. They are often drawn to careers in science, technology, engineering, and mathematics." +
      "\n" +
      "Binary Trees are independent and introspective individuals who value their privacy. They prefer to spend time alone or with a small group of close friends. They are not afraid to challenge authority or traditional ways of thinking and are often seen as innovators and disruptors." +
      "\n" +
      "Binary Trees have a deep appreciation for structure and organization. They are able to visualize complex systems and are excellent at breaking down larger problems into smaller, more manageable parts. They value precision and accuracy in their work and are always looking for ways to improve their processes." +
      "\n" +
      "While Binary Trees may seem detached or unemotional to some, they are actually deeply empathetic individuals who are able to understand and connect with others on a meaningful level. They are able to see things from multiple perspectives and are skilled at navigating complex social situations." +
      "\n" +
      "Overall, the Binary Tree personality is characterized by their curiosity, analytical thinking, and independence. They are always seeking new knowledge and are not afraid to challenge the status quo. They may not be the most outgoing or social individuals, but they are highly valued for their intellect, creativity, and problem-solving abilities.",
  },
  {
    name: "heap",
    display: "a Heap",
    description: "You are a person that enjoys life. In groups, you live more in the background. You believe small actions " +
      "can impact your life in major ways, but you are fine with that." +
      "\n" +
      "The Heap personality is adaptable and resilient. They are able to navigate change with ease and are quick to adjust to new circumstances. Heaps are able to find opportunities in challenging situations and are not easily deterred by obstacles." +
      "\n" +
      "Heaps are highly intuitive individuals who are able to read others well. They are skilled at anticipating the needs and desires of those around them and are able to adjust their behavior accordingly. They are excellent at building relationships and are often admired for their social skills." +
      "\n" +
      "Heaps have a deep appreciation for diversity and value the unique qualities that each individual brings to the table. They are able to work effectively in a team environment and are skilled at bringing people together. They are often drawn to careers in the arts, social sciences, and human services." +
      "\n" +
      "Heaps are empathetic and compassionate individuals who are able to understand and connect with others on a deep level. They value harmony and are skilled at resolving conflicts. They are able to see the big picture and are able to balance the needs of individuals with the needs of the group." +
      "\n" +
      "While Heaps may seem laid back or carefree to some, they are actually highly organized individuals who are able to manage their time effectively. They value efficiency and are always looking for ways to streamline their processes. They are able to multitask effectively and are skilled at juggling multiple priorities." +
      "\n" +
      "Overall, the Heap personality is characterized by their adaptability, empathy, and social skills. They are able to navigate complex social situations with ease and are highly valued for their ability to bring people together. They may not be the most analytical or detail-oriented individuals, but they are crucial to building strong, cohesive teams and communities.",
  },
  {
    name: "hash-map",
    display: "a Hash-Map",
    description: "You are a perfectionist. You do not settle for a solution that is anything less than perfect." +
      "\n" +
      "The Hash Map personality is resourceful and innovative. They have a natural ability to find solutions to problems and are able to think creatively to come up with new ideas. Hash Maps are excellent at synthesizing information and are able to see connections and patterns where others may not." +
      "\n" +
      "Hash Maps are highly independent individuals who value their autonomy. They prefer to work alone or in small groups and are not afraid to take risks or try new approaches. They are often drawn to careers in entrepreneurship, technology, and the arts." +
      "\n" +
      "Hash Maps have a deep appreciation for efficiency and are able to streamline their processes to maximize their productivity. They are highly organized individuals who are able to manage their time effectively. They value precision and accuracy in their work and are always looking for ways to improve their processes." +
      "\n" +
      "Hash Maps are highly adaptable and are able to navigate change with ease. They are skilled at working in fast-paced environments and are able to adjust to new circumstances quickly. They have a strong sense of resilience and are not easily deterred by setbacks or obstacles." +
      "\n" +
      "While Hash Maps may seem unconventional or nontraditional to some, they are actually highly valued for their ability to think outside the box and find innovative solutions to complex problems. They are able to see the big picture and are skilled at breaking down complex ideas into smaller, more manageable parts." +
      "\n" +
      "Overall, the Hash Map personality is characterized by their resourcefulness, independence, and innovation. They are highly adaptable and able to navigate change with ease. They may not be the most social or outgoing individuals, but they are highly valued for their intellect, creativity, and problem-solving abilities.",
  },
  {
    name: "graph",
    display: "a Graph",
    description: "You are a social person. Everyone in the group might know each other, but they all get along well " +
      "with you." +
      "\n" +
      "The Graph personality is creative and visionary. They are highly imaginative individuals who are able to think outside the box and come up with innovative ideas. Graphs have a natural ability to see patterns and connections in complex systems and are able to synthesize information to create new insights." +
      "\n" +
      "Graphs are highly social individuals who value relationships and are skilled at building networks. They have a deep appreciation for diversity and are able to connect with individuals from all walks of life. They are often drawn to careers in the arts, social sciences, and human services." +
      "\n" +
      "Graphs have a strong sense of empathy and are able to understand and connect with others on a deep level. They value harmony and are skilled at resolving conflicts. They are able to see the big picture and are able to balance the needs of individuals with the needs of the group." +
      "\n" +
      "Graphs are highly adaptable and are able to navigate change with ease. They are able to work effectively in a team environment and are skilled at bringing people together. They are highly organized individuals who are able to manage their time effectively." +
      "\n" +
      "While Graphs may seem idealistic or dreamy to some, they are actually highly analytical individuals who are able to break down complex ideas into smaller, more manageable parts. They have a natural ability to see the connections between seemingly unrelated ideas and are able to use this insight to create new solutions." +
      "\n" +
      "Overall, the Graph personality is characterized by their creativity, empathy, and social skills. They are highly valued for their ability to connect with others and bring people together. They may not be the most detail-oriented or analytical individuals, but they are crucial to building strong, cohesive communities and creating new ideas and solutions.",
  },
  {
    name: "fibonacci",
    display: "a Fibonacci Heap",
    description: "You are a lone wolf. Nobody truly \"gets you\". Everyone knows you are really smart, but they just do " +
      "not understand what in the world you are talking about most of the time." +
      "\n" +
      "The Fibonacci Heap personality is highly analytical and detail-oriented. They have a natural ability to break down complex problems into smaller, more manageable parts and are able to see patterns and connections where others may not. Fibonacci Heaps are highly logical individuals who value precision and accuracy in their work." +
      "\n" +
      "Fibonacci Heaps are highly organized and are able to manage large amounts of information with ease. They value efficiency and are skilled at streamlining processes to maximize their productivity. They are often drawn to careers in mathematics, engineering, and technology." +
      "\n" +
      "Fibonacci Heaps are highly adaptable and are able to navigate change with ease. They are skilled at working in fast-paced environments and are able to adjust to new circumstances quickly. They have a strong sense of resilience and are not easily deterred by setbacks or obstacles." +
      "\n" +
      "Fibonacci Heaps are highly independent individuals who value their autonomy. They prefer to work alone or in small groups and are not afraid to take risks or try new approaches. They are able to prioritize tasks effectively and are able to manage their time efficiently." +
      "\n" +
      "While Fibonacci Heaps may seem rigid or inflexible to some, they are actually highly valued for their ability to analyze complex problems and find elegant solutions. They have a deep appreciation for order and symmetry and are able to apply this insight to create new ideas and solutions." +
      "\n" +
      "Overall, the Fibonacci Heap personality is characterized by their analytical abilities, independence, and attention to detail. They are highly valued for their precision and accuracy in their work and their ability to streamline processes to maximize their productivity. They may not be the most social or outgoing individuals, but they are crucial to solving complex problems and advancing our understanding of the world.",
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
          {personality: "hash-map", delta: 3},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 3},
        ],
      },
      {
        text: "I like it when all passengers first get out before other passengers get in.",
        scores: [
          {personality: "array", delta: 1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 3},
          {personality: "queue", delta: 2},
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
          {personality: "linked-list", delta: 3},
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
          {personality: "hash-map", delta: 2},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: 3},
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
          {personality: "stack", delta: 1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: 1},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: 1},
        ],
      },
      {
        text: "I believe everyone should make some plans at least every once in a while.",
        scores: [
          {personality: "array", delta: 3},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 1},
          {personality: "queue", delta: 3},
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
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: 1},
          {personality: "stack", delta: 3},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 1},
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
          {personality: "hash-map", delta: 1},
          {personality: "graph", delta: 2},
          {personality: "fibonacci", delta: 0},
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
          {personality: "heap", delta: 3},
          {personality: "hash-map", delta: 1},
          {personality: "graph", delta: 2},
          {personality: "fibonacci", delta: 0},
        ],
      },
    ],
  },
  {
    prompt: "You are in a restaurant. What do you order?",
    answers: [
      {
        text: "The same thing as always.",
        scores: [
          {personality: "array", delta: 3},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 1},
          {personality: "queue", delta: 0},
          {personality: "binary-tree", delta: 0},
          {personality: "heap", delta: 0},
          {personality: "hash-map", delta: 1},
          {personality: "graph", delta: -1},
          {personality: "fibonacci", delta: 1},
        ],
      },
      {
        text: "Something I have never tried before!",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: 3},
          {personality: "stack", delta: 1},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 2},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "Hold on... I need to read the entire menu a few times before I know what I want.",
        scores: [
          {personality: "array", delta: 1},
          {personality: "linked-list", delta: 3},
          {personality: "stack", delta: 2},
          {personality: "queue", delta: 0},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 2},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "I ask the waiter and get what they tell me to get.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: 1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 3},
          {personality: "graph", delta: 2},
          {personality: "fibonacci", delta: 3},
        ],
      },
    ],
  },
  {
    prompt: "What is your go-to studying method?",
    answers: [
      {
        text: "Flashcards",
        scores: [
          {personality: "array", delta: 3},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 3},
          {personality: "queue", delta: 3},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: 0},
          {personality: "graph", delta: -1},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "Diagrams and visual aids",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: 0},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: 2},
          {personality: "heap", delta: 2},
          {personality: "hash-map", delta: 0},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: 0},
        ],
      },
      {
        text: "Trial and error",
        scores: [
          {personality: "array", delta: 0},
          {personality: "linked-list", delta: 1},
          {personality: "stack", delta: 0},
          {personality: "queue", delta: 0},
          {personality: "binary-tree", delta: 2},
          {personality: "heap", delta: -1},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 0},
          {personality: "fibonacci", delta: 1},
        ],
      },
      {
        text: "I never study, because I pay attention in lectures.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: 0},
          {personality: "heap", delta: 2},
          {personality: "hash-map", delta: 3},
          {personality: "graph", delta: -1},
          {personality: "fibonacci", delta: 3},
        ],
      },
    ],
  },
  {
    prompt: "What is love?",
    answers: [
      {
        text: "Baby don't hurt me.",
        scores: [
          {personality: "array", delta: -1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: -1},
          {personality: "queue", delta: 3},
          {personality: "binary-tree", delta: 1},
          {personality: "heap", delta: 1},
          {personality: "hash-map", delta: 2},
          {personality: "graph", delta: 3},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "Love is the best antidote to everything!",
        scores: [
          {personality: "array", delta: 1},
          {personality: "linked-list", delta: 3},
          {personality: "stack", delta: 3},
          {personality: "queue", delta: 1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 2},
          {personality: "hash-map", delta: -1},
          {personality: "graph", delta: 0},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "I don't know...",
        scores: [
          {personality: "array", delta: 2},
          {personality: "linked-list", delta: 1},
          {personality: "stack", delta: 2},
          {personality: "queue", delta: 0},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 3},
          {personality: "hash-map", delta: 0},
          {personality: "graph", delta: 1},
          {personality: "fibonacci", delta: -1},
        ],
      },
      {
        text: "Some type of chemical in our brains.",
        scores: [
          {personality: "array", delta: 1},
          {personality: "linked-list", delta: -1},
          {personality: "stack", delta: 2},
          {personality: "queue", delta: -1},
          {personality: "binary-tree", delta: -1},
          {personality: "heap", delta: 0},
          {personality: "hash-map", delta: 1},
          {personality: "graph", delta: -1},
          {personality: "fibonacci", delta: 3},
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
          {personality.description.split("\n").map((paragraph, index) => {
            return <p key={index}>
              {paragraph}
            </p>
          })}
        </div>
        }
      </main>
    </>
  )
}
