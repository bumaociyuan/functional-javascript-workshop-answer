function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(function (n) {
  	return n.message.length < 50;
  }).map(function (n) {
  	return n.message;
  })
}

module.exports = getShortMessages