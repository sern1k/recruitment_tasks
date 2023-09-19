def first_non_consecutive(arr)
  (arr.length - 1).times do |i|
    if arr[i] + 1 != arr[i + 1]
      return arr[i + 1]
    end
  end
  return nil
end


# Best practices
# def first_non_consecutive(arr)
#   arr.each_index do |i|
#     return arr[i + 1] if arr[i].next != arr[i + 1]
#   end
# end
