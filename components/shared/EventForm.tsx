"use client";
import React, { useState } from "react";
import { UploadButton } from "@/lib/utils";
import styles from "@/components/shared/EventForm.module.css";
import { useRouter } from "next/navigation";

const EventForm: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
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
        // alert("Event created successfully");
        router.push("/");
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
    <form onSubmit={handleSubmit} className={`${styles.form} mx-auto`}>
      <div className={`${styles.formGroup}`}>
        <label htmlFor="title" className={`${styles.label}`}>
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`${styles.input} rounded-lg`}
          placeholder="Event Title"
        />
      </div>

      <div className={`${styles.formGroup}`}>
        <label htmlFor="description" className={`${styles.label}`}>
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${styles.textarea} rounded-lg`}
          placeholder="Event Description"
        />
      </div>

      <div className={`${styles.formGroup}`}>
        <label htmlFor="location" className={`${styles.label}`}>
          Location
        </label>
        <input
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={`${styles.input} rounded-lg`}
          placeholder="Event Location"
        />
      </div>

      <div className={`${styles.formGroup}`}>
        <label className={`${styles.label}`}>Event Image</label>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res.length > 0) {
              setImageUrl(res[0].url);
            }
            // alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`Upload Error: ${error.message}`);
          }}
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded Event"
            className="mt-4 rounded-lg w-full h-auto"
            width="200"
          />
        )}
      </div>

      <div className={`${styles.formGroup}`}>
        <label htmlFor="startDateTime" className={`${styles.label}`}>
          Start Date and Time
        </label>
        <input
          type="datetime-local"
          id="startDateTime"
          value={startDateTime}
          onChange={(e) => setStartDateTime(e.target.value)}
          className={`${styles.input} rounded-lg`}
        />
      </div>

      <div className={`${styles.formGroup}`}>
        <label htmlFor="endDateTime" className={`${styles.label}`}>
          End Date and Time
        </label>
        <input
          type="datetime-local"
          id="endDateTime"
          value={endDateTime}
          onChange={(e) => setEndDateTime(e.target.value)}
          className={`${styles.input} rounded-lg`}
        />
      </div>

      <div className={`${styles.formGroup}`}>
        <label htmlFor="price" className={`${styles.label}`}>
          Price
        </label>
        <input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={`${styles.input} rounded-lg`}
          placeholder="Event Price"
        />
      </div>

      <button
        type="submit"
        className={`${styles.button} bg-primary-500 text-white`}
      >
        Create Event
      </button>
    </form>
  );
};
export default EventForm;
