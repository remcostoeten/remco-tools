import { Card } from '@/components/ui/card';
import { useState } from 'react';

interface CssOutputProps {
  svg: string;
}

const CssOutput: React.FC<CssOutputProps> = ({ svg }) => {
  const [showBeforeCss, setShowBeforeCss] = useState<boolean>(false);
  const [showAfterCss, setShowAfterCss] = useState<boolean>(false);

  const toggleBeforeCss = () => {
    setShowBeforeCss(!showBeforeCss);
  };

  const toggleAfterCss = () => {
    setShowAfterCss(!showAfterCss);
  };

  const cssCode = `
    .svg-background${showBeforeCss ? '::before' : ''}${showAfterCss ? '::after' : ''} {
      content: "${showBeforeCss ? 'Before content' : ''}${showAfterCss ? 'After content' : ''}";
      /* Add any additional CSS properties here */
    }
    
    .svg-background {
      background-image: url('data:image/svg+xml,${encodeURIComponent(svg)}');
      /* Add any additional CSS properties here */
    }
  `;

  return (
    <Card className="container">
      <pre>
      {cssCode}
      </pre>
    </Card>
  );
};

export default CssOutput;
