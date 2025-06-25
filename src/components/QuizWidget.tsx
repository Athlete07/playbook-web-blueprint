
import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const QuizWidget = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the main principle behind comparative advantage?",
      options: [
        "Countries should only produce goods they're best at",
        "Countries should produce goods with the lowest opportunity cost",
        "Countries should avoid international trade",
        "Countries should only import, never export"
      ],
      correct: 1,
      explanation: "Comparative advantage means countries should specialize in producing goods where they have the lowest opportunity cost, not necessarily what they're absolutely best at."
    },
    {
      question: "Which organization primarily governs international trade rules?",
      options: [
        "United Nations",
        "International Monetary Fund",
        "World Trade Organization",
        "World Bank"
      ],
      correct: 2,
      explanation: "The World Trade Organization (WTO) is the primary international body that establishes and enforces global trade rules."
    },
    {
      question: "What is a tariff?",
      options: [
        "A trade agreement between countries",
        "A tax on imported goods",
        "A subsidy for exporters",
        "A trade route"
      ],
      correct: 1,
      explanation: "A tariff is a tax imposed on imported goods, typically used to protect domestic industries or generate government revenue."
    },
    {
      question: "What does 'dumping' mean in international trade?",
      options: [
        "Disposing of waste products internationally",
        "Selling goods below cost in foreign markets",
        "Rapidly increasing imports",
        "Abandoning trade agreements"
      ],
      correct: 1,
      explanation: "Dumping refers to selling goods in a foreign market at prices below what's charged in the domestic market, often below production cost."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 3) return 'text-green-600';
    if (score >= 2) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 3) return { text: 'Excellent', color: 'bg-green-100 text-green-800' };
    if (score >= 2) return { text: 'Good', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Needs Improvement', color: 'bg-red-100 text-red-800' };
  };

  if (showResults) {
    const score = calculateScore();
    const badge = getScoreBadge(score);

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Award className="h-6 w-6 text-yellow-500" />
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <div className={cn('text-4xl font-bold mb-2', getScoreColor(score))}>
              {score}/{questions.length}
            </div>
            <Badge className={badge.color}>{badge.text}</Badge>
          </div>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="text-left border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {selectedAnswers[index] === question.correct ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">{question.question}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      Your answer: {question.options[selectedAnswers[index]]}
                    </p>
                    {selectedAnswers[index] !== question.correct && (
                      <p className="text-sm text-green-700 mb-2">
                        Correct answer: {question.options[question.correct]}
                      </p>
                    )}
                    <p className="text-sm text-gray-700">{question.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={resetQuiz} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Knowledge Check</CardTitle>
          <Badge variant="outline">
            {currentQuestion + 1} of {questions.length}
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={cn(
                  'w-full text-left p-4 rounded-lg border transition-colors',
                  selectedAnswers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  )}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
          >
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizWidget;
