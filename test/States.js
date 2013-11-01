States = {};
States.ROOT = new navigatorjs.NavigationState("");

States.HOME = States.ROOT.clone().append("home");
States.GALLERY = States.ROOT.clone().append("gallery");
States.GALLERY_IMAGE = States.GALLERY.clone().append("*");
States.ME = States.ROOT.clone().append("states");

States.TEST = "I am not a state";
States.TEST2 = "i/am/no/state/either";