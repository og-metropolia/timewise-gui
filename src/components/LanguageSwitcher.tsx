import styles from './LanguageSwitcher.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@mui/material';
import { Language } from '@/types/user';
import LanguageIcon from '@/components/icons/LanguageIcon';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.languageSwitcherContainer}>
        <button onClick={handleClick} className={styles.languageSwitcherButton}>
          <LanguageIcon />
        </button>
      </div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('fi')}>Finnish</MenuItem>
        <MenuItem onClick={() => changeLanguage('sv')}>Swedish</MenuItem>
      </Menu>
    </div>
  );
}

export default LanguageSwitcher;
