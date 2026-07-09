const STORAGE_KEY = "practice-tracker-practices";

function readPractices() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writePractices(practices) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(practices));
}

export function getPractices() {
  return Promise.resolve(readPractices());
}

export function addPractice(practiceData) {
  const practices = readPractices();
  const practice = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    ...practiceData,
  };
  practices.push(practice);
  writePractices(practices);
  return Promise.resolve(practice);
}

export function deletePractice(id) {
  const practices = readPractices().filter((practice) => practice.id !== id);
  writePractices(practices);
  return Promise.resolve();
}
