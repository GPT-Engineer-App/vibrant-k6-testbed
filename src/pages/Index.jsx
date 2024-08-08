import { useState } from "react";
import { Cat, Heart, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
  { name: "Persian", description: "Recognized for their long fur and flat faces." },
  { name: "Maine Coon", description: "One of the largest domesticated cat breeds with a distinctive physical appearance." },
  { name: "British Shorthair", description: "Known for their chunky bodies, dense coat, and broad faces." },
  { name: "Scottish Fold", description: "Characterized by a genetic mutation that affects cartilage, giving the ears a folded appearance." },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-2 text-pink-600" /> Feline Fascination
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-6"
          />
        </motion.div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>About Cats</CardTitle>
            <CardDescription>Fascinating feline facts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-gray-700 mb-4">
              Cats are captivating creatures that have been our companions for millennia. Renowned for their independence, agility, and affectionate nature, these furry friends continue to charm us with their unique personalities.
            </p>
            <Button variant="outline" onClick={() => setLikes(likes + 1)} className="flex items-center">
              <Heart className="mr-2 h-4 w-4" /> Like ({likes})
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Feline Features</CardTitle>
                <CardDescription>What makes cats unique</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Excellent hunters with sharp claws and teeth</li>
                  <li>Flexible bodies and quick reflexes</li>
                  <li>Keen senses, especially their night vision</li>
                  <li>Communicate through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Cat Breeds</CardTitle>
                <CardDescription>Diverse feline friends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catBreeds.map((breed, index) => (
                    <div key={index} className="flex items-start">
                      <Info className="mr-2 h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold">{breed.name}</h3>
                        <p className="text-sm text-gray-600">{breed.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <p className="text-lg text-gray-700 text-center italic">
          "Time spent with cats is never wasted." - Sigmund Freud
        </p>
      </div>
    </div>
  );
};

export default Index;
