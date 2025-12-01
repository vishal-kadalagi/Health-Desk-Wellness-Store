export const healthTips = [
  "Drink at least 8 glasses of water daily to stay hydrated.",
  "Include a variety of colorful fruits and vegetables in your diet for essential vitamins and minerals.",
  "Get 7-9 hours of quality sleep each night for optimal health.",
  "Practice mindfulness or meditation to reduce stress levels.",
  "Take short walks throughout the day to improve circulation.",
  "Limit processed foods and opt for whole, natural ingredients.",
  "Schedule regular health check-ups with your healthcare provider.",
  "Incorporate strength training exercises at least twice a week.",
  "Spend time outdoors to get natural vitamin D from sunlight.",
  "Practice deep breathing exercises to improve lung capacity."
];

export function getRandomHealthTip() {
  const randomIndex = Math.floor(Math.random() * healthTips.length);
  return healthTips[randomIndex];
}