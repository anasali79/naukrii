import React from 'react';
import { Link } from 'react-router-dom';

const topCompanies = [
  {
    id: 1,
    category: 'Startups',
    count: '351 are actively hiring',
    logos: [
      { name: 'Mobilution', url: 'https://imgs.search.brave.com/CWXSfiWdv2XjhDWKA9PY23LOIsyp2i8cn-oRLSOsZAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I3L01vYmlsaXpl/X0xvZ28ud2VicA' },
      { name: 'Workspotting', url: 'https://imgs.search.brave.com/8OH11A-QO5ZLkS5fp4TfbCoSZLoE3ZsaU6H5wqmX0-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1Bw/eW0xZ09XUGVvdEhX/TmpMWGdpbjBtbEpu/Y2NzR2RxWE5xY202/YTJkVHBrR3FYbEs0/Q0p4MDR0QWdreWNr/aWhVbGdrOHpFQlBu/Z0E4OTFPQ1NNMnJy/SklWQ0tBYlRHaEln/UVFNWWp5WU9USG9Q/MGlGdEk' },
      { name: 'Cashkaro', url: 'https://imgs.search.brave.com/YREkd0-EIkKTjVSEmZ7xka-26PLzEnOQs12HTJc8D9E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvYi9iZS9DYXNo/a2Fyby5jb20uanBl/Zy9yZXZpc2lvbi9s/YXRlc3Qvc2NhbGUt/dG8td2lkdGgtZG93/bi8yNjA_Y2I9MjAy/MDA0MjMxOTM2MDQ.jpeg' },
      { name: 'Rapidino', url: 'https://imgs.search.brave.com/oyzzvphQXBk_cPgX4rGNpC73C5ubNtckTFPTetW6Mvw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbmlt/YXRpb252aXNhcnRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMC9SYXBp/ZG8tMzAweDMwMC5w/bmc' }
    ]
  },
  {
    id: 2,
    category: 'MNCs',
    count: '1.8K+ are actively hiring',
    logos: [
      { name: 'Vectone', url: 'https://imgs.search.brave.com/Sob9cT5mEe8HUOYzRIOKbOuLkSKL-rZlEk5xmhS8mLA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvMS8xMy9WZWN0/b25lY3VycmVudC5w/bmcvcmV2aXNpb24v/bGF0ZXN0P2NiPTIw/MTQwNTE3MTUwMDUw.jpeg' },
      { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
      { name: 'Circle', url: 'https://imgs.search.brave.com/IBaRNn0fKaNgldQfE15-kIaAsOq_PNFi-lQTNYo24RE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vNzczNThi/N2Q3YWUyZjc5Mjlm/MGM4ZmU5NmQxODhk/YTEzNDkxOTFkMi0z/Mjh4MzM4LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw' },
      { name: 'Crowe', url: 'https://imgs.search.brave.com/gwWLNQOIDizT8vhvfi-gJXWcfI4Vw_J27C3oohnyKDo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nbGFzc2Rvb3Iu/Y29tL3NxbC85NDE0/L2Nyb3dlLXNxdWFy/ZWxvZ28tMTUyODEy/NTk3MDMxMS5wbmc' }
    ]
  },
  {
    id: 3,
    category: 'Internet',
    count: '420 are actively hiring',
    logos: [
      { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
      { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
      { name: 'Meta', url: 'https://imgs.search.brave.com/3vCV_9o0zZyr44FgjAvnv1lEeqchAB0OHgWeGt-Kj-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEw/L01ldGEtTG9nby01/MDB4MjgxLmpwZw' },
      { name: 'Flipkart', url: 'https://imgs.search.brave.com/RTdVgtZKk8qImsVTGa58GGHOmUYXxzUbWRA9jYGSUAk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZm9udGJvbHQu/Y29tL3RoZW1lcy00/NTJweC82MzRlZTY4/MTFkY2FiLmpwZw' }
    ]
  },
  {
    id: 4,
    category: 'Unicorn',
    count: '93 are actively hiring',
    logos: [
      { name: 'Zepto', url: 'https://imgs.search.brave.com/gcOPYu1uPRY9NWdZ_Xdod0u2dkpmvbIDSb3OfE_Lo6c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly96ZXJv/ZGhhLmNvbS96LWNv/bm5lY3Qvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDkvWmVw/dG8tSVBPLTMwMHgz/MDAucG5n' },
      { name: 'Swiggy', url: 'https://imgs.search.brave.com/2HOh4natVDRebKKFe1insMD_BRQwW0YCHgCbsn882cs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vcHBv/c2l0ZWhxLmNvbS9z/dGF0aWMvODM5OTNm/N2RjY2ViYzVmZDE0/MzMzMThlODlkOGZk/OWQvMTM5NjkvNF9t/b21vX3N3aWdneV8y/ZjlkNTdiY2VlLmpw/Zw' },
      { name: 'CRED', url: 'https://imgs.search.brave.com/KBZtLJJWuNVJh0eA9FzQhqgQwQvCNq6BVt109Cgo6oc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MjQ2NzU4MjMvZmls/ZS9zdGlsbC01ZGE5/ZGI4M2E2NWM5MjVj/NTc3MGU3YWU2ZDAy/ZDIyNC5wbmc_cmVz/aXplPTQwMHgw' },
      { name: 'Razorpay', url: 'https://imgs.search.brave.com/f_-Ilj8fXjJR_bG5OvopUMreygKLg3Lq-XgoM-eauH8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IzL1Jhem9ycGF5/X2xvZ28ud2VicA' }
    ]
  },
  {
    id: 5,
    category: 'Edtech',
    count: '185 are actively hiring',
    logos: [
      { name: 'BYJU\'S', url: 'https://imgs.search.brave.com/LI6Bqx07u-ZrJOKHn2gFBdrOrVJXwXVx52nfd11lYMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JjLzRj/L2ViL2JjNGNlYmFj/MmQ4MDY5OTVhNzg4/NmM5OWJmYWJkNWRl/LmpwZw' },
      { name: 'Unacademy', url: 'https://imgs.search.brave.com/xKCjy_vqIuDLFVqf_hZbG0yzmGE0HBGykCyu_4mFKKU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkZTRIOE9L/MzIvaWRBT21JWlNk/NS5wbmc_dXBkYXRl/ZD0xNjgxOTc5Njg2/NDAw' },
      { name: 'upGrad', url: 'https://imgs.search.brave.com/xqiv6bW9fUtaZ5yfJiVNuaoN444DTCwYlMgzBCR_NaA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y29tcGFyYWJseS5j/b20vMjU4OTM3NjMv/bC81Nzk4ODdfbG9n/b191cGdyYWRlLnBu/Zw' },
      { name: 'Vedantu', url: 'https://imgs.search.brave.com/ERIFbHPleln1MWlhZJEnkr2fnGJ1DPDdttkGfVuAyvg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3ZlZGFu/dHU5MjQyLmpwZw' }
    ]
  },
  {
    id: 6,
    category: 'Banking and Finance',
    count: '743 are actively hiring',
    logos: [
      { name: 'HDFC', url: 'https://imgs.search.brave.com/gEKMyzifxz71TFaYxLqmfUYji-5RgJ2sqgPBL-g998s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZHg0VERNVzdS/L3RoZW1lL2Rhcmsv/bG9nby5zdmc_Yz0x/YnhpZDY0TXVwN2Fj/emV3U0FZTVgmdD0x/NzQyOTI5NzQ1MzAy' },
      { name: 'ICICI', url: 'https://imgs.search.brave.com/qpW8scFOKFBZ4sESXyCGe27INzgMQlTAQxXjg5jleEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/bm9pZC5jb20vaW1h/Z2VzL2ljaWNpLWJh/bmstbG9nby5wbmc' },
      { name: 'Axis', url: 'https://imgs.search.brave.com/OzoeNWhQQKOHhNPbuvzRwBEMc1U8BrCyTbvd620n_4Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZDc4WVZ0clJw/L3cvMzUwL2gvMzUw/L3RoZW1lL2Rhcmsv/aWNvbi5wbmc_Yz0x/YnhpZDY0TXVwN2Fj/emV3U0FZTVgmdD0x/NjY3NTkwMzUxNzU5' },
      { name: 'SBI', url: 'https://imgs.search.brave.com/kTM5pwiWgcIPX-W7mc02HUM9uwcoTEYwKj502ezkXIc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JiLzg0/LzVhL2JiODQ1YTZm/MzkxMjNlYzlkMjM1/YjJmMTJjMjk4ZDY4/LmpwZw' }
    ]
  },
];

const TopCompaniesSection = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Top companies hiring now</h2>
        <Link to="/companies" className="text-blue-600 font-medium">View all</Link>
      </div>

      <div className="w-full overflow-auto pb-4 hide-scrollbar">
        <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
          {topCompanies.map((category) => (
            <Link 
              key={category.id}
              to={`/companies/${category.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="min-w-[280px] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{category.category}</h3>
              <p className="text-gray-600 mb-4">{category.count}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {category.logos.map((logo, index) => (
                  <div key={index} className="w-12 h-12 rounded overflow-hidden flex items-center justify-center bg-gray-100">
                    <img src={logo.url} alt={logo.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>

              <button className="text-blue-600 font-medium hover:underline">Explore</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompaniesSection;
