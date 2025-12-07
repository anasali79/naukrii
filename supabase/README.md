# Supabase Database Migrations

This directory contains the database migration scripts for the Naukri project.

## Migration Scripts

1. `000_initial_setup.sql` - Creates all required tables (profiles and job_applications) with proper security policies
2. `001_create_job_applications_table.sql` - Legacy script, now included in initial setup
3. `002_update_profiles_table.sql` - Legacy script, now included in initial setup

## How to Apply Migrations

To apply these migrations to your Supabase database:

1. Log in to your Supabase dashboard
2. Go to the SQL Editor
3. Copy and paste the `000_initial_setup.sql` script
4. Run the script

This will create all necessary tables with proper security policies and indexes.

## Tables Created

### profiles
User profile information for both job seekers and recruiters:
- `id` - User ID (references auth.users)
- `full_name` - Full name of the user
- `company_name` - For recruiters
- `company_description` - For recruiters
- `company_website` - For recruiters
- `phone_number` - Contact number
- `is_agency` - Whether the user is an agency
- `user_type` - Either "recruiter" or "job_seeker"
- `resume_url` - URL to user's resume (for job seekers)
- `skills` - Array of user's skills (for job seekers)
- `experience` - Years of experience (for job seekers)
- `education` - Educational background (for job seekers)
- `bio` - User biography
- `receive_updates` - Whether user wants to receive updates
- `created_at` - Timestamp when profile was created
- `updated_at` - Timestamp when profile was last updated

### job_applications
Tracks job applications made by users:
- `id` - Unique identifier
- `job_id` - Reference to the job
- `user_id` - Reference to the user who applied
- `status` - Application status (applied, reviewed, interview, accepted, rejected)
- `job_title` - Title of the job
- `company_name` - Name of the company
- `location` - Job location
- `applied_at` - Timestamp when application was made
- `created_at` - Timestamp when record was created
- `updated_at` - Timestamp when record was last updated