import {useState} from 'react'
import {cn} from '../lib/utils'

export function PollWidget({
  title = 'Create Your Poll',
  theme = 'light',
  primaryColor = '#668ba4',
  showTitle = true,
  maxOptions = 5,
  allowMultipleVotes = false,
  titleFontSize = 'text-xl',
  questionFontSize = 'text-lg',
  optionFontSize = 'text-base',
  labelFontSize = 'text-sm',
  voteCountFontSize = 'text-sm',
  totalVotesFontSize = 'text-sm',
  buttonFontSize = 'text-sm',
  inputFontSize = 'text-sm',
  buttonBackgroundColor = '#668ba4',
  buttonTextColor = '#ffffff',
}) {
  const [pollTitle, setPollTitle] = useState('')
  const [options, setOptions] = useState(['', ''])
  const [votes, setVotes] = useState({})
  const [isCreated, setIsCreated] = useState(false)

  const addOption = () => {
    if (options.length < maxOptions) {
      setOptions([...options, ''])
    }
  }

  const removeOption = (index) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index))
    }
  }

  const updateOption = (index, value) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const createPoll = () => {
    if (pollTitle.trim() && options.filter((opt) => opt.trim()).length >= 2) {
      setIsCreated(true)
      console.log('Poll created:', {pollTitle, options})
    }
  }

  const vote = (optionIndex) => {
    if (allowMultipleVotes) {
      setVotes((prev) => ({
        ...prev,
        [optionIndex]: (prev[optionIndex] || 0) + 1,
      }))
    } else {
      setVotes({[optionIndex]: 1})
    }
  }

  const getTotalVotes = () => {
    return Object.values(votes).reduce((sum, count) => sum + count, 0)
  }

  const getPercentage = (optionIndex) => {
    const total = getTotalVotes()
    return total > 0 ? Math.round(((votes[optionIndex] || 0) / total) * 100) : 0
  }

  const isDark = theme === 'dark'

  if (isCreated) {
    return (
      <div
        className={cn(
          'max-w-md mx-auto px-4 sm:px-6',
          isDark && 'bg-card border-border'
        )}
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
          <h3 className={cn(questionFontSize, 'font-semibold')}>{pollTitle}</h3>

          <div className="space-y-3">
            {options
              .filter((opt) => opt.trim())
              .map((option, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => vote(index)}
                    className={cn(
                      'w-full text-left p-3 rounded-md border transition-all hover:shadow-sm relative overflow-hidden',
                      'bg-background hover:bg-accent hover:text-accent-foreground'
                    )}
                    style={{borderColor: primaryColor}}
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
                      >
                        {votes[index] || 0} votes ({getPercentage(index)}%)
                      </span>
                    </div>
                    <div
                      className="absolute inset-0 transition-all duration-300 ease-in-out"
                      style={{
                        width: `${getPercentage(index)}%`,
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
          >
            Total votes: {getTotalVotes()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'max-w-md mx-auto px-4 sm:px-6',
        isDark && 'bg-card border-border'
      )}
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
        <div>
          <label className={cn(labelFontSize, 'font-medium mb-2 block')}>
            Poll Question:
          </label>
          <input
            type="text"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
            placeholder="Enter your poll question..."
            className={cn(
              inputFontSize,
              'w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent'
            )}
          />
        </div>

        <div>
          <label className={cn(labelFontSize, 'font-medium mb-2 block')}>
            Options:
          </label>
          <div className="space-y-2">
            {options.map((option, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className={cn(
                    inputFontSize,
                    'flex-1 px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent'
                  )}
                />
                {options.length > 2 && (
                  <button
                    onClick={() => removeOption(index)}
                    className={cn(
                      buttonFontSize,
                      'px-3 py-2 bg-destructive text-destructive-foreground rounded-md font-medium hover:bg-destructive/90 transition-colors'
                    )}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          {options.length < maxOptions && (
            <button
              onClick={addOption}
              className={cn(
                buttonFontSize,
                'mt-2 px-3 py-2 border border-input bg-background text-foreground rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-colors'
              )}
            >
              + Add Option
            </button>
          )}
        </div>

        <button
          onClick={createPoll}
          disabled={
            !pollTitle.trim() || options.filter((opt) => opt.trim()).length < 2
          }
          className={cn(
            buttonFontSize,
            'w-full px-4 py-2 rounded-md font-medium transition-colors',
            'hover:opacity-90',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
          style={{
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor,
          }}
        >
          Create Poll
        </button>
      </div>
    </div>
  )
}
