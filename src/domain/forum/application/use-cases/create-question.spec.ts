import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: async (question: Question) => {
    // eslint-disable-next-line no-useless-return
    return
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteudo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
