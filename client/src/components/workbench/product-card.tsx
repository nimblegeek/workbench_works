import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Workbench } from "@db/schema";

interface ProductCardProps {
  workbench: Workbench;
  onInquire: () => void;
}

export default function ProductCard({ workbench, onInquire }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={workbench.imageUrl}
          alt={workbench.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{workbench.name}</CardTitle>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            ${(workbench.price / 100).toFixed(2)}
          </span>
          <span className={`text-sm ${workbench.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {workbench.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {workbench.description}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium">Dimensions:</span>
            <br />
            {workbench.dimensions}
          </div>
          <div>
            <span className="font-medium">Material:</span>
            <br />
            {workbench.material}
          </div>
        </div>
        <Button 
          className="w-full mt-4" 
          onClick={onInquire}
          disabled={!workbench.inStock}
        >
          Inquire Now
        </Button>
      </CardContent>
    </Card>
  );
}
