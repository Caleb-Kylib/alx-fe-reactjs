function RecipeCard({ recipe }) {
  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg cursor-pointer mb-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-xl font-bold">{recipe.title}</h2>
    </div>
  );
}

export default RecipeCard;