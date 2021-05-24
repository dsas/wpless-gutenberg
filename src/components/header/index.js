export default function Header() {
    return (
        <div
            className="getdavesbe-header"
            role="region"
            aria-label={  'Standalone Editor top bar.'  }
            tabIndex="-1"
        >
            <h1 className="getdavesbe-header__title">
                {  'Standalone Block Editor' }
            </h1>
        </div>
    );
}