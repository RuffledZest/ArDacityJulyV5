"use client"
import { useState } from "react"
import { Search, ArrowRight, Clock, Volume2, ImageIcon, Video, FileText } from "lucide-react"
import { RetroVideo } from "./ar-retro-video"

interface RetroHeaderProps {
  // Branding
  title?: string
  subtitle?: string
  highlightedWord?: string

  // Navigation
  navToggleOptions?: string[]
  statusText?: string

  // Search
  searchPlaceholder?: string
  searchFilters?: string[]

  // Content
  speechBubbleText?: string
  infoBoxText?: string

  // Colors
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  backgroundColor?: string
  textColor?: string

  // Callbacks
  onSearch?: (query: string, filter: string) => void
  onNavToggle?: (option: string) => void
  onStatusClick?: () => void

  className?: string
}

export function RetroHeader({
  title = "Retro Header",
  subtitle = "SEARCH ALMOST",
  highlightedWord = "ANYTHING",
  navToggleOptions = ["WEB", "ARNS"],
  statusText = "STATUS",
  searchPlaceholder = "Search anything ///",
  searchFilters = ["Text", "Image", "Video", "Audio"],
//   speechBubbleText = "Wow look great!",
//   infoBoxText = "Glimpse is the one stop solution to search anything on the hyperbeam and go using vector search feature.",
  primaryColor = "#2d2d2d",
  secondaryColor = "#f5f5dc",
  accentColor = "#4ade80",
  backgroundColor = "#f5f5dc",
  textColor = "#2d2d2d",
  onSearch,
  onNavToggle,
  onStatusClick,
  className = "",
}: RetroHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState(searchFilters[0])
  const [activeNavOption, setActiveNavOption] = useState(navToggleOptions[0])

  const handleSearch = () => {
    onSearch?.(searchQuery, activeFilter)
  }

  const handleNavToggle = (option: string) => {
    setActiveNavOption(option)
    onNavToggle?.(option)
  }

  const filterIcons = {
    Text: <FileText className="w-4 h-4" />,
    Image: <ImageIcon className="w-4 h-4" />,
    Video: <Video className="w-4 h-4" />,
    Audio: <Volume2 className="w-4 h-4" />,
  }

  return (
    <header
      className={`relative min-h-screen overflow-hidden ${className}`}
      style={{ backgroundColor, color: textColor }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-current rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-current rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-current rotate-45"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 border-2 border-current rounded-lg -rotate-12"></div>
      </div>

      {/* Top Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-3xl font-mono font-bold" style={{ color: textColor }}>
            {title}
          </h1>
        </div>

        {/* Center Toggle - Hidden on mobile */}
        <div className="hidden md:flex">
          <div
            className="inline-flex border-2 rounded-lg overflow-hidden"
            style={{
              borderColor: primaryColor,
              boxShadow: `4px 4px 0px ${primaryColor}`,
            }}
          >
            {navToggleOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleNavToggle(option)}
                className="px-6 py-2 font-mono font-bold transition-all duration-200 border-r-2 last:border-r-0"
                style={{
                  backgroundColor: activeNavOption === option ? primaryColor : secondaryColor,
                  color: activeNavOption === option ? secondaryColor : textColor,
                  borderRightColor: primaryColor,
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Status Button */}
        <button
          onClick={onStatusClick}
          className="flex items-center gap-2 px-4 py-2 font-mono font-bold rounded-lg border-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: primaryColor,
            color: secondaryColor,
            borderColor: primaryColor,
            boxShadow: `3px 3px 0px ${primaryColor}`,
          }}
        >
          <Clock className="w-4 h-4" />
          <span className="hidden sm:inline">{statusText}</span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Decorative Elements */}
          {/* <div className="absolute top-0 left-0 hidden lg:block">
        
            <div
              className="relative px-4 py-2 rounded-lg border-2 font-mono text-sm font-bold"
              style={{
                backgroundColor: "#fbbf24",
                borderColor: primaryColor,
                boxShadow: `3px 3px 0px ${primaryColor}`,
                color: primaryColor,
              }}
            >
              {speechBubbleText}
              <div
                className="absolute -bottom-2 left-4 w-4 h-4 rotate-45 border-r-2 border-b-2"
                style={{
                  backgroundColor: "#fbbf24",
                  borderColor: primaryColor,
                }}
              ></div>
            </div>

     
            <div
              className="mt-8 p-4 rounded-lg border-2 font-mono text-sm max-w-xs"
              style={{
                backgroundColor: "#67e8f9",
                borderColor: primaryColor,
                boxShadow: `4px 4px 0px ${primaryColor}`,
                color: primaryColor,
              }}
            >
              {infoBoxText}
            </div>
          </div> */}

          {/* Character Illustrations - Decorative */}
          <div className="absolute top-20 right-0 hidden xl:block">
            <div
              className="w-32 h-32 rounded-lg border-2 bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center rotate-12"
              style={{ borderColor: primaryColor, boxShadow: `4px 4px 0px ${primaryColor}` }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-mono font-bold leading-tight mb-4">
              <div className="mb-2">{subtitle}</div>
              <div className="relative inline-block">
                <span
                  className="px-4 py-2 -rotate-2 inline-block"
                  style={{
                    backgroundColor: primaryColor,
                    color: secondaryColor,
                    boxShadow: `6px 6px 0px ${primaryColor}`,
                  }}
                >
                  {highlightedWord}
                </span>
              </div>
              <div className="mt-2">WITH VECTOR SEARCHING ACCURACY</div>
            </h2>
          </div>

          {/* Search Section */}
          <div className="max-w-3xl mx-auto">
            {/* Search Input */}
            <div className="mb-6">
              <div
                className="flex items-center p-2 md:p-4 lg:p-4 rounded-lg border-2"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: primaryColor,
                  boxShadow: `6px 6px 0px ${primaryColor}`,
                }}
              >
                <Search className="w-6 h-6 mr-4" style={{ color: textColor }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="flex-1 bg-transparent outline-none font-mono text-sm md:text-lg"
                  style={{ color: textColor }}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="ml-4 p-3 rounded-lg border-2 transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: primaryColor,
                    color: secondaryColor,
                    borderColor: primaryColor,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {searchFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="flex items-center gap-2 px-4 py-2 font-mono font-bold rounded-lg border-2 transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: activeFilter === filter ? primaryColor : "#ffffff",
                    color: activeFilter === filter ? secondaryColor : textColor,
                    borderColor: primaryColor,
                    boxShadow: `3px 3px 0px ${primaryColor}`,
                  }}
                >
                  {filterIcons[filter as keyof typeof filterIcons]}
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden mt-8 flex justify-center">
            <div
              className="inline-flex border-2 rounded-lg overflow-hidden"
              style={{
                borderColor: primaryColor,
                boxShadow: `4px 4px 0px ${primaryColor}`,
              }}
            >
              {navToggleOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleNavToggle(option)}
                  className="px-6 py-2 font-mono font-bold transition-all duration-200 border-r-2 last:border-r-0"
                  style={{
                    backgroundColor: activeNavOption === option ? primaryColor : secondaryColor,
                    color: activeNavOption === option ? secondaryColor : textColor,
                    borderRightColor: primaryColor,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Preview Section */}
      <div className="relative z-10 mt-12 lg:mt-0">
        <div
          className="mx-6 lg:mx-12 p-6 rounded-t-lg "
          style={{
         
            
          }}
        >
          <div className="flex items-center justify-center gap-4 ">
          <div className="w-full">
                    <RetroVideo
                      title="Component Demo"
                     
                      controls={true}
                      autoPlay={false}
                    />
                  </div>
          </div>
        </div>
      </div>
    </header>
  )
}
