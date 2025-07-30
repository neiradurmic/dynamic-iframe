import {Palette, Sparkles} from 'lucide-react'

export function CustomTheme({
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

  const presetThemes = [
    {
      name: 'Ocean Blue',
      colors: {
        titleColor: '#1e40af',
        buttonBackgroundColor: '#3b82f6',
        buttonTextColor: '#ffffff',
        pollBackgroundColor: '#f8fafc',
      },
    },
    {
      name: 'Forest Green',
      colors: {
        titleColor: '#166534',
        buttonBackgroundColor: '#22c55e',
        buttonTextColor: '#ffffff',
        pollBackgroundColor: '#f0fdf4',
      },
    },
    {
      name: 'Sunset Orange',
      colors: {
        titleColor: '#ea580c',
        buttonBackgroundColor: '#f97316',
        buttonTextColor: '#ffffff',
        pollBackgroundColor: '#fff7ed',
      },
    },
    {
      name: 'Purple Dream',
      colors: {
        titleColor: '#7c3aed',
        buttonBackgroundColor: '#a855f7',
        buttonTextColor: '#ffffff',
        pollBackgroundColor: '#faf5ff',
      },
    },
    {
      name: 'Midnight Dark',
      colors: {
        titleColor: '#f1f5f9',
        buttonBackgroundColor: '#475569',
        buttonTextColor: '#ffffff',
        pollBackgroundColor: '#1e293b',
      },
    },
    {
      name: 'Rose Pink',
      colors: {
        titleColor: '#be185d',
        buttonBackgroundColor: '#ec4899',
        buttonTextColor: '#ffffff',
        pollBackgroundColor: '#fdf2f8',
      },
    },
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

  const applyPresetTheme = (theme) => {
    setTitleColor(theme.colors.titleColor)
    setButtonBackgroundColor(theme.colors.buttonBackgroundColor)
    setButtonTextColor(theme.colors.buttonTextColor)
    setPollBackgroundColor(theme.colors.pollBackgroundColor)
    updateIframeSettings(
      titleFontSize,
      contentFontSize,
      theme.colors.titleColor,
      theme.colors.buttonBackgroundColor,
      theme.colors.buttonTextColor,
      theme.colors.pollBackgroundColor,
      pollTitle,
      pollQuestions
    )
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Palette className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Custom Theme</h3>
      </div>

      {/* Preset Themes */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4" />
          <label className="text-sm font-medium">Preset Themes:</label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {presetThemes.map((theme, index) => (
            <button
              key={index}
              onClick={() => applyPresetTheme(theme)}
              className="p-3 border rounded-lg hover:border-primary transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{backgroundColor: theme.colors.buttonBackgroundColor}}
                />
                <span className="text-sm font-medium">{theme.name}</span>
              </div>
              <div className="flex gap-1">
                <div
                  className="w-3 h-3 rounded"
                  style={{backgroundColor: theme.colors.titleColor}}
                />
                <div
                  className="w-3 h-3 rounded"
                  style={{backgroundColor: theme.colors.buttonBackgroundColor}}
                />
                <div
                  className="w-3 h-3 rounded"
                  style={{backgroundColor: theme.colors.pollBackgroundColor}}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Poll Title */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Poll Title:</label>
        </div>
        <input
          type="text"
          value={pollTitle}
          onChange={(e) => handlePollTitleChange(e.target.value)}
          placeholder="Enter poll title..."
          className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
        />
      </div>

      {/* Title Font Size */}
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

      {/* Content Font Size */}
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

      {/* Title Color */}
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

      {/* Button Background Color */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">
            Button Background Color:
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

      {/* Button Text Color */}
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

      {/* Poll Background Color */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">Poll Background Color:</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={pollBackgroundColor}
              onChange={(e) => handlePollBackgroundColorChange(e.target.value)}
              className="w-8 h-8 rounded border cursor-pointer"
            />
            <input
              type="text"
              value={pollBackgroundColor}
              onChange={(e) => handlePollBackgroundColorChange(e.target.value)}
              placeholder="#ffffff"
              className="px-2 py-1 text-xs border rounded w-20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
