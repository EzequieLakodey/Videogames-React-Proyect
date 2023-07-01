// React
import { useState } from 'react';

// Router Dom
import { useNavigate, useParams } from 'react-router-dom';

// Material Ui
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    Container,
} from '@mui/material';

// Data Hook
import useGetCategories from '../../utils/hooks/useGetCategories';

const CategorySelector = () => {
    const { data: categories } = useGetCategories();
    const { categoryId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(categoryId || '');
    const navigateToPage = useNavigate();

    if (
        selectedCategory &&
        selectedCategory !== 'All' &&
        categories &&
        !categories.includes(selectedCategory)
    ) {
        categories.push(selectedCategory);
    }

    return (
        <div>
            <FormControl className='category-selector-container'>
                <InputLabel>Category</InputLabel>

                <Select
                    label='Category'
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        navigateToPage(
                            e.target.value === 'All'
                                ? '/'
                                : `/category/${e.target.value}`
                        );
                    }}>
                    <MenuItem
                        className='category-selector-options'
                        value={'All'}
                        key='menu-item-all'>
                        <Container>All</Container>
                    </MenuItem>

                    {categories?.map((category) => (
                        <MenuItem
                            key={`menu-item-${category}`}
                            className='category-selector-options'
                            value={category}>
                            <Container>
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </Container>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default CategorySelector;
