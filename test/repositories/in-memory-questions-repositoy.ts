import { QuestionsRepository } from '@/domain/forum/application/repositories/question-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []

  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id)

    if (!question) return null

    return question
  }

  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug)

    if (!question) return null

    return question
  }

  async create(question: Question) {
    this.items.push(question)
  }

  async delete(question: Question) {
    const itemIndex = this.items.findIndex((item) => question.id === item.id)
    this.items.splice(itemIndex, 1)
  }
}
