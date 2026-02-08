/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Your code here
const Signal = (String(color).toLowerCase()).trim();
  let   Action = "INVALID SIGNAL";

  if(typeof(Signal) !== "string") return Action;

  switch (Signal){
    case "green":
      Action = "GO"
      case "yellow":
      Action = "SLOW DOWN"
      case "red":
      Action = "STOP"
      case "flashing red":
      Action = "STOP AND PROCEED WITH CAUTION"

      default: 
      Action = "INVALID SIGNAL"
       
  }

  return(Action)
}
