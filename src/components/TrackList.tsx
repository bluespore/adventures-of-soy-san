"use client";

import { useEffect, useRef, useState } from "react";
import type { Track } from "@/data/downloads";

function fmt(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function TrackList({ tracks }: { tracks: Track[] }) {
  const [current, setCurrent] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks.find((t) => t.id === current) ?? null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    audio.src = currentTrack.file;
    audio.load();
    audio.play().catch(() => setPlaying(false));
  }, [currentTrack]);

  function toggle(track: Track) {
    const audio = audioRef.current;
    if (!audio) return;
    if (track.id !== current) {
      setCurrent(track.id);
      setTime(0);
      return;
    }
    if (audio.paused) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }

  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setTime(audio.currentTime);
  }

  return (
    <>
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      <ol className="space-y-4">
        {tracks.map((track, i) => {
          const isCurrent = track.id === current;
          const isPlaying = isCurrent && playing;
          return (
            <li
              key={track.id}
              className={`rounded-xl border p-5 transition ${
                isCurrent
                  ? "border-orange bg-orange/10"
                  : "border-charcoal bg-charcoal/40"
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => toggle(track)}
                  aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
                  aria-pressed={isPlaying}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange text-ink transition hover:bg-orange-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  {isPlaying ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <rect x="5" y="4" width="5" height="16" rx="1" />
                      <rect x="14" y="4" width="5" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
                    </svg>
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl text-paper">
                    <span className="display mr-2 text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {track.title}
                  </h2>
                  <p className="text-fog">{track.subtitle}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-silver">
                    {track.mood} · {track.duration}
                  </p>
                </div>

                <a
                  href={track.file}
                  download
                  className="shrink-0 rounded-full border-2 border-cream px-5 py-2.5 text-center text-sm font-black uppercase tracking-wider text-cream transition hover:border-orange hover:text-orange"
                >
                  Download
                </a>
              </div>

              {isCurrent && (
                <div className="mt-4 flex items-center gap-3 text-xs font-bold tabular-nums text-silver">
                  <span className="w-10">{fmt(time)}</span>
                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={Math.min(time, duration || 0)}
                    onChange={seek}
                    aria-label={`Seek ${track.title}`}
                    className="h-1.5 flex-1 cursor-pointer accent-orange"
                  />
                  <span className="w-10 text-right">{fmt(duration)}</span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}
