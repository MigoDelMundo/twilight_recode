interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

// characters
let jakeHol = "Jake Hollenfield";
let amaFra = "Amanda Francisco";
let emiHol = "Emily Hollenfield";
let sigGut = "Sigmund Gutenberg";
let kevBanks = "Kevin Peter Banks";

const conversationAmanda: Message[] = [
  {
    sender: jakeHol,
    content: "I can reach out to you in a while, give me a few minutes",
    timestamp: "2023-04-18 12:41",
  },
  {
    sender: amaFra,
    content: "Sure sure, you can take your time!",
    timestamp: "2023-04-18 12:43",
  },
  {
    sender: jakeHol,
    content:
      "I have returned. Anyways, continuing from our conversation, when can we schedule a meeting with the board executives?",
    timestamp: "2023-04-18 12:59",
  },
  {
    sender: amaFra,
    content:
      "We can schedule the meeting next Monday at 10:00 AM. Does that work for you?",
    timestamp: "2023-04-18 13:02",
  },
  {
    sender: jakeHol,
    content:
      "Monday at 10:00 AM sounds good. Let's proceed with that schedule.",
    timestamp: "2023-04-18 13:05",
  },
  {
    sender: amaFra,
    content:
      "Perfect! I'll notify the board members and send you the meeting details.",
    timestamp: "2023-04-18 13:08",
  },
  {
    sender: jakeHol,
    content: "Thank you, Amanda. I appreciate your assistance.",
    timestamp: "2023-04-18 13:10",
  },
];

const conversationEmily: Message[] = [
  {
    sender: jakeHol,
    content: "Hey Emily, what time will you be home tonight?",
    timestamp: "2023-04-18 18:30",
  },
  {
    sender: emiHol,
    content: "I should be home around 7:00 PM. Why?",
    timestamp: "2023-04-18 18:32",
  },
  {
    sender: jakeHol,
    content:
      "Planned a surprise dinner for you. How's having a date night sound?",
    timestamp: "2023-04-18 18:34",
  },
  {
    sender: emiHol,
    content: "That sounds lovely, honey, but what about the kids?",
    timestamp: "2023-04-18 18:36",
  },
  {
    sender: jakeHol,
    content:
      "Don't worry, I've got that covered. Lisa offered to take care of the kids tonight. Dinner's on me, it's been a while since our last date together.",
    timestamp: "2023-04-18 18:38",
  },
  {
    sender: emiHol,
    content: "Oh, that's fantastic!",
    timestamp: "2023-04-18 18:40",
  },
  {
    sender: emiHol,
    content: "I really appreciate it, that's so sweet of you",
    timestamp: "2023-04-18 18:41",
  },
  {
    sender: jakeHol,
    content:
      "Got it, I'll make a reservation at our favorite restaurant. See you soon, darling",
    timestamp: "2023-04-18 18:42",
  },
  {
    sender: emiHol,
    content: "Can't wait, honey! See you at 7:00 PM",
    timestamp: "2023-04-18 18:44",
  },
];

const conversationSigmund: Message[] = [
  {
    sender: jakeHol,
    content: "Good morning, Mr. Gutenberg.",
    timestamp: "2023-04-18 09:00",
  },
  {
    sender: jakeHol,
    content:
      "I would like to discuss the current state of our company and its operations. Please provide me with an update on the marketing initiatives and distribution strategies.",
    timestamp: "2023-04-18 09:02",
  },
  {
    sender: sigGut,
    content: "Good morning, Mr. Hollenfield.",
    timestamp: "2023-04-18 09:03",
  },
  {
    sender: sigGut,
    content:
      "Regarding marketing, we have successfully launched a new advertising campaign targeting our key demographics. Initial results show an increase in brand awareness and customer engagement.",
    timestamp: "2023-04-18 09:05",
  },
  {
    sender: sigGut,
    content:
      "In terms of distribution, we have optimized our supply chain and established strategic partnerships with regional distributors. This has led to improved product availability and reduced delivery times.",
    timestamp: "2023-04-18 09:08",
  },
  {
    sender: jakeHol,
    content: "Thank you, Mr. Gutenberg. Your efforts are commendable.",
    timestamp: "2023-04-18 09:10",
  },
  {
    sender: jakeHol,
    content:
      "I would also like to receive a comprehensive financial report outlining the company's performance and profitability. Please ensure it includes an analysis of key metrics and any areas that require attention.",
    timestamp: "2023-04-18 09:12",
  },
  {
    sender: sigGut,
    content:
      "Certainly, Mr. Hollenfield. I will prepare the financial report and provide it to you by the end of the day.",
    timestamp: "2023-04-18 09:15",
  },
  {
    sender: sigGut,
    content:
      "If you have any further inquiries or specific areas you'd like me to focus on, please let me know.",
    timestamp: "2023-04-18 09:16",
  },
  {
    sender: jakeHol,
    content:
      "Thank you, Mr. Gutenberg. I appreciate your dedication to maintaining the company's growth and success.",
    timestamp: "2023-04-18 09:18",
  },
];

const conversationKevin: Message[] = [
  {
    sender: kevBanks,
    content:
      "Good afternoon, Mr. Hollenfield. Sorry for taking up your valuable time, but I really admire your dedication to fitness and would like to ask for your advice on weightlifting and diet.",
    timestamp: "2023-04-18 14:00",
  },
  {
    sender: jakeHol,
    content:
      "Good afternoon, Kevin. Thank you for your kind words. I'm more than happy to help you with your fitness journey. Weightlifting and diet are indeed important aspects. How can I assist you?",
    timestamp: "2023-04-18 14:02",
  },
  {
    sender: kevBanks,
    content:
      "Thank you for your willingness to assist, Mr. Hollenfield. I wanted to inquire about the most effective weightlifting routine for muscle gain and strength. Could you provide any recommendations?",
    timestamp: "2023-04-18 14:05",
  },
  {
    sender: jakeHol,
    content:
      "Certainly, Kevin. To maximize muscle gain and strength, I recommend focusing on compound exercises such as squats, deadlifts, bench presses, and overhead presses. These exercises engage multiple muscle groups simultaneously and promote overall strength development.",
    timestamp: "2023-04-18 14:08",
  },
  {
    sender: jakeHol,
    content:
      "In terms of a routine, I suggest incorporating a combination of heavy lifting with lower repetitions (4-6 reps) and moderate weights, as well as lighter weights with higher repetitions (8-12 reps) to stimulate muscle growth and endurance. Consistency and progressive overload are key.",
    timestamp: "2023-04-18 14:12",
  },
  {
    sender: kevBanks,
    content:
      "Thank you, Mr. Hollenfield. That's valuable advice. Additionally, I'm curious about maintaining a healthy diet. Are there any specific guidelines or nutritional recommendations you can share?",
    timestamp: "2023-04-18 14:15",
  },
  {
    sender: jakeHol,
    content:
      "Certainly, Kevin. A well-balanced diet is crucial for supporting your fitness goals. Focus on consuming lean protein sources, such as chicken, fish, tofu, and legumes, to aid in muscle repair and growth.",
    timestamp: "2023-04-18 14:18",
  },
  {
    sender: jakeHol,
    content:
      "Include a variety of fruits, vegetables, and whole grains to ensure you receive essential vitamins, minerals, and fiber. Stay adequately hydrated and consider the timing of your meals, with a focus on pre- and post-workout nutrition for optimal performance and recovery.",
    timestamp: "2023-04-18 14:22",
  },
  {
    sender: kevBanks,
    content:
      "Thank you so much, Mr. Hollenfield. Your guidance is greatly appreciated. I will follow your advice and work towards achieving my fitness goals.",
    timestamp: "2023-04-18 14:25",
  },
  {
    sender: jakeHol,
    content:
      "You're welcome, Kevin. I'm glad to be of help. Remember, consistency, patience, and a balanced approach are key to long-term success. Feel free to reach out if you have any more questions. Best of luck on your fitness journey!",
    timestamp: "2023-04-18 14:28",
  },
];

const MessagesData: Message[][] = [
  conversationAmanda,
  conversationEmily,
  conversationSigmund,
  conversationKevin,
];

export default MessagesData;
