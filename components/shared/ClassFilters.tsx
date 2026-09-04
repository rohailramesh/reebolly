"use client";
import React from "react";
import styles from "./ClassFilters.module.css";

interface ClassFiltersProps {
  filters: {
    level: string;
    style: string;
    format: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

export default function ClassFilters({ filters, onFilterChange }: ClassFiltersProps) {
  const levelOptions = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "open", label: "Open Level" },
    { value: "improver", label: "Improver" },
  ];

  const styleOptions = [
    { value: "all", label: "All Styles" },
    { value: "bollywood", label: "Bollywood" },
    { value: "fusion", label: "Fusion" },
    { value: "feminine", label: "Feminine Flow" },
  ];

  const formatOptions = [
    { value: "all", label: "All Formats" },
    { value: "single", label: "Single Workshop" },
    { value: "multi-week", label: "Multi-week Programme" },
    { value: "private", label: "Private" },
  ];

  const activeFiltersCount = Object.values(filters).filter(v => v !== "all").length;

  const clearFilters = () => {
    onFilterChange("level", "all");
    onFilterChange("style", "all");
    onFilterChange("format", "all");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Filter Classes</h3>
        {activeFiltersCount > 0 && (
          <button onClick={clearFilters} className={styles.clearButton}>
            Clear all ({activeFiltersCount})
          </button>
        )}
      </div>

      <div className={styles.filtersGrid}>
        {/* Level Filter */}
        <div className={styles.filterGroup}>
          <label className={styles.label}>Level</label>
          <div className={styles.optionsGrid}>
            {levelOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onFilterChange("level", option.value)}
                className={`${styles.filterButton} ${
                  filters.level === option.value ? styles.active : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Style Filter */}
        <div className={styles.filterGroup}>
          <label className={styles.label}>Style</label>
          <div className={styles.optionsGrid}>
            {styleOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onFilterChange("style", option.value)}
                className={`${styles.filterButton} ${
                  filters.style === option.value ? styles.active : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Format Filter */}
        <div className={styles.filterGroup}>
          <label className={styles.label}>Format</label>
          <div className={styles.optionsGrid}>
            {formatOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onFilterChange("format", option.value)}
                className={`${styles.filterButton} ${
                  filters.format === option.value ? styles.active : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className={styles.activeFilters}>
          <span className={styles.activeLabel}>Active filters:</span>
          {filters.level !== "all" && (
            <span className={styles.badge}>
              {levelOptions.find(o => o.value === filters.level)?.label}
              <button
                onClick={() => onFilterChange("level", "all")}
                className={styles.badgeClose}
              >
                ×
              </button>
            </span>
          )}
          {filters.style !== "all" && (
            <span className={styles.badge}>
              {styleOptions.find(o => o.value === filters.style)?.label}
              <button
                onClick={() => onFilterChange("style", "all")}
                className={styles.badgeClose}
              >
                ×
              </button>
            </span>
          )}
          {filters.format !== "all" && (
            <span className={styles.badge}>
              {formatOptions.find(o => o.value === filters.format)?.label}
              <button
                onClick={() => onFilterChange("format", "all")}
                className={styles.badgeClose}
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
