# YouTube Clone

A modern YouTube clone built with React and Vite, featuring a responsive design and real-time video fetching from the YouTube Data API.

## 🚀 Features

- **Responsive Layout**: Works on desktop and mobile devices
- **Video Categories**: Browse videos by Home, Trending, Music, and Gaming
- **Search Functionality**: Search for videos across YouTube
- **Infinite Scrolling**: Load more videos as you scroll
- **Video Details**: View video statistics, channel info, and more
- **Loading States**: Smooth loading indicators for better UX

## 🛠️ Technologies Used

- **Frontend**:
  - React 18
  - Vite (Build Tool)
  - React Icons
  - CSS3 (No external UI libraries)
  
- **APIs**:
  - YouTube Data API v3

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/youtube-clone.git
   cd youtube-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory
   - Add your YouTube API key:
     ```
     VITE_YOUTUBE_API_KEY=your_api_key_here
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 🎯 Project Structure

```
src/
├── Component/
│   ├── LoadingScreen.jsx  # Loading animation component
│   ├── Mainpart.jsx       # Main content area with video grid
│   ├── Navbar.jsx         # Top navigation bar with search
│   ├── Navbar1.jsx        # Secondary navigation
│   └── Sidebar.jsx        # Side navigation menu
├── App.jsx                # Main application component
├── main.jsx               # Application entry point
└── style.css              # Global styles
```

## 🔑 API Configuration

This application uses the YouTube Data API v3. To get started:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the YouTube Data API v3
4. Create API credentials (API key)
5. Add the API key to your `.env` file

## 🚀 Deployment

The app can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- YouTube for the inspiration
- React and Vite teams for amazing tools
- Google for the YouTube Data API
