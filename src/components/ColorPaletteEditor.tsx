import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from './ThemeProvider';
import { colorPalette } from '@/lib/colors';

interface ColorEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function ColorEditor({ label, value, onChange }: ColorEditorProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (newValue: string) => {
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="hsl(25 45% 35%)"
          className="flex-1"
        />
        <div
          className="w-10 h-10 rounded border"
          style={{ backgroundColor: value }}
        />
      </div>
    </div>
  );
}

export function ColorPaletteEditor() {
  const { colorPalette: currentPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customColors, setCustomColors] = useState({
    warmBrown: currentPalette.restaurant.warmBrown,
    golden: currentPalette.restaurant.golden,
    cream: currentPalette.restaurant.cream,
    deepBrown: currentPalette.restaurant.deepBrown,
    lightGold: currentPalette.restaurant.lightGold,
  });

  const handleColorChange = (key: string, value: string) => {
    console.log('Changing color:', key, 'to', value);
    
    setCustomColors(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const applyColors = () => {
    // Here you would typically update the global color palette
    // For now, we'll just log the changes
    console.log('New colors:', customColors);
    // You can implement the actual color application logic here
  };

  const resetColors = () => {
    setCustomColors({
      warmBrown: currentPalette.restaurant.warmBrown,
      golden: currentPalette.restaurant.golden,
      cream: currentPalette.restaurant.cream,
      deepBrown: currentPalette.restaurant.deepBrown,
      lightGold: currentPalette.restaurant.lightGold,
    });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="fixed bottom-4 right-4 z-50"
      >
        🎨 Edit Colors
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Color Palette Editor
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColorEditor
              label="Warm Brown"
              value={customColors.warmBrown}
              onChange={(value) => handleColorChange('warmBrown', value)}
            />
            <ColorEditor
              label="Golden"
              value={customColors.golden}
              onChange={(value) => handleColorChange('golden', value)}
            />
            <ColorEditor
              label="Cream"
              value={customColors.cream}
              onChange={(value) => handleColorChange('cream', value)}
            />
            <ColorEditor
              label="Deep Brown"
              value={customColors.deepBrown}
              onChange={(value) => handleColorChange('deepBrown', value)}
            />
            <ColorEditor
              label="Light Gold"
              value={customColors.lightGold}
              onChange={(value) => handleColorChange('lightGold', value)}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Color Preview</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(customColors).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-full h-20 rounded-lg mb-2 border"
                    style={{ backgroundColor: value }}
                  />
                  <p className="text-xs font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button onClick={applyColors} className="flex-1">
              Apply Colors
            </Button>
            <Button onClick={resetColors} variant="outline">
              Reset
            </Button>
            <Button onClick={() => setIsOpen(false)} variant="ghost">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Preset color themes
export const colorPresets = {
  classic: {
    warmBrown: 'hsl(25 45% 35%)',
    golden: 'hsl(42 85% 55%)',
    cream: 'hsl(32 25% 95%)',
    deepBrown: 'hsl(25 65% 25%)',
    lightGold: 'hsl(42 65% 85%)',
  },
  modern: {
    warmBrown: 'hsl(15 55% 40%)',
    golden: 'hsl(35 90% 60%)',
    cream: 'hsl(30 20% 98%)',
    deepBrown: 'hsl(15 75% 30%)',
    lightGold: 'hsl(35 70% 90%)',
  },
  rustic: {
    warmBrown: 'hsl(30 50% 30%)',
    golden: 'hsl(45 80% 50%)',
    cream: 'hsl(35 30% 96%)',
    deepBrown: 'hsl(30 70% 20%)',
    lightGold: 'hsl(45 60% 80%)',
  },
  elegant: {
    warmBrown: 'hsl(20 40% 35%)',
    golden: 'hsl(40 85% 55%)',
    cream: 'hsl(25 25% 97%)',
    deepBrown: 'hsl(20 60% 25%)',
    lightGold: 'hsl(40 65% 85%)',
  },
} as const;

export function ColorPresetSelector() {
  const { colorPalette } = useTheme();

  const applyPreset = (preset: keyof typeof colorPresets) => {
    const colors = colorPresets[preset];
    console.log(`Applying ${preset} preset:`, colors);
    // Implement preset application logic here
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Color Presets</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(colorPresets).map(([name, colors]) => (
          <Button
            key={name}
            variant="outline"
            className="h-20 flex flex-col items-center justify-center gap-2"
            onClick={() => applyPreset(name as keyof typeof colorPresets)}
          >
            <div className="flex gap-1">
              {Object.values(colors).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-xs capitalize">{name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
} 