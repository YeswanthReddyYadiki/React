import React from 'react'
let g="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhd0QUkD-cLxCmwV1qdqdrMY5CzdDf1hspakcPRHueqqVqEYKWNj8GIAtUUwqN0TyF-AE&usqp=CAU"
let f="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEk4wv50rBETID-uVvIPYEh8l5NyN_3mGVuoXKkolV4b0gamxbW7hDdnsfgvwC0jTScMw&usqp=CAU"
let e="https://media.istockphoto.com/id/1304786176/vector/management-icon-teamwork-management-icon-business-team-company-leader-supervisor-partnership.jpg?s=612x612&w=0&k=20&c=sT80bgOaHOm3b39PgwGMhU2PznIOKdpDtEC4ct894vU="
let d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAABwcHAhISHCwsKCgoLv7+/4+PgzMzNsbGy2trbR0dGqqqrj4+PLy8ubm5uOjo50dHSHh4ddXV1JSUmysrJ9fX3X19dhYWFWVlYSEhKVlZUpKSkiIiKioqIxMTFCQkIaGhro6OhMTEw6OjoWwdd2AAADjElEQVR4nO3daVuqQBiAYTGVNPeO5pZp+f9/4ymUBlvgHWeFnvtTnWuCeY4LqAitFgAAAAAAAAAAf0dvMV2266U7HfTEfU+rpJ76I1ngPPREDUwkgY+hZ2mkXx04Cz1HQ9OqwEHoGRobVxSGnp+5Q9NvwiR5KC1U24nH0Bs4TevPmZc/Enf5sKeKe3N8xvnUD2WjepvLqKGfWVmVb8ePZYNG+f9D1RNSjDr55MsGURg1CjMURo3CDIVRozBDYdQozFAYNQozFEaNwgyFUaMwQ2HUKMxQGDUKMxRGTa+w42taFlF4dncZVL+PgKWFo/32w8DTpKySFdYZhfVHYf1RWH8U1t914etw2jUz38b2+qNYmC4TG3Zx7Z8XCtODlcBEeGi8L4VCi0fjx3RPVYXjsilr2oXOKlCFVr9vUH5QtVeq8Nlm4T50l6IKy6d86l+r+A5UN3SXIiw8ffvDBwpjIb2X3jf9XqqLQo/+YOG6b2QXfaHx934OsRfKv/j8iy6FvlGojULvKNRGoXcUaqPQOwq1Uegdhdoo9I5CbRR6R6E2Cr2jUBuF3lGojULvKNRGoXcUaqPQOwq1Uegdhdoo9I5CbRR6R6E2Cr2jUFt0hWP3hen+dBfO89F54Wt+2pDQnBWuS1bqlavCUck6/XJVOAzYdM1V4USy8uOqu9pUDzMTsnCZvg/s9d3FZQIWLi9DHV+5LlzhLr0MTV32hSxUV3375zIwYKG61JTbCxByG7orbP7j8HOw481F0O3hx8DUceAm6D5Nsto6vwrofdhCD2aNLxw0vjBteuG+1fDXh28tZ4VPAbMKeu4KW6eAXblDttt0/tl+YfgbcXM599j5Nwfvl47snAbuRrv+It/vPf9D897zVigUojAgCoUoDIhCIVlhOhhWsn6KUK+Fog8VF6Zz+cJroSQwmZnO5ceVUlgp+kLjh/c69sJkPzByeVs35kI76ls47+xFZ/22UrgKUPj6MVBy0ujiEUMP3wnPO73/4U/P0t8qDAvP1wpKBQc5qUKbpwkvuOU5X75YwYcoqnBqHPOjWy7MJFhs8wtvuZdGVCg5hDB7ppF8kqmujhBRYVuy4PliInoPW+0aRVTYqV6s2LNabESFNo/1KFylJKbC3out1U8LS93aWui12670kooeipWOV6/Ne+uXe+te2jcFvhtNum0zs/ng6x5V6sCtgQAAAAAAAAAANMF/l9lUxEe0nU4AAAAASUVORK5CYII="
let b="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQk7_o4aSYEJYUbSvr5Mz2LJyRuy5xFceHw&s"
let c="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXSpISmYgjsxtMAcn7T-vqc7mWlM_DRD4nA&s"
export default function Courses() {
  return (
    <>
      <h1>OUR COURSES</h1>
    <div className="container">
        <div className="one">
            <div className="a"><img className="pic" src={g} alt=""/></div>
            <h2>Web Development</h2>
            <div className="para"><p className="para">Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit Quos, <br/>rationel</p></div>
        </div>
        <div className="one">
            <div className="a"><img className="pic" src={f} alt=""/></div>
            <h2>App Development</h2>
            <div className="para"><p className="para">Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit Quos, <br/>rationel</p></div>
        </div>
        <div className="one">
            <div className="a"><img className="pic" src={e} alt=""/></div>
            <h2>Web Design</h2>
            <div className="para"><p className="para">Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit Quos, <br/>rationel</p></div>
        </div>
        <div className="one">
            <div className="a"><img className="pic" src={d} alt=""/></div>
            <h2>Responsive Design</h2>
            <div className="para"><p className="para">Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit Quos, <br/>rationel</p></div>
        </div>
        <div className="one">
                <div className="a"><img className="pic" src={b} alt=""/></div>
            <h2>Advertising</h2>
            <div className="para"><p className="para">Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit Quos, <br/>rationel</p></div>
        </div>
        <div class="one">
            <div className="a"><img className="pic" src={c} alt=""/></div>
            <h2>Wordpress</h2>
            <div className="para"><p className="para">Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit Quos, <br/>rationel</p></div>
        </div>
    </div>
    
    </>
  )
}
   