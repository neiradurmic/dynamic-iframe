import {useState} from 'react'
import {CustomTheme} from './CustomTheme'
import {PollQuestions} from './PollQuestions'

export function PollBuilderTabs({
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
  setPollQuestions,
  activeTab,
  setActiveTab,
}) {
  const [activeBuilderTab, setActiveBuilderTab] = useState('theme')

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      {/* Tab Headers */}
      <div className="flex border-b bg-muted/30">
        <button
          onClick={() => setActiveBuilderTab('theme')}
          className={`flex-1 px-4 py-4 text-sm lg:text-md font-medium transition-colors cursor-pointer ${
            activeBuilderTab === 'theme'
              ? 'bg-background text-foreground border-b-2 border-primary shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          Custom Theme
        </button>
        <button
          onClick={() => setActiveBuilderTab('questions')}
          className={`flex-1 px-4 py-4 text-sm lg:text-md font-medium transition-colors cursor-pointer ${
            activeBuilderTab === 'questions'
              ? 'bg-background text-foreground border-b-2 border-primary shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          Add Questions
        </button>
      </div>

      {/* Tab Content */}
      <div className=" lg:p-6">
        {activeBuilderTab === 'theme' && (
          <div className="animate-in fade-in-0 slide-in-from-top-2 duration-300">
            <CustomTheme
              titleFontSize={titleFontSize}
              setTitleFontSize={setTitleFontSize}
              contentFontSize={contentFontSize}
              setContentFontSize={setContentFontSize}
              titleColor={titleColor}
              setTitleColor={setTitleColor}
              buttonBackgroundColor={buttonBackgroundColor}
              setButtonBackgroundColor={setButtonBackgroundColor}
              buttonTextColor={buttonTextColor}
              setButtonTextColor={setButtonTextColor}
              pollBackgroundColor={pollBackgroundColor}
              setPollBackgroundColor={setPollBackgroundColor}
              pollTitle={pollTitle}
              setPollTitle={setPollTitle}
              updateIframeSettings={updateIframeSettings}
              pollQuestions={pollQuestions}
            />
          </div>
        )}

        {activeBuilderTab === 'questions' && (
          <div className="animate-in fade-in-0 slide-in-from-top-2 duration-300">
            <PollQuestions
              pollQuestions={pollQuestions}
              setPollQuestions={setPollQuestions}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              updateIframeSettings={updateIframeSettings}
              titleFontSize={titleFontSize}
              contentFontSize={contentFontSize}
              titleColor={titleColor}
              buttonBackgroundColor={buttonBackgroundColor}
              buttonTextColor={buttonTextColor}
              pollBackgroundColor={pollBackgroundColor}
              pollTitle={pollTitle}
            />
          </div>
        )}
      </div>
    </div>
  )
}
