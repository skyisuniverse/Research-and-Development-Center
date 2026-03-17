import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>R&D Center</span>,
  project: {
    link: 'https://github.com/Research-and-Development-Center/r-d-center',
  },
  chat: {
    link: 'https://discord.gg/F2aXdBJG',
  },
  docsRepositoryBase: 'https://github.com/Research-and-Development-Center/r-d-center',
  footer: {
    text: (
      <span>
        Community of autonomous participants driven by the mission to preserve and develop consciousness and enable abundance by contributing to Muskonomy. 
        {/* <a 
          href="https://github.com/jwasham/coding-interview-university/blob/main/LICENSE.txt"
          target="_blank" 
          rel="noopener noreferrer"
        >
          LICENSE: CC-BY-SA-4.0
        </a> */}
      </span>
    ),
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    // { locale: 'id', text: 'Bahasa Indonesia' },
    // { locale: 'bg', text: 'Bulgarian' },
    // { locale: 'es', text: 'Español' },
    // { locale: 'de', text: 'German' },
    // { locale: 'ja', text: 'Japanese (日本語)' },
    // { locale: 'mr', text: 'Marathi' },
    // { locale: 'pl', text: 'Polish' },
    // { locale: 'pt-BR', text: 'Português Brasileiro' },
    // { locale: 'ru', text: 'Русский' },
    // { locale: 'vi', text: 'Tiếng Việt - Vietnamese' },
    // { locale: 'ur', text: 'Urdu - اردو', direction: 'rtl' },
    // { locale: 'uz', text: 'Uzbek' },
    // { locale: 'bn', text: 'বাংলা - Bangla' },
    // { locale: 'km', text: 'ខ្មែរ - Khmer' },
    // { locale: 'zh-CN', text: '简体中文' },
    // { locale: 'zh-TW', text: '繁體中文' },
    // { locale: 'af', text: 'Afrikaans' },
    // { locale: 'ar', text: 'Arabic', direction: 'rtl' },
    // { locale: 'fr', text: 'French' },
    // { locale: 'el', text: 'Greek' },
    // { locale: 'it', text: 'Italian' },
    // { locale: 'ko', text: 'Korean(한국어)' },
    // { locale: 'ml', text: 'Malayalam' },
    // { locale: 'fa', text: 'Persian - Farsi', direction: 'rtl' },
    // { locale: 'te', text: 'Telugu' },
    // { locale: 'th', text: 'Thai' },
    // { locale: 'tr', text: 'Turkish' },
    // { locale: 'uk', text: 'Українська' },
    // { locale: 'he', text: 'עברית', direction: 'rtl' },
    // { locale: 'hi', text: 'हिन्दी' },
  ],
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
};

export default config;
