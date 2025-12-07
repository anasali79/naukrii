import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    current_company: '',
    designation: '',
    experience_years: '',
    skills: '', // Will store as comma-separated string in form
    education: '',
    resume_headline: '',
    current_location: '',
    preferred_location: '',
    expected_salary: '',
    notice_period: '0'
  });

  useEffect(() => {
    if (user) {
      // Load existing profile data
      const loadProfile = async () => {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (error) throw error;

          if (data) {
            setFormData(prev => ({
              ...prev,
              ...data,
              email: user.email || '',
              full_name: data.full_name || user.user_metadata?.full_name || '',
              // Convert skills array to comma-separated string for form display
              skills: Array.isArray(data.skills) ? data.skills.join(', ') : (data.skills || '')
            }));
          }
        } catch (error) {
          console.error('Error loading profile:', error);
          toast({
            title: "Error loading profile",
            description: "There was a problem loading your profile data.",
            variant: "destructive"
          });
        }
      };

      loadProfile();
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert skills string back to array for database storage
      const skillsArray = formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
      
      const profileData = {
        id: user?.id,
        updated_at: new Date().toISOString(),
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        current_company: formData.current_company,
        designation: formData.designation,
        experience_years: formData.experience_years ? parseInt(formData.experience_years) : null,
        skills: skillsArray,
        education: formData.education,
        resume_headline: formData.resume_headline,
        current_location: formData.current_location,
        preferred_location: formData.preferred_location,
        expected_salary: formData.expected_salary,
        notice_period: formData.notice_period ? parseInt(formData.notice_period) : 0
      };

      const { error } = await supabase
        .from('profiles')
        .upsert(profileData);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });

      navigate('/home');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error updating profile",
        description: "There was a problem updating your profile.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-semibold mb-6">Complete Your Profile</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Basic Information</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    disabled
                  />
                </div>

                <div>
                  <Label htmlFor="phone_number">Phone Number</Label>
                  <Input
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="current_location">Current Location</Label>
                  <Input
                    id="current_location"
                    name="current_location"
                    value={formData.current_location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Professional Information</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="current_company">Current Company</Label>
                  <Input
                    id="current_company"
                    name="current_company"
                    value={formData.current_company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="designation">Current Designation</Label>
                  <Input
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="experience_years">Total Experience</Label>
                  <Select
                    value={formData.experience_years}
                    onValueChange={(value) => handleSelectChange('experience_years', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Fresher</SelectItem>
                      <SelectItem value="1">1 year</SelectItem>
                      <SelectItem value="2">2 years</SelectItem>
                      <SelectItem value="3">3 years</SelectItem>
                      <SelectItem value="4">4 years</SelectItem>
                      <SelectItem value="5">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notice_period">Notice Period</Label>
                  <Select
                    value={formData.notice_period}
                    onValueChange={(value) => handleSelectChange('notice_period', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select notice period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Immediate</SelectItem>
                      <SelectItem value="15">15 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="skills">Skills</Label>
                <Textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Enter your skills (e.g., JavaScript, React, Node.js)"
                  className="h-24"
                />
              </div>

              <div>
                <Label htmlFor="resume_headline">Resume Headline</Label>
                <Textarea
                  id="resume_headline"
                  name="resume_headline"
                  value={formData.resume_headline}
                  onChange={handleChange}
                  placeholder="Write a brief professional summary"
                  className="h-24"
                />
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Job Preferences</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferred_location">Preferred Location</Label>
                  <Input
                    id="preferred_location"
                    name="preferred_location"
                    value={formData.preferred_location}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="expected_salary">Expected Annual Salary (LPA)</Label>
                  <Input
                    id="expected_salary"
                    name="expected_salary"
                    type="text"
                    value={formData.expected_salary}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/home')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {loading ? 'Saving...' : 'Save Profile'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;