"use client";
import React, { useState, useEffect } from "react";
import ClassesHero from "@/components/shared/ClassesHero";
import ClassFilters from "@/components/shared/ClassFilters";
import ClassCard from "@/components/shared/ClassCard";
import EmptyState from "@/components/shared/EmptyState";
import { getAllEvents } from "@/lib/actions/event.actions";

type Event = {
  _id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  location: string;
  startDateTime: Date;
  endDateTime: Date;
};

export default function ClassesPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    level: "all",
    style: "all",
    format: "all",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getAllEvents();
        setEvents(fetchedEvents || []);
        setFilteredEvents(fetchedEvents || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events;

    // Filter by level
    if (filters.level !== "all") {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(filters.level.toLowerCase())
      );
    }

    // Filter by style
    if (filters.style !== "all") {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(filters.style.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.style.toLowerCase())
      );
    }

    // Filter by format
    if (filters.format !== "all") {
      filtered = filtered.filter((event) => {
        const title = event.title.toLowerCase();
        const desc = event.description.toLowerCase();
        
        if (filters.format === "single") {
          return title.includes("workshop") && !title.includes("week");
        } else if (filters.format === "multi-week") {
          return title.includes("week") || desc.includes("week");
        } else if (filters.format === "private") {
          return title.includes("private") || desc.includes("private");
        }
        return true;
      });
    }

    setFilteredEvents(filtered);
  }, [filters, events]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <>
      <ClassesHero />
      <section className="section bg-ivory">
        <div className="wrapper">
          <ClassFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {loading ? (
            <div className="text-center py-20">
              <p className="text-espresso text-lg">Loading classes...</p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {filteredEvents.map((event) => (
                <ClassCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
