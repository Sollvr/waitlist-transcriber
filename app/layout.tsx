import { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Join the Waitlist | Video Transcriber - Transcribe, Timestamp, and Clip',
  description: 'Sign up for early access to Video Transcriber. AI-powered video transcription, SRT file generation, and social media-ready video clipping.',
  keywords: 'video transcription, SRT files, video clipping, social media content, AI transcription',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
