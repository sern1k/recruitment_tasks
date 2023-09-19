def get_count(input_str)
  vowels = ["a", "e", "i", "o", "u"]
  count = 0
  input_str.each_char do |char|
    if vowels.include?(char.downcase)
      count += 1
    end
  end
  return count
end



# Best Practises
# def getCount(inputStr)
#   inputStr.count("aeiou")
# end
