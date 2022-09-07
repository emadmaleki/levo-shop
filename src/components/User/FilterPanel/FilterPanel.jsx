import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import "./../../../styles/filterPanel.css";
import Select from "react-select";
import { Range,getTrackBackground } from "react-range";
import { FetchFilteredResults } from "../../../redux/actions/FilterResActions/FilterResActions";
const FilterPanel = () => {
  let dispatch = useDispatch();

  const [cats, setCats] = useState([]);
  const [memories, setMemories] = useState([]);
  const [displays, setdisplays] = useState([]);
  const [cameras, setcameras] = useState([]);
  const [internets, setinternets] = useState([]);
  const [values, setValues] = useState([0, 3000]);
  
  useEffect(() => {
    dispatch(FetchFilteredResults(cats.map(c=>c.value),memories.map(c=>c.value),internets.map(c=>c.value),displays.map(c=>c.value),cameras.map(c=>c.value),{min:values[0],max:values[1]}))
  }, [cats,memories,displays,cameras,internets,values]);

  const options = {
    categories: [
      { value: "iphone", label: "iphone" },
      { value: "samsung", label: "samsung" },
      { value: "xiaomi", label: "xiaomi" },
      { value: "huawei", label: "huawei" },
    ],
    memories: [
      { value: "32", label: "32" },
      { value: "128", label: "128" },
      { value: "256", label: "256" },
    ],
    displays: [
      { value: "5.5", label: "5.5" },
      { value: "6.5", label: "6.5" },
      { value: "6.7", label: "6.7" },
    ],
    internets: [
      { value: "3G", label: "3G" },
      { value: "4G", label: "4G" },
      { value: "5G", label: "5G" },
    ],
    cameras: [
      { value: "108mp", label: "108mp" },
      { value: "200mp", label: "200mp" },
      { value: "80mp", label: "80mp" },
    ],
  };
  return (
    <section className="filterPanel">
      <section className="fp-header">
        <h3 className="fp-title">Filter Mobiles</h3>
      </section>
      <section className="filter-sec fp-categories">
        <p className="filter-labels">categories</p>
        <Select
          options={options.categories}
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(val) => setCats(val)}
        />
      </section>
      <section className="filter-sec fp-memory">
        <p className="filter-labels">memories</p>
        <Select
          options={options.memories}
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(val) => setMemories(val)}
        />
      </section>
      <section className="filter-sec fp-display">
        <p className="filter-labels">displays</p>
        <Select
          options={options.displays}
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(val) => setMemories(val)}
        />
      </section>
      <section className="filter-sec fp-internet">
        <p className="filter-labels">internets</p>
        <Select
          options={options.internets}
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(val) => setinternets(val)}
        />
      </section>
      <section className="filter-sec fp-camera">
        <p className="filter-labels">cameras</p>
        <Select
          options={options.cameras}
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(val) => setcameras(val)}
        />
      </section>
      <section className="filter-sec fp-camera">
        <p className="filter-labels">price</p>
        <Range
          values={values}
          step={10}
          min={0}
          max={3000}
          onChange={(values) => {
          setValues(values);
          }}
          renderTrack={({ props, children }) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                margin: '0 auto',
                width: "80%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values,
                    colors: ["#e5e5e5", "#ffa3b3", "#e5e5e5"],
                    min: 0,
                    max: 3000,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged ,value}) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "25px",
                width: "50px",
                borderRadius: "4px",
                backgroundColor: "var(--red)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color:'white'
              }}
            >
              {value}
            </div>
          )}
        />
      </section>
    </section>
  );
};
export default FilterPanel;
