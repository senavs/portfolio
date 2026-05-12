import { createContext, useContext, useState } from 'react'
import en from '../i18n/en.json'
import pt from '../i18n/pt.json'

const translations = { en, pt }
const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const toggle = () => setLang(l => {
    const next = l === 'en' ? 'pt' : 'en'
    localStorage.setItem('lang', next)
    return next
  })
  return (
    <LangContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
