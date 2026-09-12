import { ArrowUpRight, Play, X } from 'lucide-react';

type ShowreelModalProps = {
  onClose: () => void;
  onGoContact: () => void;
};

function ShowreelModal({ onClose, onGoContact }: ShowreelModalProps) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Dencast showreel">
      <div className="showreel-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close showreel">
          <X size={20} />
        </button>
        <div className="modal-play">
          <Play size={28} fill="currentColor" />
        </div>
        <p className="eyebrow">
          <span /> Dencast Global
        </p>
        <h2>
          The showreel is
          <br />
          <em>coming soon.</em>
        </h2>
        <p>We&apos;re cutting together the very best of our work. For now, let&apos;s talk about yours.</p>
        <button
          className="button button-primary"
          onClick={() => {
            onClose();
            onGoContact();
          }}
        >
          Start a project <ArrowUpRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default ShowreelModal;
