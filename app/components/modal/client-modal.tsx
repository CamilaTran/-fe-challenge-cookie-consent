
import dynamic from 'next/dynamic';

const ClientModal = dynamic(() => import('./index'), {
  ssr: false,
});

export default ClientModal