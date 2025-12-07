import { supabase } from './integrations/supabase/client.js';

async function debugDatabase() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test basic connection
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.log('❌ Session error:', sessionError.message);
      return;
    }
    console.log('✅ Supabase connection successful');
    
    // Check if user is logged in
    if (!sessionData.session) {
      console.log('⚠️  No active session - user not logged in');
    } else {
      console.log('✅ User is logged in');
    }
    
    // Test if job_applications table exists
    console.log('\nChecking job_applications table...');
    const { data: tableData, error: tableError } = await supabase
      .from('job_applications')
      .select('id')
      .limit(1);
      
    if (tableError) {
      console.log('❌ job_applications table error:', tableError.message);
      console.log('This might be why you cannot apply for jobs.');
      console.log('You need to run the database migrations.');
    } else {
      console.log('✅ job_applications table exists and is accessible');
    }
    
    // Test profiles table
    console.log('\nChecking profiles table...');
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);
      
    if (profileError) {
      console.log('❌ profiles table error:', profileError.message);
    } else {
      console.log('✅ profiles table exists and is accessible');
    }
    
  } catch (err) {
    console.log('❌ Unexpected error:', err.message);
  }
}

debugDatabase();