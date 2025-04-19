
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';
import PackageItem, { Package, DurationOption } from '@/components/checkout/PackageItem';
import AvailablePackages from '@/components/checkout/AvailablePackages';
import CheckoutFooter from '@/components/checkout/CheckoutFooter';

const CartCheckout = () => {
  const location = useLocation();
  // Initialize with Resume Pro if coming from Resume Maker
  const initialCart = location.state?.initialPackage ? 
    [location.state.initialPackage] : 
    [];
  
  const [cartItems, setCartItems] = useState<Package[]>(initialCart);
  const [selectedDuration, setSelectedDuration] = useState<string>("1month");
  
  // Available packages
  const availablePackages = {
    resumePro: {
      id: "resumePro",
      name: "Resume Pro",
      price: 202,
      originalPrice: 253,
      discountPercent: 20,
      duration: "Valid for 3 months",
      description: "Get professional templates & boost resume content by AI",
      image: "/lovable-uploads/04e647ba-7191-45d4-8599-d8d7bec9b55e.png"
    },
    interviewPro: {
      id: "interviewPro",
      name: "Interview Pro",
      price: 237,
      originalPrice: 296,
      discountPercent: 20,
      duration: "Duration 3 Months",
      description: "Be interview-ready with mock interview & question bank by AI",
      image: "/lovable-uploads/00dfc440-2cb8-4a2e-b2df-dbe4a650e953.png"
    },
    powerProfile: {
      id: "powerProfile",
      name: "Power Profile",
      price: 678,
      originalPrice: 847,
      discountPercent: 20,
      duration: "1 month",
      description: "Supercharge your profile with AI & access exclusive opportunities",
      image: "/lovable-uploads/c3df81f8-db93-4495-afe1-6c67fe95bb76.png"
    }
  };
  
  // Power Profile duration options
  const durationOptions: DurationOption[] = [
    {
      id: "1month",
      duration: "1 month",
      price: 678,
      originalPrice: 847
    },
    {
      id: "3months",
      duration: "3 months",
      price: 1355,
      originalPrice: 1694
    },
    {
      id: "6months",
      duration: "6 months",
      price: 2034,
      originalPrice: 2542,
      discountLabel: "50% off"
    }
  ];
  
  // Add package to cart
  const addPackage = (packageId: string) => {
    const packageToAdd = {...availablePackages[packageId as keyof typeof availablePackages]};
    
    // Don't add if already in cart
    if (cartItems.some(item => item.id === packageId)) {
      return;
    }
    
    // If adding Power Profile with duration options
    if (packageId === "powerProfile") {
      const selectedOption = durationOptions.find(option => option.id === selectedDuration);
      if (selectedOption) {
        packageToAdd.price = selectedOption.price;
        packageToAdd.originalPrice = selectedOption.originalPrice;
        packageToAdd.duration = selectedOption.duration;
      }
    }
    
    setCartItems([...cartItems, packageToAdd]);
  };
  
  // Remove package from cart
  const removePackage = (packageId: string) => {
    setCartItems(cartItems.filter(item => item.id !== packageId));
  };
  
  // Handle duration change for Power Profile
  const handleDurationChange = (value: string) => {
    setSelectedDuration(value);
    
    // If Power Profile is in cart, update its price based on duration
    if (cartItems.some(item => item.id === "powerProfile")) {
      const updatedCart = cartItems.map(item => {
        if (item.id === "powerProfile") {
          const selectedOption = durationOptions.find(option => option.id === value);
          if (selectedOption) {
            return {
              ...item,
              price: selectedOption.price,
              originalPrice: selectedOption.originalPrice,
              duration: selectedOption.duration
            };
          }
        }
        return item;
      });
      
      setCartItems(updatedCart);
    }
  };
  
  // Check if a package is in the cart
  const isInCart = (packageId: string) => {
    return cartItems.some(item => item.id === packageId);
  };
  
  // Process order
  const processOrder = () => {
    console.log("Processing order:", cartItems);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <CheckoutHeader />
      
      <main className="flex-grow px-4 py-6 max-w-2xl mx-auto w-full">
        {/* Cart Items */}
        {cartItems.length > 0 && (
          <div className="space-y-4 mb-8">
            {cartItems.map(item => (
              <PackageItem
                key={item.id}
                item={item}
                onRemove={removePackage}
                selectedDuration={selectedDuration}
                durationOptions={item.id === "powerProfile" ? durationOptions : undefined}
                onDurationChange={item.id === "powerProfile" ? handleDurationChange : undefined}
              />
            ))}
          </div>
        )}
        
        {/* Available Packages */}
        <AvailablePackages 
          availablePackages={availablePackages}
          isInCart={isInCart}
          onAddPackage={addPackage}
        />
      </main>
      
      <CheckoutFooter 
        hasItems={cartItems.length > 0}
        onProcessOrder={processOrder}
      />
    </div>
  );
};

export default CartCheckout;
