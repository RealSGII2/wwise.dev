import { LoadingIndicator } from "@/components/Logo";

export default function IndexLoadingPage() {
    return (
        <div
            style={{
                backgroundColor: 'var(--bg-raised)',
                height: 'calc(100% - 72px)',
                backgroundImage: 'url("/wwise-tree-bg-small-notrees.png")',
                backgroundSize: 'cover',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <LoadingIndicator height={60} />
        </div>
    );
}
