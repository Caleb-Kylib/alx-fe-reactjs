// src/components/AddRecipeForm.jsx

import { useState } from "react";

function AddRecipeForm() {
  const [form, setForm] = useState({ title: "", ingredients: "", steps: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!form.title) newErrors.title = "Title is required.";
    if (!form.ingredients) newErrors.ingredients = "Ingredients are required.";
    else {
      const ingredientsList = form.ingredients.split(",").map((i) => i.trim()).filter(Boolean);
      if (ingredientsList.length < 2) newErrors.ingredients = "Please enter at least 2 ingredients.";
    }
    if (!form.steps) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Recipe submitted successfully!");
      setForm({ title: "", ingredients: "", steps: "" });
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Ingredients (comma separated)</label>
          <textarea
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. Eggs, Flour, Milk"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            name="steps"
            value={form.steps}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Step 1: ..."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;