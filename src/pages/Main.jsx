import React, { useEffect, useState } from 'react'
import Stars from '../components/Stars'

const CITY_MAP = {
  1: 'Vilnius',
  2: 'Kaunas',
  3: 'Klaipėda',
  4: 'Šiauliai',
  5: 'Panevėžys'
}

export default function Main() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch('/api/events')
        const data = await res.json()
        if (!cancelled) setEvents(data)
      } catch (e) {
        console.error(e)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  if (loading) return <div>Loading events…</div>

  return (
    <div>
      <h2>Artimiausi renginiai</h2>
      <div>
        {events.map(ev => (
          <div key={ev.id} style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
            <h3 style={{ margin: 0 }}>{ev.event_name}</h3>
            <div style={{ fontSize: 14, color: '#666' }}>{CITY_MAP[ev.city_id] || ('Kodas: '+ev.city_id)} — {ev.date}</div>
            <div style={{ marginTop: 6 }}>
              <Stars value={Number(ev.avg_rating) || 0} />
              <span style={{ marginLeft: 8, color: '#444' }}>{ev.rating_count || 0} įvertinimai</span>
            </div>
            <p style={{ marginTop: 8 }}>{ev.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
