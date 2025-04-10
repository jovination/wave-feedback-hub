
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface StandardTemplateProps {
  theme: string;
}

const StandardTemplate = ({ theme }: StandardTemplateProps) => (
  <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200 shadow-sm"}`}>
    <div className="flex items-center mb-3">
      <MessageSquare size={18} className={theme === "dark" ? "text-amber-400" : "text-amber-500"} />
      <span className={`ml-2 font-medium ${theme === "dark" ? "text-zinc-100" : "text-zinc-800"}`}>
        Send Feedback
      </span>
    </div>
    <textarea
      className={`w-full p-3 rounded-lg text-sm mb-3 transition-all focus:ring-2 focus:ring-amber-200 outline-none ${
        theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-zinc-50 border-zinc-200"
      }`}
      placeholder="Share your thoughts anonymously..."
      rows={3}
      readOnly
    />
    <Button
      className={`w-full ${
        theme === "dark" ? "bg-amber-500 hover:bg-amber-600" : "bg-zinc-800 hover:bg-zinc-900"
      } text-white rounded-lg transition-all duration-200`}
      size="sm"
    >
      Submit Anonymous Feedback
    </Button>
  </div>
);

export default StandardTemplate;
