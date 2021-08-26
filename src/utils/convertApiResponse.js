const capitalizeText = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function convertApiResponse(response) {
  const { items } = response;

  return items.map(({
    uniqueId,
    name,
    price,
    sellingPrice,
    imageUrl
  }) => ({
    id: uniqueId,
    description: capitalizeText(name),
    price,
    sellingPrice,
    imgUrl: imageUrl,
  }));
}
