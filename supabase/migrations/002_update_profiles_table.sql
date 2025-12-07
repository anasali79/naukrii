-- Add additional fields to profiles table for job seekers
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS resume_url TEXT,
ADD COLUMN IF NOT EXISTS skills TEXT[],
ADD COLUMN IF NOT EXISTS experience INTEGER,
ADD COLUMN IF NOT EXISTS education TEXT,
ADD COLUMN IF NOT EXISTS bio TEXT;

-- Add additional fields to profiles table for recruiters
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS company_website TEXT,
ADD COLUMN IF NOT EXISTS company_description TEXT;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_skills ON public.profiles USING GIN (skills);
CREATE INDEX IF NOT EXISTS idx_profiles_experience ON public.profiles(experience);