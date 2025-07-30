import {VotingPoll} from '../components/VotingPoll'
import {cn} from '../lib/utils'

export function PollWidgetPage() {
  // Get URL parameters for customization
  const urlParams = new URLSearchParams(window.location.search)

  // Parse pollQuestions from URL or use default
  let pollQuestions = [
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
  ]

  try {
    const pollQuestionsParam = urlParams.get('pollQuestions')
    if (pollQuestionsParam) {
      pollQuestions = JSON.parse(decodeURIComponent(pollQuestionsParam))
    }
  } catch (error) {
    console.error('Error parsing pollQuestions:', error)
  }

  const props = {
    title: urlParams.get('title') || 'Poll Title',
    theme: urlParams.get('theme') || 'light',
    primaryColor: urlParams.get('primaryColor') || '#668ba4',
    showTitle: urlParams.get('showTitle') !== 'false',
    titleFontSize: urlParams.get('titleFontSize') || 'text-xl',
    questionFontSize: urlParams.get('questionFontSize') || 'text-lg',
    optionFontSize: urlParams.get('optionFontSize') || 'text-base',
    voteCountFontSize: urlParams.get('voteCountFontSize') || 'text-sm',
    totalVotesFontSize: urlParams.get('totalVotesFontSize') || 'text-sm',
    buttonBackgroundColor: urlParams.get('buttonBackgroundColor') || '#668ba4',
    buttonTextColor: urlParams.get('buttonTextColor') || '#ffffff',
    pollBackgroundColor: urlParams.get('pollBackgroundColor') || '#ffffff',
    pollQuestions: pollQuestions,
  }

  const isDark = props.theme === 'dark'

  return (
    <div
      className={cn(
        'min-h-screen pt-4 px-4 sm:px-6 lg:px-8',
        isDark ? 'bg-background text-foreground' : 'bg-muted/30'
      )}
      style={{backgroundColor: props.pollBackgroundColor}}
    >
      <VotingPoll {...props} />
    </div>
  )
}
