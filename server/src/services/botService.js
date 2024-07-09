const backroomsResponses = [
    "The walls seem to shift when you're not looking.",
    "Did you hear that? It sounded like footsteps...",
    "The fluorescent lights flicker ominously.",
    "There's a faint humming coming from somewhere nearby.",
    "You feel like you're being watched.",
    "The carpet squelches underfoot. Has it always been damp?",
    "A door slams in the distance. Or was it your imagination?",
    "The air feels thick and stale. It's hard to breathe.",
    "You could swear that painting wasn't there a moment ago.",
    "The corridor stretches endlessly before you.",
  ];
  
  exports.getBackroomsResponse = () => {
    const randomIndex = Math.floor(Math.random() * backroomsResponses.length);
    return backroomsResponses[randomIndex];
  };
  
  exports.processCommand = (command) => {
    switch (command.toLowerCase()) {
      case '/help':
        return "Available commands: /help, /explore, /listen, /touch";
      case '/explore':
        return "You venture deeper into the Backrooms. " + this.getBackroomsResponse();
      case '/listen':
        return "You strain your ears. " + this.getBackroomsResponse();
      case '/touch':
        return "You reach out to touch the nearest surface. " + this.getBackroomsResponse();
      default:
        return "Unknown command. Type /help for a list of commands.";
    }
  };
  
  exports.shouldBotRespond = () => {
    // 10% chance for the bot to spontaneously respond
    return Math.random() < 0.1;
  };