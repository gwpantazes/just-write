export interface WritingSession {
  sessionId: string
  createdAt: Date
  lastUpdatedAt: Date
  wordCount: number
  minutesActivelySpentInSession: number
}

export class WritingSession {
  constructor(
    sessionId: string,
    createdAt: Date,
    lastUpdatedAt: Date,
    wordCount: number,
    minutesActivelySpentInSession: number
  ) {
    this.sessionId = sessionId
    this.createdAt = createdAt
    this.lastUpdatedAt = lastUpdatedAt
    this.wordCount = wordCount
    this.minutesActivelySpentInSession = minutesActivelySpentInSession
  }

  static generateNewSessionId(): string {
    const date = new Date()
    return `${date.getFullYear()}${date.getMonth()}${date.getDate()}T${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
  }
}
