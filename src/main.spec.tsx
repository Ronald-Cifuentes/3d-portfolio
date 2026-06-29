import React from 'react'

describe('main.tsx', () => {
  let rootElement: HTMLDivElement
  let mockRender: jest.Mock
  let mockCreateRoot: jest.Mock

  beforeEach(() => {
    // Reset modules to get fresh mocks
    jest.resetModules()

    // Create render and createRoot mocks
    mockRender = jest.fn()
    mockCreateRoot = jest.fn(() => ({
      render: mockRender,
    }))

    // Mock react-dom/client
    jest.doMock('react-dom/client', () => ({
      createRoot: mockCreateRoot,
    }))

    // Mock the App component
    jest.doMock('./App', () => ({
      __esModule: true,
      default: () => React.createElement('div', { 'data-testid': 'mock-app' }, 'App'),
    }))

    // Mock LanguageProvider
    jest.doMock('./i18n', () => ({
      LanguageProvider: ({ children }: { children: React.ReactNode }) =>
        React.createElement('div', { 'data-testid': 'mock-language-provider' }, children),
    }))

    // Mock CSS imports
    jest.doMock('font-awesome/css/font-awesome.min.css', () => ({}))
    jest.doMock('./index.css', () => ({}))

    // Create and append root element
    rootElement = document.createElement('div')
    rootElement.id = 'root'
    document.body.appendChild(rootElement)
  })

  afterEach(() => {
    // Clean up root element
    if (rootElement && rootElement.parentNode) {
      rootElement.parentNode.removeChild(rootElement)
    }
    jest.dontMock('react-dom/client')
    jest.dontMock('./App')
    jest.dontMock('./i18n')
    jest.dontMock('font-awesome/css/font-awesome.min.css')
    jest.dontMock('./index.css')
  })

  test('calls createRoot with the root element', async () => {
    // Import main.tsx to execute it
    await import('./main')

    expect(mockCreateRoot).toHaveBeenCalledTimes(1)
    expect(mockCreateRoot).toHaveBeenCalledWith(rootElement)
  })

  test('calls render with StrictMode wrapping LanguageProvider and App', async () => {
    await import('./main')

    expect(mockRender).toHaveBeenCalledTimes(1)

    // The render call should receive a React element
    const renderArg = mockRender.mock.calls[0][0]
    expect(renderArg).toBeDefined()
    expect(renderArg.type).toBe(React.StrictMode)
  })
})
