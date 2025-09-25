import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Theme toggle clicked!', isDarkMode);
    toggleTheme();
  };

  return (
    <>
      {/* Debug button - Remove after testing */}
      <button
        onClick={handleClick}
        style={{ 
          position: 'fixed', 
          top: '20px', 
          right: '20px', 
          zIndex: 999999,
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          color: isDarkMode ? '#fbbf24' : '#374151',
          border: '2px solid',
          borderColor: isDarkMode ? '#fbbf24' : '#3b82f6',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px'
        }}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      
      <motion.button
        onClick={handleClick}
        className={`
          fixed top-24 right-6 p-4 rounded-full shadow-xl backdrop-blur-md border-2 cursor-pointer
          ${isDarkMode 
            ? 'bg-gray-800/95 text-yellow-400 border-yellow-400/30 hover:bg-gray-700/95 hover:border-yellow-400/50' 
            : 'bg-white/95 text-gray-700 border-blue-400/30 hover:bg-gray-50/95 hover:border-blue-400/50'
          }
          transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-110 active:scale-95
        `}
        style={{ zIndex: 99999 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </motion.div>
      </motion.button>
    </>
  );
};

export default ThemeToggle;