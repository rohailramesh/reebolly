"use client";
import React, { useState } from "react";

const EventForm: React.FC = () => {
  // Define state for each form field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [price, setPrice] = useState("");

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      title,
      description,
      location,
      imageUrl,
      startDateTime,
      endDateTime,
      price,
    };

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Event created successfully");
        // Optionally, you can handle form reset or redirect here
        setTitle("");
        setDescription("");
        setLocation("");
        setImageUrl("");
        setStartDateTime("");
        setEndDateTime("");
        setPrice("");
      } else {
        alert("Failed to create event");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDateTime">Start Date and Time</label>
        <input
          type="datetime-local"
          id="startDateTime"
          value={startDateTime}
          onChange={(e) => setStartDateTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDateTime">End Date and Time</label>
        <input
          type="datetime-local"
          id="endDateTime"
          value={endDateTime}
          onChange={(e) => setEndDateTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
