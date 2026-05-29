const PR_CENTER = [18.2208, -66.5901];
const PR_BOUNDS = [
  [17.78, -67.38],
  [18.56, -65.19],
];
const MAP_DRAG_BOUNDS = [
  [16.85, -68.45],
  [19.15, -64.3],
];
const STORAGE_KEY = "puerto_rico_size_comparison_last10";
const PRESET_STORAGE_KEY = "puerto_rico_size_comparison_presets";
const BUILT_IN_PRESETS = [
  {
    id: "preset-puerto-rico-size-comparison-1",
    name: "Preset 1",
    createdAt: 1779402447576,
    center: [-67.18501610542413, 17.995686117746533],
    offsets: [
      { bearing: 21.87082327642646, distance: 1.6366408239982935 },
      { bearing: 28.088703018853675, distance: 1.6033103959759787 },
      { bearing: 32.38958441681723, distance: 1.460098578680005 },
      { bearing: 44.717001971804336, distance: 1.5179719860996457 },
      { bearing: 58.77928239455401, distance: 1.2754884036234246 },
      { bearing: 68.15714784100966, distance: 2.057658730283559 },
      { bearing: 65.69685867438346, distance: 2.0807013535685406 },
      { bearing: 65.50226794011809, distance: 2.1637017136350125 },
      { bearing: 68.97731861640989, distance: 2.153090951043189 },
      { bearing: 68.96464194566693, distance: 2.0633233365731374 },
      { bearing: 74.3683682051162, distance: 2.0327943860976103 },
      { bearing: 75.71889696700183, distance: 2.3033608071119236 },
      { bearing: 81.69227614477535, distance: 2.283399478593791 },
      { bearing: 84.75444524949873, distance: 1.9453702546568947 },
      { bearing: 92.18381107755552, distance: 2.002242030949074 },
      { bearing: 90.96338461642233, distance: 2.1077372487764356 },
      { bearing: 106.81664949387098, distance: 2.232477144307537 },
      { bearing: 109.19586396753782, distance: 2.1162446705619304 },
      { bearing: 102.11531836186558, distance: 2.039439906291722 },
      { bearing: 103.611439444272, distance: 1.9442359255618953 },
      { bearing: 94.96093067677104, distance: 1.9058185069394453 },
      { bearing: 97.16327425409916, distance: 1.8312842680082861 },
      { bearing: 95.9763136663271, distance: 1.4960691949374845 },
      { bearing: 104.32975551911508, distance: 1.4912337048704833 },
      { bearing: 104.97744355257511, distance: 1.2701307197282679 },
      { bearing: 97.23595594185292, distance: 1.2368208215299497 },
      { bearing: 113.05642479068538, distance: 1.0178176924955644 },
      { bearing: 118.39870328097523, distance: 0.8763108938004205 },
      { bearing: 115.58949597020678, distance: 0.7968165682599669 },
      { bearing: 123.8570736427784, distance: 0.5648086747498999 },
      { bearing: 134.59344563774619, distance: 0.6841569855048122 },
      { bearing: 153.35920309610222, distance: 0.5449994395703213 },
      { bearing: 120.69114828098645, distance: 0.30528666636176344 },
      { bearing: 60.11925991232555, distance: 0.06984346533370642 },
      { bearing: -128.6661513039856, distance: 0.24213852762119925 },
      { bearing: -169.57828519335933, distance: 1.409056421880179 },
      { bearing: -148.04764136767582, distance: 1.2320630517949394 },
      { bearing: -108.51553606206006, distance: 0.8479330097266878 },
      { bearing: -106.4860789242716, distance: 0.9568439217215997 },
      { bearing: -111.02756670989216, distance: 0.978106082963186 },
      { bearing: -114.44975333538213, distance: 1.1275574243503772 },
      { bearing: -111.79423289844641, distance: 1.3180880992912318 },
      { bearing: -123.89344344388827, distance: 1.4717044460500788 },
      { bearing: -114.99839547509218, distance: 1.5231595655479775 },
      { bearing: -117.35176413554291, distance: 1.6232211209925829 },
      { bearing: -111.60095013493142, distance: 1.6189797183030874 },
      { bearing: -110.52730720604154, distance: 1.4861716101659466 },
      { bearing: -105.69212997035153, distance: 1.490467287545175 },
      { bearing: -103.90313310911377, distance: 1.6021248972109432 },
      { bearing: -106.12492213104474, distance: 1.7700703521472494 },
      { bearing: -108.32120895620483, distance: 1.96814161504186 },
      { bearing: -107.25078285947448, distance: 2.23915734809553 },
      { bearing: -103.31356844371852, distance: 2.44000672053958 },
      { bearing: -101.99441956454547, distance: 2.8891075710024716 },
      { bearing: -98.3878869169426, distance: 2.9024397328183587 },
      { bearing: -97.57355145585426, distance: 2.8508693628182997 },
      { bearing: -95.98847606113827, distance: 2.905384668340419 },
      { bearing: -93.45619518212854, distance: 2.7697366719438765 },
      { bearing: -85.82816147892416, distance: 2.5080630016423635 },
      { bearing: -77.08387673994078, distance: 2.1053459306285394 },
      { bearing: -76.18904139794715, distance: 1.93324150194771 },
      { bearing: -68.36063850505825, distance: 1.7560167087151988 },
      { bearing: -53.69386220374929, distance: 1.3158728267718685 },
      { bearing: -33.13974123295108, distance: 1.1635149878247637 },
      { bearing: -12.05225782982662, distance: 1.2096736436549413 },
    ],
  },
];
const SHAPE_STYLE = {
  color: "#0b7d77",
  fillColor: "#23a59d",
  fillOpacity: 0.28,
  opacity: 0.95,
  weight: 3,
};
const MAX_VISIBLE_SHAPES = 10;
const SHAPE_COLORS = [
  { color: "#0b7d77", fillColor: "#23a59d" },
  { color: "#b85f28", fillColor: "#f08a45" },
  { color: "#4c63b6", fillColor: "#7793f5" },
  { color: "#7a3b8f", fillColor: "#b86ad2" },
  { color: "#4f7c16", fillColor: "#8bc34a" },
  { color: "#a32145", fillColor: "#e65b7d" },
  { color: "#0f6aa8", fillColor: "#56a9e8" },
  { color: "#8a6a00", fillColor: "#d6ad21" },
  { color: "#5b4b3b", fillColor: "#a98c70" },
  { color: "#2d6f5f", fillColor: "#63b7a4" },
];

const map = L.map("map", {
  center: PR_CENTER,
  maxBounds: MAP_DRAG_BOUNDS,
  maxBoundsViscosity: 0.85,
  minZoom: 8,
  zoom: 9,
  zoomControl: false,
});

L.control.zoom({ position: "topright" }).addTo(map);
map.fitBounds(PR_BOUNDS, { padding: [24, 24] });

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawOptions = {
  allowIntersection: false,
  drawError: {
    color: "#b85f28",
    message: "Shape edges cannot cross.",
  },
  shapeOptions: SHAPE_STYLE,
  showArea: true,
};
const polygonDrawer = new L.Draw.Polygon(map, drawOptions);

const savedList = document.querySelector("#saved-shapes");
const presetList = document.querySelector("#preset-shapes");
const municipalityList = document.querySelector("#municipality-shapes");
const statusBox = document.querySelector("#map-status");
const areaBox = document.querySelector("#shape-area");
const perimeterBox = document.querySelector("#shape-perimeter");
const fitButton = document.querySelector("#fit-pr");
const clearActiveButton = document.querySelector("#clear-active");
const clearSavedButton = document.querySelector("#clear-saved");
const clearMunicipalitiesButton = document.querySelector("#clear-municipalities");
const clearPresetsButton = document.querySelector("#clear-presets");
const drawCustomButton = document.querySelector("#draw-custom");
const customDrawIdle = document.querySelector("#custom-draw-idle");
const customDrawActive = document.querySelector("#custom-draw-active");
const finishCustomButton = document.querySelector("#finish-custom");
const undoCustomButton = document.querySelector("#undo-custom");
const cancelCustomButton = document.querySelector("#cancel-custom");

let activeLayer = null;
let activeShape = null;
let dragStart = null;
let activePointerId = null;
let visibleOrder = [];
let isDrawingCustomShape = false;
let municipalityShapes = [];
const visibleShapes = new Map();

function polygonFromLatLngs(latlngs) {
  const ring = latlngs.map((point) => [point.lng, point.lat]);
  const first = ring[0];
  const last = ring[ring.length - 1];

  if (!first || !last) {
    return null;
  }

  if (first[0] !== last[0] || first[1] !== last[1]) {
    ring.push([...first]);
  }

  return turf.polygon([ring]);
}

function latLngsFromFeature(feature) {
  if (feature.geometry.type === "MultiPolygon") {
    return feature.geometry.coordinates.map((polygon) => {
      return polygon[0].slice(0, -1).map(([lng, lat]) => L.latLng(lat, lng));
    });
  }

  return feature.geometry.coordinates[0].slice(0, -1).map(([lng, lat]) => L.latLng(lat, lng));
}

function compactShapeFromLayer(layer, name = null) {
  const latlngs = layer.getLatLngs()[0];
  const polygon = polygonFromLatLngs(latlngs);

  if (!polygon) {
    return null;
  }

  const center = turf.centroid(polygon).geometry.coordinates;
  const offsets = polygon.geometry.coordinates[0].slice(0, -1).map(([lng, lat]) => {
    const vertex = turf.point([lng, lat]);
    return {
      bearing: turf.bearing(turf.point(center), vertex),
      distance: turf.distance(turf.point(center), vertex, { units: "kilometers" }),
    };
  });

  return {
    id: crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: name || `Shape ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`,
    createdAt: Date.now(),
    center,
    offsets,
    area: turf.area(polygon),
    perimeter: turf.length(polygon, { units: "kilometers" }),
  };
}

function featureFromShape(shape, center = shape.center) {
  const centerPoint = turf.point(center);

  if (shape.parts) {
    const polygons = shape.parts.map((part) => {
      const ring = part.offsets.map((offset) => {
        return turf.destination(centerPoint, offset.distance, offset.bearing, { units: "kilometers" }).geometry.coordinates;
      });
      ring.push([...ring[0]]);
      return [ring];
    });

    return turf.multiPolygon(polygons);
  }

  const ring = shape.offsets.map((offset) => {
    return turf.destination(centerPoint, offset.distance, offset.bearing, { units: "kilometers" }).geometry.coordinates;
  });

  ring.push([...ring[0]]);
  return turf.polygon([ring]);
}

function shapeWithMetrics(shape) {
  if (Number.isFinite(shape.area) && Number.isFinite(shape.perimeter)) {
    return shape;
  }

  const feature = featureFromShape(shape);
  return {
    ...shape,
    area: turf.area(feature),
    perimeter: turf.length(feature, { units: "kilometers" }),
  };
}

function readShapes(key) {
  try {
    const shapes = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(shapes) ? shapes.map(shapeWithMetrics) : [];
  } catch {
    return [];
  }
}

function readSavedShapes() {
  return readShapes(STORAGE_KEY);
}

function shapeSignature(shape) {
  const source = shape.parts || [{ offsets: shape.offsets || [] }];
  return JSON.stringify({
    name: shape.name,
    parts: source.map((part) => part.offsets.map((offset) => [
      Math.round(offset.bearing * 1000),
      Math.round(offset.distance * 1000),
    ])),
  });
}

function readPresetShapes() {
  const builtIns = BUILT_IN_PRESETS.map(shapeWithMetrics);
  const builtInIds = new Set(builtIns.map((shape) => shape.id));
  const seen = new Set(builtIns.map(shapeSignature));
  const userPresets = readShapes(PRESET_STORAGE_KEY).filter((shape) => {
    if (builtInIds.has(shape.id)) {
      return false;
    }

    const signature = shapeSignature(shape);
    if (seen.has(signature)) {
      return false;
    }

    seen.add(signature);
    return true;
  });

  return [...builtIns, ...userPresets];
}

function writeSavedShapes(shapes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shapes.slice(0, 10)));
  renderVisibleShapeLists();
}

function writePresetShapes(shapes) {
  const userPresets = shapes.filter((shape) => !BUILT_IN_PRESETS.some((preset) => preset.id === shape.id));
  localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(userPresets));
  renderPresetShapes();
}

function saveShape(shape) {
  const shapes = readSavedShapes().filter((saved) => saved.id !== shape.id);
  writeSavedShapes([shape, ...shapes].slice(0, 10));
}

function savePreset(shape) {
  const presets = readPresetShapes();
  const preset = {
    ...shape,
    id: crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: shape.name.startsWith("Preset") ? shape.name : `Preset ${presets.length + 1}`,
    presetAt: Date.now(),
  };
  writePresetShapes([preset, ...presets]);
  return preset;
}

function formatArea(squareMeters) {
  if (!Number.isFinite(squareMeters)) {
    return "None";
  }

  const squareKm = squareMeters / 1_000_000;
  return squareKm >= 1 ? `${squareKm.toFixed(2)} km2` : `${Math.round(squareMeters).toLocaleString()} m2`;
}

function formatDistance(kilometers) {
  if (!Number.isFinite(kilometers)) {
    return "None";
  }

  return kilometers >= 1 ? `${kilometers.toFixed(2)} km` : `${Math.round(kilometers * 1000).toLocaleString()} m`;
}

function setStatus(message) {
  statusBox.textContent = message;
}

function updateStats(shape) {
  areaBox.textContent = shape ? formatArea(shape.area) : "None";
  perimeterBox.textContent = shape ? formatDistance(shape.perimeter) : "None";
}

function styleForVisibleIndex(index) {
  return {
    ...SHAPE_STYLE,
    ...SHAPE_COLORS[index % SHAPE_COLORS.length],
  };
}

function restyleVisibleShapes() {
  visibleOrder.forEach((shapeId, index) => {
    const entry = visibleShapes.get(shapeId);
    if (entry) {
      entry.layer.setStyle(styleForVisibleIndex(index));
    }
  });
}

function clearAllVisibleShapes() {
  visibleShapes.forEach((entry) => drawnItems.removeLayer(entry.layer));
  visibleShapes.clear();
  visibleOrder = [];
  activeLayer = null;
  activeShape = null;
  dragStart = null;
  activePointerId = null;
  updateStats(null);
  renderVisibleShapeLists();
}

function clearActiveShape() {
  if (activeShape && visibleShapes.has(activeShape.id)) {
    const entry = visibleShapes.get(activeShape.id);
    drawnItems.removeLayer(entry.layer);
    visibleShapes.delete(activeShape.id);
    visibleOrder = visibleOrder.filter((shapeId) => shapeId !== activeShape.id);
    restyleVisibleShapes();
  }

  activeLayer = null;
  activeShape = null;
  dragStart = null;
  activePointerId = null;
  updateStats(null);
  renderVisibleShapeLists();
}

function setActiveShape(shape, shouldFit = false) {
  const normalizedShape = shapeWithMetrics({ ...shape, center: [...shape.center] });

  if (visibleShapes.has(normalizedShape.id)) {
    const entry = visibleShapes.get(normalizedShape.id);
    activeLayer = entry.layer;
    activeShape = entry.shape;
    updateStats(activeShape);

    if (shouldFit) {
      map.fitBounds(activeLayer.getBounds(), { maxZoom: 13, padding: [40, 40] });
    }
    renderVisibleShapeLists();
    return;
  }

  if (visibleOrder.length >= MAX_VISIBLE_SHAPES) {
    const removedId = visibleOrder.shift();
    const removed = visibleShapes.get(removedId);
    if (removed) {
      drawnItems.removeLayer(removed.layer);
      visibleShapes.delete(removedId);
    }
  }

  const feature = featureFromShape(normalizedShape);
  const layer = L.polygon(latLngsFromFeature(feature), styleForVisibleIndex(visibleOrder.length));
  layer.addTo(drawnItems);
  layer.getElement()?.classList.add("active-shape");

  activeLayer = layer;
  activeShape = normalizedShape;
  visibleShapes.set(normalizedShape.id, { layer, shape: normalizedShape });
  visibleOrder.push(normalizedShape.id);
  enableShapeDragging(layer, normalizedShape.id);
  updateStats(activeShape);
  renderVisibleShapeLists();

  if (shouldFit) {
    map.fitBounds(layer.getBounds(), { maxZoom: 13, padding: [40, 40] });
  }
}

function toggleShapeVisibility(shape) {
  if (visibleShapes.has(shape.id)) {
    const entry = visibleShapes.get(shape.id);
    drawnItems.removeLayer(entry.layer);
    visibleShapes.delete(shape.id);
    visibleOrder = visibleOrder.filter((shapeId) => shapeId !== shape.id);

    if (activeShape?.id === shape.id) {
      activeShape = null;
      activeLayer = null;
      updateStats(null);
    }

    restyleVisibleShapes();
    renderVisibleShapeLists();
    setStatus("Shape hidden.");
    return;
  }

  setActiveShape(shape, true);
  setStatus("Shape shown. Drag it around the map.");
}

function enableShapeDragging(layer, shapeId) {
  const element = layer.getElement();
  if (element) {
    element.addEventListener("pointerdown", (event) => startShapeDrag(event, shapeId), { capture: true });
  }

  layer.on("mousedown", (event) => {
    if (dragStart) {
      return;
    }

    beginShapeDrag(event.latlng, shapeId);
    L.DomEvent.stop(event);
  });
}

function startShapeDrag(event, shapeId) {
  const entry = visibleShapes.get(shapeId);
  if (!entry) {
    return;
  }

  const containerPoint = map.mouseEventToContainerPoint(event);
  const latlng = map.containerPointToLatLng(containerPoint);

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  activePointerId = event.pointerId;
  event.currentTarget.setPointerCapture?.(event.pointerId);
  beginShapeDrag(latlng, shapeId);
}

function beginShapeDrag(latlng, shapeId) {
  const entry = visibleShapes.get(shapeId);
  if (!entry) {
    return;
  }

  activeShape = entry.shape;
  activeLayer = entry.layer;
  updateStats(activeShape);
  dragStart = {
    shapeId,
    mouse: latlng,
    center: [...activeShape.center],
  };
  map.dragging.disable();
  map.getContainer().classList.add("dragging-shape");
}

function moveActiveShape(pointerLatLng) {
  if (!dragStart) {
    return;
  }

  const entry = visibleShapes.get(dragStart.shapeId);
  if (!entry) {
    return;
  }

  activeShape = entry.shape;
  activeLayer = entry.layer;

  const startPoint = turf.point([dragStart.mouse.lng, dragStart.mouse.lat]);
  const pointerPoint = turf.point([pointerLatLng.lng, pointerLatLng.lat]);
  const distance = turf.distance(startPoint, pointerPoint, { units: "kilometers" });
  const bearing = turf.bearing(startPoint, pointerPoint);
  const movedCenter = turf.destination(turf.point(dragStart.center), distance, bearing, { units: "kilometers" }).geometry.coordinates;
  const movedFeature = featureFromShape(activeShape, movedCenter);

  activeShape.center = movedCenter;
  activeLayer.setLatLngs(latLngsFromFeature(movedFeature));
  updateStats(activeShape);
}

function finishDrag() {
  if (!dragStart) {
    return;
  }

  dragStart = null;
  activePointerId = null;
  map.dragging.enable();
  map.getContainer().classList.remove("dragging-shape");

  if (activeShape) {
    visibleShapes.set(activeShape.id, { layer: activeLayer, shape: activeShape });
    renderVisibleShapeLists();
    setStatus("Shape moved. Toggle the eye off and on to return it to its saved position.");
  }
}

function renderShapeList(container, shapes, emptyText, options = {}) {
  const { onDelete, onSelect, showDelete = false, showVisibilityToggle = false } = options;
  container.innerHTML = "";
  if (shapes.length === 0) {
    const empty = document.createElement("div");
    empty.className = "saved-empty";
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }

  shapes.forEach((shape, index) => {
    const button = document.createElement("button");
    button.className = "shape-button";
    button.type = "button";

    const label = document.createElement("span");
    const name = document.createElement("strong");
    const meta = document.createElement("span");
    const actions = document.createElement("span");

    name.textContent = shape.name;
    meta.textContent = `${formatArea(shape.area)} · ${formatDistance(shape.perimeter)}`;
    actions.className = "shape-actions";

    label.append(name, meta);

    if (showVisibilityToggle) {
      const eyeButton = document.createElement("button");
      const isVisible = visibleShapes.has(shape.id);
      eyeButton.className = "icon-button";
      eyeButton.type = "button";
      eyeButton.title = isVisible ? "Hide shape" : "Show shape";
      eyeButton.setAttribute("aria-label", isVisible ? `Hide ${shape.name}` : `Show ${shape.name}`);
      eyeButton.classList.toggle("is-on", isVisible);
      eyeButton.dataset.visible = String(isVisible);
      eyeButton.append(document.createElement("span"));
      eyeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleShapeVisibility(shape);
      });
      actions.append(eyeButton);
      button.classList.toggle("is-visible", isVisible);
    }

    if (showDelete) {
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.type = "button";
      deleteButton.title = "Delete custom shape";
      deleteButton.setAttribute("aria-label", "Delete " + shape.name);
      deleteButton.textContent = "x";
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        onDelete?.(shape);
      });
      actions.append(deleteButton);
    }

    button.append(label, actions);
    button.addEventListener("click", () => {
      onSelect?.(shape);
    });
    container.append(button);
  });
}

function deleteCustomShape(shape) {
  const entry = visibleShapes.get(shape.id);
  if (entry) {
    drawnItems.removeLayer(entry.layer);
    visibleShapes.delete(shape.id);
    visibleOrder = visibleOrder.filter((shapeId) => shapeId !== shape.id);
  }

  if (activeShape?.id === shape.id) {
    activeShape = null;
    activeLayer = null;
    updateStats(null);
  }

  writeSavedShapes(readSavedShapes().filter((savedShape) => savedShape.id !== shape.id));
  restyleVisibleShapes();
  setStatus("Custom shape deleted.");
}

function renderSavedShapes() {
  renderShapeList(savedList, readSavedShapes(), "Click New custom shape to draw one.", {
    showDelete: true,
    showVisibilityToggle: true,
    onDelete: deleteCustomShape,
    onSelect: (shape) => {
      setActiveShape(shape, true);
      setStatus("Custom shape shown. Up to 10 shapes can be visible at once.");
    },
  });
}

function renderMunicipalityShapes() {
  renderShapeList(municipalityList, municipalityShapes, "Loading municipalities...", {
    showVisibilityToggle: true,
    onSelect: (shape) => {
      setActiveShape(shape, true);
      setStatus(shape.name + " shown. Up to 10 shapes can be visible at once.");
    },
  });
}

function renderVisibleShapeLists() {
  renderSavedShapes();
  renderPresetShapes();
  renderMunicipalityShapes();
}

async function loadMunicipalities() {
  try {
    const response = await fetch("./municipalities.json");
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    const data = await response.json();
    municipalityShapes = data.municipalities.map(shapeWithMetrics);
    renderMunicipalityShapes();
  } catch (error) {
    municipalityList.innerHTML = "";
    const empty = document.createElement("div");
    empty.className = "saved-empty";
    empty.textContent = "Municipalities could not be loaded.";
    municipalityList.append(empty);
    console.error(error);
  }
}

function renderPresetShapes() {
  renderShapeList(presetList, readPresetShapes(), "No presets available.", {
    showVisibilityToggle: true,
    onSelect: (shape) => {
      setActiveShape(shape, true);
      setStatus("Preset shown. Up to 10 shapes can be visible at once.");
    },
  });
}

function seedPresetsFromRecentShape() {
  if (readPresetShapes().length > 0) {
    return;
  }

  const [latestShape] = readSavedShapes();
  if (latestShape) {
    savePreset({ ...latestShape, name: "Preset 1" });
    setStatus("Your latest saved shape was added as a preset.");
  }
}

function setCustomDrawingMode(isDrawing) {
  isDrawingCustomShape = isDrawing;
  customDrawIdle.classList.toggle("is-hidden", isDrawing);
  customDrawActive.classList.toggle("is-hidden", !isDrawing);
}

function finishCustomDrawing() {
  if (!isDrawingCustomShape) {
    return;
  }

  polygonDrawer.completeShape?.();
}

function cancelCustomDrawing() {
  if (!isDrawingCustomShape) {
    return;
  }

  polygonDrawer.disable();
  setCustomDrawingMode(false);
  setStatus("Custom shape drawing cancelled.");
}

function undoCustomDrawingPoint() {
  if (!isDrawingCustomShape) {
    return;
  }

  polygonDrawer.deleteLastVertex?.();
}

map.on(L.Draw.Event.CREATED, (event) => {
  const layer = event.layer;
  layer.setStyle(SHAPE_STYLE);
  const shape = compactShapeFromLayer(layer);

  if (!shape) {
    return;
  }

  setActiveShape(shape);
  saveShape(shape);
  setCustomDrawingMode(false);
  setStatus("Shape saved. Drag it to compare size across the island.");
});

map.on(L.Draw.Event.DRAWSTOP, () => {
  setCustomDrawingMode(false);
});

map.on("mousemove", (event) => moveActiveShape(event.latlng));
map.on("mouseup", finishDrag);
map.on("mouseout", finishDrag);

map.getContainer().addEventListener("pointermove", (event) => {
  if (!dragStart || (activePointerId !== null && event.pointerId !== activePointerId)) {
    return;
  }

  event.preventDefault();
  const containerPoint = map.mouseEventToContainerPoint(event);
  moveActiveShape(map.containerPointToLatLng(containerPoint));
});

map.getContainer().addEventListener("pointerup", (event) => {
  if (activePointerId !== null && event.pointerId !== activePointerId) {
    return;
  }

  event.preventDefault();
  finishDrag();
});

map.getContainer().addEventListener("pointercancel", finishDrag);

document.addEventListener("click", (event) => {
  if (!isDrawingCustomShape) {
    return;
  }

  const clickedButton = event.target.closest("button");
  if (!clickedButton || customDrawActive.contains(clickedButton)) {
    return;
  }

  cancelCustomDrawing();
}, true);

fitButton.addEventListener("click", () => {
  map.fitBounds(PR_BOUNDS, { padding: [24, 24] });
});

clearActiveButton.addEventListener("click", () => {
  clearAllVisibleShapes();
  setStatus("All visible shapes cleared.");
});

clearSavedButton.addEventListener("click", () => {
  const customIds = new Set(readSavedShapes().map((shape) => shape.id));
  visibleOrder = visibleOrder.filter((shapeId) => {
    if (!customIds.has(shapeId)) {
      return true;
    }

    const entry = visibleShapes.get(shapeId);
    if (entry) {
      drawnItems.removeLayer(entry.layer);
      visibleShapes.delete(shapeId);
    }

    if (activeShape?.id === shapeId) {
      activeShape = null;
      activeLayer = null;
      updateStats(null);
    }

    return false;
  });
  restyleVisibleShapes();
  renderVisibleShapeLists();
  setStatus("Custom shapes cleared from the map.");
});

clearMunicipalitiesButton.addEventListener("click", () => {
  const municipalityIds = new Set(municipalityShapes.map((shape) => shape.id));
  visibleOrder = visibleOrder.filter((shapeId) => {
    if (!municipalityIds.has(shapeId)) {
      return true;
    }

    const entry = visibleShapes.get(shapeId);
    if (entry) {
      drawnItems.removeLayer(entry.layer);
      visibleShapes.delete(shapeId);
    }

    if (activeShape?.id === shapeId) {
      activeShape = null;
      activeLayer = null;
      updateStats(null);
    }

    return false;
  });
  restyleVisibleShapes();
  renderVisibleShapeLists();
  setStatus("Municipality shapes cleared.");
});

clearPresetsButton.addEventListener("click", () => {
  const presetIds = new Set(readPresetShapes().map((shape) => shape.id));
  visibleOrder = visibleOrder.filter((shapeId) => {
    if (!presetIds.has(shapeId)) {
      return true;
    }

    const entry = visibleShapes.get(shapeId);
    if (entry) {
      drawnItems.removeLayer(entry.layer);
      visibleShapes.delete(shapeId);
    }

    if (activeShape?.id === shapeId) {
      activeShape = null;
      activeLayer = null;
      updateStats(null);
    }

    return false;
  });
  restyleVisibleShapes();
  renderPresetShapes();
  renderVisibleShapeLists();
  setStatus("Preset shapes cleared.");
});

drawCustomButton.addEventListener("click", () => {
  polygonDrawer.enable();
  setCustomDrawingMode(true);
  setStatus("Click points on the map to draw a custom shape.");
});

finishCustomButton.addEventListener("click", finishCustomDrawing);
undoCustomButton.addEventListener("click", undoCustomDrawingPoint);
cancelCustomButton.addEventListener("click", cancelCustomDrawing);

localStorage.removeItem(PRESET_STORAGE_KEY);
renderVisibleShapeLists();
loadMunicipalities();
updateStats(null);
