import {useState} from 'react'
import {cn} from '../lib/utils'

export function VotingPoll({
  title = 'Poll Title',
  theme = 'light',
  primaryColor = '#668ba4',
  showTitle = true,
  titleFontSize = 'text-xl',
  questionFontSize = 'text-lg',
  optionFontSize = 'text-base',
  voteCountFontSize = 'text-sm',
  totalVotesFontSize = 'text-sm',
  buttonBackgroundColor = '#668ba4',
  buttonTextColor = '#ffffff',
  pollBackgroundColor = '#ffffff',

  pollQuestions = [
    {
      question: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
    },
    {
      question: 'What is your favorite food?',
      options: ['Pizza', 'Burger', 'Salad', 'Pasta'],
    },
    {
      question: 'What is your favorite season?',
      options: ['Spring', 'Summer', 'Fall', 'Winter'],
    },
  ],
}) {
  const [votes, setVotes] = useState({})
  const [hasVoted, setHasVoted] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const vote = (questionIndex, optionIndex) => {
    if (!hasVoted) {
      setVotes((prev) => ({
        ...prev,
        [`${questionIndex}-${optionIndex}`]:
          (prev[`${questionIndex}-${optionIndex}`] || 0) + 1,
      }))
    }
  }

  const getTotalVotes = (questionIndex) => {
    return pollQuestions[questionIndex].options.reduce(
      (sum, _, optionIndex) => {
        return sum + (votes[`${questionIndex}-${optionIndex}`] || 0)
      },
      0
    )
  }

  const getPercentage = (questionIndex, optionIndex) => {
    const total = getTotalVotes(questionIndex)
    return total > 0
      ? Math.round(
          ((votes[`${questionIndex}-${optionIndex}`] || 0) / total) * 100
        )
      : 0
  }

  const handleSubmit = () => {
    setHasVoted(true)
    setShowResults(true)
  }

  const handleNext = () => {
    if (currentPage < pollQuestions.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const isDark = theme === 'dark'

  if (showResults) {
    return (
      <div
        className={cn(
          'max-w-md mx-auto px-4 sm:px-6 rounded-lg p-4',
          isDark && 'bg-card border-border'
        )}
        style={{
          backgroundColor: pollBackgroundColor,
          color: isDark ? '#ffffff' : undefined,
        }}
      >
        {showTitle && (
          <h2
            className={cn(titleFontSize, 'font-semibold mb-4 mt-4')}
            style={{color: primaryColor}}
          >
            {title}
          </h2>
        )}

        <div className="space-y-6">
          <h3 className={cn(questionFontSize, 'font-semibold text-center')}>
            Results
          </h3>

          {pollQuestions.map((questionData, questionIndex) => (
            <div key={questionIndex} className="space-y-4">
              <h4
                className={cn(questionFontSize, 'font-semibold')}
                style={{
                  color:
                    pollBackgroundColor === '#1e293b' ? '#ffffff' : undefined,
                }}
              >
                {questionData.question}
              </h4>

              <div className="space-y-3">
                {questionData.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="relative">
                    <div
                      className="w-full text-left p-3 rounded-md border relative overflow-hidden bg-background"
                      style={{
                        backgroundColor: isDark ? '#374151' : '#ffffff',
                        color: isDark ? '#ffffff' : '#000000',
                      }}
                    >
                      <div className="flex justify-between items-center relative z-10">
                        <span className={cn(optionFontSize, 'font-medium')}>
                          {option}
                        </span>
                        <span
                          className={cn(
                            voteCountFontSize,
                            'text-muted-foreground'
                          )}
                          style={{
                            color: isDark ? '#9ca3af' : undefined,
                          }}
                        >
                          {votes[`${questionIndex}-${optionIndex}`] || 0} votes
                          ({getPercentage(questionIndex, optionIndex)}%)
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 transition-all duration-300 ease-in-out"
                        style={{
                          width: `${getPercentage(questionIndex, optionIndex)}%`,
                          backgroundColor: `${primaryColor}20`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={cn(
                  'text-center text-muted-foreground pt-2',
                  totalVotesFontSize
                )}
                style={{
                  color: isDark ? '#9ca3af' : undefined,
                }}
              >
                Total votes: {getTotalVotes(questionIndex)}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'max-w-md mx-auto px-0 sm:px-6 rounded-lg p-4',
        isDark && 'bg-card border-border'
      )}
      style={{
        backgroundColor: pollBackgroundColor,
        color: isDark ? '#ffffff' : undefined,
      }}
    >
      {showTitle && (
        <h2
          className={cn(titleFontSize, 'font-semibold mb-4 mt-4')}
          style={{color: primaryColor}}
        >
          {title}
        </h2>
      )}

      <div className="space-y-4">
        {/* Page Indicator */}
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>
            Question {currentPage + 1} of {pollQuestions.length}
          </span>
          <div className="flex gap-1">
            {pollQuestions.map((_, index) => (
              <div
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full',
                  index === currentPage ? 'bg-primary' : 'bg-muted'
                )}
              />
            ))}
          </div>
        </div>

        <h3
          className={cn(questionFontSize, 'font-semibold')}
          style={{
            color: pollBackgroundColor === '#1e293b' ? '#ffffff' : undefined,
          }}
        >
          {pollQuestions[currentPage].question}
        </h3>

        <div className="space-y-3">
          {pollQuestions[currentPage].options.map((option, optionIndex) => (
            <div key={optionIndex} className="relative">
              <button
                onClick={() => vote(currentPage, optionIndex)}
                disabled={hasVoted}
                className={cn(
                  'w-full text-left p-3 rounded-md border transition-all hover:shadow-sm relative overflow-hidden',
                  'bg-background hover:bg-accent hover:text-accent-foreground',
                  hasVoted && 'cursor-not-allowed opacity-75'
                )}
                style={{
                  borderColor: primaryColor,
                  backgroundColor: isDark ? '#374151' : '#ffffff',
                  color: isDark ? '#ffffff' : '#000000',
                }}
              >
                <div className="flex justify-between items-center relative z-10">
                  <span className={cn(optionFontSize, 'font-medium')}>
                    {option}
                  </span>
                  <span
                    className={cn(voteCountFontSize, 'text-muted-foreground')}
                    style={{
                      color: isDark ? '#9ca3af' : undefined,
                    }}
                  >
                    {votes[`${currentPage}-${optionIndex}`] || 0} votes (
                    {getPercentage(currentPage, optionIndex)}%)
                  </span>
                </div>
                <div
                  className="absolute inset-0 transition-all duration-300 ease-in-out"
                  style={{
                    width: `${getPercentage(currentPage, optionIndex)}%`,
                    backgroundColor: `${primaryColor}20`,
                  }}
                />
              </button>
            </div>
          ))}
        </div>

        <div
          className={cn(
            'text-center text-muted-foreground pt-2',
            totalVotesFontSize
          )}
          style={{
            color: isDark ? '#9ca3af' : undefined,
          }}
        >
          Total votes: {getTotalVotes(currentPage)}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={cn(
              'px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
              'border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            Previous
          </button>

          {currentPage === pollQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
                'hover:opacity-90'
              )}
              style={{
                backgroundColor: buttonBackgroundColor,
                color: buttonTextColor,
              }}
            >
              Submit & View Results
            </button>
          ) : (
            <button
              onClick={handleNext}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer',
                'hover:opacity-90'
              )}
              style={{
                backgroundColor: buttonBackgroundColor,
                color: buttonTextColor,
              }}
            >
              Next
            </button>
          )}
        </div>

        {hasVoted && (
          <div className="text-center text-sm text-muted-foreground">
            Thanks for voting!
          </div>
        )}
      </div>
    </div>
  )
}
