
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const ContactForm = () => {
  const marketingGoals = [
    "Increase brand awareness",
    "Generate more leads",
    "Improve conversion rates",
    "Enhance customer retention",
    "Expand social media presence",
    "Content creation strategy"
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to our experts and let us help you turn your data into actionable marketing insights.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Contact us</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="ConvoTrack Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Official Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone No.</Label>
                  <Input id="phone" placeholder="+1 (123) 456-7890" />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Label>Marketing Goals (Select all that apply)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {marketingGoals.map((goal, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`goal-${index}`} />
                      <Label htmlFor={`goal-${index}`} className="font-normal text-sm cursor-pointer">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Label htmlFor="details">Add More Details</Label>
                <Textarea 
                  id="details"
                  placeholder="Tell us more about your project or specific requirements..."
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
