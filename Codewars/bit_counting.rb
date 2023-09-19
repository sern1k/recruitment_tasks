def count_bits(n)
  binary = n.to_s(2).split("")
  sum = 0
  binary.each { |a| sum+=a.to_i }
  return sum
end


# Best practises
# def count_bits(n)
#   n.to_s(2).count "1"
# end
