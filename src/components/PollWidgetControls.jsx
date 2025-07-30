import {ChevronDown, ChevronUp} from 'lucide-react'

export function PollWidgetControls({
  titleFontSize,
  setTitleFontSize,
  contentFontSize,
  setContentFontSize,
  titleColor,
  setTitleColor,
  buttonBackgroundColor,
  setButtonBackgroundColor,
  buttonTextColor,
  setButtonTextColor,
  pollBackgroundColor,
  setPollBackgroundColor,
  pollTitle,
  setPollTitle,
  updateIframeSettings,
  pollQuestions,
  isExpanded,
  onToggle,
}) {
  const fontSizes = [
    {value: 'text-xs', label: 'XS'},
    {value: 'text-sm', label: 'SM'},
    {value: 'text-base', label: 'Base'},
    {value: 'text-lg', label: 'LG'},
    {value: 'text-xl', label: 'XL'},
    {value: 'text-2xl', label: '2XL'},
    {value: 'text-3xl', label: '3XL'},
    {value: 'text-4xl', label: '4XL'},
  ]

  const handleTitleFontChange = (newSize) => {
    setTitleFontSize(newSize)
    updateIframeSettings(
      newSize,
      contentFontSize,
      titleColor,
      buttonBackgroundColor,
      buttonTextColor,
      pollBackgroundColor,
      pollTitle,
      pollQuestions
    )
  }

  const handleContentFontChange = (newSize) => {
    setContentFontSize(newSize)
    updateIframeSettings(
      titleFontSize,
      newSize,
      titleColor,
      buttonBackgroundColor,
      buttonTextColor,
      pollBackgroundColor,
      pollTitle,
      pollQuestions
    )
  }

  const handleTitleColorChange = (newColor) => {
    setTitleColor(newColor)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      newColor,
      buttonBackgroundColor,
      buttonTextColor,
      pollBackgroundColor,
      pollTitle,
      pollQuestions
    )
  }

  const handleButtonColorChange = (newColor) => {
    setButtonBackgroundColor(newColor)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      titleColor,
      newColor,
      buttonTextColor,
      pollBackgroundColor,
      pollTitle,
      pollQuestions
    )
  }

  const handleButtonTextColorChange = (newColor) => {
    setButtonTextColor(newColor)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      titleColor,
      buttonBackgroundColor,
      newColor,
      pollBackgroundColor,
      pollTitle,
      pollQuestions
    )
  }

  const handlePollBackgroundColorChange = (newColor) => {
    setPollBackgroundColor(newColor)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      titleColor,
      buttonBackgroundColor,
      buttonTextColor,
      newColor,
      pollTitle,
      pollQuestions
    )
  }

  const handlePollTitleChange = (newTitle) => {
    setPollTitle(newTitle)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      titleColor,
      buttonBackgroundColor,
      buttonTextColor,
      pollBackgroundColor,
      newTitle,
      pollQuestions
    )
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div
        className={`flex items-center justify-between mb-6 ${!isExpanded ? 'cursor-pointer' : ''}`}
        onClick={!isExpanded ? onToggle : undefined}
      >
        <h3 className="text-lg font-semibold">Add Custom Theme</h3>
        <button
          onClick={onToggle}
          className="flex items-center gap-2 px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Collapse
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Expand
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <>
          {/* Poll Title - First Row */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Poll Title:</label>
              <input
                type="text"
                value={pollTitle}
                onChange={(e) => handlePollTitleChange(e.target.value)}
                placeholder="Poll Title"
                className="flex-1 px-3 py-2 border border-input bg-background text-foreground rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* Title Font Size - Second Row */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Title Font Size:</label>
              <span className="text-sm text-muted-foreground">
                {fontSizes.find((f) => f.value === titleFontSize)?.label}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap justify-start">
              {fontSizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => handleTitleFontChange(size.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    titleFontSize === size.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Font Size - Third Row */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Content Font Size:</label>
              <span className="text-sm text-muted-foreground">
                {fontSizes.find((f) => f.value === contentFontSize)?.label}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap justify-start">
              {fontSizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => handleContentFontChange(size.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    contentFontSize === size.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Title Color - Fourth Row */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Title Color:</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={titleColor}
                  onChange={(e) => handleTitleColorChange(e.target.value)}
                  className="w-8 h-8 rounded border cursor-pointer"
                />
                <input
                  type="text"
                  value={titleColor}
                  onChange={(e) => handleTitleColorChange(e.target.value)}
                  placeholder="#668ba4"
                  className="px-2 py-1 text-xs border rounded w-20"
                />
              </div>
            </div>
          </div>

          {/* Button Background Color - Fifth Row */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">
                Create Poll Button Color:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={buttonBackgroundColor}
                  onChange={(e) => handleButtonColorChange(e.target.value)}
                  className="w-8 h-8 rounded border cursor-pointer"
                />
                <input
                  type="text"
                  value={buttonBackgroundColor}
                  onChange={(e) => handleButtonColorChange(e.target.value)}
                  placeholder="#668ba4"
                  className="px-2 py-1 text-xs border rounded w-20"
                />
              </div>
            </div>
          </div>

          {/* Button Text Color - Sixth Row */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Button Text Color:</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={buttonTextColor}
                  onChange={(e) => handleButtonTextColorChange(e.target.value)}
                  className="w-8 h-8 rounded border cursor-pointer"
                />
                <input
                  type="text"
                  value={buttonTextColor}
                  onChange={(e) => handleButtonTextColorChange(e.target.value)}
                  placeholder="#ffffff"
                  className="px-2 py-1 text-xs border rounded w-20"
                />
              </div>
            </div>
          </div>

          {/* Poll Background Color - Seventh Row */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">
                Poll Background Color:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={pollBackgroundColor}
                  onChange={(e) =>
                    handlePollBackgroundColorChange(e.target.value)
                  }
                  className="w-8 h-8 rounded border cursor-pointer"
                />
                <input
                  type="text"
                  value={pollBackgroundColor}
                  onChange={(e) =>
                    handlePollBackgroundColorChange(e.target.value)
                  }
                  placeholder="#ffffff"
                  className="px-2 py-1 text-xs border rounded w-20"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
