"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Video, FileText, Clock, Share2 } from 'lucide-react'
import { useState } from 'react';

export default function WaitlistPage() {
  const [formData, setFormData] = useState({ name: '', email: '', channel: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Thank you for signing up!');
      } else {
        setMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-purple-700">Transform Your Videos into Social Gold</h1>
          <p className="text-xl text-gray-700 mb-8">Join the waitlist for Video Transcriber - Your AI-powered tool for transcription, timestamping, and social media clipping</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">Join Waitlist</Button>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-purple-700">Unleash Your Video&apos;s Potential</h2>
            <p className="text-gray-700 mb-6">
              Video Transcriber is a cutting-edge AI application designed to streamline your video production workflow. 
              Our advanced technology transcribes your videos, generates accurate SRT files, and helps you create 
              engaging social media clips in minutes.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center"><Video className="mr-3 h-6 w-6 text-purple-600" /> AI-powered video transcription</li>
              <li className="flex items-center"><FileText className="mr-3 h-6 w-6 text-purple-600" /> Automatic SRT file generation</li>
              <li className="flex items-center"><Clock className="mr-3 h-6 w-6 text-purple-600" /> Precise timestamp creation</li>
              <li className="flex items-center"><Share2 className="mr-3 h-6 w-6 text-purple-600" /> Easy social media video clipping</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg shadow-xl border border-purple-200">
            <h3 className="text-2xl font-semibold mb-6 text-purple-700">Be the First to Elevate Your Video Content</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input type="text" name="name" placeholder="Full Name" aria-label="Full Name" required className="bg-white text-black border-purple-300 placeholder-gray-400" onChange={handleChange} />
              <Input type="email" name="email" placeholder="Email Address" aria-label="Email Address" required className="bg-white text-black border-purple-300 placeholder-gray-400" onChange={handleChange} />
              <Input type="text" name="channel" placeholder="Channel/Brand Name (Optional)" aria-label="Channel/Brand Name" className="bg-white text-black border-purple-300 placeholder-gray-400" onChange={handleChange} />
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Sign Up for Early Access</Button>
            </form>
            {message && <p className="mt-4 text-purple-700">{message}</p>}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-purple-700">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-purple-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-purple-50 text-purple-700 px-4 py-3 hover:bg-purple-100">How accurate is the AI transcription?</AccordionTrigger>
              <AccordionContent className="bg-white text-gray-700 px-4 py-3">
                Our AI uses state-of-the-art speech recognition technology, achieving over 95% accuracy for clear audio. 
                It handles multiple speakers and can even recognize industry-specific terminology in your videos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-purple-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-purple-50 text-purple-700 px-4 py-3 hover:bg-purple-100">Can I edit the generated SRT files?</AccordionTrigger>
              <AccordionContent className="bg-white text-gray-700 px-4 py-3">
                Yes, you can easily edit the SRT files within our platform. You can adjust timestamps, 
                correct any misheard words, and format the text to your liking before exporting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-purple-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-purple-50 text-purple-700 px-4 py-3 hover:bg-purple-100">How does the social media clipping feature work?</AccordionTrigger>
              <AccordionContent className="bg-white text-gray-700 px-4 py-3">
                Our tool allows you to select portions of your transcribed video to create short clips. 
                You can choose the start and end times, add captions from the transcript, and export in 
                formats optimized for various social media platforms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-purple-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-purple-50 text-purple-700 px-4 py-3 hover:bg-purple-100">Is my video content kept private and secure?</AccordionTrigger>
              <AccordionContent className="bg-white text-gray-700 px-4 py-3">
                Absolutely. We use enterprise-grade encryption to protect your video files and transcripts. 
                Your content is processed securely and is never shared or used for any other purpose.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Ready to Amplify Your Video&apos;s Reach?</h2>
          <p className="text-gray-700 mb-8">Join content creators worldwide who are eagerly waiting to revolutionize their video production</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">Get Early Access</Button>
        </section>
      </main>
    </div>
  )
}
