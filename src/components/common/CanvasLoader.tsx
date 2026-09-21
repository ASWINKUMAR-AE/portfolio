import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-20 h-1 bg-surface overflow-hidden rounded-full mb-2">
          <div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-secondary">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;