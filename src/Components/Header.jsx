import React from 'react';
import { LuBrain } from 'react-icons/lu';

const Header = () => {
  return (
    <header>
      <LuBrain />
      <h1 className="mb-3 bg-linear-to-r from-(--primary) to-(--accent) bg-clip-text text-5xl font-bold text-transparent">
        Quiz Master
      </h1>
      <p className="text-lg text-(--muted-foreground)">
        Test your knowledge across multiple categories and difficulty levels
      </p>
    </header>
  );
};

export default Header;
