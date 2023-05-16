const messages = [
  "All our dreams can come true, if we have the courage to pursue them. —Walt Disney" , "The secret of getting ahead is getting started. —Mark Twain", "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life, and that is why I succeed. —Michael Jordan", "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. —Mary Kay Ash", "The best time to plant a tree was 20 years ago. The second best time is now. ―Chinese Proverb", "Only the paranoid survive. —Andy Grove","It's hard to beat a person who never gives up. —Babe Ruth", "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours. —Leah Busque", "If people are doubting how far you can go, go so far that you can’t hear them anymore. —Michele Ruiz", "We need to accept that we won’t always make the right decisions, that we'll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success. ―Arianna Huffington","Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE. —Joss Whedon","It is often the small steps, not the giant leaps, that bring about the most lasting change.- Queen Elizebeth II", "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.- Amanda Gorman"
];

function generateRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

const generateButton = document.getElementById('generate-button');
const messageContainer = document.getElementById('message-container');

generateButton.addEventListener('click', function() {
  const randomMessage = generateRandomMessage();
  messageContainer.textContent = randomMessage;
});
