import React from 'react';

interface DateObject {
    getFullYear: () => number;
    getMonth: () => number;
    getDate: () => number;
}

interface AgeProps {
    date: DateObject;
  }

  export default function calculateAge(date: DateObject): number {
  const today = new Date();
  const age =
    today.getFullYear() -
    date.getFullYear() -
    Number(today.getMonth() < date.getMonth() || (today.getMonth() === date.getMonth() && today.getDate() < date.getDate()));
  return age;
}


