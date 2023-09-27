import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export interface QuestionAttachmentsRepository {
  findManyByAnswerId(questionId: string): Promise<QuestionAttachment[]>
}
