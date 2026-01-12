"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";

type Props = {
  camperId: string;
};

// імітація відправки на сервер
async function bookCamper(data: FormData) {
  const formData = Object.fromEntries(data.entries());
  console.log("Booking submitted:", formData);
  await new Promise((res) => setTimeout(res, 500));
  return { success: true };
}

export default function BookingForm({ camperId }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = async (formData: FormData) => {
    formData.append("camperId", camperId);
    if (selectedDate) {
      formData.set("date", selectedDate.toISOString());
    }

    const res = await bookCamper(formData);

    if (res.success) {
      toast.success("✅ Your booking was successful!");

      // Додатково можна очистити дату та форму
      setSelectedDate(null);
    } else {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <form className={styles.bookingForm} action={handleSubmit}>
      <h3 className={styles.formTitle}>Book your campervan now</h3>
      <p className={styles.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <input
        className={styles.formInput}
        type="text"
        name="name"
        placeholder="Name*"
        required
      />

      <input
        className={styles.formInput}
        type="email"
        name="email"
        placeholder="Email*"
        required
      />

      <div className={styles.datePickerWrapper}>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          placeholderText="Booking date*"
          className={styles.formInput}
          required
        />
      </div>

      <textarea
        className={styles.formTextarea}
        name="comment"
        placeholder="Comment"
        rows={3}
      />

      <button type="submit" className={styles.submitButton}>
        Send
      </button>
    </form>
  );
}
