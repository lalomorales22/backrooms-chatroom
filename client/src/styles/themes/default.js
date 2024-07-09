export const defaultTheme = {
    backgroundColor: 'bg-gray-100',
    textColor: 'text-gray-900',
    primaryColor: 'bg-blue-500 text-white',
    secondaryColor: 'bg-gray-200 text-gray-800',
    accentColor: 'bg-yellow-400 text-gray-900',
  
    // Component-specific styles
    header: {
      background: 'bg-white shadow-md',
      text: 'text-gray-800'
    },
    sidebar: {
      background: 'bg-gray-200',
      text: 'text-gray-700'
    },
    chatWindow: {
      background: 'bg-white',
      messageBubble: {
        self: 'bg-blue-500 text-white',
        other: 'bg-gray-300 text-gray-800'
      }
    },
    input: {
      background: 'bg-white',
      text: 'text-gray-800',
      border: 'border-gray-300',
      focus: 'focus:border-blue-500 focus:ring-blue-500'
    },
    button: {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800'
    },
    modal: {
      background: 'bg-white',
      overlay: 'bg-black bg-opacity-50'
    }
  };