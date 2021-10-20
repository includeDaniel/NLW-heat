import prismaClient from "../prisma";

class CreateMessageService {
  async execute(text: string, user_Id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_Id,
      },
      include: {
        user: true,
      },
    });
    return message;
  }
}

export { CreateMessageService };
