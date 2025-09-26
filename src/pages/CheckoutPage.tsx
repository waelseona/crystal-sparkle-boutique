import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, CreditCard, Shield } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Link, Navigate } from "react-router-dom";

const CheckoutPage = () => {
  const { items, getTotalItems, getTotalPrice, getShippingThreshold } = useCart();
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [guestCheckout, setGuestCheckout] = useState(true);

  const shippingInfo = getShippingThreshold();
  const subtotal = getTotalPrice();
  
  const shippingCosts = {
    standard: shippingInfo.qualifiesForFreeShipping ? 0 : 0,
    express: 9.99,
    overnight: 19.99
  };
  
  const shipping = shippingCosts[shippingMethod as keyof typeof shippingCosts];
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    alert("Order submitted successfully! (Demo mode)");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Secure Checkout</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="text-sm">SSL Secured • Your information is protected</span>
            </div>
          </div>

          <form onSubmit={handleSubmitOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Contact Information
                      <div className="flex items-center gap-2 text-sm">
                        <Checkbox 
                          id="guest" 
                          checked={guestCheckout}
                          onCheckedChange={(checked) => setGuestCheckout(!!checked)}
                        />
                        <label htmlFor="guest" className="text-muted-foreground">
                          Guest checkout
                        </label>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll send your order confirmation here
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                      <p className="text-sm text-muted-foreground mt-1">
                        For delivery updates (optional)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input id="address" required />
                    </div>
                    <div>
                      <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                      <Input id="apartment" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input id="state" required />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code *</Label>
                        <Input id="zip" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard" className="flex-1">
                              <div className="font-medium">Standard Shipping (5-7 business days)</div>
                              <div className="text-sm text-muted-foreground">
                                {shippingInfo.qualifiesForFreeShipping ? 
                                  "Your order qualifies for free shipping!" : 
                                  "Free on orders over $75"
                                }
                              </div>
                            </Label>
                          </div>
                          <Badge variant={shippingInfo.qualifiesForFreeShipping ? "default" : "outline"}>
                            {shippingInfo.qualifiesForFreeShipping ? "FREE" : "$0.00"}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="express" id="express" />
                            <Label htmlFor="express" className="flex-1">
                              <div className="font-medium">Express Shipping (2-3 business days)</div>
                              <div className="text-sm text-muted-foreground">Faster delivery</div>
                            </Label>
                          </div>
                          <Badge variant="outline">$9.99</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="overnight" id="overnight" />
                            <Label htmlFor="overnight" className="flex-1">
                              <div className="font-medium">Overnight Shipping (1 business day)</div>
                              <div className="text-sm text-muted-foreground">Next day delivery</div>
                            </Label>
                          </div>
                          <Badge variant="outline">$19.99</Badge>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Credit or Debit Card</Label>
                        </div>
                        
                        {paymentMethod === "card" && (
                          <div className="ml-6 space-y-4 p-4 border rounded-lg">
                            <div>
                              <Label htmlFor="cardNumber">Card Number *</Label>
                              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="expiry">Expiry Date *</Label>
                                <Input id="expiry" placeholder="MM/YY" required />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV *</Label>
                                <Input id="cvv" placeholder="123" required />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="cardName">Name on Card *</Label>
                              <Input id="cardName" required />
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="apple" id="apple" />
                          <Label htmlFor="apple">Apple Pay</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.productId} className="flex gap-3">
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm line-clamp-2">{item.name}</div>
                            <div className="text-sm text-muted-foreground">
                              Qty: {item.quantity} × ${item.price.toFixed(2)}
                            </div>
                          </div>
                          <div className="font-medium text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <hr />
                    
                    {/* Pricing Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal ({getTotalItems()} items)</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span className={shipping === 0 ? "text-primary font-medium" : ""}>
                          {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <hr />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Place Order */}
                <Card>
                  <CardContent className="p-6">
                    <Button 
                      type="submit"
                      className="w-full mb-4" 
                      variant="luxury" 
                      size="lg"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Place Order - ${total.toFixed(2)}
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span>256-bit SSL encryption</span>
                      </div>
                      <div>
                        By placing your order, you agree to our{" "}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms & Conditions
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <div className="text-center text-sm font-medium mb-3">
                      Why shop with Seona?
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span>30-day hassle-free returns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span>Hypoallergenic guarantee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span>Trusted by 10,000+ women</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span>Expert customer support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;