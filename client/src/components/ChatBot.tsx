import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

const predefinedResponses: { [key: string]: string } = {
  greeting: "Hello! I'm here to help you with marine surveying questions. Are you looking for a pre-purchase survey, insurance survey, or consultation?",
  services: "Markley Marine Surveying offers three main services:\n\n🔍 **Pre-Purchase Survey** - Comprehensive vessel inspection for buyers\n🛡️ **Insurance Survey** - Required documentation for marine insurance\n💬 **Consultations** - Expert advice on vessel purchases and repairs\n\nWhich service interests you most?",
  prepurchase: "A pre-purchase survey is essential before buying any boat! Our comprehensive inspection covers:\n\n✅ Structural condition assessment\n✅ Engine and mechanical systems\n✅ Electrical systems review\n✅ Safety equipment check\n✅ Fair market evaluation\n\nReady to get a quote for your vessel?",
  insurance: "Insurance surveys ensure your vessel meets safety standards and coverage requirements:\n\n✅ Insurance compliance review\n✅ Safety equipment verification\n✅ Structural condition assessment\n✅ USCG requirements check\n✅ Risk assessment documentation\n\nWould you like a quote for your insurance survey?",
  consultation: "Our marine consultations provide expert guidance on:\n\n✅ Purchase consultation\n✅ Repair guidance\n✅ Legal support\n✅ Expert testimony\n✅ Technical advice\n\nLet's discuss your specific needs - shall we get you a quote?",
  credentials: "Steven Markley is highly qualified with:\n\n🎓 University of Maryland Graduate\n🎓 Chapman School of Seamanship Graduate\n⚓ SAMS® SA Member\n⚓ ABYC Standards Certified\n⚓ Former 100 Ton Master Captain\n⚓ 25+ Years Marine Industry Experience\n\nYou're in expert hands! Ready for your survey quote?",
  areas: "We proudly serve Florida's East Coast:\n\n🌊 **East Coast**: Jupiter, Stuart, West Palm Beach, Fort Lauderdale, Miami\n\nWhich area is your vessel located in? Let's get you a personalized quote!",
  pricing: "Our survey pricing is typically $15-22 per foot, depending on the vessel type and survey complexity. For an accurate quote tailored to your specific vessel, I'd love to connect you with our quote form!",
  contact: "Ready to get started? The best way to get your personalized quote is through our contact form. It only takes a minute and Steven will get back to you promptly with detailed pricing and availability!",
  default: "I'd be happy to help you with that! Markley Marine Surveying specializes in professional vessel inspections across Florida. Whether you need a pre-purchase survey, insurance survey, or consultation, we're here to help. Would you like to get a personalized quote for your vessel?"
};

const quickButtons = [
  { text: "Services", key: "services" },
  { text: "Pre-Purchase Survey", key: "prepurchase" },
  { text: "Insurance Survey", key: "insurance" },
  { text: "Get Quote", key: "contact" }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with marine surveying questions. Are you looking for a pre-purchase survey, insurance survey, or consultation?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showQuickButtons, setShowQuickButtons] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ConversationMessage[]>([]);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const callChatAPI = async (message: string): Promise<string> => {
    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationHistory
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response format - functions may not be running');
      }

      const data = await response.json();
      
      // Update conversation history
      setConversationHistory(data.conversationHistory || []);
      
      return data.response;
    } catch (error) {
      console.error('Chat API error:', error);
      // Fallback to predefined responses if API fails
      return generateFallbackResponse(message);
    }
  };

  const generateFallbackResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return predefinedResponses.greeting;
    }
    if (input.includes("service") || input.includes("what do you do") || input.includes("offer")) {
      return predefinedResponses.services;
    }
    if (input.includes("pre-purchase") || input.includes("prepurchase") || input.includes("buying") || input.includes("purchase")) {
      return predefinedResponses.prepurchase;
    }
    if (input.includes("insurance") || input.includes("coverage")) {
      return predefinedResponses.insurance;
    }
    if (input.includes("consultation") || input.includes("advice") || input.includes("expert")) {
      return predefinedResponses.consultation;
    }
    if (input.includes("credential") || input.includes("qualified") || input.includes("experience") || input.includes("sams") || input.includes("abyc")) {
      return predefinedResponses.credentials;
    }
    if (input.includes("area") || input.includes("location") || input.includes("florida") || input.includes("where")) {
      return predefinedResponses.areas;
    }
    if (input.includes("price") || input.includes("cost") || input.includes("fee") || input.includes("expensive")) {
      return predefinedResponses.pricing;
    }
    if (input.includes("quote") || input.includes("contact") || input.includes("get started") || input.includes("ready")) {
      return predefinedResponses.contact;
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() && !isLoading) {
      const userMessage = inputValue.trim();
      addMessage(userMessage, true);
      setInputValue("");
      setShowQuickButtons(false);
      setIsLoading(true);
      
      try {
        const response = await callChatAPI(userMessage);
        addMessage(response, false);
      } catch (error) {
        console.error('Error sending message:', error);
        addMessage("I apologize, but I'm having trouble responding right now. Please try again later.", false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleQuickButton = async (key: string) => {
    if (isLoading) return;
    
    // For quick buttons, we can use predefined responses or send to API
    const buttonText = quickButtons.find(btn => btn.key === key)?.text || "";
    addMessage(buttonText, true);
    setShowQuickButtons(false);
    setIsLoading(true);
    
    try {
      const response = await callChatAPI(buttonText);
      addMessage(response, false);
    } catch (error) {
      console.error('Error with quick button:', error);
      const fallback = predefinedResponses[key] || predefinedResponses.default;
      addMessage(fallback, false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div
          className="fixed bottom-4 right-4 z-[9999]"
          style={{ 
            position: 'fixed', 
            bottom: '1rem', 
            right: '1rem',
            zIndex: 9999
          }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg animate-pulse"
            data-testid="chat-button"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}

      {/* Chat Dialog */}
      {isOpen && (
        <div
          className="fixed z-[9999] w-80 h-96 max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] animate-in slide-in-from-bottom-2 sm:w-96 sm:h-[32rem] lg:w-[28rem] lg:h-[36rem]"
          style={{ 
            position: 'fixed', 
            bottom: '1rem', 
            right: '1rem',
            zIndex: 9999
          }}
        >
          <Card className="h-full flex flex-col shadow-2xl border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Marine Survey Assistant</CardTitle>
                  <p className="text-xs text-blue-100">Ask me about our services!</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0 max-h-full">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm break-words ${
                        message.isUser
                          ? "bg-primary text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <div className="whitespace-pre-line break-words overflow-wrap-anywhere">{message.text}</div>
                    </div>
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-lg text-sm bg-muted text-foreground">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Action Buttons */}
              {showQuickButtons && (
                <div className="p-3 border-t bg-muted/30">
                  <div className="grid grid-cols-2 gap-2">
                    {quickButtons.map((button) => (
                      <Button
                        key={button.key}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickButton(button.key)}
                        className="text-xs"
                      >
                        {button.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t bg-background">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isLoading ? "Please wait..." : "Ask about marine surveys..."}
                    className="flex-1 text-sm"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="px-3 flex-shrink-0"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}