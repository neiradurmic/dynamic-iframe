# Dynamic iframe Poll Widget

A modern React application for creating customizable online polls that can be embedded as iframes on any website.

## Features

### 🎨 Custom Theme Builder

- **Preset Themes**: Choose from 6 beautiful preset themes (Ocean Blue, Forest Green, Sunset Orange, Purple Dream, Midnight Dark, Rose Pink)
- **Custom Colors**: Fine-tune every color aspect:
  - Title color
  - Button background color
  - Button text color
  - Poll background color
- **Font Sizing**: Adjust title and content font sizes from XS to 4XL
- **Live Preview**: See changes instantly in the embedded widget

### ❓ Question Management

- **Multiple Questions**: Create up to 5 poll questions
- **Tabbed Interface**: Easy navigation between questions
- **Dynamic Options**: Add/remove options (2-5 per question)
- **Real-time Updates**: All changes reflect immediately in the preview

### 🔧 Technical Features

- **Dynamic iframe Generation**: Automatically generates iframe code with all customizations
- **URL Parameters**: All settings are encoded in the iframe URL for easy sharing
- **Responsive Design**: Works perfectly on all device sizes
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## Usage

1. **Customize Your Poll**
   - Switch between "Custom Theme" and "Add Questions" tabs
   - Choose a preset theme or create your own color scheme
   - Add questions and options to your poll

2. **Copy iframe Code**
   - Click "Copy iframe" to get the embeddable code
   - Paste the code into any HTML page

3. **Share Your Poll**
   - The iframe URL contains all your customizations
   - Share the URL directly or embed it on your website

## Project Structure

```
src/
├── components/
│   ├── CustomTheme.jsx          # Theme customization component
│   ├── PollBuilderTabs.jsx      # Main tabbed interface
│   ├── PollQuestions.jsx        # Question management
│   ├── VotingPoll.jsx           # Poll display component
│   └── ui/                      # shadcn/ui components
├── pages/
│   └── PollWidgetPage.jsx       # iframe target page
└── App.jsx                      # Main application
```

## Technologies Used

- **React 18** with Vite for fast development
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful components
- **Lucide React** for icons
- **Modern JavaScript** with ES6+ features

## Development

This project uses:

- **Vite** for fast bundling and HMR
- **ESLint** for code quality
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for consistent component design

## License

MIT License - feel free to use this project for your own polls!
