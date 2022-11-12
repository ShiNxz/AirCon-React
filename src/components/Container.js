export const Container = ({ children, styles }) => {
    return <div data-aos="fade-up" className={`mx-4 md:w-3/4 text-slate-50 p-5 md:px-12 bg-content rounded-lg h-fit mb-8 ${styles ? styles : ""}`}>
        {children}
    </div>
}