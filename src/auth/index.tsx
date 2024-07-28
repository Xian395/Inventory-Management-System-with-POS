import { SignedIn, SignedOut } from "@clerk/clerk-react";
import HomePage from "../pages/homepage";
import LandingPage from "./landing";

function Index() {
  return (
    <header>


      <SignedOut>
       <LandingPage/>
      </SignedOut>


      <SignedIn>
          <HomePage />
      </SignedIn>
    </header>
  )
}

export default Index