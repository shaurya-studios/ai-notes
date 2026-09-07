import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Use env vars, but provide a safe fallback for the initial preview environment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Note {
  id: string;
  title: string;
  content: string;
  x: number;
  y: number;
  color: string;
  updated_by: string;
}

// Initial mock data if Supabase isn't configured yet
const MOCK_NOTES: Note[] = [
  { id: '1', title: 'Concept Alpha', content: 'Fluid dynamics integration and propagation.', x: -3, y: 2, color: '#ffffff', updated_by: 'UserA' },
  { id: '2', title: 'Beta Research', content: 'Refraction indices for dark materials.', x: 2, y: -1, color: '#dddddd', updated_by: 'UserB' },
  { id: '3', title: 'Gamma Constraints', content: 'Spatial typography requires absolute precision.', x: -1, y: -2, color: '#aaaaaa', updated_by: 'UserC' },
  { id: '4', title: 'Delta Phase', content: 'Elastic easing functions in WebGL space.', x: 4, y: 2, color: '#cccccc', updated_by: 'UserA' },
];

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(MOCK_NOTES);

  useEffect(() => {
    // Attempt to fetch from Supabase
    const fetchNotes = async () => {
      try {
        const { data, error } = await supabase.from('notes').select('*');
        if (!error && data && data.length > 0) {
          setNotes(data as Note[]);
        }
      } catch (err) {
        console.warn('Supabase not fully configured or unreachable. Using mock data.', err);
      }
    };

    fetchNotes();

    // Subscribe to real-time Postgres changes channel
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'notes' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setNotes((prev) => [...prev, payload.new as Note]);
          } else if (payload.eventType === 'UPDATE') {
            setNotes((prev) => prev.map((n) => (n.id === payload.new.id ? (payload.new as Note) : n)));
          } else if (payload.eventType === 'DELETE') {
            setNotes((prev) => prev.filter((n) => n.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return notes;
}
