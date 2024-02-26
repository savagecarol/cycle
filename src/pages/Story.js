import React from 'react'
import Navbar from '../components/Navbar'
import StoryCard from '../components/StoryCard'


const Story = () => {

    const stories = [
        { id: 1, title: "Story 1", content: "Lorem ipsum dolor sit amet" },
        { id: 2, title: "Story 2", content: "Consectetur adipiscing elit" },
        { id: 3, title: "Story 3", content: "Sed do eiusmod tempor incididunt" },
        { id: 4, title: "Story 4", content: "Ut labore et dolore magna aliqua" },
        { id: 5, title: "Story 5", content: "Ut enim ad minim veniam" },
        { id: 6, title: "Story 6", content: "Quis nostrud exercitation ullamco" },
      ];

  return (
    <div>
    <Navbar/>
    <div className="mx-16 mb-16 grid grid-cols-1 sm:grid-cols-3 gap-2">
      {stories.map(story => (
        <StoryCard key={story.id} title={story.title} content={story.content} />
      ))}

    </div>

    </div>
  )
}
export default Story