export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 bg-black text-gray-500 text-sm border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-white font-medium">Auralis</span>
                    <span>Copyright © 2024 Auralis Inc.</span>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Newsletter</a>
                </div>
            </div>
        </footer>
    );
}
