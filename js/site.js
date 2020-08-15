/**
 * Ryan Alexander Website - Last Updated: 04/02/2020
 *
 * This document uses strict mode JavaScript.
 *
 * I have tried to make my code as clean as possible, however I am still learning Javascript so there will mistakes.
 *
 * If you spot any errors or there are any code improvements I can make, please let me know on the project's issue page.
 *
 */

// Use strict mode JavaScript
"use strict";

/** Application is encapsulated in a IIFE (Immediately Invoked Function Expression)
 * this is to stop conflicts in the global namespace
 * */
(function () {
  // Handle Navigation Icon Clicks
  const BUTTON_HAMBURGER = document.getElementById("button-hamburger");
  BUTTON_HAMBURGER.addEventListener("click", toggleMobileMenu);
  const NAVIGATION_LINKS = document.getElementsByClassName("navigation-link");

  // Add Event Listener to each Navigation Link to close
  for (let index = 0; index < NAVIGATION_LINKS.length; index++) {
    NAVIGATION_LINKS[index].addEventListener("click", () => {
      alert("Sorry this doesn't work. If you need to see my Projects or CV, please contact me or view my GitHub. Thank you!");
    });
  }

  /**
   * This function runs whenever the hamburger button (Anchor Tag) is clicked
   */
  function toggleMobileMenu() {
    // Add reference to menu buttons
    const HEADER = document.getElementById("website-header");
    const ICON_HAMBURGER = document.getElementById("icon-hamburger");
    const NAVIGATION_SECTION = document.getElementById("navigation-section");
    const MENU_SOCIAL_SECTION = document.getElementById("menu-social-section");
    const HERO_CONTENT = document.getElementById("hero-content");

    // Change Menu Icon
    if (ICON_HAMBURGER.classList.contains("fa-bars")) {
      // Enable Mobile Menu
      openMobileMenu();
    } else {
      // Disable Mobile Menu
      closeMobileMenu();
    }

    /**
     * Adds the "mobile-menu-enabled" class to display mobile menu through CSS
     */
    function openMobileMenu() {
      BUTTON_HAMBURGER.classList.add("mobile-menu-enabled");
      ICON_HAMBURGER.classList.remove("fa-bars");
      ICON_HAMBURGER.classList.add("fa-times");
      HEADER.classList.add("mobile-menu-enabled");
      NAVIGATION_SECTION.classList.add("mobile-menu-enabled");
      MENU_SOCIAL_SECTION.classList.add("mobile-menu-enabled");
      HERO_CONTENT.classList.add("mobile-menu-enabled");
    }

    /**
     * Removes the "mobile-menu-enabled" class to hide mobile menu through CSS
     */
    function closeMobileMenu() {
      BUTTON_HAMBURGER.classList.remove("mobile-menu-enabled");
      ICON_HAMBURGER.classList.remove("fa-times");
      ICON_HAMBURGER.classList.add("fa-bars");
      HEADER.classList.remove("mobile-menu-enabled");
      NAVIGATION_SECTION.classList.remove("mobile-menu-enabled");
      MENU_SOCIAL_SECTION.classList.remove("mobile-menu-enabled");
      HERO_CONTENT.classList.remove("mobile-menu-enabled");
    }

  }
})();
