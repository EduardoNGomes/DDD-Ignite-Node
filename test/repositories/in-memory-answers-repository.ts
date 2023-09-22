import { AnswersRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) return null

    return answer
  }

  async create(answer: Answer) {
    this.items.push(answer)
  }

  async save(answer: Answer) {
    const itemIndex = this.items.findIndex((item) => answer.id === item.id)
    this.items[itemIndex] = answer
  }

  async delete(answer: Answer) {
    const itemIndex = this.items.findIndex((item) => answer.id === item.id)
    this.items.splice(itemIndex, 1)
  }
}
