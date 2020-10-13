interface MailTo {
	name: string;
	email: string;
}

interface MailMessage {
	subject: string;
	body: string;
	attachment?: Array<string>;
}

// DTO - Data Transfer Object -> Usando em DDD
interface MessageDTO {
	to: MailTo;
	message: MailMessage;
}

interface Email {
	sendMail(request: MessageDTO): void;
}

class EmailService implements Email{
	sendMail({ to, message }: MessageDTO) {
		console.log(`E-mail successfully sentto ${to.name} : ${message.subject}`);
	}
}

export default EmailService;