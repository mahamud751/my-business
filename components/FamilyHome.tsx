import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import Icon, { type IconName } from "./icons";
const promises: [IconName, string, string][] = [
  ["truck", "সারাদেশে ডেলিভারি", "ঢাকায় ৳৮০ · ঢাকার বাইরে ৳১৩০"],
  ["wallet", "ক্যাশ অন ডেলিভারি", "পণ্য হাতে পেয়ে মূল্য দিন"],
  ["heart", "পরিবারের জন্য বাছাই", "যত্ন নিয়ে নির্বাচিত পণ্য"],
  ["gift", "ফ্রি ডেলিভারি", "যেকোনো ৪টি বা বেশি পণ্যে"],
];
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="আপন — হোম">
      <span className="brand-mark">আ</span>
      <span className="brand-text">
        আপন
        <small>little things, closer together</small>
      </span>
    </Link>
  );
}
export function FamilyHeader({
  count,
  onCart,
  onMenu,
  menu,
  search,
}: {
  count: number;
  onCart: () => void;
  onMenu: () => void;
  menu: boolean;
  search: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <>
      <div className="announcement">
        <Icon name="sparkle" size={14} />
        ৪টি বা বেশি পণ্যে ফ্রি ডেলিভারি
        <span>· ক্যাশ অন ডেলিভারি সারা বাংলাদেশে</span>
      </div>
      <header className="site-header">
        <div className="container header-row">
          <button
            className="icon-button menu-button"
            aria-label={menu ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={menu}
            aria-controls="mobile-site-menu"
            onClick={onMenu}
          >
            <Icon name={menu ? "close" : "menu"} size={22} />
          </button>
          <Brand />
          <nav className="main-nav" aria-label="প্রধান মেনু">
            <Link href="/shop">সব পণ্য</Link>
            <Link href="/#new">স্কিনকেয়ার</Link>
          </nav>
          <form className="header-search" role="search" onSubmit={search}>
            <Icon name="search" size={18} />
            <input
              name="q"
              type="search"
              aria-label="পণ্য খুঁজুন"
              placeholder="পণ্য খুঁজুন…"
            />
            <button type="submit" className="sr-only">
              খুঁজুন
            </button>
          </form>
          <button
            className="icon-button bag-button"
            onClick={onCart}
            aria-label={`কার্টে ${count}টি পণ্য আছে`}
          >
            <Icon name="bag" size={22} />
            {count > 0 && (
              <span className="bag-count">{count.toLocaleString("bn-BD")}</span>
            )}
          </button>
        </div>
        {menu && (
          <nav id="mobile-site-menu" className="mobile-menu" aria-label="মেনু">
            <div className="container">
              {[
                ["/shop", "সব পণ্য"],
                ["/#new", "স্কিনকেয়ার"],
              ].map(([href, label]) => (
                <Link key={href} href={href} onClick={onMenu}>
                  {label}
                  <Icon name="chevron" size={18} />
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
export function FamilyFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <h2>
            বড় সুখগুলো লুকিয়ে থাকে
            <br />
            ছোট ছোট মুহূর্তে।
          </h2>
          <Link className="btn btn-light" href="/shop">
            কেনাকাটা শুরু করুন <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="footer-grid">
          <div className="footer-about">
            <Brand />
            <p>প্রতিদিনের ছোট ছোট প্রয়োজনে, আপনার পরিবারের পাশে।</p>
          </div>
          <div>
            <h3>কেনাকাটা</h3>
            <Link href="/shop">সব পণ্য</Link>
            <Link href="/categories/skincare">স্কিনকেয়ার</Link>
          </div>
          <div>
            <h3>তথ্য</h3>
            <Link href="/policies/delivery">ডেলিভারি নীতি</Link>
            <Link href="/policies/returns-refunds">রিটার্ন ও রিফান্ড</Link>
            <Link href="/policies/privacy">গোপনীয়তা</Link>
            <Link href="/policies/terms">শর্তাবলি</Link>
          </div>
          <div className="footer-note">
            <Icon name="shield" size={24} />
            <p>
              <b>ভরসা থাকুক প্রতিটি অর্ডারে</b>
              পণ্য হাতে পেয়ে মূল্য দিন — ক্যাশ অন ডেলিভারি, সারা বাংলাদেশে।
            </p>
          </div>
        </div>
        <div className="copyright">
          <span>© ২০২৬ আপন। সর্বস্বত্ব সংরক্ষিত।</span>
          <span>Made for the everyday moments.</span>
        </div>
      </div>
    </footer>
  );
}
function SectionHead({
  eyebrow,
  title,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <Link className="text-link" href={href}>
        {cta} <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}
export default function FamilyHome({ featured }: { featured: ReactNode }) {
  return (
    <div className="home">
      <section className="container hero">
        <div className="hero-copy">
          <span className="pill">
            <span className="pill-dot" /> পরিবারের জন্য, ভালোবেসে বাছাই
          </span>
          <h1>
            ছোট ছোট যত্নে,
            <br />
            জীবন হোক <em>আরও আপন।</em>
          </h1>
          <p>
            বডি ক্রিম, ফেসিয়াল ফোম আর সাবান — ত্বকের যত্নের পণ্য, এক জায়গায়।
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" href="/shop">
              পণ্য দেখুন <Icon name="arrow" size={18} />
            </Link>
            <Link className="btn btn-outline btn-lg" href="#new">
              স্কিনকেয়ার দেখুন
            </Link>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>৳৮০</dt>
              <dd>ঢাকায় ডেলিভারি</dd>
            </div>
            <div>
              <dt>৪+</dt>
              <dd>পণ্যে ফ্রি ডেলিভারি</dd>
            </div>
            <div>
              <dt>COD</dt>
              <dd>হাতে পেয়ে মূল্য</dd>
            </div>
          </dl>
        </div>
        <div className="hero-media">
          <div className="hero-photo">
            <img
              src="/images/new/dc12c99b-e36a-48d6-b0df-30c80662da5c.jpeg"
              alt="হাতে ধরা নরম গোলাপি বডি ক্রিম"
            />
          </div>
          <div className="float-card float-card--bottom">
            <img
              className="photo"
              src="/images/new/b54761f7-36be-489c-88cd-9ecd4c48464c.jpeg"
              alt=""
            />
            <span>
              নাবি নাইট ক্রিম
              <b>প্রতিদিনের যত্ন</b>
            </span>
          </div>
          <div className="float-card float-card--top">
            <span className="float-icon">
              <Icon name="check" size={16} />
            </span>
            ক্যাশ অন ডেলিভারি
          </div>
        </div>
      </section>
      <section className="container">
        <ul className="promises">
          {promises.map(([icon, title, text]) => (
            <li key={title}>
              <span className="promise-icon">
                <Icon name={icon} size={22} />
              </span>
              <span>
                <b>{title}</b>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="container section" id="new">
        <SectionHead
          eyebrow="নতুন কালেকশন"
          title="ত্বকের যত্ন, ঘরে বসে"
          href="/categories/skincare"
          cta="সব স্কিনকেয়ার"
        />
        <div className="catalog-grid">{featured}</div>
      </section>
      <section className="container section" id="offers">
        <div className="promo">
          <div className="promo-copy">
            <span className="eyebrow">Skincare, close to home</span>
            <h2>
              নরম ক্রিম,
              <br />
              উজ্জ্বল প্রতিদিন।
            </h2>
            <p>
              বডি ক্রিম, ফেসিয়াল ফোম আর সাবান — ত্বকের যত্নের পণ্য, এক জায়গায়,
              হোম ডেলিভারিতে।
            </p>
            <Link className="btn btn-light" href="/categories/skincare">
              স্কিনকেয়ার দেখুন <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="promo-art">
            <img
              className="photo"
              src="/images/new/15c4cf50-d34d-4f02-b4c8-234b8827c551.jpeg"
              alt="গোলাপি বডি ক্রিমের ঘন টেক্সচার"
            />
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="steps">
          <div className="steps-intro">
            <span className="eyebrow">সহজ অর্ডার</span>
            <h2>তিন ধাপে আপনার দরজায়</h2>
          </div>
          <ol>
            <li>
              <span>১</span>
              <b>পছন্দের পণ্য বাছুন</b>
              কার্টে যোগ করুন, পরিমাণ ঠিক করুন।
            </li>
            <li>
              <span>২</span>
              <b>ঠিকানা দিন</b>
              নাম, মোবাইল নম্বর ও ঠিকানা দিয়ে অর্ডার নিশ্চিত করুন।
            </li>
            <li>
              <span>৩</span>
              <b>হাতে পেয়ে মূল্য দিন</b>
              পণ্য বুঝে নিয়ে ডেলিভারির সময় মূল্য পরিশোধ করুন।
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
