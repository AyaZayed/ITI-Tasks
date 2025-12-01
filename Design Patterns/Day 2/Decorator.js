class Notifier {
        send(message) {
                console.log("Main notification:", message);
        }
}

class NotifierDecorator extends Notifier {
        constructor(notifier) {
                super();
                this.notifier = notifier;
        }

        send(message) {
                this.notifier.send(message);
        }
}

class EmailNotifier extends NotifierDecorator {
        send(message) {
                super.send(message);
                console.log("Email sent:", message);
        }
}

class SMSNotifier extends NotifierDecorator {
        send(message) {
                super.send(message);
                console.log("SMS sent:", message);
        }
}

let notifier = new EmailNotifier(new Notifier());
notifier.send("Welcome to our service!");

