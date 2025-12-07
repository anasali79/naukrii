import { supabase } from './src/integrations/supabase/client.js';

async function testConnection() {
  try {
    // Test the connection by trying to get the session
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.log('❌ Supabase connection failed:', error.message);
      return false;
    }
    
    console.log('✅ Supabase connection successful!');
    return true;
  } catch (err) {
    console.log('❌ Supabase connection failed:', err);
    return false;
  }
}

testConnection().then(success => {
  if (success) {
    console.log('Supabase is properly connected with the new credentials.');
  } else {
    console.log('Failed to connect to Supabase with the new credentials.');
  }
});