def hot_singles(arr1, arr2)
  (arr1 | arr2) - (arr1 & arr2)
end
