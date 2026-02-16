import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import MenuColumn from './MenuColumn';
import MenuFooter from './MenuFooter';
import { productMenuData } from './menuData';
import styles from './styles.module.css';

export default function MegaMenu({ label }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  function handleMouseEnter() {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), 150);
  }

  function handleMouseLeave() {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div
      ref={containerRef}
      className={styles.megaMenuContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.megaMenuTrigger}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        {label}
        <svg
          className={`${styles.megaMenuChevron} ${isOpen ? styles.megaMenuChevronOpen : ''}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`${styles.megaMenuPanel} ${isOpen ? styles.megaMenuPanelOpen : ''}`} role="menu">
        <div className={styles.megaMenuColumns}>
          {productMenuData.columns.map((column) => (
            <MenuColumn key={column.id} {...column} />
          ))}
        </div>
        <MenuFooter items={productMenuData.footer} />
      </div>
    </div>
  );
}
