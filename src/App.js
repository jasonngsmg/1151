import React, { useState } from "react";
import "./App.scss";
import { Icon } from "@iconify/react";

const App = () => {
    let endPointX, endPointY;
    const [sliced, setSliced] = useState(false);
    //   let slice = "false";
    const Slices = [
        { id: "cutting-area1" },
        { id: "cutting-area2" },
        { id: "cutting-area3" },
    ];
    // const Slices = [
    //   {
    //     name: 'chicken',
    //     values:[
    //       {id: 'cutting-area1'},
    //       {id: 'cutting-area2'},
    //       {id: 'cutting-area3'},
    //     ]
    //   },
    //   {
    //     name: 'fish',
    //     values:[
    //       {id: 'cutting-area1'},
    //       {id: 'cutting-area2'},
    //     ]
    //   }
    // ]

    const segment = 4;

    let i = Slices.length - 1;

    const move = (e) => {
        const cuttingArea = document.getElementById(
            "cutting-area" + (Slices.length - i)
        );
        document.getElementById("catchEvent").innerText =
            "cutting-area" + (Slices.length - i);

        document.getElementById("coordinate-x").innerText = e.clientX;
        document.getElementById("coordinate-y").innerText = e.clientY;

        if (cuttingArea.clientWidth >= cuttingArea.clientHeight) {
            if (
                e.clientX < cuttingArea.getBoundingClientRect().left ||
                e.clientX >
                    cuttingArea.getBoundingClientRect().left +
                        cuttingArea.clientWidth
            ) {
                //   console.log("Y: " + false)
                endPointY = null;
            }

            if (
                endPointX === null &&
                (e.clientX === cuttingArea.getBoundingClientRect().left ||
                    e.clientX <=
                        cuttingArea.getBoundingClientRect().left +
                            cuttingArea.clientWidth / segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth / segment)))
                endPointX =
                    cuttingArea.getBoundingClientRect().left +
                    cuttingArea.clientWidth;
                // console.log("End Point: " + endPointX);
            } else if (
                endPointX === null &&
                (e.clientX ===
                    cuttingArea.getBoundingClientRect().left +
                        cuttingArea.clientWidth ||
                    e.clientX >=
                        cuttingArea.getBoundingClientRect().left +
                            (cuttingArea.clientWidth * (segment - 1)) / segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth * (segment - 1) / segment)))
                endPointX = cuttingArea.getBoundingClientRect().left;
                // console.log("End Point: " + endPointX);
            }
        } else if (cuttingArea.clientWidth <= cuttingArea.clientHeight) {
            if (
                e.clientY < cuttingArea.getBoundingClientRect().top ||
                e.clientY >
                    cuttingArea.getBoundingClientRect().top +
                        cuttingArea.clientHeight
            ) {
                //   console.log("X: " + false)
                endPointX = null;
            }

            if (
                endPointY === null &&
                (e.clientY === cuttingArea.getBoundingClientRect().top ||
                    e.clientY <=
                        cuttingArea.getBoundingClientRect().top +
                            cuttingArea.clientHeight / segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight / segment)))
                endPointY =
                    cuttingArea.getBoundingClientRect().top +
                    cuttingArea.clientHeight;
                // console.log("End Point: " + endPointY);
            } else if (
                endPointY === null &&
                (e.clientY ===
                    cuttingArea.getBoundingClientRect().top +
                        cuttingArea.clientHeight ||
                    e.clientY >=
                        cuttingArea.getBoundingClientRect().top +
                            (cuttingArea.clientHeight * (segment - 1)) /
                                segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight * (segment - 1) / segment)))
                endPointY = cuttingArea.getBoundingClientRect().top;
                // console.log("End Point: " + endPointY);
            }
        }

        if (endPointX === e.clientX || endPointY === e.clientY) {
            document.getElementById(
                "cutting-area" + (Slices.length - i)
            ).style.display = "none";

            if (i !== 0) {
                remove();
                i -= 1;
                document.getElementById(
                    "cutting-area" + (Slices.length - i)
                ).style.display = "block";
            } else {
                setSliced(true);
                // document.getElementById("cutting-result").innerText = sliced;
            }
        }
    };

    const touchMove = (e) => {
        document.body.style.overflow = "hidden";
        const cuttingArea = document.getElementById(
            "cutting-area" + (Slices.length - i)
        );
        document.getElementById("catchEvent").innerText =
            "cutting-area" + (Slices.length - i);

        document.getElementById("coordinate-x").innerText = Math.round(
            e.touches[0].clientX
        ).toFixed(0);
        document.getElementById("coordinate-y").innerText = Math.round(
            e.touches[0].clientY
        ).toFixed(0);

        if (cuttingArea.clientWidth >= cuttingArea.clientHeight) {
            if (
                e.touches[0].clientX <
                    cuttingArea.getBoundingClientRect().left ||
                e.touches[0].clientX >
                    cuttingArea.getBoundingClientRect().left +
                        cuttingArea.clientWidth
            ) {
                console.log("Y: " + false);
                endPointY = null;
            }

            if (
                endPointX === null &&
                (e.touches[0].clientX ===
                    cuttingArea.getBoundingClientRect().left ||
                    e.touches[0].clientX <=
                        cuttingArea.getBoundingClientRect().left +
                            cuttingArea.clientWidth / segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth / segment)))
                endPointX =
                    cuttingArea.getBoundingClientRect().left +
                    cuttingArea.clientWidth;
                console.log("End Point X: " + endPointX);
                // console.log(cuttingArea.getBoundingClientRect().left);
            } else if (
                endPointX === null &&
                (e.touches[0].clientX ===
                    cuttingArea.getBoundingClientRect().left +
                        cuttingArea.clientWidth ||
                    e.touches[0].clientX >=
                        cuttingArea.getBoundingClientRect().left +
                            (cuttingArea.clientWidth * (segment - 1)) / segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().left + (cuttingArea.clientWidth * (segment - 1) / segment)))
                endPointX = cuttingArea.getBoundingClientRect().left;
                console.log("End Point X: " + endPointX);
            }
        } else if (cuttingArea.clientWidth <= cuttingArea.clientHeight) {
            if (
                e.touches[0].clientY <
                    cuttingArea.getBoundingClientRect().top ||
                e.touches[0].clientY >
                    cuttingArea.getBoundingClientRect().top +
                        cuttingArea.clientHeight
            ) {
                console.log("X: " + false);
                endPointX = null;
            }

            if (
                endPointY === null &&
                (e.touches[0].clientY ===
                    cuttingArea.getBoundingClientRect().top ||
                    e.touches[0].clientY <=
                        cuttingArea.getBoundingClientRect().top +
                            cuttingArea.clientHeight / segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight / segment)))
                endPointY =
                    cuttingArea.getBoundingClientRect().top +
                    cuttingArea.clientHeight;
                // console.log("End Point: " + endPointY);
            } else if (
                endPointY === null &&
                (e.touches[0].clientY ===
                    cuttingArea.getBoundingClientRect().top +
                        cuttingArea.clientHeight ||
                    e.touches[0].clientY >=
                        cuttingArea.getBoundingClientRect().top +
                            (cuttingArea.clientHeight * (segment - 1)) /
                                segment)
            ) {
                //   console.log("Segment: " + (cuttingArea.getBoundingClientRect().top + (cuttingArea.clientHeight * (segment - 1) / segment)))
                endPointY = cuttingArea.getBoundingClientRect().top;
                // console.log("End Point: " + endPointY);
            }
        }

        if (
            Math.round(endPointX).toFixed(0) ===
                Math.round(e.touches[0].clientX).toFixed(0) ||
            Math.round(endPointY).toFixed(0) ===
                Math.round(e.touches[0].clientY).toFixed(0)
        ) {
            document.body.style.overflow = "auto";
            console.log("Sliced: true");
            document.getElementById(
                "cutting-area" + (Slices.length - i)
            ).style.display = "none";

            if (i !== 0) {
                i -= 1;
                document.getElementById(
                    "cutting-area" + (Slices.length - i)
                ).style.display = "block";
            } else {
                setSliced(true);
                // document.getElementById("cutting-result").innerText = sliced;
            }
        }
    };

    const add = () => {
        // document.body.style.overflow = "hidden";
        endPointX = null;
        endPointY = null;
        setSliced(false);
        // document.getElementById("cutting-result").innerText = sliced;
        document
            .getElementById("chopping-board")
            .addEventListener("mousemove", move);
        // document.getElementById("chopping-board").addEventListener('ontouchmove',touchMove);
    };

    const remove = () => {
        // document.body.style.overflow = "auto";
        document
            .getElementById("chopping-board")
            .removeEventListener("mousemove", move);
        // document.getElementById("chopping-board").removeEventListener('ontouchmove',touchMove);
    };

    return (
        <>
            <div
                id="chopping-board"
                onMouseDown={add}
                onMouseUp={remove}
                onTouchStart={add}
                onTouchEnd={remove}
            >
                <div className="ingredient" id="chicken">
                    {Slices.map((Slice) => (
                        <div
                            className="cutting-area"
                            key={Slice?.id}
                            id={Slice?.id}
                            onTouchMove={touchMove}
                        ></div>
                    ))}
                </div>
            </div>
            <div>
                <button>Chicken</button>
                <button>Fish</button>
                <button>Lettuce</button>
            </div>
            <br />
            <label>Coordinate:</label>
            <label>(X): </label>
            <label id="coordinate-x"></label>
            &nbsp;
            <label>(Y): </label>
            <label id="coordinate-y"></label>
            <br />
            <label>Event: </label>
            <label id="catchEvent"></label>
            <br />
            <label>
                Sliced:{" "}
                <span id="cutting-result" style={{ color: "lime" }}>
                    {sliced && <Icon icon="teenyicons:tick-circle-solid" />}
                </span>
            </label>
        </>
    );
};

export default App;
