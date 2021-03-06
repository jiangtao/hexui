import Notification from '../base/notification';

const prefixCls = 'ivu-notice';
const iconPrefixCls = 'ivu-icon';
const prefixKey = 'hex_notice_key_';

let top = 24;
let defaultDuration = 4.5;
let noticeInstance;
let key = 1;

const iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled'
};

function getNoticeInstance () {
    noticeInstance = noticeInstance || Notification.newInstance({
        prefixCls: prefixCls,
        style: {
            top: `${top}px`,
            right: 0
        }
    });

    return noticeInstance;
}

function notice (type, options) {
    const title = options.title || '';
    const desc = options.desc || '';
    const noticeKey = options.key || `${prefixKey}${key}`;
    const onClose = options.onClose || function () {};
    // todo const btn = options.btn || null;
    const duration = (options.duration === 0) ? 0 : options.duration || defaultDuration;

    key++;

    let instance = getNoticeInstance();

    let content;

    const with_desc = desc === '' ? '' : ` ${prefixCls}-with-desc`;

    if (type == 'normal') {
        content = `
            <div class="${prefixCls}-custom-content ${prefixCls}-with-normal${with_desc}">
                <div class="${prefixCls}-title">${title}</div>
                <div class="${prefixCls}-desc">${desc}</div>
            </div>
        `;
    } else {
        const iconType = iconTypes[type];
        content = `
            <div class="${prefixCls}-custom-content ${prefixCls}-with-icon ${prefixCls}-with-${type}${with_desc}">
                <span class="${prefixCls}-icon ${prefixCls}-icon-${type}">
                    <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}"></i>
                </span>
                <div class="${prefixCls}-title">${title}</div>
                <div class="${prefixCls}-desc">${desc}</div>
            </div>
        `;
    }

    instance.notice({
        key: noticeKey.toString(),
        duration: duration,
        style: {},
        transitionName: 'move-notice',
        content: content,
        onClose: onClose,
        closable: true
    });
}

export default {
    open (options) {
        return notice('normal', options);
    },
    info (options) {
        return notice('info', options);
    },
    success (options) {
        return notice('success', options);
    },
    warning (options) {
        return notice('warning', options);
    },
    error (options) {
        return notice('error', options);
    },
    config (options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaultDuration = options.duration;
        }
    },
    close (key) {
        if (key) {
            key = key.toString();
            if (noticeInstance) {
                noticeInstance.remove(key);
            }
        } else {
            return false;
        }
    },
    destroy () {
        let instance = getNoticeInstance();
        noticeInstance = null;
        instance.destroy();
    }
};
