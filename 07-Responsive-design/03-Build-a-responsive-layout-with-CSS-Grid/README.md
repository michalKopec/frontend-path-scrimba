# 🎯 Project Goals 

Build a responsive science news layout using CSS Grid that demonstrates two-dimensional layout control, moving from a single-column mobile design to complex multi-column layouts on larger screens without requiring excessive wrapper elements.

# 🙌 Demo
https://scrimba-responsive-layout-css-grid.netlify.app/

<img width="1096" height="705" alt="image" src="https://github.com/user-attachments/assets/f83b409b-7dfe-4f2f-b10f-ad9b64db3c90" />


# 📚 Learning Objectives 

✅ Understand CSS Grid as a two-dimensional layout system (rows + columns)

✅ Master grid-template-columns, grid-template-rows, and grid-template-areas

✅ Use grid functions: repeat(), minmax(), and the fr unit

✅ Implement grid-auto-rows, grid-auto-flow, auto-fit, and auto-fill

✅ Control element placement with grid-column, grid-row, and span

✅ Create responsive layouts using grid properties instead of media queries where possible

✅ Understand source order independence and its accessibility implications

# 🚀 Skills Developed 

- Building complex, responsive layouts with minimal HTML markup
- Creating cleaner code by reducing reliance on wrapper divs
- Implementing two-dimensional layout control for precise element positioning
- Using CSS Grid functions and units for flexible, maintainable layouts
- Balancing layout flexibility with accessibility best practices
- Combining Grid with responsive design principles

# 💡 Aha Moments

**Using empty implicit rows for breathing space**

Instead of adding padding to create space from viewport edges, you can use empty implicit rows combined with the gap property for cleaner spacing:

```css
body {
    display: grid;
    grid-template-columns: 1em 1fr 1em;
    grid-template-areas:
        ".... .... ...." 
        ".... head ...."
        ".... main ...."
        ".... foot ...."
        ".... .... ....";
    gap: 1em 0;
}
```

The first and last rows contain no content (auto-sized to 0), but the `gap: 1em 0` creates 1em spacing between all rows. This pushes the header and footer away from the viewport edges without needing padding or margin hacks.

# 🎓 Learning Path

Part of my learning journey through the complete Scrimba FrontEnd Developer Path
