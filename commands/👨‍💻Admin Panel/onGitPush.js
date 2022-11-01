Bot.sendMessage("Start code importing...");

// Bot.exportGit also possible

Bot.importGit({

  branch: "master", // it is master branch

  success: "onGitImportCompleted"

})
