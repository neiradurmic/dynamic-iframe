import {HelpCircle} from 'lucide-react'

export function PollQuestions({
  pollQuestions,
  setPollQuestions,
  activeTab,
  setActiveTab,
  updateIframeSettings,
  titleFontSize,
  contentFontSize,
  titleColor,
  buttonBackgroundColor,
  buttonTextColor,
  pollBackgroundColor,
  pollTitle,
}) {
  const handleQuestionChange = (questionIndex, newQuestion) => {
    const newQuestions = [...pollQuestions]
    newQuestions[questionIndex].question = newQuestion
    setPollQuestions(newQuestions)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      titleColor,
      buttonBackgroundColor,
      buttonTextColor,
      pollBackgroundColor,
      pollTitle,
      newQuestions
    )
  }

  const handleOptionChange = (questionIndex, optionIndex, newOption) => {
    const newQuestions = [...pollQuestions]
    newQuestions[questionIndex].options[optionIndex] = newOption
    setPollQuestions(newQuestions)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      titleColor,
      buttonBackgroundColor,
      buttonTextColor,
      pollBackgroundColor,
      pollTitle,
      newQuestions
    )
  }

  const addQuestion = () => {
    if (pollQuestions.length < 5) {
      const newQuestions = [
        ...pollQuestions,
        {
          question: 'New Question',
          options: ['Option 1', 'Option 2'],
        },
      ]
      setPollQuestions(newQuestions)
      setActiveTab(newQuestions.length - 1) // Switch to the new question tab
      updateIframeSettings(
        titleFontSize,
        contentFontSize,
        titleColor,
        buttonBackgroundColor,
        buttonTextColor,
        pollBackgroundColor,
        pollTitle,
        newQuestions
      )
    }
  }

  const removeQuestion = (questionIndex) => {
    if (pollQuestions.length > 1) {
      const newQuestions = pollQuestions.filter(
        (_, index) => index !== questionIndex
      )
      setPollQuestions(newQuestions)
      // Adjust active tab if necessary
      if (activeTab >= questionIndex) {
        setActiveTab(Math.max(0, activeTab - 1))
      }
      updateIframeSettings(
        titleFontSize,
        contentFontSize,
        titleColor,
        buttonBackgroundColor,
        buttonTextColor,
        pollBackgroundColor,
        pollTitle,
        newQuestions
      )
    }
  }

  const addOption = (questionIndex) => {
    const newQuestions = [...pollQuestions]
    if (newQuestions[questionIndex].options.length < 5) {
      newQuestions[questionIndex].options.push('New Option')
      setPollQuestions(newQuestions)
      updateIframeSettings(
        titleFontSize,
        contentFontSize,
        titleColor,
        buttonBackgroundColor,
        buttonTextColor,
        pollBackgroundColor,
        pollTitle,
        newQuestions
      )
    }
  }

  const removeOption = (questionIndex, optionIndex) => {
    const newQuestions = [...pollQuestions]
    if (newQuestions[questionIndex].options.length > 2) {
      newQuestions[questionIndex].options = newQuestions[
        questionIndex
      ].options.filter((_, index) => index !== optionIndex)
      setPollQuestions(newQuestions)
      updateIframeSettings(
        titleFontSize,
        contentFontSize,
        titleColor,
        buttonBackgroundColor,
        buttonTextColor,
        pollBackgroundColor,
        pollTitle,
        newQuestions
      )
    }
  }

  return (
    <div className="rounded-lg lg:border bg-card text-card-foreground shadow-sm p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 flex-shrink-0" />
          <h3 className="flex-shrink-0 text-lg font-semibold">Add Questions</h3>
        </div>
        {pollQuestions.length < 5 && (
          <button
            onClick={addQuestion}
            className="flex-shrink-0 px-4 py-2 border border-input bg-background text-foreground rounded text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
          >
            + Add Question
          </button>
        )}
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Poll Questions:</label>
          <span className="text-sm text-muted-foreground">
            {pollQuestions.length}/5
          </span>
        </div>

        {/* Question Tabs */}
        <div className="border rounded-lg">
          {/* Tab Headers */}
          <div className="flex border-b bg-muted/30">
            {pollQuestions.map((questionData, questionIndex) => (
              <button
                key={questionIndex}
                onClick={() => setActiveTab(questionIndex)}
                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === questionIndex
                    ? 'bg-background text-foreground border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Q{questionIndex + 1}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {pollQuestions.map((questionData, questionIndex) => (
              <div
                key={questionIndex}
                className={`space-y-4 ${activeTab === questionIndex ? 'block' : 'hidden'}`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Question {questionIndex + 1}:
                  </label>
                  {pollQuestions.length > 1 && (
                    <button
                      onClick={() => removeQuestion(questionIndex)}
                      className="px-2 py-1 bg-destructive text-white rounded text-xs font-medium hover:bg-destructive/90 transition-colors cursor-pointer"
                    >
                      Remove Question
                    </button>
                  )}
                </div>

                {/* Question Input */}
                <input
                  type="text"
                  value={questionData.question}
                  onChange={(e) =>
                    handleQuestionChange(questionIndex, e.target.value)
                  }
                  placeholder="Enter your question..."
                  className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />

                {/* Options Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Options:</label>
                    <span className="text-sm text-muted-foreground">
                      {questionData.options.length}/5
                    </span>
                  </div>
                  {questionData.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex gap-2">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(
                            questionIndex,
                            optionIndex,
                            e.target.value
                          )
                        }
                        placeholder={`Option ${optionIndex + 1}`}
                        className="flex-1 px-3 py-2 border border-input bg-background text-foreground rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      />
                      {questionData.options.length > 2 && (
                        <button
                          onClick={() =>
                            removeOption(questionIndex, optionIndex)
                          }
                          className="px-3 py-2 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  {questionData.options.length < 5 && (
                    <button
                      onClick={() => addOption(questionIndex)}
                      className="px-3 py-2 border border-input bg-background text-foreground rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      + Add Option
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
