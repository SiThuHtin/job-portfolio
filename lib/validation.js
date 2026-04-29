const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

const normalizeString = (value) => (typeof value === "string" ? value.trim() : "");

const isValidUrl = (value) => {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
};

const isInteger = (value) => Number.isInteger(value);

export function validatePostPayload(payload) {
    const title = normalizeString(payload?.title);
    const summary = normalizeString(payload?.summary);
    const content = normalizeString(payload?.content);
    const category = normalizeString(payload?.category || "General");
    const readTime = normalizeString(payload?.readTime || "5 min read");

    if (!isNonEmptyString(title)) {
        return { ok: false, message: "Title is required" };
    }
    if (!isNonEmptyString(summary)) {
        return { ok: false, message: "Summary is required" };
    }
    if (!isNonEmptyString(content)) {
        return { ok: false, message: "Content is required" };
    }
    if (!isNonEmptyString(category)) {
        return { ok: false, message: "Category is required" };
    }
    if (title.length > 150) {
        return { ok: false, message: "Title must be 150 characters or fewer" };
    }
    if (summary.length > 300) {
        return { ok: false, message: "Summary must be 300 characters or fewer" };
    }
    if (content.length > 50000) {
        return { ok: false, message: "Content must be 50000 characters or fewer" };
    }
    if (category.length > 50) {
        return { ok: false, message: "Category must be 50 characters or fewer" };
    }
    if (readTime.length > 30) {
        return { ok: false, message: "Read time must be 30 characters or fewer" };
    }

    return {
        ok: true,
        data: { title, summary, content, category, readTime },
    };
}

export function validateProjectPayload(payload) {
    const title = normalizeString(payload?.title);
    const description = normalizeString(payload?.description);
    const imageUrl = normalizeString(payload?.imageUrl);
    const projectUrl = normalizeString(payload?.projectUrl);
    const rawOrder = payload?.order;
    const order = typeof rawOrder === "string" && rawOrder.trim() !== "" ? Number(rawOrder) : Number(rawOrder ?? 0);

    if (!isNonEmptyString(title)) {
        return { ok: false, message: "Title is required" };
    }
    if (!isNonEmptyString(description)) {
        return { ok: false, message: "Description is required" };
    }
    if (!isNonEmptyString(imageUrl)) {
        return { ok: false, message: "Image URL is required" };
    }
    if (!isNonEmptyString(projectUrl)) {
        return { ok: false, message: "Project URL is required" };
    }
    if (!isValidUrl(imageUrl)) {
        return { ok: false, message: "Image URL must be a valid http or https URL" };
    }
    if (!isValidUrl(projectUrl)) {
        return { ok: false, message: "Project URL must be a valid http or https URL" };
    }
    if (!Number.isFinite(order) || !isInteger(order)) {
        return { ok: false, message: "Sort order must be an integer" };
    }
    if (title.length > 150) {
        return { ok: false, message: "Title must be 150 characters or fewer" };
    }
    if (description.length > 1000) {
        return { ok: false, message: "Description must be 1000 characters or fewer" };
    }

    return {
        ok: true,
        data: { title, description, imageUrl, projectUrl, order },
    };
}
