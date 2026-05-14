import { supabase } from "@/lib/supabase";

import {
  useState,
  useRef,
  useMemo,
  useEffect,
  type FormEvent,
  type ChangeEvent,
} from "react";
import {
  Lock,
  Plus,
  Tag,
  X,
  Sparkles,
  CheckCircle2,
  Paperclip,
  FileText,
  Download,
  Upload,
  Pencil,
  Trash2,
  Eye,
  Save,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
} from "lucide-react";

type TugasFile = {
  name: string;
  type: string;
  size: number;
  dataUrl: string; // bisa base64 (pending) atau URL publik Supabase
};

type Tugas = {
  id: string;
  judul: string;
  tags: string[];
  deskripsi: string;
  files: TugasFile[];
};

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// Upload satu file ke Supabase Storage, kembalikan URL publik
async function uploadFileToSupabase(file: TugasFile): Promise<string> {
  const response = await fetch(file.dataUrl);
  const blob = await response.blob();
  const fileName = `${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from("tugas-files")
    .upload(fileName, blob, { contentType: file.type });

  if (uploadError) throw uploadError;

  return (
    `${import.meta.env.VITE_SUPABASE_URL}` +
    `/storage/v1/object/public/tugas-files/${fileName}`
  );
}

export function TugasAI() {
  const [tasks, setTasks] = useState<Tugas[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");

  // Form state (dipakai untuk tambah & edit)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [judul, setJudul] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [pendingFiles, setPendingFiles] = useState<TugasFile[]>([]);
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [viewFile, setViewFile] = useState<TugasFile | null>(null);
  const [zoom, setZoom] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    tasks.forEach((t) => t.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return tasks.filter((t) => {
      const matchQuery =
        !q ||
        t.judul.toLowerCase().includes(q) ||
        t.deskripsi.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q));
      const matchTags =
        activeTags.length === 0 ||
        activeTags.every((tag) => t.tags.includes(tag));
      return matchQuery && matchTags;
    });
  }, [tasks, searchQuery, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // ── Fetch tugas dari Supabase ──────────────────────────────────────────────
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("tugas")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      const formatted: Tugas[] = data.map((item) => ({
        id: item.id,
        judul: item.title,
        // tags disimpan sebagai array teks di Supabase (kolom tags text[])
        tags: Array.isArray(item.tags) ? item.tags : [],
        deskripsi: item.description || "",
        // Satu file per tugas; jika ada file_url, tampilkan sebagai lampiran
        files: item.file_url
          ? [
              {
                name: item.file_name || "File Tugas",
                type: item.file_type || "application/octet-stream",
                size: item.file_size || 0,
                dataUrl: item.file_url, // URL publik Supabase Storage
              },
            ]
          : [],
      }));

      setTasks(formatted);
    };

    fetchTasks();
  }, []);

  // ── Reset zoom & fullscreen setiap kali file preview berubah ──────────────
  useEffect(() => {
    if (viewFile) {
      setZoom(1);
      setFullscreen(false);
    }
  }, [viewFile]);

  // ── Keyboard shortcuts di modal preview ───────────────────────────────────
  useEffect(() => {
    if (!viewFile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewFile(null);
      if (e.key === "+" || e.key === "=")
        setZoom((z) => Math.min(3, +(z + 0.1).toFixed(2)));
      if (e.key === "-")
        setZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(2)));
      if (e.key === "0") setZoom(1);
      if (e.key.toLowerCase() === "f") setFullscreen((f) => !f);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewFile]);

  // ── PIN ───────────────────────────────────────────────────────────────────
  const handlePinSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pin === "1234") {
      setIsAdmin(true);
      setShowPin(false);
      setPin("");
      setPinError("");
    } else {
      setPinError("PIN salah, coba lagi.");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setJudul("");
    setTagsInput("");
    setDeskripsi("");
    setPendingFiles([]);
  };

  // ── File picker ───────────────────────────────────────────────────────────
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;
    const MAX_SIZE = 5 * 1024 * 1024;
    const newFiles: TugasFile[] = [];
    for (const file of Array.from(fileList)) {
      if (file.size > MAX_SIZE) continue;
      const dataUrl = await readFileAsDataUrl(file);
      newFiles.push({ name: file.name, type: file.type, size: file.size, dataUrl });
    }
    setPendingFiles((prev) => [...prev, ...newFiles]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePendingFile = (idx: number) => {
    setPendingFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // ── Submit (tambah & edit) ────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!judul.trim() || !deskripsi.trim()) return;

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    // Upload file baru jika ada (ambil yang pertama saja)
    // pendingFiles yang berasal dari Supabase (URL publik) tidak perlu di-upload ulang
    let fileUrl = "";
    let fileName = "";
    let fileType = "";
    let fileSize = 0;

    const newFileToUpload = pendingFiles.find((f) =>
      f.dataUrl.startsWith("data:")
    );

    if (newFileToUpload) {
      try {
        fileUrl = await uploadFileToSupabase(newFileToUpload);
        fileName = newFileToUpload.name;
        fileType = newFileToUpload.type;
        fileSize = newFileToUpload.size;
      } catch (err) {
        console.error("Upload gagal:", err);
        return;
      }
    }

    // ── EDIT ──────────────────────────────────────────────────────────────
    if (editingId) {
      const updatePayload: Record<string, unknown> = {
        title: judul.trim(),
        description: deskripsi.trim(),
        tags,
      };

      // Hanya perbarui kolom file jika ada file baru di-upload
      if (fileUrl) {
        updatePayload.file_url = fileUrl;
        updatePayload.file_name = fileName;
        updatePayload.file_type = fileType;
        updatePayload.file_size = fileSize;
      }

      // Jika semua file pending dihapus oleh admin, hapus file lama
      if (pendingFiles.length === 0) {
        updatePayload.file_url = null;
        updatePayload.file_name = null;
        updatePayload.file_type = null;
        updatePayload.file_size = null;
      }

      const { error } = await supabase
        .from("tugas")
        .update(updatePayload)
        .eq("id", editingId);

      if (error) {
        console.error(error);
        return;
      }

      // Perbarui state lokal
      setTasks((prev) =>
        prev.map((t) => {
          if (t.id !== editingId) return t;
          return {
            ...t,
            judul: judul.trim(),
            tags,
            deskripsi: deskripsi.trim(),
            files:
              pendingFiles.length === 0
                ? []
                : fileUrl
                ? [{ name: fileName, type: fileType, size: fileSize, dataUrl: fileUrl }]
                : t.files, // pertahankan file lama jika tidak ada yg baru
          };
        })
      );

      setJustAdded(editingId);
      setTimeout(() => setJustAdded(null), 1500);
      resetForm();
      return;
    }

    // ── TAMBAH ────────────────────────────────────────────────────────────
    const { data, error } = await supabase
      .from("tugas")
      .insert({
        title: judul.trim(),
        description: deskripsi.trim(),
        tags,
        file_url: fileUrl || null,
        file_name: fileName || null,
        file_type: fileType || null,
        file_size: fileSize || null,
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      return;
    }

    const newTask: Tugas = {
      id: data.id,
      judul: data.title,
      tags,
      deskripsi: data.description || "",
      files: fileUrl
        ? [{ name: fileName, type: fileType, size: fileSize, dataUrl: fileUrl }]
        : [],
    };

    setTasks((prev) => [newTask, ...prev]);
    setJustAdded(newTask.id);
    setTimeout(() => setJustAdded(null), 1500);
    resetForm();
  };

  // ── Edit ──────────────────────────────────────────────────────────────────
  const handleEdit = (task: Tugas) => {
    setEditingId(task.id);
    setJudul(task.judul);
    setTagsInput(task.tags.join(", "));
    setDeskripsi(task.deskripsi);
    setPendingFiles(task.files); // tampilkan file existing di form
    const el = document.getElementById("tugas-ai-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── Delete ────────────────────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("tugas").delete().eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    setTasks((prev) => prev.filter((t) => t.id !== id));
    setConfirmDelete(null);
    if (editingId === id) resetForm();
  };

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section id="tugas-ai" className="py-20 md:py-28 relative bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            {/* Tag span atas ditutup dengan benar di sini */}
            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-2">
              Tugas AI
            </span>
            
            {/* Tag h2 berada di bawahnya secara sejajar */}
            <h2 className="mt-3 text-3xl md:text-4xl font-bold flex items-start gap-3">
              <div className="flex flex-col leading-tight">
                <span>Kumpulan Tugas</span>
                <span className="text-gradient-primary">Kecerdasan Buatan</span>
              </div>
              <button
                onClick={() => setShowPin(true)}
                aria-label="Mode admin"
                className="opacity-40 hover:opacity-100 hover:text-primary transition-all"
                title="Admin"
              >
                <Lock className="h-4 w-4" />
              </button>
              {isAdmin && (
                <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                  <Sparkles className="h-3 w-3" /> Admin
                </span>
              )}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Daftar tugas selama perkuliahan. Dosen &amp;
              pengunjung dapat melihat detail dan membuka file lampiran tiap
              tugas.
            </p>
          </div>
        </div>

        {/* ── Admin form ── */}
        <div
          id="tugas-ai-form"
          className={`overflow-hidden transition-all duration-500 ${
            isAdmin ? "max-h-[1200px] opacity-100 mb-8" : "max-h-0 opacity-0"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-primary/30 rounded-3xl p-6 shadow-soft"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                {editingId ? (
                  <>
                    <Pencil className="h-4 w-4 text-primary" />
                    Edit Tugas
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4 text-primary" />
                    Upload Tugas Baru
                  </>
                )}
              </h3>
              <div className="flex items-center gap-3">
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    Batal edit
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => { setIsAdmin(false); resetForm(); }}
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  Keluar mode admin
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul tugas"
                required
                className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
              <input
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Tags (pisahkan dengan koma)"
                className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>
            <textarea
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Deskripsi singkat tugas..."
              required
              rows={3}
              className="mt-4 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
            />

            <div className="mt-4">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="tugas-file-input"
              />
              <label
                htmlFor="tugas-file-input"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-primary/40 bg-primary-soft/40 text-primary text-sm font-medium cursor-pointer hover:bg-primary-soft transition-colors"
              >
                <Upload className="h-4 w-4" />
                Pilih file tugas (maks. 5 MB / file)
              </label>

              {pendingFiles.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {pendingFiles.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-background border border-border text-sm"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="h-4 w-4 text-primary shrink-0" />
                        <span className="truncate">{f.name}</span>
                        {f.size > 0 && (
                          <span className="text-xs text-muted-foreground shrink-0">
                            {formatSize(f.size)}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removePendingFile(idx)}
                        className="text-muted-foreground hover:text-destructive shrink-0"
                        aria-label="Hapus file"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all"
            >
              {editingId ? (
                <>
                  <Save className="h-4 w-4" />
                  Simpan Perubahan
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Tambahkan Tugas
                </>
              )}
            </button>
          </form>
        </div>

        {/* ── Search & filter ── */}
        <div className="mb-6 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul, deskripsi, atau tag..."
              className="w-full pl-11 pr-11 py-3 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 grid place-items-center rounded-full hover:bg-muted text-muted-foreground"
                aria-label="Bersihkan pencarian"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {allTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground mr-1">
                Filter tag:
              </span>
              {allTags.map((tag) => {
                const active = activeTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium transition-all ${
                      active
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-primary-soft text-primary hover:bg-primary/20"
                    }`}
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </button>
                );
              })}
              {activeTags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTags([])}
                  className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2"
                >
                  Reset
                </button>
              )}
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            Menampilkan {filteredTasks.length} dari {tasks.length} tugas
          </p>
        </div>

        {/* ── Grid ── */}
        {filteredTasks.length === 0 ? (
          <div className="bg-card border border-dashed border-border rounded-2xl p-12 text-center">
            <Search className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="font-medium">Tidak ada tugas yang cocok</p>
            <p className="text-sm text-muted-foreground mt-1">
              Coba ubah kata kunci atau hapus filter tag.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTasks.map((t) => (
              <article
                key={t.id}
                className={`group bg-card border border-border rounded-2xl p-6 shadow-soft hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 ${
                  justAdded === t.id ? "ring-2 ring-primary animate-fade-in-up" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                    {t.judul}
                  </h3>
                  {justAdded === t.id && (
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary-soft text-primary font-medium"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.deskripsi}
                </p>

                {t.files.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-2">
                      <Paperclip className="h-3.5 w-3.5" />
                      {t.files.length} file terlampir
                    </div>
                    <ul className="space-y-1.5">
                      {t.files.map((f, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-primary-soft/50 hover:bg-primary-soft text-sm transition-colors"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <FileText className="h-4 w-4 text-primary shrink-0" />
                            <span className="truncate">{f.name}</span>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => setViewFile(f)}
                              className="h-7 w-7 grid place-items-center rounded-md text-primary hover:bg-primary/10 transition-colors"
                              title="Lihat file"
                              aria-label="Lihat file"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            {/* Download: gunakan URL publik Supabase langsung */}
                            <a
                              href={f.dataUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              download={f.name}
                              className="h-7 w-7 grid place-items-center rounded-md text-primary hover:bg-primary/10 transition-colors"
                              title="Unduh file"
                              aria-label="Unduh file"
                            >
                              <Download className="h-4 w-4" />
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isAdmin && (
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(t)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmDelete(t.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-medium hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Hapus
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>

      {/* ── PIN Modal ── */}
      {showPin && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-foreground/40 backdrop-blur-sm p-4 animate-fade-in-up"
          onClick={() => setShowPin(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handlePinSubmit}
            className="w-full max-w-sm bg-card rounded-3xl p-6 shadow-soft border border-border relative"
          >
            <button
              type="button"
              onClick={() => setShowPin(false)}
              className="absolute top-4 right-4 h-8 w-8 grid place-items-center rounded-full hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid place-items-center h-12 w-12 rounded-2xl bg-primary-soft text-primary mb-4">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Mode Admin</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Masukkan PIN untuk mengakses fitur upload, edit &amp; hapus tugas.
            </p>
            <input
              type="password"
              inputMode="numeric"
              autoFocus
              value={pin}
              onChange={(e) => { setPin(e.target.value); setPinError(""); }}
              placeholder="••••"
              className="mt-5 w-full px-4 py-3 rounded-xl bg-background border border-border text-center text-2xl tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
            />
            {pinError && (
              <p className="mt-2 text-sm text-destructive text-center">{pinError}</p>
            )}
            <button
              type="submit"
              className="mt-5 w-full py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all"
            >
              Masuk
            </button>
          </form>
        </div>
      )}

      {/* ── Confirm delete modal ── */}
      {confirmDelete && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-foreground/40 backdrop-blur-sm p-4 animate-fade-in-up"
          onClick={() => setConfirmDelete(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-card rounded-3xl p-6 shadow-soft border border-border"
          >
            <div className="grid place-items-center h-12 w-12 rounded-2xl bg-destructive/10 text-destructive mb-4">
              <Trash2 className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Hapus tugas?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Tugas dan semua file lampirannya akan dihapus. Tindakan ini tidak
              bisa dibatalkan.
            </p>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 rounded-full text-sm font-medium hover:bg-muted transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => handleDelete(confirmDelete)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-destructive text-destructive-foreground hover:opacity-90 transition-opacity"
              >
                Ya, hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── File preview modal ── */}
      {viewFile &&
        (() => {
          const isImage = viewFile.type.startsWith("image/");
          const isPdf = viewFile.type === "application/pdf";
          const isText =
            viewFile.type.startsWith("text/") ||
            viewFile.type === "application/json";
          const canZoom = isImage || isPdf || isText;
          const pdfSrc = isPdf
            ? `${viewFile.dataUrl}#zoom=${Math.round(zoom * 100)}&view=FitH`
            : viewFile.dataUrl;

          return (
            <div
              className="fixed inset-0 z-[60] grid place-items-center bg-foreground/60 backdrop-blur-sm p-4 animate-fade-in-up"
              onClick={() => setViewFile(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-card rounded-3xl shadow-soft border border-border flex flex-col overflow-hidden transition-all duration-300 ${
                  fullscreen
                    ? "w-[98vw] h-[96vh] max-w-none"
                    : "w-full max-w-5xl h-[88vh]"
                }`}
              >
                {/* Toolbar */}
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-border bg-card">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <FileText className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-medium truncate text-sm">
                      {viewFile.name}
                    </span>
                    {viewFile.size > 0 && (
                      <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline">
                        {formatSize(viewFile.size)}
                      </span>
                    )}
                  </div>

                  {canZoom && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted/60 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(2)))
                        }
                        disabled={zoom <= 0.5}
                        className="h-7 w-7 grid place-items-center rounded-full hover:bg-background disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
                        aria-label="Perkecil"
                        title="Perkecil ( - )"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setZoom(1)}
                        className="text-xs font-medium tabular-nums w-12 text-center hover:text-primary"
                        title="Reset zoom (0)"
                      >
                        {Math.round(zoom * 100)}%
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setZoom((z) => Math.min(3, +(z + 0.1).toFixed(2)))
                        }
                        disabled={zoom >= 3}
                        className="h-7 w-7 grid place-items-center rounded-full hover:bg-background disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
                        aria-label="Perbesar"
                        title="Perbesar ( + )"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </button>
                      <span className="w-px h-4 bg-border mx-1" />
                      <button
                        type="button"
                        onClick={() => setZoom(1)}
                        className="h-7 w-7 grid place-items-center rounded-full hover:bg-background text-foreground"
                        aria-label="Reset zoom"
                        title="Reset zoom (0)"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setFullscreen((f) => !f)}
                      className="h-8 w-8 grid place-items-center rounded-full hover:bg-muted text-foreground"
                      aria-label={fullscreen ? "Kecilkan" : "Layar penuh"}
                      title="Layar penuh ( F )"
                    >
                      {fullscreen ? (
                        <Minimize2 className="h-4 w-4" />
                      ) : (
                        <Maximize2 className="h-4 w-4" />
                      )}
                    </button>
                    <a
                      href={viewFile.dataUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={viewFile.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Unduh</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setViewFile(null)}
                      className="h-8 w-8 grid place-items-center rounded-full hover:bg-muted"
                      aria-label="Tutup"
                      title="Tutup ( Esc )"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 bg-muted/30 overflow-auto">
                  {isImage ? (
                    <div className="min-h-full w-full grid place-items-center p-4">
                      <img
                        src={viewFile.dataUrl}
                        alt={viewFile.name}
                        style={{
                          transform: `scale(${zoom})`,
                          transformOrigin: "center center",
                          transition: "transform 0.2s ease",
                        }}
                        className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-soft"
                      />
                    </div>
                  ) : isPdf ? (
                    <iframe
                      key={`pdf-${zoom}`}
                      src={pdfSrc}
                      title={viewFile.name}
                      className="w-full h-full bg-white"
                    />
                  ) : isText ? (
                    <div
                      className="w-full h-full overflow-auto bg-white"
                      style={{ fontSize: `${zoom}rem`, lineHeight: 1.6 }}
                    >
                      <iframe
                        src={viewFile.dataUrl}
                        title={viewFile.name}
                        className="w-full h-full bg-white border-0"
                        style={{ minHeight: "100%" }}
                      />
                    </div>
                  ) : (
                    <div className="h-full grid place-items-center p-8 text-center">
                      <div>
                        <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                        <p className="font-medium">Pratinjau tidak tersedia</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Format file ini tidak bisa ditampilkan langsung.
                          Silakan unduh untuk membukanya.
                        </p>
                        <a
                          href={viewFile.dataUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={viewFile.name}
                          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-all"
                        >
                          <Download className="h-4 w-4" />
                          Unduh file
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {canZoom && (
                  <div className="px-4 py-2 border-t border-border bg-card text-[11px] text-muted-foreground flex items-center justify-between">
                    <span>
                      Pintasan:{" "}
                      <kbd className="px-1.5 py-0.5 rounded bg-muted">+</kbd> /{" "}
                      <kbd className="px-1.5 py-0.5 rounded bg-muted">-</kbd> zoom,{" "}
                      <kbd className="px-1.5 py-0.5 rounded bg-muted">0</kbd> reset,{" "}
                      <kbd className="px-1.5 py-0.5 rounded bg-muted">F</kbd> layar penuh,{" "}
                      <kbd className="px-1.5 py-0.5 rounded bg-muted">Esc</kbd> tutup
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
    </section>
  );
}