import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
export interface ILessonProps {
  title: string;
  id: string;
  lessonSlug: string;
  availableAt: Date;
  lessonType: "live" | "class";
}

function Lesson({
  id,
  title,
  lessonSlug,
  availableAt,
  lessonType,
}: ILessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd MMM' • 'k'h'mm"
  );

  const { slug } = useParams<{ slug: string }>();
  const isActiveLesson = slug === lessonSlug;

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>` $
      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          { "bg-green-500": isActiveLesson }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm  font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20}></CheckCircle>
              Released Content
            </span>
          ) : (
            <span
              className={classNames(
                "text-sm  font-medium flex items-center gap-2"
              )}
            >
              <Lock size={20}></Lock>
              Coming Soon
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white border  font-bold",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson,
              }
            )}
          >
            {lessonType === "live" ? "LIVE" : "PRACTICAL CLASS"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}

export default Lesson;
