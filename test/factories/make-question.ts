import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export function makeQuestion(override: Partial<QuestionProps>) {
  const question = Question.create({
    title: 'Example Question',
    authorId: new UniqueEntityID('1'),
    content: 'Example Content',
    ...override,
  })

  return question
}
