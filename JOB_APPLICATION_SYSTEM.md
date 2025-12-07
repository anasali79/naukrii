# Job Application System - User Guide

## Overview
The job application system allows users to apply for jobs and track their application status. This system integrates with Supabase for data storage and management.

## Features
1. **Job Application**: Users can apply for jobs directly from job listings
2. **Application Tracking**: Users can view all their applications with status indicators
3. **Status Management**: Applications show real-time status (Applied, Under Review, Interview Scheduled, Accepted, Rejected)
4. **Quick Apply**: One-click apply buttons on job cards for faster application

## How It Works

### For Job Seekers

1. **Browse Jobs**
   - Navigate to the Jobs section
   - Browse through various job listings
   - Click on any job to view detailed information

2. **Apply for Jobs**
   - **Option 1**: Click "Apply Now" button directly on the job card
   - **Option 2**: Click on the job card to view details, then click "Apply Now"
   - If not logged in, you'll be redirected to the login page
   - After logging in, you'll be taken back to the application page
   - Click "Submit Application" to apply

3. **Track Applications**
   - Access "My Applications" from your profile menu
   - View all your job applications in one place
   - See the current status of each application

### For Recruiters
Recruiters can manage job postings and review applications through the employer dashboard.

## Application Status Definitions

- **Applied**: Your application has been successfully submitted
- **Under Review**: The employer is reviewing your application
- **Interview Scheduled**: You have been selected for an interview
- **Accepted**: Congratulations! You have been offered the position
- **Rejected**: Unfortunately, your application was not successful

## Technical Implementation

### Database Tables

1. **profiles**
   - Stores user information for both job seekers and recruiters
   - Includes fields for resumes, skills, experience, etc.

2. **job_applications**
   - Tracks all job applications made by users
   - Stores job details and application status

### Key Components

- **JobCard.tsx**: Displays individual job listings with quick apply button
- **JobDetails.tsx**: Shows detailed job information with apply button
- **ApplyJob.tsx**: Handles the job application process
- **Applications.tsx**: Displays user's job applications
- **ApplicationSuccess.tsx**: Shows confirmation after successful application
- **ProfileMenu.tsx**: Provides access to applications via "My Applications" link

## Troubleshooting

If you encounter issues:

1. **Ensure you're logged in** before applying for jobs
2. **Check your internet connection**
3. **Clear browser cache** if the application seems stuck
4. **Contact support** if problems persist

## Future Enhancements

Possible improvements to the system:
- Email notifications for application status changes
- Resume upload functionality
- Application withdrawal option
- Employer-side application review interface