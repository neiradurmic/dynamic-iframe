import {Layout} from './components/Layout'
import {useState, useRef} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './components/ui/dialog'
import {Copy, Check} from 'lucide-react'
import {PollBuilderTabs} from './components/PollBuilderTabs'

function App() {
  const [titleFontSize, setTitleFontSize] = useState('text-xl')
  const [contentFontSize, setContentFontSize] = useState('text-base')
  const [titleColor, setTitleColor] = useState('#668ba4')
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#668ba4')
  const [buttonTextColor, setButtonTextColor] = useState('#ffffff')
  const [pollBackgroundColor, setPollBackgroundColor] = useState('#ffffff')
  const [pollTitle, setPollTitle] = useState('Poll Title')
  const [pollQuestions, setPollQuestions] = useState([
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
  ])
  const [activeTab, setActiveTab] = useState(0)
  const [showInstructions, setShowInstructions] = useState(false)
  const [copyStatus, setCopyStatus] = useState('Copy')

  const iframeRef = useRef(null)
  const debounceTimeoutRef = useRef(null)

  const updateIframeSettings = (
    newTitleSize,
    newContentSize,
    newTitleColor,
    newButtonColor,
    newButtonTextColor,
    newPollBackgroundColor,
    newPollTitle,
    newPollQuestions
  ) => {
    // Clear any existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    // Set a new timeout to update after 500ms of no changes
    debounceTimeoutRef.current = setTimeout(() => {
      if (iframeRef.current) {
        const iframe = iframeRef.current
        const currentSrc = iframe.src
        const baseUrl = currentSrc.split('?')[0]
        const questionsParam = encodeURIComponent(
          JSON.stringify(newPollQuestions)
        )
        const newSrc = `${baseUrl}?titleFontSize=${newTitleSize}&questionFontSize=${newContentSize}&optionFontSize=${newContentSize}&voteCountFontSize=${newContentSize}&totalVotesFontSize=${newContentSize}&primaryColor=${encodeURIComponent(newTitleColor)}&buttonBackgroundColor=${encodeURIComponent(newButtonColor)}&buttonTextColor=${encodeURIComponent(newButtonTextColor)}&pollBackgroundColor=${encodeURIComponent(newPollBackgroundColor)}&title=${encodeURIComponent(newPollTitle)}&pollQuestions=${questionsParam}`

        // Only update if the URL has actually changed to prevent unnecessary reloads
        if (iframe.src !== newSrc) {
          iframe.src = newSrc
        }
      }
    }, 500) // 500ms delay
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Create Online Polls
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create free online polls with this quick and easy polling tool.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Controls - Left Column */}
          <div className="space-y-6">
            <PollBuilderTabs
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
              setPollQuestions={setPollQuestions}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Poll Widget iframe - Right Column */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Embedded Poll Widget</h3>
                <button
                  onClick={() => {
                    const questionsParam = encodeURIComponent(
                      JSON.stringify(pollQuestions)
                    )
                    const iframeCode = `<iframe src="${window.location.origin}/poll-widget?titleFontSize=${titleFontSize}&questionFontSize=${contentFontSize}&optionFontSize=${contentFontSize}&voteCountFontSize=${contentFontSize}&totalVotesFontSize=${contentFontSize}&primaryColor=${encodeURIComponent(titleColor)}&buttonBackgroundColor=${encodeURIComponent(buttonBackgroundColor)}&buttonTextColor=${encodeURIComponent(buttonTextColor)}&pollBackgroundColor=${encodeURIComponent(pollBackgroundColor)}&title=${encodeURIComponent(pollTitle)}&pollQuestions=${questionsParam}" width="100%" height="600" frameborder="0"></iframe>`
                    navigator.clipboard.writeText(iframeCode)
                    setShowInstructions(true)
                  }}
                  className="px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Copy iframe
                </button>
              </div>
              <div className="relative w-full h-[600px] border rounded-lg overflow-hidden">
                <iframe
                  ref={iframeRef}
                  src="/poll-widget"
                  title="Poll Widget"
                  className="w-full h-full border-0"
                  style={{backgroundColor: 'transparent'}}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Modal */}
        <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>How to Use Your Poll Widget</DialogTitle>
              <DialogDescription className="bg-third p-2 rounded text-white">
                Your iframe code has been copied! Here's how to use it:
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">1. Paste This Code</h4>
                  <button
                    onClick={() => {
                      const questionsParam = encodeURIComponent(
                        JSON.stringify(pollQuestions)
                      )
                      const iframeCode = `<iframe src="${window.location.origin}/poll-widget?titleFontSize=${titleFontSize}&questionFontSize=${contentFontSize}&optionFontSize=${contentFontSize}&voteCountFontSize=${contentFontSize}&totalVotesFontSize=${contentFontSize}&primaryColor=${encodeURIComponent(titleColor)}&buttonBackgroundColor=${encodeURIComponent(buttonBackgroundColor)}&buttonTextColor=${encodeURIComponent(buttonTextColor)}&pollBackgroundColor=${encodeURIComponent(pollBackgroundColor)}&title=${encodeURIComponent(pollTitle)}&pollQuestions=${questionsParam}" width="100%" height="600" frameborder="0"></iframe>`
                      navigator.clipboard.writeText(iframeCode)
                      setCopyStatus('Copied!')
                      setTimeout(() => setCopyStatus('Copy'), 2000)
                    }}
                    className="px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    {copyStatus}
                  </button>
                </div>
                <div className="bg-muted p-3 rounded-md max-h-[200px] overflow-y-auto">
                  <code className="text-sm break-all">
                    {(() => {
                      const questionsParam = encodeURIComponent(
                        JSON.stringify(pollQuestions)
                      )
                      return `<iframe src="${window.location.origin}/poll-widget?titleFontSize=${titleFontSize}&questionFontSize=${contentFontSize}&optionFontSize=${contentFontSize}&voteCountFontSize=${contentFontSize}&totalVotesFontSize=${contentFontSize}&primaryColor=${encodeURIComponent(titleColor)}&buttonBackgroundColor=${encodeURIComponent(buttonBackgroundColor)}&buttonTextColor=${encodeURIComponent(buttonTextColor)}&pollBackgroundColor=${encodeURIComponent(pollBackgroundColor)}&title=${encodeURIComponent(pollTitle)}&pollQuestions=${questionsParam}" width="100%" height="600" frameborder="0"></iframe>`
                    })()}
                  </code>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">2. Where to Paste</h4>
                <p className="text-sm">
                  Paste the code above into your HTML page where you want the
                  poll to appear.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">3. Customize & Update</h4>
                <p className="text-sm">
                  Use the controls on the left to customize your poll, then
                  click "Copy iframe" again for updated code.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Backend Integration Warning */}
      <div className="mt-12 border-t pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/50 border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-muted-foreground"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm text-muted-foreground">
                <h4 className="font-medium mb-2">
                  Note: Backend Integration Is To Be Added
                </h4>
                <p className="text-xs">
                  Current implementation demonstrates UI/UX and dynamic iframe
                  embedding capabilities only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
