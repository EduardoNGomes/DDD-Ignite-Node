import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answer-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    // eslint-disable-next-line no-useless-return
    return
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova Resposta',
  })

  expect(answer.content).toEqual('Nova Resposta')
})
