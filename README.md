# BYOA Attendance Tracker

A fun and intuitive attendance tracking application for marking learner attendance with three status options: Attending, Absent, and Excused Absence.

## Features

- 🎯 **Simple Status Tracking**: Mark each learner as Attending, Absent, or Excused Absence
- 📊 **Real-time Summary**: Live attendance statistics and visual progress bar
- 👥 **Dynamic Learner Management**: Add new learners on the fly
- 📧 **Email Reports**: Send formatted attendance summaries to tobin@musttry.it
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- ⚡ **Fast & Lightweight**: Built with React + TypeScript + Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`)

## Usage

1. **View Attendance Summary**: See real-time statistics at the top of the page
2. **Mark Attendance**: Click the status buttons (Present/Absent/Excused) for each learner
3. **Add Learners**: Use the "Add New Learner" button to add students to the list
4. **Send Email Report**: Click "Send Email Report" to generate and send a formatted summary
5. **Start New Session**: After sending the email, you can start a fresh session

## Project Structure

```
src/
├── components/
│   ├── AttendanceSummary.tsx    # Real-time attendance statistics
│   ├── EmailService.tsx          # Email functionality and formatting
│   └── LearnerCard.tsx           # Individual learner status cards
├── types/
│   └── attendance.ts            # TypeScript type definitions
├── App.tsx                      # Main application component
└── index.css                    # Tailwind CSS styles
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icons
- **EmailJS** - Email functionality (configured for demo)

## Email Integration

The app includes a demo email service that generates beautifully formatted HTML reports. In a production environment, you would:

1. Set up EmailJS or another email service
2. Configure the service with your credentials
3. Update the email recipient and template as needed

## Customization

### Adding More Learners

The app comes with 10 sample learners. You can:
- Add learners dynamically using the "Add New Learner" button
- Modify the `sampleLearners` array in `App.tsx` to include your actual student list
- Integrate with a database or API to load learners dynamically

### Styling

The app uses Tailwind CSS with a custom color palette. You can modify:
- Colors in `tailwind.config.js`
- Component styles in individual `.tsx` files
- Global styles in `src/index.css`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## License

This project is part of the BYOA (Build Your Own App) series.