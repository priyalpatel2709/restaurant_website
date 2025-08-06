import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import { colorPalette } from '@/lib/colors';

export function ColorExamples() {
  const { colorPalette: currentPalette, theme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">
          Color System Examples
        </h2>
        <p className="text-muted-foreground">
          Current theme: <Badge variant="secondary">{theme}</Badge>
        </p>
      </div>

      {/* Restaurant Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Restaurant Brand Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(currentPalette.restaurant).map(([name, color]) => (
              <div key={name} className="text-center">
                <div
                  className="w-full h-20 rounded-lg mb-2 border shadow-sm"
                  style={{ backgroundColor: color }}
                />
                <p className="text-xs font-medium capitalize">
                  {name.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-xs text-muted-foreground">{color}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Primary Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Primary Color Scale</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Brown Scale</h4>
              <div className="grid grid-cols-10 gap-1">
                {Object.entries(currentPalette.primary.brown).map(([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-full h-12 rounded border"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-xs mt-1">{shade}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Gold Scale</h4>
              <div className="grid grid-cols-10 gap-1">
                {Object.entries(currentPalette.primary.gold).map(([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div
                      className="w-full h-12 rounded border"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-xs mt-1">{shade}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Semantic Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Semantic Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(currentPalette.semantic).map(([name, color]) => (
              <div key={name} className="text-center">
                <div
                  className="w-full h-16 rounded-lg mb-2 border"
                  style={{ backgroundColor: color }}
                />
                <p className="text-sm font-medium capitalize">{name}</p>
                <p className="text-xs text-muted-foreground">{color}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gradients */}
      <Card>
        <CardHeader>
          <CardTitle>Gradients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(currentPalette.gradients).map(([name, gradient]) => (
              <div key={name} className="text-center">
                <div
                  className="w-full h-24 rounded-lg mb-2 border"
                  style={{ background: gradient }}
                />
                <p className="text-sm font-medium capitalize">{name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Buttons */}
          <div>
            <h4 className="font-semibold mb-2">Buttons</h4>
            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button className="bg-gradient-accent">Gradient</Button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h4 className="font-semibold mb-2">Cards</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-warm-brown text-white">
                <CardContent className="p-4">
                  <p>Warm Brown Background</p>
                </CardContent>
              </Card>
              <Card className="bg-golden text-primary">
                <CardContent className="p-4">
                  <p>Golden Background</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-accent text-primary">
                <CardContent className="p-4">
                  <p>Gradient Background</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Shadows */}
          <div>
            <h4 className="font-semibold mb-2">Shadows</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="shadow-warm">
                <CardContent className="p-4">
                  <p>Warm Shadow</p>
                </CardContent>
              </Card>
              <Card className="shadow-golden">
                <CardContent className="p-4">
                  <p>Golden Shadow</p>
                </CardContent>
              </Card>
              <Card className="shadow-subtle">
                <CardContent className="p-4">
                  <p>Subtle Shadow</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Code Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">CSS Classes</h4>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`// Using Tailwind classes
<div className="bg-primary text-primary-foreground">
<div className="bg-warm-brown text-golden">
<div className="bg-gradient-accent">
<div className="shadow-warm">`}
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Inline Styles</h4>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`// Using color palette directly
import { colorPalette } from '@/lib/colors';

<div style={{ backgroundColor: colorPalette.restaurant.warmBrown }}>
<div style={{ background: colorPalette.gradients.hero }}>`}
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Theme Hook</h4>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`// Using the theme hook
import { useTheme } from '@/components/ThemeProvider';

const { colorPalette, theme } = useTheme();
const currentColor = colorPalette.restaurant.golden;`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 