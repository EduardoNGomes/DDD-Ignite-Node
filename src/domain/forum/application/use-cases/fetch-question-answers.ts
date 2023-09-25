import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answer-repository'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.finManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
