def pillars(num_of_pillars, distance, width)
  if num_of_pillars == 1
    return 0
  end
  return (num_of_pillars - 1) * distance * 100 + (num_of_pillars - 2) * width
end


# Best Practises
# def pillars(n, distance, width)
#   [0, (n - 1) * (distance * 100 + width) - width].max
# end
