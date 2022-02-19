# Generate a Rating Component

#### Step 1: Generate Component - Rating

```
npm run generate
```

```
Component tag name(dash-case) : fw-rating
```

#### Step 2: Add CSS

* fw-rating.css
```css
.rating {
  color: orange;
}
```

#### Step 3: Add Component Rendering Code

* fw-rating.tsx

```
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fw-rating',
  styleUrl: 'fw-rating.css',
  shadow: true,
})
export class FwRating {

  render() {
    return (
      <Host>
      <div>
        <span class="rating">&#x2605;</span>
        <span class="rating">&#x2605;</span>
        <span class="rating">&#x2605;</span>
        <span class="rating">&#x2606;</span>
        <span class="rating">&#x2606;</span>
        <span class="rating">&#x2606;</span>
      </div>
    
      </Host>
    );
  }

}

```

#### Step 4: Test the component

* index.html

```
<fw-rating></fw-rating>
```

#### Output

![image](https://user-images.githubusercontent.com/2763774/154793850-1ae68ab0-a3a9-446a-b380-2d487a4c7bd8.png)
