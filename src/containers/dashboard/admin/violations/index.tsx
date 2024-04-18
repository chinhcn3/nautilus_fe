'use client';

import {ViolationContext} from './ViolationContext';
import {ViolationsContent} from '@/containers/dashboard/admin/violations/ViolationsContent';

export function Violations() {
  return (
    <ViolationContext.Provider>
      <ViolationsContent />
    </ViolationContext.Provider>
  );
}
