function lateFee(daysLate) {
  // Write your code here!
  if(daysLate <= 0 ){
    return "No fine!"
  } else if(daysLate > 0 && daysLate <= 7) {
    return `Your fine is $${daysLate * 1}.`
  } else if(daysLate > 7 && daysLate <= 30) {
    return `Your fine is $${daysLate * 2}.`
  }else {
    return "Membership suspended."
  }
}

function branchHours(branch) {
  // Write your code here!
  return branch === "Central" ? "Open until 9pm." : "Open until 6pm."
}

function recommendBookByGenre(genre) {
  // Write your code here!
  switch(genre) {
    case "fiction":
      return "Check out our bestsellers section."
    case "non-fiction":
      return "Explore the top biographies shelf."
    case "comics":
      return "Visit the graphic novels area."
    default:
      return "Browse whatever catches your eye!"
  }
}
