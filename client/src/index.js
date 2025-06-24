import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { registerLicense } from '@syncfusion/ej2-base'
import ContextWrapper from './components/calender/context/ContextWrapper'

registerLicense('MzUxOTUyN0AzMjMxMmUzMTJlMzQzMWdNeHFRaWZtT25yS1ZvRk9rVU4zNnR5a0VmUHI3NDZvVGoxZWg5WUNrVms9;MzUxOTUyOEAzMjMxMmUzMTJlMzQzMVcwaWxGNjQrdjVSZEw0dWZuTmQ5TUxqMHdsblBQWWlwUksvU0l2QVNCZE09;Mgo+DSMBaFt+QHFqUUdrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRbQ11jQX5WdUBiUH5fc30=;Mgo+DSMBPh8sVXJ1S0d+WFBPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9nSH5TfkVmWnpfeXVXT2U=;ORg4AjUWIQA/Gnt2VFhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX9Tdk1jXHxbcX1URGlZ;NRAiBiAaIQQuGjN/V0d+XU9Ad1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3pSdkVrWXpddXVcR2VZVg==;MzUxOTUzM0AzMjMxMmUzMTJlMzQzMWEvRWRXMjczbHpROGJTeTU2RmU0TWVJT0ptK3I1RUdIYnVHa1BRZDFqODQ9;MzUxOTUzNEAzMjMxMmUzMTJlMzQzMWcycWYzM25SekJjRGswRmttbkxlcjFBQmpvVGRnVmFpbWhFeXNXNUQxZ1U9;Mgo+DSMBMAY9C3t2VFhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX9Tdk1jXHxbcX1XRGJV;MzUxOTUzNkAzMjMxMmUzMTJlMzQzMUVxRm9GU3d5QUltakZHWFZyREYzeG9tays0QjZnWDFSbXJGMlNFZG92c289;MzUxOTUzN0AzMjMxMmUzMTJlMzQzMWVRTkkzOVo4bGVPU2RQVVlTWmxEYlJhaTRlSm9tZm5wZ2IrOFp2eVk3cW89;MzUxOTUzOEAzMjMxMmUzMTJlMzQzMWEvRWRXMjczbHpROGJTeTU2RmU0TWVJT0ptK3I1RUdIYnVHa1BRZDFqODQ9')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </BrowserRouter>
);