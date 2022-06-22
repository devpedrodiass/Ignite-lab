import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";

export interface ILessonProps {
  title: string;
  id: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
}

function Lesson({ id, title, slug, availableAt, lessonType }: ILessonProps) {
  const isLessonAvaialble = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd MMM' • 'k'h'mm"
  );

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvaialble ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20}></CheckCircle>
              Released Content
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}></Lock>
              Coming Soon
            </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {lessonType === "live" ? "LIVE" : "PRACTICAL CLASS"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{lessonType}</strong>
      </div>
    </a>
  );
}

export default Lesson;
