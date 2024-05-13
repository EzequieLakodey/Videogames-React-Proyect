// React
import { useState } from "react";

// Router Dom
import { useNavigate, useParams } from "react-router-dom";

// Material Ui
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    Container,
    Typography,
} from "@mui/material";

// Data Hook
import useGetCategories from "../../utils/hooks/useGetCategories";

const CategorySelector = () => {
    const { data: categories } = useGetCategories();
    const { categoryId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(categoryId || "");
    const navigateToPage = useNavigate();

    const handleCategoryChanger = (category) => {
        setSelectedCategory(category);

        navigateToPage(category == "All" ? "/" : `/category/${category}`);
    };

    return (
        <div>
            <FormControl className="category-selector-container">
                <InputLabel>Category</InputLabel>

                <Select
                    sx={{
                        textAlign: "center",
                    }}
                    label="Category"
                    value={selectedCategory}
                    onChange={(e) => {
                        handleCategoryChanger(e.target.value);
                    }}>
                    <MenuItem
                        className="category-selector-options"
                        value={"All"}
                        key="menu-item-all">
                        <Container disableGutters>
                            <Typography
                                component={"h3"}
                                variant="inherit">
                                All
                            </Typography>
                        </Container>
                    </MenuItem>

                    {categories?.map((category) => (
                        <MenuItem
                            key={`menu-item-${category}`}
                            className="category-selector-options"
                            value={category}>
                            <Container disableGutters>
                                <Typography
                                    component={"h3"}
                                    variant="inherit">
                                    {category.charAt(0).toUpperCase() +
                                        category.slice(1)}
                                </Typography>
                            </Container>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
export default CategorySelector;
