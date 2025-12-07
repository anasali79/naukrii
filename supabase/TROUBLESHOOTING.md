# Supabase Database Setup Troubleshooting Guide

## Common Issues and Solutions

### Issue: "relation 'public.profiles' does not exist"

**Cause**: The profiles table hasn't been created in your Supabase database.

**Solution**:
1. Log in to your Supabase dashboard at https://app.supabase.com
2. Select your project
3. Go to the **SQL Editor** section
4. Copy the entire content of `supabase/migrations/000_initial_setup.sql`
5. Paste it into the SQL editor
6. Click "Run" to execute the script

### Issue: "relation 'public.job_applications' does not exist"

**Cause**: The job_applications table hasn't been created in your Supabase database.

**Solution**: Same as above - run the `000_initial_setup.sql` script.

### Issue: "policy already exists" errors

**Cause**: Some policies were already created in previous attempts.

**Solution**: The updated `000_initial_setup.sql` script now handles existing policies by dropping them first before creating new ones. Just run the latest version of the script.

## Step-by-Step Database Setup

### Step 1: Access Your Supabase Dashboard
1. Go to https://app.supabase.com
2. Log in with your credentials
3. Select your project

### Step 2: Run Initial Setup Script
1. In the left sidebar, click on **SQL Editor**
2. Click on **New Query**
3. Open the file `supabase/migrations/000_initial_setup.sql` in a text editor
4. Copy the entire content
5. Paste it into the SQL editor
6. Click the **Run** button

### Step 3: Verify Table Creation
1. In the left sidebar, click on **Table Editor**
2. You should see two tables:
   - `profiles`
   - `job_applications`
3. Click on each table to verify they have the correct columns

### Step 4: Test the Application
1. Restart your development server
2. Log in to your application
3. Try applying for a job

## If You Still Have Issues

### Check Authentication
Make sure you're properly logged in:
1. Try logging out and logging back in
2. Check that your Supabase authentication is working correctly

### Check Supabase Connection
Verify your Supabase credentials in `src/integrations/supabase/client.ts`:
1. Ensure the URL is correct
2. Ensure the API key is correct

### Clear Application Data
Sometimes cached data can cause issues:
1. Clear your browser cache
2. Clear localStorage/sessionStorage
3. Try in an incognito/private browser window

## Need More Help?

If you're still experiencing issues:

1. Check the browser console for error messages (F12)
2. Check the network tab for failed API requests
3. Verify that all migration scripts have been run successfully
4. Contact Supabase support if the issue persists

## Important Notes

- Always backup your database before running migrations in production
- Run migration scripts in order (000_initial_setup.sql first)
- The initial setup script includes everything needed - you don't need to run the other scripts separately
- The updated script handles existing policies gracefully