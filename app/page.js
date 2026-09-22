"use client";

import { useEffect, useMemo, useState } from "react";

import { supabase } from "../lib/supabase";

import { siteConfig } from "../config/siteConfig";

function ServerIcon() {

  return (

    <svg viewBox="0 0 24 24" className="info-svg-icon" aria-hidden="true">

      <path

        d="M4 5.3C4 4.6 4.6 4 5.3 4h13.4c.7 0 1.3.6 1.3 1.3v2c0 .7-.6 1.3-1.3 1.3H5.3C4.6 8.6 4 8 4 7.3v-2zm0 5.7c0-.7.6-1.3 1.3-1.3h13.4c.7 0 1.3.6 1.3 1.3v2c0 .7-.6 1.3-1.3 1.3H5.3C4.6 14.3 4 13.7 4 13v-2zm0 5.7c0-.7.6-1.3 1.3-1.3h13.4c.7 0 1.3.6 1.3 1.3v2c0 .7-.6 1.3-1.3 1.3H5.3C4.6 20 4 19.4 4 18.7v-2z"

        fill="currentColor"

      />

    </svg>

  );

}

function MapIcon() {

  return (

    <svg viewBox="0 0 24 24" className="info-svg-icon" aria-hidden="true">

      <path

        d="M15 4 9 6.1 4.7 4.7a.5.5 0 0 0-.7.5v13.3c0 .2.1.4.3.5L9 20.6l6-2.1 4.3 1.4a.5.5 0 0 0 .7-.5V6.1c0-.2-.1-.4-.3-.5L15 4zm-1 1.7v11.4l-4 1.4V7.1l4-1.4z"

        fill="currentColor"

      />

    </svg>

  );

}

function PlayersIcon() {

  return (

    <svg viewBox="0 0 24 24" className="info-svg-icon" aria-hidden="true">

      <path

        d="M12 11.3a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8zm-6 8.2a6 6 0 0 1 12 0H6zm12.1-.3c-.2-1.8-1.1-3.4-2.4-4.5.5-.2 1-.3 1.5-.3 2.8 0 5 2.2 5 5v.1h-4.1zM17.2 5.7a2.8 2.8 0 1 1 0 5.6c-.4 0-.7-.1-1-.2.4-.7.6-1.5.6-2.4 0-1-.2-1.9-.7-2.7.4-.2.7-.3 1.1-.3z"

        fill="currentColor"

      />

    </svg>

  );

}


function ServerTypeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="info-svg-icon" aria-hidden="true">
      <path
        d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2Zm0 2.3L6.2 8.1v7.8L12 19l5.8-3.1V8.1L12 5.1Zm-3 5.1h6v1.8H9v-1.8Zm0 3.8h6v1.8H9V14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShieldIcon() {

  return (

    <svg viewBox="0 0 24 24" className="management-shield" aria-hidden="true">

      <path

        d="M12 3 19 6v5.2c0 4.7-2.7 7.9-7 9.8-4.3-1.9-7-5.1-7-9.8V6l7-3Zm0 4.1v9.4c2.2-1.3 3.4-3.1 3.4-5.6V8L12 7.1Z"

        fill="currentColor"

      />

    </svg>

  );

}

export default function Home() {

  const [activeSection, setActiveSection] = useState("anasayfa");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [servers, setServers] = useState([]);

  const [serversLoading, setServersLoading] = useState(true);

  const primaryServer = useMemo(() => {

    if (servers.length > 0) {

      return servers[0];

    }

    return {

      online: false,

      name: siteConfig.subTitle,

      map: "-",

      players: null,

      maxPlayers: 32,

      ping: null,

      serverType: siteConfig.subTitle,

      connect: siteConfig.defaultServer.connect,

      ts3Address: siteConfig.defaultServer.ts3Address,

    };

  }, [servers]);

  const [galleryItems, setGalleryItems] = useState([]);

  const [galleryLoading, setGalleryLoading] = useState(true);

  const [galleryError, setGalleryError] = useState("");

  const [visibleGalleryCount, setVisibleGalleryCount] = useState(6);

  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const [managementItems, setManagementItems] = useState([]);

  const [managementLoading, setManagementLoading] = useState(true);

  const [managementError, setManagementError] = useState("");

  const [visibleManagementCount, setVisibleManagementCount] = useState(10);

  const [rules, setRules] = useState([]);

  const [rulesLoading, setRulesLoading] = useState(true);

  const [rulesError, setRulesError] = useState("");

  const [rulesTab, setRulesTab] = useState("server");

  const [prices, setPrices] = useState([]);

  const [pricesLoading, setPricesLoading] = useState(true);

  const [pricesError, setPricesError] = useState("");

  const [downloads, setDownloads] = useState([]);

  const [downloadsLoading, setDownloadsLoading] = useState(true);

  const [downloadsError, setDownloadsError] = useState("");

  const activeRuleRecord = useMemo(() => {

    return (

      rules.find(

        (item) => item.rule_group === rulesTab

      ) || null

    );

  }, [rules, rulesTab]);

  const [supportType, setSupportType] = useState("ban_appeal");

  const [supportName, setSupportName] = useState("");

  const [supportContact, setSupportContact] = useState("");

  const [supportSubject, setSupportSubject] = useState("");

  const [supportMessage, setSupportMessage] = useState("");

  const [supportWebsite, setSupportWebsite] = useState("");

  const [supportFormStartedAt, setSupportFormStartedAt] = useState(

    Date.now()

  );

  const [supportSending, setSupportSending] = useState(false);

  const [supportResult, setSupportResult] = useState(null);

  const [contactSettings, setContactSettings] = useState(null);

  const [contactLoading, setContactLoading] = useState(true);

  const [contactError, setContactError] = useState("");

  const [announcements, setAnnouncements] = useState([]);

  const [announcementsLoading, setAnnouncementsLoading] = useState(true);

  const [announcementsError, setAnnouncementsError] = useState("");

  const [ts3Status, setTs3Status] = useState(null);

  const [ts3Loading, setTs3Loading] = useState(true);

  const [ts3Error, setTs3Error] = useState("");

 useEffect(() => {

  let active = true;

  function decodeHtmlEntities(value = "") {

    const textarea =

      document.createElement("textarea");

    textarea.innerHTML =

      String(value);

    return textarea.value;

  }

  async function getLiveServerData(server) {

    const host =

      String(server.host || "").trim();

    const port =

      Number(server.port) || 27015;

    if (!host) {

      return server;

    }

    const apiUrl =

      `https://tracker.oyunyoneticisi.com/api.php?ip=${encodeURIComponent(

        host

      )}&port=${encodeURIComponent(port)}&t=${Date.now()}`;

    try {

      const response =

        await fetch(apiUrl, {

          method: "GET",

          cache: "no-store",

        });

      if (!response.ok) {

        throw new Error(

          `OYT HTTP ${response.status}`

        );

      }

      const data =

        await response.json();

      const oytServer =

        data?.server;

      const status =

        String(

          oytServer?.status || ""

        )

          .trim()

          .toLowerCase();

      if (

        !data?.success ||

        !oytServer ||

        status !== "online"

      ) {

        return {

          ...server,

          online: false,

          map: "-",

          players: 0,

          playerList: [],

        };

      }

      const playerList =

        Array.isArray(data.players)

          ? data.players.map(

              (player) => ({

                name:

                  decodeHtmlEntities(

                    player?.name ||

                      "İsimsiz oyuncu"

                  ),

                score:

                  Number.parseInt(

                    player?.score,

                    10

                  ) || 0,

                time:

                  player?.time ||

                  "00:00:00",

              })

            )

          : [];

      return {

        ...server,

        online: true,

        name:

          decodeHtmlEntities(

            oytServer.name ||

              server.name

          ),

        map:

          oytServer.map || "-",

        players:

          Number(

            oytServer.players

          ) || playerList.length,

        maxPlayers:

          Number(

            oytServer.playersmax

          ) || 32,

        ping:

          oytServer.ping ?? null,

        connect:

          data?.links?.connect ||

          `${host}:${port}`,

        playerList,

        oytError: null,

      };

    } catch (error) {

      console.error(

        `OYT tarayıcı sorgusu başarısız (${host}:${port}):`,

        error

      );

      return {

        ...server,

        online: false,

        map: "-",

        players: 0,

        playerList: [],

      };

    }

  }

  async function getServers() {

    try {

      /*

       * Bu route yalnızca Supabase'deki sunucu

       * listesini ve ayarlarını getiriyor.

       */

      const response =

        await fetch(

          "/api/server-status",

          {

            cache: "no-store",

          }

        );

      if (!response.ok) {

        throw new Error(

          "Sunucu bilgileri alınamadı."

        );

      }

      const data =

        await response.json();

      const configuredServers =

        Array.isArray(data.servers)

          ? data.servers

          : [];

      /*

       * Canlı oyuncu bilgileri ziyaretçinin

       * tarayıcısından doğrudan OYT'den alınır.

       */

      const liveServers =

        await Promise.all(

          configuredServers.map(

            getLiveServerData

          )

        );

      if (!active) return;

      setServers(liveServers);

      setServersLoading(false);

    } catch (error) {

      console.error(error);

      if (active) {

        setServers([]);

        setServersLoading(false);

      }

    }

  }

  getServers();

  const interval =

    setInterval(

      getServers,

      30000

    );

  return () => {

    active = false;

    clearInterval(interval);

  };

}, []);

  useEffect(() => {

    let active = true;

    async function getGallery() {

      setGalleryLoading(true);

      setGalleryError("");

      const { data, error } = await supabase

        .from("gallery")

        .select(

          "id, image_url, storage_path, title, sort_order, is_active, created_at"

        )

        .eq("is_active", true)

        .order("sort_order", { ascending: true })

        .order("created_at", { ascending: false });

      if (!active) return;

      if (error) {

        console.error(error);

        setGalleryItems([]);

        setGalleryError(

          "Galeri şu anda yüklenemedi."

        );

        setGalleryLoading(false);

        return;

      }

      setGalleryItems(data || []);

      setGalleryLoading(false);

    }

    getGallery();

    return () => {

      active = false;

    };

  }, []);

  useEffect(() => {

    let active = true;

    async function getManagement() {

      setManagementLoading(true);

      setManagementError("");

      const { data, error } = await supabase

        .from("management")

        .select(

          "id, name, role, steam_url, instagram_url, discord, avatar_url, avatar_storage_path, sort_order, is_active, created_at"

        )

        .eq("is_active", true)

        .order("sort_order", { ascending: true })

        .order("created_at", { ascending: true });

      if (!active) return;

      if (error) {

        console.error(error);

        setManagementItems([]);

        setManagementError(

          "Yönetim kadrosu şu anda yüklenemedi."

        );

        setManagementLoading(false);

        return;

      }

      setManagementItems(data || []);

      setManagementLoading(false);

    }

    getManagement();

    return () => {

      active = false;

    };

  }, []);

  useEffect(() => {

    let active = true;

    async function getRules() {

      setRulesLoading(true);

      setRulesError("");

      const { data, error } = await supabase

        .from("rules")

        .select(

          "id, rule_group, content, is_active, updated_at"

        )

        .eq("is_active", true);

      if (!active) return;

      if (error) {

        console.error(error);

        setRules([]);

        setRulesError(

          "Kurallar şu anda yüklenemedi."

        );

        setRulesLoading(false);

        return;

      }

      setRules(data || []);

      setRulesLoading(false);

    }

    getRules();

    return () => {

      active = false;

    };

  }, []);

  useEffect(() => {

    let active = true;

    async function getPrices() {

      setPricesLoading(true);

      setPricesError("");

      const { data, error } = await supabase

        .from("prices")

        .select(
          "id, title, price, period, description, features, sort_order, is_active, created_at, updated_at"
        )

        .eq("is_active", true)

        .order("sort_order", { ascending: true })

        .order("created_at", { ascending: true });

      if (!active) return;

      if (error) {

        console.error(error);

        setPrices([]);

        setPricesError(
          "Fiyatlar şu anda yüklenemedi."
        );

        setPricesLoading(false);

        return;

      }

      setPrices(data || []);

      setPricesLoading(false);

    }

    getPrices();

    return () => {

      active = false;

    };

  }, []);

  useEffect(() => {

    let active = true;

    async function getDownloads() {

      setDownloadsLoading(true);

      setDownloadsError("");

      const { data, error } = await supabase

        .from("downloads")

        .select(
          "id, title, description, version, file_size, download_url, sort_order, is_active, created_at, updated_at"
        )

        .eq("is_active", true)

        .order("sort_order", { ascending: true })

        .order("created_at", { ascending: true });

      if (!active) return;

      if (error) {

        console.error(error);

        setDownloads([]);

        setDownloadsError(
          "Dosyalar şu anda yüklenemedi."
        );

        setDownloadsLoading(false);

        return;

      }

      setDownloads(data || []);

      setDownloadsLoading(false);

    }

    getDownloads();

    return () => {

      active = false;

    };

  }, []);

  useEffect(() => {

    let active = true;

    async function getContactSettings() {

      setContactLoading(true);

      setContactError("");

      const { data, error } = await supabase

        .from("contact_settings")

        .select(

          "id, phone, discord, steam_url, ts3_address, email, description, is_active, updated_at"

        )

        .eq("is_active", true)

        .order("id", { ascending: true })

        .limit(1)

        .maybeSingle();

      if (!active) return;

      if (error) {

        console.error(error);

        setContactSettings(null);

        setContactError(

          "İletişim bilgileri şu anda yüklenemedi."

        );

        setContactLoading(false);

        return;

      }

      setContactSettings(data || null);

      setContactLoading(false);

    }

    getContactSettings();

    return () => {

      active = false;

    };

  }, []);



  useEffect(() => {

    let active = true;

    async function getAnnouncements() {

      setAnnouncementsLoading(true);

      setAnnouncementsError("");

      const { data, error } = await supabase
        .from("announcements")
        .select("id, title, description, sort_order, is_active, created_at, updated_at")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false })
        .limit(3);

      if (!active) return;

      if (error) {
        console.error(error);
        setAnnouncements([]);
        setAnnouncementsError("Duyurular şu anda yüklenemedi.");
        setAnnouncementsLoading(false);
        return;
      }

      setAnnouncements(data || []);
      setAnnouncementsLoading(false);
    }

    getAnnouncements();

    return () => {
      active = false;
    };

  }, []);

  useEffect(() => {

    let active = true;

    async function getTs3Status() {

      setTs3Loading(true);

      setTs3Error("");

      try {

        const response = await fetch("/api/ts3-status", {

          method: "GET",

          cache: "no-store",

        });

        const data = await response.json();

        if (!active) return;

        if (!response.ok || !data?.success || !data?.online) {

          setTs3Status(data || null);

          setTs3Error(

            data?.error ||

              "TeamSpeak sunucusu şu anda sorgulanamıyor."

          );

          setTs3Loading(false);

          return;

        }

        setTs3Status(data);

        setTs3Loading(false);

      } catch (error) {

        console.error("TS3 STATUS ERROR:", error);

        if (!active) return;

        setTs3Status(null);

        setTs3Error(

          "TeamSpeak sunucusuna bağlanılamadı."

        );

        setTs3Loading(false);

      }

    }

    getTs3Status();

    const interval = setInterval(

      getTs3Status,

      30000

    );

    return () => {

      active = false;

      clearInterval(interval);

    };

  }, []);

  useEffect(() => {

    const ids = [

      "anasayfa",

      "sunucular",

      "galeri",

      "yonetim",

      "kurallar",

      "fiyatlar",

      "dosyalar",

      "destek",

      "iletisim",

    ];

    const observer = new IntersectionObserver(

      (entries) => {

        const visible = entries

          .filter(

            (entry) =>

              entry.isIntersecting

          )

          .sort(

            (a, b) =>

              b.intersectionRatio -

              a.intersectionRatio

          );

        if (visible.length > 0) {

          setActiveSection(

            visible[0].target.id

          );

        }

      },

      {

        rootMargin:

          "-86px 0px -45% 0px",

        threshold: [

          0.15,

          0.3,

          0.5,

        ],

      }

    );

    ids.forEach((id) => {

      const element =

        document.getElementById(id);

      if (element) {

        observer.observe(element);

      }

    });

    return () => {

      observer.disconnect();

    };

  }, []);

  useEffect(() => {

    if (

      activeSection !==

      "galeri"

    ) {

      setVisibleGalleryCount(6);

      setSelectedGalleryItem(null);

    }

    if (

      activeSection !==

      "yonetim"

    ) {

      setVisibleManagementCount(10);

    }

    if (

      activeSection !==

      "kurallar"

    ) {

      setRulesTab("server");

    }

    if (

      activeSection ===

      "destek"

    ) {

      setSupportFormStartedAt(

        Date.now()

      );

    }

  }, [activeSection]);

  useEffect(() => {

    function handleKeyDown(

      event

    ) {

      if (

        event.key ===

        "Escape"

      ) {

        setSelectedGalleryItem(

          null

        );

      }

    }

    if (

      selectedGalleryItem

    ) {

      document.body.style.overflow =

        "hidden";

      window.addEventListener(

        "keydown",

        handleKeyDown

      );

    } else {

      document.body.style.overflow =

        "";

    }

    return () => {

      document.body.style.overflow =

        "";

      window.removeEventListener(

        "keydown",

        handleKeyDown

      );

    };

  }, [selectedGalleryItem]);



  function formatAnnouncementDate(value) {
    if (!value) return "";

    try {
      return new Intl.DateTimeFormat("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date(value));
    } catch {
      return "";
    }
  }
  function navClass(

    section

  ) {

    return activeSection ===

      section

      ? "active"

      : "";

  }

  function goToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    setMobileMenuOpen(false);

    const scrollToTarget = () => {
      const mobile = window.matchMedia("(max-width: 900px)").matches;
      const headerOffset = mobile ? 68 : 86;
      const extraGap = 0;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerOffset -
        extraGap;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTarget);
    });

    window.history.replaceState({}, "", "/");
  }

  function showMoreGallery() {

    setVisibleGalleryCount(

      (old) =>

        Math.min(

          old + 6,

          galleryItems.length

        )

    );

  }

  function showMoreManagement() {

    setVisibleManagementCount(

      (old) =>

        Math.min(

          old + 6,

          managementItems.length

        )

    );

  }

  async function sendSupportRequest(

    event

  ) {

    event.preventDefault();

    if (supportSending) {

      return;

    }

    setSupportSending(true);

    setSupportResult(null);

    try {

      const response =

        await fetch(

          "/api/support",

          {

            method: "POST",

            headers: {

              "Content-Type":

                "application/json",

            },

            body: JSON.stringify({

              requestType:

                supportType,

              name:

                supportName,

              contact:

                supportContact,

              subject:

                supportSubject,

              message:

                supportMessage,

              website:

                supportWebsite,

              formStartedAt:

                supportFormStartedAt,

            }),

          }

        );

      const result =

        await response.json();

      if (

        !response.ok ||

        !result.ok

      ) {

        setSupportResult({

          type: "error",

          text:

            result.message ||

            "Destek talebi gönderilemedi.",

        });

        setSupportSending(false);

        return;

      }

      setSupportResult({

        type: "success",

        text:

          result.message ||

          "Destek talebin başarıyla iletildi.",

      });

      setSupportName("");

      setSupportContact("");

      setSupportSubject("");

      setSupportMessage("");

      setSupportWebsite("");

      setSupportFormStartedAt(

        Date.now()

      );

    } catch (error) {

      console.error(error);

      setSupportResult({

        type: "error",

        text:

          "Bağlantı hatası oluştu. Lütfen tekrar dene.",

      });

    }

    setSupportSending(false);

  }

    return (

    <main className="site-page">

      <header className="navbar">
        <div className="navbar-inner">
          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((old) => !old)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a
            href="/"
            className="brand mobile-brand"
            onClick={(event) => {
              event.preventDefault();
              goToSection("anasayfa");
            }}
          >
            <img
              src={siteConfig.logo}
              alt=""
              className="brand-logo-image"
            />
            <div className="brand-text">
              <strong>{siteConfig.brandName}</strong>
              <span>{siteConfig.subTitle}</span>
            </div>
          </a>

          <nav className="desktop-nav desktop-nav-left" aria-label="Sol menü">
            {[
              ["anasayfa", "Ana Sayfa"],
              ["sunucular", "Sunucular"],
              ["galeri", "Galeri"],
              ["yonetim", "Yönetim"],
            ].map(([id, label]) => (
              <a
                key={id}
                href="/"
                className={navClass(id)}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(id);
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="/"
            className="desktop-brand"
            aria-label={`${siteConfig.brandName} ana sayfa`}
            onClick={(event) => {
              event.preventDefault();
              goToSection("anasayfa");
            }}
          >
            <img src={siteConfig.logo} alt="" />
            <span className="desktop-brand-glow"></span>
          </a>

          <nav className="desktop-nav desktop-nav-right" aria-label="Sağ menü">
            {[
              ["kurallar", "Kurallar"],
              ["fiyatlar", "Fiyatlar"],
              ["dosyalar", "Dosyalar"],
              ["destek", "Destek"],
              ["iletisim", "İletişim"],
            ].map(([id, label]) => (
              <a
                key={id}
                href="/"
                className={navClass(id)}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(id);
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <nav className={`nav-links mobile-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
            {[
              ["anasayfa", "Ana Sayfa"],
              ["sunucular", "Sunucular"],
              ["galeri", "Galeri"],
              ["yonetim", "Yönetim"],
              ["kurallar", "Kurallar"],
              ["fiyatlar", "Fiyatlar"],
              ["dosyalar", "Dosyalar"],
              ["destek", "Destek"],
              ["iletisim", "İletişim"],
            ].map(([id, label]) => (
              <a
                key={id}
                href="/"
                className={navClass(id)}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(id);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-label="Menüyü kapat"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <section

        id="anasayfa"

        className="hero site-section"

      >

        <div className="hero-overlay"></div>

          <aside className="hero-announcements" aria-label="Duyurular">
            <div className="hero-announcements-head">
              <div>
                <small>TOPLULUK</small>
                <strong>DUYURULAR</strong>
              </div>
              <span className="hero-announcements-dot"></span>
            </div>

            <div className="hero-announcements-list">
              {announcementsLoading ? (
                <div className="hero-announcement-empty">Duyurular yükleniyor...</div>
              ) : announcementsError ? (
                <div className="hero-announcement-empty">{announcementsError}</div>
              ) : announcements.length === 0 ? (
                <div className="hero-announcement-empty">Henüz duyuru yayınlanmadı.</div>
              ) : (
                announcements.map((item, index) => (
                  <article className="hero-announcement-item" key={item.id}>
                    <div className="hero-announcement-meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <time>{formatAnnouncementDate(item.created_at)}</time>
                    </div>
                    <strong>{item.title}</strong>
                    {item.description && <p>{item.description}</p>}
                  </article>
                ))
              )}
            </div>
          </aside>


        <div className="hero-content">

          <div className="hero-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h1>

            {siteConfig.brandName}

          </h1>

          <h2>

            {siteConfig.subTitle}

          </h2>

          <div className="community-line">

            <span></span>

            {siteConfig.slogan}

            <span></span>

          </div>

          <div className="hero-buttons">

            <a

              href={`steam://connect/${primaryServer.connect}`}

              className="btn btn-darkgold"

            >

              SUNUCUYA BAĞLAN

            </a>

            <a

              href={`ts3server://${

                primaryServer.ts3Address ||

                siteConfig.defaultServer.ts3Address

              }`}

              className="btn btn-darkgold"

            >

              TS3&apos;E BAĞLAN

            </a>

          </div>

          <div className="server-card">

            <div className="server-box">

              <div className="server-item">

                <ServerIcon />

                <div>

                  <small>

                    SUNUCU IP

                  </small>

                  <strong>

                    {

                      primaryServer.connect

                    }

                  </strong>

                </div>

              </div>

              <div className="server-divider"></div>

              <div className="server-item">

                <MapIcon />

                <div>

                  <small>

                    HARİTA

                  </small>

                  <strong>

                    {serversLoading

                      ? "..."

                      : primaryServer.online

                        ? primaryServer.map

                        : "-"}

                  </strong>

                </div>

              </div>

              <div className="server-divider"></div>

              <div className="server-item">

                <PlayersIcon />

                <div>

                  <small>

                    OYUNCULAR

                  </small>

                  <strong>

                    {serversLoading

                      ? "..."

                      : primaryServer.online &&

                          primaryServer.players !== null

                        ? `${primaryServer.players} / ${primaryServer.maxPlayers}`

                        : `-- / ${

                            primaryServer.maxPlayers || 32

                          }`}

                  </strong>

                </div>

              </div>

              <div className="server-divider"></div>

              <div className="server-status">

                <span

                  className="status-dot"

                  style={{

                    background: serversLoading

                      ? "#e32626"

                      : primaryServer.online

                        ? "#61dc75"

                        : "#e05252",

                  }}

                ></span>

                <div>

                  <strong

                    style={{

                      color: serversLoading

                        ? "#e32626"

                        : primaryServer.online

                          ? "#6ee27d"

                          : "#e05252",

                    }}

                  >

                    {serversLoading

                      ? "SORGULANIYOR"

                      : primaryServer.online

                        ? "AÇIK"

                        : "KAPALI"}

                  </strong>

                  <small>

                    {primaryServer.serverType

                      ? String(

                          primaryServer.serverType

                        ).toUpperCase()

                      : siteConfig.subTitle}

                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section

        id="sunucular"

        className="content-section servers-section site-section"

      >

        <style>{`

          #sunucular.content-section {
            padding: 96px 30px 28px !important;
            align-items: flex-start !important;
            overflow: hidden;
          }

          #sunucular .servers-section-content {
            width: min(1380px, 100%) !important;
            transform: none !important;
          }

          #sunucular .section-topline {
            margin-bottom: 8px !important;
          }

          #sunucular .section-title {
            font-size: clamp(38px, 4.2vw, 64px) !important;
          }

          #sunucular .server-triple-grid {
            width: 100%;
            margin-top: 34px !important;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            align-items: stretch;
          }

          #sunucular .server-square-card {
            position: relative !important;
            min-width: 0 !important;
            width: 100% !important;
            aspect-ratio: 1 / 1 !important;
            min-height: 0 !important;
            height: auto !important;
            padding: 20px !important;

            /* Eski yatay sunucu kartı CSS'ini kesin olarak ezer */
            display: flex !important;
            grid-template-columns: none !important;
            grid-template-rows: none !important;
            column-gap: 0 !important;

            flex-direction: column !important;
            overflow: hidden !important;
          }

          /* Eski iki kolonlu sunucu kartı yerleşimini tamamen sıfırla */
          #sunucular .server-square-card > .server-panel-top,
          #sunucular .server-square-card > .server-panel-stats,
          #sunucular .server-square-card > .server-panel-actions,
          #sunucular .server-square-card > .server-square-list {
            grid-column: auto !important;
            grid-row: auto !important;
            width: 100% !important;
            min-width: 0 !important;
          }

          #sunucular .server-square-card > .server-square-list {
            margin-top: 11px !important;
            padding-top: 11px !important;
            padding-left: 0 !important;
            border-left: 0 !important;
            border-top: 1px solid rgba(242, 238, 230, 0.10) !important;
          }

          /* Eski desktop kart yüksekliği / taşıma kurallarını etkisizleştir */
          #sunucular .server-triple-grid {
            transform: none !important;
            margin-bottom: 0 !important;
          }

          #sunucular .server-square-card .server-panel-top {
            min-height: 62px !important;
            padding-bottom: 14px !important;
          }

          #sunucular .server-square-card .server-panel-top h3 {
            font-size: clamp(14px, 1.1vw, 18px) !important;
            -webkit-line-clamp: 2;
          }

          #sunucular .server-square-card .server-panel-stats {
            margin-top: 12px !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          #sunucular .server-square-card .server-stat {
            min-height: 50px !important;
            padding: 7px 10px !important;
            gap: 9px !important;
          }

          #sunucular .server-square-card .server-stat:nth-child(odd) {
            padding-left: 0 !important;
          }

          #sunucular .server-square-card .server-stat:nth-child(even) {
            padding-right: 0 !important;
          }

          #sunucular .server-square-card .server-stat small {
            margin-bottom: 4px !important;
            font-size: 6px !important;
          }

          #sunucular .server-square-card .server-stat strong {
            font-size: 11px !important;
          }

          #sunucular .server-square-card .info-svg-icon {
            width: 18px !important;
            height: 18px !important;
          }

          #sunucular .server-square-card .server-panel-actions {
            margin-top: 11px !important;
            padding-top: 11px !important;
          }

          #sunucular .server-square-card .server-panel-actions a {
            height: 38px !important;
            font-size: 9px !important;
          }

          #sunucular .server-square-list {
            min-height: 0;
            flex: 1;
            margin-top: 11px;
            padding-top: 11px;
            display: flex;
            flex-direction: column;
            border-top: 1px solid rgba(242, 238, 230, 0.10);
          }

          #sunucular .server-square-list-title {
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            color: #e32626;
            font-size: 8px;
            font-weight: 800;
            letter-spacing: 1.2px;
          }

          #sunucular .server-square-list-title span:last-child {
            color: #77736b;
            font-size: 7px;
            font-weight: 700;
          }

          #sunucular .server-square-list-items {
            min-height: 0;
            flex: 1;
            display: grid;
            align-content: start;
            gap: 5px;
            overflow-y: auto;
            padding-right: 0;

            /* Liste kaymaya devam eder ama beyaz scrollbar görünmez */
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          #sunucular .server-square-list-items::-webkit-scrollbar {
            width: 0;
            height: 0;
            display: none;
          }

          #sunucular .server-square-player {
            min-width: 0;
            min-height: 29px;
            padding: 6px 8px;
            display: grid;
            grid-template-columns: 24px minmax(0, 1fr) auto;
            gap: 7px;
            align-items: center;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.035);
            color: #ddd;
            font-size: 10px;
          }

          #sunucular .server-square-player > span:first-child {
            color: #e32626;
          }

          #sunucular .server-square-player strong {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #ece8df;
            font-size: 10px;
          }

          #sunucular .server-square-player > span:last-child {
            color: #8f8a82;
            white-space: nowrap;
            font-size: 9px;
          }

          #sunucular .server-square-empty {
            padding: 12px 10px;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.025);
            color: #8f8a82;
            font-size: 10px;
            line-height: 1.45;
          }

          #sunucular .ts3-square-card .server-card-index {
            color: rgba(227, 38, 38, 0.09);
          }

          /* TS3 başlığı gerçek sunucu adını gösterir ama karta taşmaz */
          #sunucular .ts3-square-card .server-panel-top h3 {
            max-width: 245px !important;
            font-size: clamp(11px, 0.86vw, 13px) !important;
            line-height: 1.22 !important;
            letter-spacing: 0.1px !important;
            white-space: normal !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
          }

          /*
           * CS kartlarında bilgiler 2x2 olduğu için buton ve oyuncu listesi daha aşağıda.
           * TS3'ü de aynı dikey ritme getiriyoruz:
           * adres + online üstte, sunucu türü altta tam genişlik.
           */
          #sunucular .ts3-square-card .server-panel-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            min-height: 105px !important;
          }

          #sunucular .ts3-square-card .server-stat,
          #sunucular .ts3-square-card .server-stat:nth-child(odd),
          #sunucular .ts3-square-card .server-stat:nth-child(even) {
            min-height: 52px !important;
            padding: 7px 12px !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.055) !important;
          }

          #sunucular .ts3-square-card .server-stat:nth-child(1) {
            padding-left: 0 !important;
            border-right: 1px solid rgba(255, 255, 255, 0.055) !important;
          }

          #sunucular .ts3-square-card .server-stat:nth-child(2) {
            padding-right: 0 !important;
            border-right: 0 !important;
          }

          #sunucular .ts3-square-card .server-stat:nth-child(3) {
            grid-column: 1 / -1 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-right: 0 !important;
            border-bottom: 0 !important;
          }

          /* TS3 butonu ve kullanıcı listesi diğer iki kartla aynı seviyeye gelsin */
          #sunucular .ts3-square-card .server-panel-actions {
            margin-top: 12px !important;
          }

          #sunucular .ts3-square-card .server-square-list {
            margin-top: 11px !important;
          }

          #sunucular .ts3-online-nickname {
            grid-template-columns: 24px minmax(0, 1fr) !important;
          }


          /* =========================
             FİYATLAR - KOMPAKT / RESPONSIVE
             ========================= */
          #fiyatlar .prices-section-content {
            width: min(1180px, calc(100% - 72px));
          }

          #fiyatlar .prices-grid {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            align-items: stretch;
            gap: 16px;
            margin-top: 26px;
          }

          #fiyatlar .price-card {
            position: relative;
            width: 100%;
            min-height: 250px;
            padding: 18px 18px 16px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            isolation: isolate;
            text-align: left;
            background:
              linear-gradient(
                140deg,
                rgba(22, 20, 16, 0.78),
                rgba(8, 9, 9, 0.95)
              );
            border: 1px solid rgba(242, 238, 230, 0.19);
            border-radius: 16px;
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.035),
              0 18px 45px rgba(0, 0, 0, 0.22);
            transition:
              border-color 0.2s ease,
              box-shadow 0.2s ease,
              transform 0.2s ease;
          }

          #fiyatlar .price-card::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background:
              radial-gradient(
                circle at 8% 12%,
                rgba(238, 235, 228, 0.075),
                transparent 37%
              ),
              radial-gradient(
                circle at 100% 100%,
                rgba(238, 235, 228, 0.025),
                transparent 45%
              );
          }

          #fiyatlar .price-card > * {
            position: relative;
            z-index: 1;
          }

          #fiyatlar .price-card:hover {
            border-color: rgba(242, 238, 230, 0.32);
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.04),
              0 22px 50px rgba(0, 0, 0, 0.30);
            transform: translateY(-2px);
          }

          #fiyatlar .price-card-number {
            position: absolute;
            top: 13px;
            right: 14px;
            color: rgba(227, 38, 38, 0.085);
            font-size: 30px;
            font-weight: 900;
            line-height: 1;
          }

          #fiyatlar .price-card-head {
            min-height: 44px;
            padding: 0 34px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
          }

          #fiyatlar .price-card-head small {
            display: block;
            margin-bottom: 5px;
            color: #7f7a72;
            font-size: 6.5px;
            font-weight: 700;
            letter-spacing: 1.8px;
          }

          #fiyatlar .price-card-head h3 {
            margin: 0;
            color: #f0ede6;
            font-size: clamp(15px, 1vw, 18px);
            line-height: 1.18;
            overflow-wrap: anywhere;
          }

          /* Fiyat/periyot yoksa sadece başlığı boş meta alanının içine doğru
             görsel olarak ortala. Alan yüksekliği değişmez; simetri korunur. */
          #fiyatlar .price-card-head-centered {
            transform: translateY(11px);
          }

          #fiyatlar .price-card-price {
            min-height: 31px;
            margin-top: 6px;
            padding-bottom: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;
            border-bottom: 1px solid rgba(242, 238, 230, 0.09);
            text-align: center;
          }

          #fiyatlar .price-card-price-empty {
            visibility: hidden;
          }

          #fiyatlar .price-card-price-main {
            color: #f1eee8;
            font-size: 15px;
            font-weight: 850;
          }

          #fiyatlar .price-card-period {
            color: #9f9a92;
            font-size: 8.5px;
            font-weight: 700;
          }

          #fiyatlar .price-card-description {
            margin: 11px 0 0;
            color: #aaa59d;
            font-size: 9.5px;
            line-height: 1.5;
            white-space: pre-wrap;
            overflow-wrap: anywhere;
          }

          #fiyatlar .price-card-description-bottom {
            min-height: 44px;
            margin-top: 12px;
            margin-bottom: 12px;
            padding-top: 10px;
            display: flex;
            align-items: flex-start;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
          }

          #fiyatlar .price-card-table-wrap {
            width: 100%;
            height: 172px;
            margin-top: 12px;
            overflow-x: auto;
            overflow-y: hidden;
            border: 1px solid rgba(255, 255, 255, 0.065);
            border-radius: 8px;
            scrollbar-width: thin;
          }

          #fiyatlar .price-card-table {
            min-width: 0;
            width: 100%;
          }

          #fiyatlar .price-table-row {
            width: 100%;
            min-width: 0;
            min-height: 34px;
            display: grid;
            align-items: stretch;
            border-bottom: 1px solid rgba(255, 255, 255, 0.055);
          }

          #fiyatlar .price-table-head {
            min-height: 30px;
          }

          #fiyatlar .price-table-row:last-child {
            border-bottom: 0;
          }

          #fiyatlar .price-table-row span {
            min-width: 0;
            padding: 8px 7px;
            display: flex;
            align-items: center;
            color: #d6d1c8;
            border-right: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 8.5px;
            font-weight: 600;
            line-height: 1.3;
            overflow-wrap: anywhere;
          }

          #fiyatlar .price-table-row span:last-child {
            border-right: 0;
          }

          #fiyatlar .price-table-head {
            background: rgba(227, 38, 38, 0.055);
          }

          #fiyatlar .price-table-head span {
            color: #a9a39b;
            font-size: 7.5px;
            font-weight: 800;
            letter-spacing: 0.35px;
            text-transform: uppercase;
          }

          #fiyatlar .price-card-features {
            display: grid;
            gap: 7px;
            margin-top: 12px;
            margin-bottom: 12px;
          }

          #fiyatlar .price-card-feature {
            min-width: 0;
            display: flex;
            align-items: flex-start;
            gap: 8px;
            color: #d8d4cc;
            font-size: 9px;
            line-height: 1.4;
          }

          #fiyatlar .price-card-feature > span {
            width: 5px;
            height: 5px;
            margin-top: 4px;
            flex: 0 0 5px;
            background: #e32626;
            border-radius: 50%;
            box-shadow: 0 0 8px rgba(227, 38, 38, 0.35);
          }

          #fiyatlar .price-card-feature strong {
            min-width: 0;
            font-weight: 600;
            overflow-wrap: anywhere;
          }

          #fiyatlar .price-card-action {
            width: 100%;
            min-height: 38px;
            margin-top: auto;
            padding: 0 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #f3efe8;
            background: rgba(0, 0, 0, 0.30);
            border: 1px solid rgba(242, 238, 230, 0.18);
            border-radius: 6px;
            font-size: 8px;
            font-weight: 900;
            letter-spacing: 0.65px;
            text-align: center;
            cursor: pointer;
            transition:
              border-color 0.2s ease,
              background 0.2s ease,
              transform 0.2s ease;
          }

          #fiyatlar .price-card-whatsapp:hover {
            color: #f4fff6;
            border-color: rgba(58, 190, 100, 0.58);
            background: rgba(36, 145, 72, 0.12);
            transform: translateY(-1px);
          }

          #fiyatlar .prices-state {
            width: 100%;
            margin-top: 28px;
            padding: 24px;
            color: #aaa69f;
            text-align: center;
            background: rgba(10, 10, 10, 0.70);
            border: 1px solid rgba(242, 238, 230, 0.14);
            border-radius: 14px;
          }

          #fiyatlar .prices-state-error {
            color: #e05252;
          }

          @media (max-width: 1000px) {
            #fiyatlar .prices-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 680px) {
            #fiyatlar .prices-section-content {
              width: 100%;
            }

            #fiyatlar .prices-grid {
              grid-template-columns: 1fr;
              gap: 12px;
              margin-top: 20px;
            }

            #fiyatlar .price-card {
              min-height: 0;
              padding: 16px 14px 14px;
              border-radius: 13px;
            }

            #fiyatlar .price-card-head h3 {
              font-size: 17px;
            }

            #fiyatlar .price-card-table-wrap {
              height: auto;
              min-height: 168px;
            }

            #fiyatlar .price-table-row span {
              padding: 8px 5px;
              font-size: 8px;
            }

            #fiyatlar .price-table-head span {
              font-size: 7px;
            }
          }

          /* =========================
             DOSYALAR
             ========================= */
          #dosyalar .downloads-section-content {
            width: min(1180px, calc(100% - 72px));
          }

          #dosyalar .downloads-grid {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            justify-content: stretch;
            gap: 16px;
            margin-top: 28px;
          }

          #dosyalar .download-card {
            position: relative;
            width: 100%;
            min-height: 225px;
            padding: 18px 18px 16px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            isolation: isolate;
            background:
              linear-gradient(
                140deg,
                rgba(22, 20, 16, 0.78),
                rgba(8, 9, 9, 0.95)
              );
            border: 1px solid rgba(242, 238, 230, 0.19);
            border-radius: 16px;
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.035),
              0 18px 45px rgba(0, 0, 0, 0.22);
            transition:
              border-color 0.2s ease,
              box-shadow 0.2s ease,
              transform 0.2s ease;
          }

          #dosyalar .download-card::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background:
              radial-gradient(
                circle at 8% 12%,
                rgba(238, 235, 228, 0.075),
                transparent 37%
              ),
              radial-gradient(
                circle at 100% 100%,
                rgba(238, 235, 228, 0.025),
                transparent 45%
              );
          }

          #dosyalar .download-card > * {
            position: relative;
            z-index: 1;
          }

          #dosyalar .download-card:hover {
            border-color: rgba(242, 238, 230, 0.32);
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.04),
              0 22px 50px rgba(0, 0, 0, 0.30);
            transform: translateY(-2px);
          }

          #dosyalar .download-card-number {
            position: absolute;
            top: 13px;
            right: 14px;
            color: rgba(227, 38, 38, 0.085);
            font-size: 30px;
            font-weight: 900;
            line-height: 1;
          }

          #dosyalar .download-card-icon {
            width: 40px;
            height: 40px;
            display: none;
            align-items: center;
            justify-content: center;
            color: #e32626;
            background: rgba(227, 38, 38, 0.055);
            border: 1px solid rgba(227, 38, 38, 0.18);
            border-radius: 10px;
            font-size: 18px;
            font-weight: 900;
          }

          #dosyalar .download-card-head {
            margin-top: 10px;
            padding: 0 34px;
            text-align: center;
          }

          #dosyalar .download-card-head small {
            display: block;
            margin-bottom: 5px;
            color: #7f7a72;
            font-size: 6.5px;
            font-weight: 700;
            letter-spacing: 1.8px;
            text-align: center;
          }

          #dosyalar .download-card-head h3 {
            margin: 0;
            color: #f0ede6;
            font-size: clamp(15px, 1vw, 18px);
            text-align: center;
            line-height: 1.08;
            overflow-wrap: anywhere;
          }

          #dosyalar .download-card-meta {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0;
            margin-top: 12px;
            border-top: 1px solid rgba(242, 238, 230, 0.10);
            border-bottom: 1px solid rgba(242, 238, 230, 0.10);
          }

          #dosyalar .download-card-meta > span {
            min-height: 42px;
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
          }

          #dosyalar .download-card-meta > span + span {
            border-left: 1px solid rgba(242, 238, 230, 0.08);
          }

          #dosyalar .download-card-meta small {
            color: #706c66;
            font-size: 6.5px;
            letter-spacing: 1.6px;
          }

          #dosyalar .download-card-meta strong {
            color: #dedad2;
            font-size: 11px;
          }

          #dosyalar .download-card-description {
            margin: 12px 0 14px;
            color: #a8a39b;
            font-size: 11px;
            line-height: 1.55;
            white-space: pre-wrap;
            overflow-wrap: anywhere;
          }

          #dosyalar .download-card-action {
            width: 100%;
            min-height: 36px;
            margin-top: auto;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #f3efe8;
            background: rgba(0, 0, 0, 0.30);
            border: 1px solid rgba(242, 238, 230, 0.20);
            border-radius: 6px;
            font-size: 9px;
            font-weight: 900;
            letter-spacing: 0.9px;
            transition:
              border-color 0.2s ease,
              background 0.2s ease,
              transform 0.2s ease;
          }

          #dosyalar .download-card-action:hover {
            border-color: rgba(242, 238, 230, 0.38);
            background: rgba(255, 255, 255, 0.04);
            transform: translateY(-1px);
          }

          #dosyalar .downloads-state {
            width: 100%;
            margin-top: 28px;
            padding: 28px;
            color: #aaa69f;
            text-align: center;
            background: rgba(10, 10, 10, 0.70);
            border: 1px solid rgba(242, 238, 230, 0.14);
            border-radius: 14px;
          }

          #dosyalar .downloads-state-error {
            color: #e05252;
          }

          @media (max-width: 1180px) {
            #dosyalar .downloads-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }

          @media (max-width: 900px) {
            #dosyalar .downloads-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 660px) {
            #dosyalar .downloads-grid {
              grid-template-columns: 1fr;
            }

            #dosyalar .download-card {
              width: 100%;
              min-height: 0;
            }
          }

          /* =========================
             YÖNETİM KARTLARI - SOSYAL LİNKLER
             ========================= */
          #yonetim .management-name {
            max-width: calc(100% - 88px);
            font-size: clamp(15px, 1.15vw, 19px) !important;
            line-height: 1.08 !important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          #yonetim .management-contact-row {
            max-width: calc(100% - 88px);
            min-height: 18px;
            margin-top: 2px;
          }


          #yonetim .management-role-pill {
            font-size: 7px !important;
            padding: 5px 10px !important;
          }

          #yonetim .management-real-name {
            display: block;
            overflow: hidden;
            color: #aaa69f;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          #yonetim .management-card-links {
            position: absolute;
            top: 144px;
            right: 18px;
            z-index: 4;
            width: 76px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 6px;
          }

          #yonetim .management-card-links a {
            min-height: 25px;
            padding: 0 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #d9d5cd;
            background: rgba(7, 7, 7, 0.56);
            border: 1px solid rgba(242, 238, 230, 0.17);
            border-radius: 5px;
            font-size: 6.5px;
            font-weight: 800;
            letter-spacing: 0.8px;
            transition:
              color 0.2s ease,
              border-color 0.2s ease,
              background 0.2s ease,
              transform 0.2s ease;
          }

          #yonetim .management-card-links a:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.045);
            border-color: rgba(242, 238, 230, 0.34);
            transform: translateX(-2px);
          }

          @media (max-width: 1100px) {
            #yonetim .management-name,
            #yonetim .management-contact-row {
              max-width: 100%;
            }

            #yonetim .management-card-links {
              position: static;
              width: 100%;
              margin-top: 10px;
              flex-direction: row;
            }

            #yonetim .management-card-links a {
              flex: 1;
            }

            #sunucular.content-section {
              overflow: visible;
            }

            #sunucular .server-triple-grid {
              grid-template-columns: 1fr !important;
            }

            #sunucular .server-square-card {
              aspect-ratio: auto;
              min-height: 390px !important;
            }
          }

        


          /* =========================
             DESKTOP NAVBAR - ORTADA LOGO
             ========================= */
          @media (min-width: 901px) {
            .navbar {
              height: 88px !important;
              background:
                linear-gradient(
                  180deg,
                  rgba(5, 5, 5, 0.96) 0%,
                  rgba(5, 5, 5, 0.90) 100%
                ) !important;
              border-top: 1px solid rgba(227, 38, 38, 0.18) !important;
              border-bottom: 1px solid rgba(227, 38, 38, 0.15) !important;
              box-shadow:
                0 14px 34px rgba(0, 0, 0, 0.28),
                inset 0 -1px 0 rgba(255, 255, 255, 0.025);
              backdrop-filter: blur(14px);
              -webkit-backdrop-filter: blur(14px);
            }

            .navbar::before {
              content: "";
              position: absolute;
              left: 50%;
              top: 0;
              width: 72px;
              height: 2px;
              background: #e32626;
              transform: translateX(-50%);
              box-shadow: 0 0 14px rgba(227, 38, 38, 0.45);
              pointer-events: none;
            }

            .navbar-inner {
              position: relative;
              width: min(1480px, calc(100% - 48px));
              height: 88px !important;
              margin: 0 auto;
              padding: 0 !important;
              display: grid !important;
              grid-template-columns:
                minmax(0, 1fr)
                104px
                minmax(0, 1fr);
              align-items: center !important;
              gap: 20px !important;
            }

            .mobile-menu-toggle,
            .mobile-brand,
            .mobile-nav {
              display: none !important;
            }

            .desktop-nav {
              height: 100%;
              display: flex !important;
              align-items: center;
              gap: clamp(24px, 2.2vw, 42px);
              min-width: 0;
            }

            .desktop-nav-left {
              justify-content: flex-end;
              padding-right: 18px;
            }

            .desktop-nav-right {
              justify-content: flex-start;
              padding-left: 18px;
            }

            .desktop-nav a {
              position: relative;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #d2d2d2;
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0;
              text-transform: none;
              white-space: nowrap;
              transition:
                color 0.2s ease,
                transform 0.2s ease;
            }

            .desktop-nav a:hover,
            .desktop-nav a.active {
              color: #f4f0e8;
              transform: translateY(-1px);
            }

            .desktop-nav a.active {
              color: #e32626;
            }

            .desktop-nav a::after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: 14px;
              width: 0;
              height: 2px;
              background: #e32626;
              transform: translateX(-50%);
              transition: width 0.2s ease;
              box-shadow: 0 0 10px rgba(227, 38, 38, 0.35);
            }

            .desktop-nav a:hover::after {
              width: 24px;
            }

            .desktop-nav a.active::after {
              width: 34px;
            }

            .desktop-brand {
              position: relative;
              width: 104px;
              height: 88px;
              display: flex !important;
              align-items: center;
              justify-content: center;
              z-index: 2;
            }

            .desktop-brand img {
              position: relative;
              z-index: 2;
              width: 72px;
              height: 72px;
              object-fit: contain;
              filter:
                drop-shadow(0 8px 14px rgba(0, 0, 0, 0.45))
                drop-shadow(0 0 12px rgba(227, 38, 38, 0.10));
              transition:
                transform 0.22s ease,
                filter 0.22s ease;
            }

            .desktop-brand:hover img {
              transform: translateY(-2px) scale(1.025);
              filter:
                drop-shadow(0 10px 18px rgba(0, 0, 0, 0.52))
                drop-shadow(0 0 16px rgba(227, 38, 38, 0.20));
            }

            .desktop-brand-glow {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 82px;
              height: 48px;
              background: radial-gradient(
                ellipse,
                rgba(227, 38, 38, 0.11),
                transparent 68%
              );
              transform: translate(-50%, -50%);
              pointer-events: none;
            }
          }

          @media (min-width: 901px) and (max-width: 1180px) {
            .navbar-inner {
              width: calc(100% - 28px);
              grid-template-columns:
                minmax(0, 1fr)
                88px
                minmax(0, 1fr);
              gap: 12px !important;
            }

            .desktop-nav {
              gap: 16px;
            }

            .desktop-nav-left {
              padding-right: 8px;
            }

            .desktop-nav-right {
              padding-left: 8px;
            }

            .desktop-nav a {
              font-size: 12px;
              letter-spacing: 0;
            }

            .desktop-brand {
              width: 88px;
            }

            .desktop-brand img {
              width: 62px;
              height: 62px;
            }
          }

          /* =========================
             MOBİL GENEL GÖRÜNÜM - PROFESYONEL
             ========================= */
          .mobile-menu-toggle,
          .mobile-menu-backdrop {
            display: none;
          }

          @media (max-width: 900px) {
            .desktop-nav,
            .desktop-brand {
              display: none !important;
            }

            .mobile-brand {
              display: flex !important;
            }

            html {
              scroll-snap-type: none !important;
              scroll-padding-top: 76px;
            }

            body {
              overflow-x: hidden;
            }

            .site-page {
              position: relative;
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
              background:
                linear-gradient(
                  180deg,
                  #080808 0%,
                  #050505 55%,
                  #090404 100%
                ) !important;
              background-image: none !important;
              background-attachment: scroll !important;
            }

            /* Mobilde her bölümde arka plan görünür kalsın. */
            .site-section {
              min-height: calc(100svh - 68px) !important;
              scroll-snap-align: none !important;
              scroll-margin-top: 76px;
              background: transparent !important;
              background-image: none !important;
            }

            .navbar {
              height: 68px !important;
              z-index: 300 !important;
              background: rgba(5, 5, 5, 0.96) !important;
              border-bottom: 1px solid rgba(227, 38, 38, 0.13) !important;
              backdrop-filter: blur(14px);
              -webkit-backdrop-filter: blur(14px);
            }

            .navbar-inner {
              height: 68px !important;
              padding: 0 12px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: flex-start !important;
              gap: 10px !important;
            }

            .mobile-menu-toggle {
              width: 42px;
              height: 42px;
              flex: 0 0 42px;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 5px;
              background: rgba(12, 12, 12, 0.88);
              border: 1px solid rgba(227, 38, 38, 0.34);
              border-radius: 11px;
              cursor: pointer;
              z-index: 330;
              box-shadow:
                inset 0 0 18px rgba(227, 38, 38, 0.04),
                0 6px 18px rgba(0, 0, 0, 0.28);
            }

            .mobile-menu-toggle span {
              width: 18px;
              height: 2px;
              display: block;
              background: #e32626;
              border-radius: 99px;
              transition:
                transform 0.2s ease,
                opacity 0.2s ease;
            }

            .mobile-menu-toggle.open span:nth-child(1) {
              transform: translateY(7px) rotate(45deg);
            }

            .mobile-menu-toggle.open span:nth-child(2) {
              opacity: 0;
            }

            .mobile-menu-toggle.open span:nth-child(3) {
              transform: translateY(-7px) rotate(-45deg);
            }

            .brand {
              min-width: 0;
              max-width: calc(100% - 54px);
              flex: 1 1 auto;
            }

            .mobile-brand {
              height: 100%;
              align-items: center;
              gap: 9px !important;
              overflow: hidden;
            }

            .brand-logo-image {
              width: 34px !important;
              height: 34px !important;
              flex: 0 0 34px;
            }

            .brand-text {
              min-width: 0;
            }

            .brand-text strong {
              display: block;
              max-width: 170px;
              overflow: hidden;
              font-size: 14px !important;
              letter-spacing: 1.5px !important;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .brand-text span {
              display: block;
              max-width: 170px;
              overflow: hidden;
              font-size: 7px !important;
              letter-spacing: 2px !important;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            /* Menü ekranın üstünde net görünür, arka sayfa karartılır. */
            .mobile-nav {
              isolation: isolate;
              filter: none !important;
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
              position: fixed !important;
              top: 68px !important;
              left: 0 !important;
              bottom: 0 !important;
              z-index: 320 !important;
              width: min(310px, 86vw) !important;
              height: calc(100dvh - 68px) !important;
              padding: 16px 12px 28px !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 5px !important;
              overflow-x: hidden !important;
              overflow-y: auto !important;
              -webkit-overflow-scrolling: touch;
              background:
                radial-gradient(
                  circle at 0 0,
                  rgba(227, 38, 38, 0.15),
                  transparent 32%
                ),
                rgba(5, 5, 5, 0.985) !important;
              border-right: 1px solid rgba(227, 38, 38, 0.20);
              box-shadow: 24px 0 60px rgba(0, 0, 0, 0.62);
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
              transform: translate3d(-105%, 0, 0);
              transition: transform 0.24s ease;
              will-change: transform;
            }

            .mobile-nav.mobile-open {
              transform: translate3d(0, 0, 0);
            }

            .mobile-nav a {
              width: 100%;
              height: 46px !important;
              min-height: 46px !important;
              padding: 0 14px !important;
              flex: 0 0 46px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: flex-start !important;
              color: #aaa69f !important;
              background: transparent !important;
              border: 1px solid transparent !important;
              border-radius: 9px !important;
              font-size: 12px !important;
              font-weight: 700 !important;
              line-height: 1 !important;
              text-align: left !important;
            }

            .mobile-nav a:hover,
            .mobile-nav a.active {
              color: #f1eee8 !important;
              background: rgba(227, 38, 38, 0.085) !important;
              border-color: rgba(227, 38, 38, 0.18) !important;
            }

            .mobile-nav a.active::after {
              display: none !important;
            }

            .mobile-menu-backdrop {
              position: fixed;
              inset: 68px 0 0 0;
              z-index: 250;
              width: 100%;
              height: calc(100dvh - 68px);
              display: block;
              padding: 0;
              background: rgba(0, 0, 0, 0.64);
              border: 0;
              border-radius: 0;
              backdrop-filter: blur(3px);
              -webkit-backdrop-filter: blur(3px);
            }

            .hero {
              min-height: calc(100svh - 68px) !important;
              padding: 84px 14px 34px !important;
              align-items: center !important;
            }

            .content-section {
              min-height: calc(100svh - 68px) !important;
              padding: 28px 14px 38px !important;
              align-items: flex-start !important;
              justify-content: center !important;
            }

            .content-section > .section-content {
              transform: none !important;
              margin-top: 0 !important;
            }

            .section-content,
            .hero-content {
              width: 100% !important;
              max-width: 100% !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }

            .content-section .section-topline {
              margin-top: 0 !important;
            }

            .section-topline,
            .hero-topline {
              margin-bottom: 10px !important;
              gap: 10px !important;
              font-size: 8px !important;
              letter-spacing: 4px !important;
            }

            .section-topline span,
            .hero-topline span {
              width: 24px !important;
            }

            .section-title {
              max-width: 100%;
              font-size: clamp(30px, 10vw, 44px) !important;
              letter-spacing: 2.5px !important;
              line-height: 1.06 !important;
              text-align: center !important;
              overflow-wrap: anywhere;
            }

            .hero-content h1 {
              max-width: 100%;
              font-size: clamp(44px, 15vw, 68px) !important;
              letter-spacing: 2.5px !important;
              line-height: 0.98 !important;
              text-align: center !important;
              overflow-wrap: anywhere;
            }

            .hero-content h2 {
              max-width: 100%;
              margin-top: 14px !important;
              font-size: clamp(18px, 6vw, 28px) !important;
              letter-spacing: 6px !important;
              text-align: center !important;
            }

            .hero-buttons {
              width: 100%;
              max-width: 420px;
              margin-top: 28px !important;
              flex-direction: column !important;
              gap: 10px !important;
            }

            .hero-buttons .btn,
            .server-action-btn {
              width: 100% !important;
              height: 50px !important;
              font-size: 13px !important;
            }

            .hero-announcements {
              position: relative !important;
              inset: auto !important;
              width: 100% !important;
              max-width: 420px !important;
              margin: 44px auto 26px !important;
              transform: none !important;
            }

            /* GALERİ - menüden gelince başlık düzgün merkezde başlar */
            #galeri.content-section {
              padding-top: 28px !important;
            }

            #galeri .gallery-section-content {
              width: 100% !important;
              align-items: center !important;
            }

            #galeri .gallery-grid {
              width: 100% !important;
              margin-top: 20px !important;
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 9px !important;
            }

            #galeri .gallery-card {
              border-radius: 8px !important;
            }

            /* YÖNETİM */
            #yonetim .management-grid {
              width: 100% !important;
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 10px !important;
            }

            #yonetim .management-card {
              min-height: 210px !important;
              padding: 16px !important;
            }

            #yonetim .management-avatar-box {
              width: 54px !important;
              height: 54px !important;
              border-radius: 13px !important;
            }

            #yonetim .management-name {
              margin-top: 12px !important;
              font-size: 16px !important;
            }

            /* SUNUCULAR - mobil için tamamen ayrı kompakt düzen */
            #sunucular.content-section {
              min-height: auto !important;
              padding: 28px 12px 36px !important;
              align-items: flex-start !important;
              justify-content: flex-start !important;
              overflow: visible !important;
            }

            #sunucular .servers-section-content {
              width: 100% !important;
              max-width: 520px !important;
              margin: 0 auto !important;
            }

            #sunucular .server-triple-grid {
              width: 100% !important;
              margin-top: 20px !important;
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }

            #sunucular .server-square-card {
              width: 100% !important;
              max-width: 100% !important;
              min-height: 0 !important;
              height: auto !important;
              aspect-ratio: auto !important;
              padding: 15px !important;
              overflow: visible !important;
              border-radius: 13px !important;
            }

            #sunucular .server-square-card .server-card-index {
              top: 12px !important;
              right: 14px !important;
              font-size: 30px !important;
            }

            #sunucular .server-square-card .server-panel-top {
              min-height: 50px !important;
              padding-bottom: 10px !important;
              gap: 10px !important;
            }

            #sunucular .server-square-card .server-panel-top small {
              font-size: 6px !important;
              letter-spacing: 1.5px !important;
            }

            #sunucular .server-square-card .server-panel-top h3 {
              max-width: calc(100% - 74px);
              font-size: 14px !important;
              line-height: 1.25 !important;
              -webkit-line-clamp: 2;
            }

            #sunucular .server-live-status {
              gap: 7px !important;
            }

            #sunucular .server-live-status strong {
              font-size: 9px !important;
            }

            #sunucular .server-square-card .server-panel-stats {
              margin-top: 9px !important;
              display: grid !important;
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 0 !important;
            }

            #sunucular .server-square-card .server-stat {
              min-width: 0 !important;
              min-height: 48px !important;
              padding: 7px 8px !important;
              gap: 7px !important;
            }

            #sunucular .server-square-card .server-stat:nth-child(odd) {
              padding-left: 0 !important;
            }

            #sunucular .server-square-card .server-stat:nth-child(even) {
              padding-right: 0 !important;
            }

            #sunucular .server-square-card .server-stat small {
              margin-bottom: 3px !important;
              font-size: 5.5px !important;
              letter-spacing: 1px !important;
            }

            #sunucular .server-square-card .server-stat strong {
              display: block;
              max-width: 100%;
              overflow: hidden;
              font-size: 9.5px !important;
              line-height: 1.3 !important;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            #sunucular .server-square-card .info-svg-icon {
              width: 16px !important;
              height: 16px !important;
              flex: 0 0 16px !important;
            }

            #sunucular .server-square-card .server-panel-actions {
              margin-top: 8px !important;
              padding-top: 8px !important;
            }

            #sunucular .server-square-card .server-panel-actions a {
              width: 100% !important;
              height: 36px !important;
              font-size: 8px !important;
            }

            #sunucular .server-square-card > .server-square-list,
            #sunucular .ts3-square-card > .server-square-list {
              width: 100% !important;
              min-height: 0 !important;
              margin-top: 9px !important;
              padding-top: 9px !important;
              display: flex !important;
              flex: none !important;
              flex-direction: column !important;
              border-left: 0 !important;
              border-top: 1px solid rgba(242, 238, 230, 0.09) !important;
            }

            #sunucular .server-square-list-title {
              margin-bottom: 7px !important;
              font-size: 7px !important;
              letter-spacing: 1px !important;
            }

            #sunucular .server-square-list-title span:last-child {
              font-size: 6.5px !important;
            }

            #sunucular .server-square-list-items {
              width: 100% !important;
              min-height: 70px !important;
              max-height: 220px !important;
              display: grid !important;
              align-content: start !important;
              gap: 5px !important;
              overflow-x: hidden !important;
              overflow-y: auto !important;
              overscroll-behavior: contain;
              -webkit-overflow-scrolling: touch;
              touch-action: pan-y;
              padding: 0 3px 3px 0 !important;
              scrollbar-width: thin !important;
              scrollbar-color: rgba(227, 38, 38, 0.42) transparent;
            }

            #sunucular .server-square-list-items::-webkit-scrollbar {
              width: 4px !important;
              display: block !important;
            }

            #sunucular .server-square-list-items::-webkit-scrollbar-track {
              background: transparent;
            }

            #sunucular .server-square-list-items::-webkit-scrollbar-thumb {
              background: rgba(227, 38, 38, 0.42);
              border-radius: 99px;
            }

            #sunucular .server-square-player {
              min-height: 32px !important;
              padding: 6px 7px !important;
              grid-template-columns: 22px minmax(0, 1fr) auto !important;
              gap: 6px !important;
              border-radius: 6px !important;
              font-size: 9px !important;
            }

            #sunucular .server-square-player strong {
              font-size: 9px !important;
            }

            #sunucular .server-square-player > span:last-child {
              font-size: 8px !important;
            }

            /* Kurallar / destek / iletişim */
            .simple-rules-tabs,
            .rules-editor-tabs {
              width: 100% !important;
            }

            .simple-rules-card,
            .support-card,
            .contact-big-card {
              width: 100% !important;
              max-width: 100% !important;
            }

            .simple-rules-scroll {
              max-height: min(56svh, 500px) !important;
              overflow-y: auto !important;
              -webkit-overflow-scrolling: touch;
            }

            #dosyalar .downloads-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 10px !important;
            }

            input,
            textarea,
            select {
              max-width: 100%;
            }
          }

          @media (max-width: 600px) {
            .navbar-inner {
              padding: 0 10px !important;
            }

            .brand-text strong {
              max-width: 130px;
            }

            .brand-text span {
              max-width: 130px;
            }

            .content-section {
              padding-top: 24px !important;
              padding-left: 11px !important;
              padding-right: 11px !important;
            }

            .section-title {
              font-size: clamp(29px, 9.5vw, 40px) !important;
            }

            #galeri .gallery-grid,
            #yonetim .management-grid,
            #dosyalar .downloads-grid {
              grid-template-columns: 1fr !important;
            }

            #galeri .gallery-card {
              max-width: 440px;
              margin-left: auto;
              margin-right: auto;
            }

            #yonetim .management-card {
              min-height: 200px !important;
            }

            #sunucular .server-square-card {
              padding: 13px !important;
            }

            #sunucular .server-square-card .server-panel-stats {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }

            .hero-announcements {
              max-width: 100% !important;
            }

            input,
            textarea,
            select {
              font-size: 16px !important;
            }
          }

          @media (max-width: 380px) {
            .navbar-inner {
              padding: 0 8px !important;
            }

            .mobile-menu-toggle {
              width: 40px;
              height: 40px;
              flex-basis: 40px;
            }

            .brand-logo-image {
              width: 33px !important;
              height: 33px !important;
            }

            .brand-text strong {
              max-width: 112px;
              font-size: 13px !important;
            }

            .brand-text span {
              max-width: 112px;
              font-size: 6.5px !important;
              letter-spacing: 1.5px !important;
            }

            #sunucular .server-square-card .server-stat strong {
              font-size: 8.5px !important;
            }

            #sunucular .server-square-player {
              grid-template-columns: 19px minmax(0, 1fr) auto !important;
            }
          }



          /* =========================
             MOBİL: SUNUCULAR + İLETİŞİM ÜST HİZA FIX
             globals.css içindeki ID bazlı eski paddingleri kesin olarak ezer.
             ========================= */
          @media (max-width: 900px) {
            main.site-page #sunucular.content-section,
            main.site-page #iletisim.content-section {
              min-height: auto !important;
              padding-top: 28px !important;
              padding-bottom: 38px !important;
              align-items: flex-start !important;
              justify-content: flex-start !important;
            }

            main.site-page #sunucular .servers-section-content,
            main.site-page #iletisim .contact-section-content {
              width: 100% !important;
              margin-top: 0 !important;
              transform: none !important;
            }

            main.site-page #sunucular .section-topline,
            main.site-page #iletisim .section-topline {
              margin-top: 0 !important;
            }

            main.site-page #iletisim .contact-single-wrap {
              margin-top: 24px !important;
            }
          }

          @media (max-width: 600px) {
            main.site-page #sunucular.content-section,
            main.site-page #iletisim.content-section {
              padding-top: 24px !important;
            }
          }

`}</style>

        <div className="section-overlay"></div>

        <div className="section-content servers-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            SUNUCULAR

          </h2>

          <div className="server-triple-grid">

            {servers.slice(0, 2).map((server, index) => (

              <article

                key={server.id}

                className="server-panel-card server-square-card"

              >

                <div className="server-card-index">

                  {String(index + 1).padStart(2, "0")}

                </div>

                <div className="server-panel-top">

                  <div>

                    <small>CS 1.6 SUNUCUSU</small>

                    <h3>{server.name}</h3>

                  </div>

                  <div className="server-live-status">

                    <span

                      className="status-dot"

                      style={{

                        background: server.online

                          ? "#61dc75"

                          : "#e05252",

                      }}

                    ></span>

                    <strong

                      style={{

                        color: server.online

                          ? "#6ee27d"

                          : "#e05252",

                      }}

                    >

                      {server.online ? "AÇIK" : "KAPALI"}

                    </strong>

                  </div>

                </div>

                <div className="server-panel-stats">

                  <div className="server-stat">

                    <ServerIcon />

                    <div>

                      <small>IP ADRESİ</small>

                      <strong>{server.connect}</strong>

                    </div>

                  </div>

                  <div className="server-stat">

                    <MapIcon />

                    <div>

                      <small>HARİTA</small>

                      <strong>

                        {server.online ? server.map : "-"}

                      </strong>

                    </div>

                  </div>

                  <div className="server-stat">

                    <PlayersIcon />

                    <div>

                      <small>OYUNCULAR</small>

                      <strong>

                        {server.online

                          ? `${server.players} / ${server.maxPlayers}`

                          : `-- / ${server.maxPlayers || 32}`}

                      </strong>

                    </div>

                  </div>

                  <div className="server-stat">

                    <ServerTypeIcon />

                    <div>

                      <small>SUNUCU TÜRÜ</small>

                      <strong>

                        {server.serverType

                          ? String(server.serverType).toUpperCase()

                          : siteConfig.subTitle}

                      </strong>

                    </div>

                  </div>

                </div>

                <div className="server-panel-actions">

                  <a href={`steam://connect/${server.connect}`}>

                    SUNUCUYA BAĞLAN

                  </a>

                </div>

                <div className="server-square-list">

                  <div className="server-square-list-title">

                    <span>CANLI OYUNCULAR</span>

                    <span>

                      {server.online

                        ? `${server.players || 0} KİŞİ`

                        : "KAPALI"}

                    </span>

                  </div>

                  {!server.online ? (

                    <div className="server-square-empty">

                      Sunucu şu anda kapalı.

                    </div>

                  ) : !server.playerList ||

                    server.playerList.length === 0 ? (

                    <div className="server-square-empty">

                      Sunucuda şu anda oyuncu bulunmuyor.

                    </div>

                  ) : (

                    <div className="server-square-list-items">

                      {server.playerList.map(

                        (player, playerIndex) => (

                          <div

                            key={`${server.id}-${playerIndex}-${player.name}`}

                            className="server-square-player"

                          >

                            <span>{playerIndex + 1}.</span>

                            <strong title={player.name}>

                              {player.name}

                            </strong>

                            <span>{player.score} skor</span>

                          </div>

                        )

                      )}

                    </div>

                  )}

                </div>

              </article>

            ))}

            <article className="server-panel-card server-square-card ts3-square-card">

              <div className="server-card-index">03</div>

              <div className="server-panel-top">

                <div>

                  <small>TS3 SUNUCUSU</small>

                  <h3 title={ts3Status?.server?.name || "ORTAMCS TEAMSPEAK 3"}>
                    {ts3Status?.server?.name || "ORTAMCS TEAMSPEAK 3"}
                  </h3>

                </div>

                <div className="server-live-status">

                  <span

                    className="status-dot"

                    style={{

                      background: ts3Loading

                        ? "#d6a93e"

                        : ts3Status?.online

                          ? "#61dc75"

                          : "#e05252",

                    }}

                  ></span>

                  <strong

                    style={{

                      color: ts3Loading

                        ? "#d6a93e"

                        : ts3Status?.online

                          ? "#6ee27d"

                          : "#e05252",

                    }}

                  >

                    {ts3Loading

                      ? "SORGULANIYOR"

                      : ts3Status?.online

                        ? "AÇIK"

                        : "KAPALI"}

                  </strong>

                </div>

              </div>

              <div className="server-panel-stats">

                <div className="server-stat">

                  <ServerIcon />

                  <div>

                    <small>TS3 ADRESİ</small>

                    <strong>

                      {ts3Status?.server?.address ||

                        primaryServer.ts3Address ||

                        siteConfig.defaultServer.ts3Address ||

                        "-"}

                    </strong>

                  </div>

                </div>

                <div className="server-stat">

                  <PlayersIcon />

                  <div>

                    <small>ONLINE</small>

                    <strong>

                      {ts3Loading

                        ? "..."

                        : ts3Status?.online

                          ? `${ts3Status.server?.clients || 0} / ${ts3Status.server?.maxClients || 0}`

                          : "-- / --"}

                    </strong>

                  </div>

                </div>

                <div className="server-stat">

                  <ServerTypeIcon />

                  <div>

                    <small>SUNUCU TÜRÜ</small>

                    <strong>Teamspeak 3</strong>

                  </div>

                </div>

              </div>

              <div className="server-panel-actions">

                <a

                  href={`ts3server://${

                    ts3Status?.server?.address ||

                    primaryServer.ts3Address ||

                    siteConfig.defaultServer.ts3Address

                  }`}

                >

                  TS3&apos;E BAĞLAN

                </a>

              </div>

              <div className="server-square-list">

                <div className="server-square-list-title">

                  <span>ONLINE KULLANICILAR</span>

                  <span>

                    {ts3Status?.online

                      ? `${ts3Status.clients?.length || 0} KİŞİ`

                      : "0 KİŞİ"}

                  </span>

                </div>

                {ts3Loading ? (

                  <div className="server-square-empty">

                    TeamSpeak sorgulanıyor...

                  </div>

                ) : ts3Error || !ts3Status?.online ? (

                  <div className="server-square-empty">

                    {ts3Error ||

                      "TeamSpeak sunucusu şu anda kapalı."}

                  </div>

                ) : !ts3Status.clients ||

                  ts3Status.clients.length === 0 ? (

                  <div className="server-square-empty">

                    TeamSpeak&apos;te şu anda kullanıcı yok.

                  </div>

                ) : (

                  <div className="server-square-list-items">

                    {ts3Status.clients.map(

                      (client, clientIndex) => (

                        <div

                          key={`${client.id}-${client.nickname}-${clientIndex}`}

                          className="server-square-player ts3-online-nickname"

                        >

                          <span>{clientIndex + 1}.</span>

                          <strong title={client.nickname}>

                            {client.nickname}

                          </strong>

                        </div>

                      )

                    )}

                  </div>

                )}

              </div>

            </article>

          </div>

        </div>

      </section>

      <section

        id="galeri"

        className="content-section gallery-section site-section"

      >

        <div className="section-overlay"></div>

        <div className="section-content gallery-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            GALERİ

          </h2>

          {galleryLoading ? (

            <div className="gallery-state">

              Galeri yükleniyor...

            </div>

          ) : galleryError ? (

            <div className="gallery-state gallery-state-error">

              {galleryError}

            </div>

          ) : galleryItems.length ===

            0 ? (

            <div className="gallery-state">

              Henüz galeri fotoğrafı

              eklenmedi.

            </div>

          ) : (

            <>

              <div className="gallery-grid">

                {galleryItems

                  .slice(

                    0,

                    visibleGalleryCount

                  )

                  .map(

                    (

                      item

                    ) => (

                      <button

                        key={

                          item.id

                        }

                        type="button"

                        className="gallery-card"

                        onClick={() =>

                          setSelectedGalleryItem(

                            item

                          )

                        }

                      >

                        <img

                          src={

                            item.image_url

                          }

                          alt={

                            item.title ||

                            "Galeri fotoğrafı"

                          }

                        />

                        <div className="gallery-card-overlay"></div>

                        <div className="gallery-zoom-hint">

                          BÜYÜT

                        </div>

                      </button>

                    )

                  )}

              </div>

              {visibleGalleryCount <

                galleryItems.length && (

                <button

                  type="button"

                  className="gallery-more-btn"

                  onClick={

                    showMoreGallery

                  }

                >

                  DAHA FAZLA GÖSTER

                </button>

              )}

            </>

          )}

        </div>

      </section>

      <section

        id="yonetim"

        className="content-section management-section site-section"

      >

        <div className="section-overlay"></div>

        <div className="section-content management-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            YÖNETİM

          </h2>

          {managementLoading ? (

            <div className="management-state">

              Yönetim kadrosu

              yükleniyor...

            </div>

          ) : managementError ? (

            <div className="management-state management-state-error">

              {managementError}

            </div>

          ) : managementItems.length ===

            0 ? (

            <div className="management-state">

              Henüz yönetim kadrosu

              eklenmedi.

            </div>

          ) : (

            <>

              <div className="management-grid">

                {managementItems

                  .slice(

                    0,

                    visibleManagementCount

                  )

                  .map(

                    (

                      item,

                      index

                    ) => (

                      <article

                        key={

                          item.id

                        }

                        className="management-card"

                      >

                        <div className="management-card-number">

                          {String(

                            index +

                            1

                          ).padStart(

                            2,

                            "0"

                          )}

                        </div>

                        <div className="management-avatar-box">

                          {item.avatar_url ? (

                            <img

                              src={

                                item.avatar_url

                              }

                              alt={

                                item.name

                              }

                            />

                          ) : (

                            <img

                              src={siteConfig.logo}

                              alt=""

                              className="management-default-logo"

                            />

                          )}

                        </div>

                        <div className="management-role-pill">

                          <span></span>

                          {

                            item.role

                          }

                        </div>

                        <h3 className="management-name">

                          {

                            item.name

                          }

                        </h3>

                        <div className="management-contact-row">

                          {item.discord && (

                            <span className="management-real-name">

                              {item.discord}

                            </span>

                          )}

                        </div>

                        {(item.steam_url || item.instagram_url) && (

                          <div className="management-card-links">

                            {item.steam_url && (

                              <a

                                href={item.steam_url}

                                target="_blank"

                                rel="noreferrer"

                                title="Steam"

                              >

                                STEAM

                              </a>

                            )}

                            {item.instagram_url && (

                              <a

                                href={item.instagram_url}

                                target="_blank"

                                rel="noreferrer"

                                title="lca.pro"

                              >

                                INSTAGRAM

                              </a>

                            )}

                          </div>

                        )}

                        <div className="management-card-bottom">

                          <span>

                            MANAGEMENT

                          </span>

                          <ShieldIcon />

                        </div>

                      </article>

                    )

                  )}

              </div>

              {visibleManagementCount <

                managementItems.length && (

                <button

                  type="button"

                  className="management-more-btn"

                  onClick={

                    showMoreManagement

                  }

                >

                  DAHA FAZLA GÖSTER

                </button>

              )}

            </>

          )}

        </div>

      </section>

      <section

        id="kurallar"

        className="content-section simple-rules-section site-section"

      >

        <div className="section-overlay"></div>

        <div className="section-content simple-rules-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            KURALLAR

          </h2>

          <div className="simple-rules-tabs">

            <button

              type="button"

              className={

                rulesTab ===

                "server"

                  ? "active"

                  : ""

              }

              onClick={() =>

                setRulesTab(

                  "server"

                )

              }

            >

              SUNUCU KURALLARI

            </button>

            <button

              type="button"

              className={

                rulesTab ===

                "admin"

                  ? "active"

                  : ""

              }

              onClick={() =>

                setRulesTab(

                  "admin"

                )

              }

            >

              ADMIN KURALLARI

            </button>

          </div>

          {rulesLoading ? (

            <div className="rules-state">

              Kurallar yükleniyor...

            </div>

          ) : rulesError ? (

            <div className="rules-state rules-state-error">

              {rulesError}

            </div>

          ) : !activeRuleRecord ? (

            <div className="rules-state">

              Bu bölüm için henüz kural

              eklenmedi.

            </div>

          ) : (

            <article className="simple-rules-card">

              <div className="simple-rules-card-top">

                <div>

                  <small>

                    KURALLAR

                  </small>

                  <h3>

                    {rulesTab ===

                    "server"

                      ? "SUNUCU KURALLARI"

                      : "ADMIN KURALLARI"}

                  </h3>

                </div>

                <span>

                  {rulesTab ===

                  "server"

                    ? "01"

                    : "02"}

                </span>

              </div>

              <div className="simple-rules-scroll">

                <pre>

                  {

                    activeRuleRecord.content

                  }

                </pre>

              </div>

            </article>

          )}

        </div>

      </section>

      <section

        id="fiyatlar"

        className="content-section prices-section site-section"

      >

        <div className="section-overlay"></div>

        <div className="section-content prices-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            FİYATLAR

          </h2>

          {pricesLoading ? (

            <div className="prices-state">

              Fiyatlar yükleniyor...

            </div>

          ) : pricesError ? (

            <div className="prices-state prices-state-error">

              {pricesError}

            </div>

          ) : prices.length === 0 ? (

            <div className="prices-state">

              Henüz fiyat kartı eklenmedi.

            </div>

          ) : (

            <div className="prices-grid">

              {prices.map((item, index) => {

                const featureList = String(item.features || "")
                  .split("\n")
                  .map((feature) => feature.trim())
                  .filter(Boolean);

                const tableRows = featureList
                  .filter((feature) => feature.includes("|"))
                  .map((feature) => {
                    const isHeader = feature.startsWith("#");
                    const cleanFeature = feature.replace(/^#\s*/, "");
                    return {
                      isHeader,
                      cells: cleanFeature
                        .split("|")
                        .map((cell) => cell.trim())
                        .filter(Boolean),
                    };
                  })
                  .filter((row) => row.cells.length > 1);

                const plainFeatures = featureList.filter(
                  (feature) => !feature.includes("|")
                );

                const whatsappMessage = encodeURIComponent(
                  `Merhaba, LCA Pro Public "${item.title}" fiyatı hakkında bilgi almak istiyorum.`
                );

                return (

                  <article className="price-card" key={item.id}>

                    <div className="price-card-number">

                      {String(index + 1).padStart(2, "0")}

                    </div>

                    <div
                      className={`price-card-head ${
                        !item.price && !item.period ? "price-card-head-centered" : ""
                      }`}
                    >

                      <small>PAKET</small>

                      <h3>{item.title}</h3>

                    </div>

                    <div
                      className={`price-card-price ${
                        !item.price && !item.period ? "price-card-price-empty" : ""
                      }`}
                    >
                      {item.price && (
                        <span className="price-card-price-main">
                          {item.price}
                        </span>
                      )}

                      {item.period && (
                        <span className="price-card-period">
                          {item.price ? "/ " : ""}
                          {item.period}
                        </span>
                      )}

                      {!item.price && !item.period && (
                        <span className="price-card-period" aria-hidden="true">
                          &nbsp;
                        </span>
                      )}
                    </div>

                    {tableRows.length > 0 && (
                      <div className="price-card-table-wrap">
                        <div className="price-card-table">
                          {tableRows.map((row, rowIndex) => (
                            <div
                              className={`price-table-row ${
                                row.isHeader ? "price-table-head" : ""
                              }`}
                              style={{
                                gridTemplateColumns: `repeat(${row.cells.length}, minmax(0, 1fr))`,
                              }}
                              key={`${item.id}-row-${rowIndex}`}
                            >
                              {row.cells.map((cell, cellIndex) => (
                                <span
                                  key={`${item.id}-row-${rowIndex}-cell-${cellIndex}`}
                                >
                                  {cell}
                                </span>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {plainFeatures.length > 0 && (
                      <div className="price-card-features">
                        {plainFeatures.map((feature, featureIndex) => (
                          <div
                            className="price-card-feature"
                            key={`${item.id}-${featureIndex}`}
                          >
                            <span></span>
                            <strong>{feature}</strong>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.description && (
                      <p className="price-card-description price-card-description-bottom">
                        {item.description}
                      </p>
                    )}

                    <a
                      className="price-card-action price-card-whatsapp"
                      href={`https://wa.me/905050154372?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WHATSAPP İLE İLETİŞİME GEÇ
                    </a>

                  </article>

                );

              })}

            </div>

          )}

        </div>

      </section>

      <section

        id="dosyalar"

        className="content-section downloads-section site-section"

      >

        <div className="section-overlay"></div>

        <div className="section-content downloads-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            DOSYALAR

          </h2>

          {downloadsLoading ? (

            <div className="downloads-state">

              Dosyalar yükleniyor...

            </div>

          ) : downloadsError ? (

            <div className="downloads-state downloads-state-error">

              {downloadsError}

            </div>

          ) : downloads.length === 0 ? (

            <div className="downloads-state">

              Henüz dosya eklenmedi.

            </div>

          ) : (

            <div className="downloads-grid">

              {downloads.map((item, index) => (

                <article className="download-card" key={item.id}>

                  <div className="download-card-number">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                  <div className="download-card-head">

                    <small>DOSYA</small>

                    <h3>{item.title}</h3>

                  </div>

                  <div className="download-card-meta">

                    {item.version && (

                      <span>

                        <small>SÜRÜM</small>

                        <strong>{item.version}</strong>

                      </span>

                    )}

                    {item.file_size && (

                      <span>

                        <small>BOYUT</small>

                        <strong>{item.file_size}</strong>

                      </span>

                    )}

                  </div>

                  {item.description && (

                    <p className="download-card-description">

                      {item.description}

                    </p>

                  )}

                  <a

                    className="download-card-action"

                    href={item.download_url}

                    target="_blank"

                    rel="noreferrer"

                  >

                    DOSYAYI İNDİR

                  </a>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>

      <section

        id="destek"

        className="content-section support-section site-section"

      >

        <div className="section-overlay"></div>

        <div className="section-content support-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            DESTEK

          </h2>

          <div className="support-card">

            <div className="support-card-heading">

              <div>

                <small>

                  DESTEK MERKEZİ

                </small>

                <h3>

                  DESTEK TALEBİ

                  OLUŞTUR

                </h3>

              </div>

              <span>

                01

              </span>

            </div>

            <p className="support-intro">

              Ban itirazı, oyuncu

              şikayeti, admin

              şikayeti veya teknik

              sorunlar için buradan

              destek talebi

              oluşturabilirsin.

            </p>

            <form

              className="support-form"

              onSubmit={

                sendSupportRequest

              }

            >

              <div

                className="support-honeypot"

                aria-hidden="true"

              >

                <label>

                  Website

                  <input

                    type="text"

                    tabIndex={-1}

                    autoComplete="off"

                    value={

                      supportWebsite

                    }

                    onChange={(

                      event

                    ) =>

                      setSupportWebsite(

                        event

                          .target

                          .value

                      )

                    }

                  />

                </label>

              </div>

              <label className="support-field">

                <span>

                  DESTEK TÜRÜ

                </span>

                <select

                  value={

                    supportType

                  }

                  onChange={(

                    event

                  ) =>

                    setSupportType(

                      event

                        .target

                        .value

                    )

                  }

                >

                  <option value="ban_appeal">

                    Ban İtirazı

                  </option>

                  <option value="player_report">

                    Oyuncu Şikayeti

                  </option>

                  <option value="admin_report">

                    Admin Şikayeti

                  </option>

                  <option value="technical">

                    Teknik Sorun

                  </option>

                  <option value="other">

                    Diğer

                  </option>

                </select>

              </label>

              <label className="support-field">

                <span>

                  İSİM / NICK

                </span>

                <input

                  type="text"

                  minLength={2}

                  maxLength={40}

                  required

                  value={

                    supportName

                  }

                  onChange={(

                    event

                  ) =>

                    setSupportName(

                      event

                        .target

                        .value

                    )

                  }

                  placeholder="Oyun içi nickin"

                />

              </label>

              <label className="support-field">

                <span>

                  İLETİŞİM

                </span>

                <input

                  type="text"

                  minLength={2}

                  maxLength={100}

                  required

                  value={

                    supportContact

                  }

                  onChange={(

                    event

                  ) =>

                    setSupportContact(

                      event

                        .target

                        .value

                    )

                  }

                  placeholder="Discord / Steam / TS3"

                />

              </label>

              <label className="support-field">

                <span>

                  KONU

                </span>

                <input

                  type="text"

                  minLength={3}

                  maxLength={100}

                  required

                  value={

                    supportSubject

                  }

                  onChange={(

                    event

                  ) =>

                    setSupportSubject(

                      event

                        .target

                        .value

                    )

                  }

                  placeholder="Talebin konusu"

                />

              </label>

              <label className="support-field support-message-field">

                <span>

                  AÇIKLAMA

                </span>

                <textarea

                  minLength={10}

                  maxLength={2000}

                  required

                  value={

                    supportMessage

                  }

                  onChange={(

                    event

                  ) =>

                    setSupportMessage(

                      event

                        .target

                        .value

                    )

                  }

                  placeholder="Durumu mümkün olduğunca açık şekilde anlat..."

                />

                <small>

                  {

                    supportMessage.length

                  }

                  /2000

                </small>

              </label>

              {supportResult && (

                <div

                  className={`support-result ${supportResult.type}`}

                >

                  {

                    supportResult.text

                  }

                </div>

              )}

              <div className="support-form-bottom">

                <div className="support-limit-note">

                  Spam koruması

                  nedeniyle aynı

                  bağlantıdan 10

                  dakikada bir, 24

                  saatte en fazla 3

                  talep

                  gönderilebilir.

                </div>

                <button

                  type="submit"

                  className="support-submit-btn"

                  disabled={

                    supportSending

                  }

                >

                  {supportSending

                    ? "GÖNDERİLİYOR..."

                    : "DESTEK TALEBİ GÖNDER"}

                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

      <section

        id="iletisim"

        className="content-section contact-section site-section"

      >

        <div className="section-overlay"></div>

        <div className="section-content contact-section-content">

          <div className="section-topline">

            <span></span>

            {siteConfig.brandName}

            <span></span>

          </div>

          <h2 className="section-title">

            İLETİŞİM

          </h2>

          {contactLoading ? (

            <div className="contact-state">

              İletişim bilgileri yükleniyor...

            </div>

          ) : contactError ? (

            <div className="contact-state contact-state-error">

              {contactError}

            </div>

          ) : !contactSettings ? (

            <div className="contact-state">

              Henüz iletişim bilgisi eklenmedi.

            </div>

          ) : (

            <div className="contact-single-wrap">

              <article className="contact-big-card">

                {contactSettings.description && (

                  <p className="contact-big-description">

                    {contactSettings.description}

                  </p>

                )}

                <div className="contact-big-grid">

                  {contactSettings.phone && (

                    <div className="contact-big-item">

                      <small>TELEFON</small>

                      <strong>

                        {contactSettings.phone}

                      </strong>

                      <a

                        href={`tel:${contactSettings.phone.replace(

                          /\s+/g,

                          ""

                        )}`}

                        className="contact-big-action"

                      >

                        ARA

                      </a>

                    </div>

                  )}

                  {contactSettings.discord && (

                    <div className="contact-big-item">

                      <small>INSTAGRAM</small>

                      <strong>

                        lca.pro

                      </strong>

                      {/^https?:\/\//i.test(

                        contactSettings.discord

                      ) ? (

                        <a

                          href={contactSettings.discord}

                          target="_blank"

                          rel="noreferrer"

                          className="contact-big-action"

                        >

                          INSTAGRAM&apos;A GİT

                        </a>

                      ) : (

                        <span className="contact-big-static">

                          Instagram hesabı

                        </span>

                      )}

                    </div>

                  )}

                  {contactSettings.steam_url && (

                    <div className="contact-big-item">

                      <small>STEAM</small>

                      <strong>

                        Steam Topluluğu

                      </strong>

                      <a

                        href={contactSettings.steam_url}

                        target="_blank"

                        rel="noreferrer"

                        className="contact-big-action"

                      >

                        STEAM&apos;E GİT

                      </a>

                    </div>

                  )}

                  {contactSettings.ts3_address && (

                    <div className="contact-big-item">

                      <small>TEAMSPEAK 3</small>

                      <strong>

                        {contactSettings.ts3_address}

                      </strong>

                      <a

                        href={`ts3server://${contactSettings.ts3_address}`}

                        className="contact-big-action"

                      >

                        TS3&apos;E BAĞLAN

                      </a>

                    </div>

                  )}

                  {contactSettings.email && (

                    <div className="contact-big-item">

                      <small>E-POSTA</small>

                      <strong>

                        {contactSettings.email}

                      </strong>

                      <a

                        href={`mailto:${contactSettings.email}`}

                        className="contact-big-action"

                      >

                        E-POSTA GÖNDER

                      </a>

                    </div>

                  )}

                </div>

              </article>

            </div>

          )}

        </div>

      </section>

      <footer className="site-footer">

        <div className="site-footer-inner">

          <div className="site-footer-top">

            <div className="footer-brand-area">

              <div className="footer-brand">

                <img

                  src={siteConfig.logo}

                  alt="Qualisyon"

                />

                <div>

                  <strong>{siteConfig.brandName}</strong>

                  <span>{siteConfig.subTitle}</span>

                </div>

              </div>

              <p>

                {siteConfig.footerDescription}

              </p>

            </div>

            <div className="footer-links-area">

              <h4>HIZLI LİNKLER</h4>

              <div className="footer-links">

                <a

                  href={siteConfig.downloads.wargods || "#"}

                  onClick={(event) => {

                    if (!siteConfig.downloads.wargods) {

                      event.preventDefault();

                    }

                  }}

                  target={siteConfig.downloads.wargods ? "_blank" : undefined}

                  rel={siteConfig.downloads.wargods ? "noreferrer" : undefined}

                >

                  <span className="footer-download-icon">

                    ↓

                  </span>

                  {"WarGods \u0130ndir"}

                </a>

                <a

                  href={siteConfig.downloads.fungun || "#"}

                  onClick={(event) => {

                    if (!siteConfig.downloads.fungun) {

                      event.preventDefault();

                    }

                  }}

                  target={siteConfig.downloads.fungun ? "_blank" : undefined}

                  rel={siteConfig.downloads.fungun ? "noreferrer" : undefined}

                >

                  <span className="footer-download-icon">

                    ↓

                  </span>

                  {"Fungun \u0130ndir"}

                </a>

                <a

                  href={siteConfig.downloads.anydesk || "#"}

                  onClick={(event) => {

                    if (!siteConfig.downloads.anydesk) {

                      event.preventDefault();

                    }

                  }}

                  target={siteConfig.downloads.anydesk ? "_blank" : undefined}

                  rel={siteConfig.downloads.anydesk ? "noreferrer" : undefined}

                >

                  <span className="footer-download-icon">

                    ↓

                  </span>

                  {"AnyDesk \u0130ndir"}

                </a>

                <a

                  href={siteConfig.downloads.teamviewer || "#"}

                  onClick={(event) => {

                    if (!siteConfig.downloads.teamviewer) {

                      event.preventDefault();

                    }

                  }}

                  target={siteConfig.downloads.teamviewer ? "_blank" : undefined}

                  rel={siteConfig.downloads.teamviewer ? "noreferrer" : undefined}

                >

                  <span className="footer-download-icon">

                    ↓

                  </span>

                  {"TeamViewer \u0130ndir"}

                </a>

                <a

                  href={siteConfig.downloads.alpemix || "#"}

                  onClick={(event) => {

                    if (!siteConfig.downloads.alpemix) {

                      event.preventDefault();

                    }

                  }}

                  target={siteConfig.downloads.alpemix ? "_blank" : undefined}

                  rel={siteConfig.downloads.alpemix ? "noreferrer" : undefined}

                >

                  <span className="footer-download-icon">

                    ↓

                  </span>

                  {"Alpemix \u0130ndir"}

                </a>

                <a

                  href={siteConfig.downloads.everything || "#"}

                  onClick={(event) => {

                    if (!siteConfig.downloads.everything) {

                      event.preventDefault();

                    }

                  }}

                  target={siteConfig.downloads.everything ? "_blank" : undefined}

                  rel={siteConfig.downloads.everything ? "noreferrer" : undefined}

                >

                  <span className="footer-download-icon">

                    ↓

                  </span>

                  Everything

                </a>

              </div>

            </div>

            <div className="footer-social-area">

              <h4>SOSYAL</h4>

              <div className="footer-socials">

                {contactSettings?.steam_url && (

                  <a

                    href={contactSettings.steam_url}

                    target="_blank"

                    rel="noreferrer"

                    title="Steam"

                  >

                    STEAM

                  </a>

                )}

                {contactSettings?.discord &&

                  /^https?:\/\//i.test(

                    contactSettings.discord

                  ) && (

                    <a

                      href={contactSettings.discord}

                      target="_blank"

                      rel="noreferrer"

                      title="Instagram"

                    >

                      INSTAGRAM

                    </a>

                  )}

                {contactSettings?.ts3_address && (

                  <a

                    href={`ts3server://${contactSettings.ts3_address}`}

                    title="TeamSpeak 3"

                  >

                    TS3

                  </a>

                )}

              </div>

            </div>

          </div>

          <div className="site-footer-bottom">

            <span>

              {siteConfig.copyright}

            </span>

            <a href="/yonetici">

              YÖNETİM

            </a>

          </div>

        </div>

      </footer>

      {selectedGalleryItem && (

        <div

          className="gallery-lightbox"

          onClick={() =>

            setSelectedGalleryItem(

              null

            )

          }

        >

          <button

            type="button"

            className="gallery-lightbox-close"

            onClick={() =>

              setSelectedGalleryItem(

                null

              )

            }

          >

            ×

          </button>

          <div

            className="gallery-lightbox-content"

            onClick={(

              event

            ) =>

              event.stopPropagation()

            }

          >

            <img

              src={

                selectedGalleryItem.image_url

              }

              alt={

                selectedGalleryItem.title ||

                "Galeri fotoğrafı"

              }

            />

            {selectedGalleryItem.title && (

              <div className="gallery-lightbox-title">

                {

                  selectedGalleryItem.title

                }

              </div>

            )}

          </div>

        </div>

      )}

    </main>

  );

}
