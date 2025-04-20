
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";

const AIInterviewPage = () => {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("0-2");
  const [interviewType, setInterviewType] = useState("technical");
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [interviewEnded, setInterviewEnded] = useState(false);
  const [interviewScore, setInterviewScore] = useState(0);

  // Sample questions based on interview type
  const technicalQuestions = [
    "Tell me about your experience with React.js?",
    "How do you handle state management in complex applications?",
    "Explain the concept of hoisting in JavaScript?",
    "What is your approach to debugging a complex issue?",
    "Describe a challenging technical problem you solved recently?"
  ];

  const hrQuestions = [
    "Tell me about yourself?",
    "Why do you want to work for our company?",
    "Where do you see yourself in 5 years?",
    "What are your strengths and weaknesses?",
    "How do you handle pressure or stressful situations?"
  ];

  const startInterview = () => {
    if (!jobRole) {
      alert("Please enter a job role to proceed");
      return;
    }
    
    setInterviewStarted(true);
    setCurrentQuestion(interviewType === "technical" ? technicalQuestions[0] : hrQuestions[0]);
  };

  const submitAnswer = () => {
    if (!userAnswer) {
      alert("Please provide an answer before proceeding");
      return;
    }

    // Simple feedback based on answer length (in a real app, this would be AI-generated)
    let feedbackText = "";
    let score = 0;
    
    if (userAnswer.length < 50) {
      feedbackText = "Your answer was too brief. Consider providing more details in your responses.";
      score = 5;
    } else if (userAnswer.length < 150) {
      feedbackText = "Good answer, but you could elaborate more on key points.";
      score = 7;
    } else {
      feedbackText = "Excellent detailed response that thoroughly addressed the question.";
      score = 9;
    }
    
    setFeedback(feedbackText);
    setInterviewScore(prevScore => prevScore + score);
    
    // Move to next question or end interview
    const questions = interviewType === "technical" ? technicalQuestions : hrQuestions;
    if (questionNumber < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(questions[questionNumber]);
        setQuestionNumber(prev => prev + 1);
        setUserAnswer("");
        setFeedback("");
      }, 3000);
    } else {
      setTimeout(() => {
        setInterviewEnded(true);
      }, 3000);
    }
  };

  const resetInterview = () => {
    setInterviewStarted(false);
    setInterviewEnded(false);
    setJobRole("");
    setExperience("0-2");
    setInterviewType("technical");
    setCurrentQuestion("");
    setUserAnswer("");
    setFeedback("");
    setQuestionNumber(1);
    setInterviewScore(0);
    setAudioEnabled(true);
    setVideoEnabled(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Naukri 360° AI Interview Preparation
        </h1>
        
        <p className="text-center text-gray-600 mb-8">
          Practice your interview skills with our AI interviewer. Get real-time feedback and improve your chances of landing your dream job.
        </p>
        
        {!interviewStarted ? (
          <Card>
            <CardHeader>
              <CardTitle>Setup Your Interview</CardTitle>
              <CardDescription>
                Configure your practice interview settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="jobRole">Job Position</Label>
                <Input 
                  id="jobRole" 
                  placeholder="e.g. Frontend Developer, Product Manager" 
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="experience">Experience Level</Label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="3-5">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="5+">Senior Level (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="interviewType">Interview Type</Label>
                <Select value={interviewType} onValueChange={setInterviewType}>
                  <SelectTrigger id="interviewType">
                    <SelectValue placeholder="Select interview type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Interview</SelectItem>
                    <SelectItem value="hr">HR Interview</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Interview Tips</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Interview Tips</DialogTitle>
                    <DialogDescription>
                      Follow these tips for a successful interview
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2">
                    <p>✅ Research the company beforehand</p>
                    <p>✅ Prepare examples from your past experience</p>
                    <p>✅ Practice common questions for your role</p>
                    <p>✅ Dress professionally, even for online interviews</p>
                    <p>✅ Prepare thoughtful questions to ask the interviewer</p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                onClick={startInterview}
              >
                Start AI Interview
              </Button>
            </CardFooter>
          </Card>
        ) : !interviewEnded ? (
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>AI Interview in Progress</CardTitle>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setAudioEnabled(!audioEnabled)}
                  >
                    {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setVideoEnabled(!videoEnabled)}
                  >
                    {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <CardDescription>
                {jobRole} • Question {questionNumber} of {interviewType === "technical" ? technicalQuestions.length : hrQuestions.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-video flex items-center justify-center">
                {videoEnabled ? (
                  <div className="text-white text-center p-6">
                    <p className="mb-2">Video preview would appear here</p>
                    <p className="text-sm text-gray-400">(In a real implementation, this would use your camera)</p>
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white text-3xl">AI</span>
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="font-medium text-blue-900">{currentQuestion}</p>
              </div>
              
              <div>
                <Label htmlFor="answer">Your Answer</Label>
                <textarea 
                  id="answer"
                  rows={5}
                  className="w-full p-3 border rounded-md"
                  placeholder="Type your answer here..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                ></textarea>
              </div>
              
              {feedback && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <p className="font-medium text-green-800">Feedback:</p>
                  <p className="text-green-700">{feedback}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button 
                className="w-full"
                onClick={submitAnswer}
                disabled={!!feedback}
              >
                Submit Answer
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={resetInterview}
              >
                End Interview
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Interview Completed</CardTitle>
              <CardDescription>
                Here's how you performed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    {Math.round(interviewScore / (questionNumber - 1))}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">Your Interview Score</h3>
                <p className="text-gray-600">
                  Based on {questionNumber - 1} questions answered
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Interview Feedback Summary</h3>
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <p>Overall, you performed well in this mock interview.</p>
                  <p className="mt-2">
                    {interviewScore > 35 ? 
                      "Excellent job! Your answers were detailed and well-structured." :
                      interviewScore > 25 ?
                      "Good effort! With some more practice, you'll be ready for real interviews." :
                      "You've made a start, but need more practice to improve your interview skills."
                    }
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button 
                className="w-full"
                onClick={resetInterview}
              >
                Start New Interview
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AIInterviewPage;
