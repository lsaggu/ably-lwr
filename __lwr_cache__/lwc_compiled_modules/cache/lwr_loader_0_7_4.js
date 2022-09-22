/**
* Copyright (c) 2021, salesforce.com, inc.
* All rights reserved.
* SPDX-License-Identifier: MIT
* For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
*/

/* LWR Module Loader v0.7.4 */
const templateRegex = /\{([0-9]+)\}/g; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function templateString(template, args) {
  return template.replace(templateRegex, (_, index) => {
    return args[index];
  });
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


function generateErrorMessage(errorInfo, args) {
  const message = Array.isArray(args) ? templateString(errorInfo.message, args) : errorInfo.message;
  return `LWR${errorInfo.code}: ${message}`;
}

class LoaderError extends Error {
  constructor(errorInfo, errorArgs) {
    super();
    this.message = generateErrorMessage(errorInfo, errorArgs);
  }
  /*LWC compiler v2.17.0*/


}

function invariant(condition, errorInfo) {
  if (!condition) {
    throw new LoaderError(errorInfo);
  }
}

const MISSING_NAME = Object.freeze({
  code: 3000,
  message: 'A module name is required.',
  level: 0
});
const FAIL_INSTANTIATE = Object.freeze({
  code: 3004,
  message: 'Failed to instantiate module: {0}',
  level: 0
});
const NO_AMD_REQUIRE = Object.freeze({
  code: 3005,
  message: 'AMD require not supported.',
  level: 0
});
const FAILED_DEP = Object.freeze({
  code: 3006,
  level: 0,
  message: 'Failed to load dependency: {0}'
});
const INVALID_DEPS = Object.freeze({
  code: 3007,
  message: 'Unexpected value received for dependencies argument; expected an array.',
  level: 0
});
const FAIL_LOAD = Object.freeze({
  code: 3008,
  level: 0,
  message: 'Error loading {0}'
});
const UNRESOLVED = Object.freeze({
  code: 3009,
  level: 0,
  message: 'Unable to resolve bare specifier: {0}'
});
const NO_BASE_URL = Object.freeze({
  code: 3010,
  level: 0,
  message: 'baseUrl not set'
});
Object.freeze({
  code: 3011,
  level: 0,
  message: 'Cannot set a loader service multiple times'
});
const INVALID_HOOK = Object.freeze({
  code: 3012,
  level: 0,
  message: 'Invalid hook received'
});
const INVALID_LOADER_SERVICE_RESPONSE = Object.freeze({
  code: 3013,
  level: 0,
  message: 'Invalid response received from hook'
});
const MODULE_LOAD_TIMEOUT = Object.freeze({
  code: 3014,
  level: 0,
  message: 'Error loading {0} - timed out'
});
const HTTP_FAIL_LOAD = Object.freeze({
  code: 3015,
  level: 0,
  message: 'Error loading {0}, status code {1}'
});
const STALE_HOOK_ERROR = Object.freeze({
  code: 3016,
  level: 0,
  message: 'An error occurred handling module conflict'
});
const MODULE_ALREADY_LOADED = Object.freeze({
  code: 3017,
  level: 0,
  message: 'Marking module(s) as externally loaded, but they are already loaded: {0}'
});
const FAIL_HOOK_LOAD = Object.freeze({
  code: 3018,
  level: 0,
  message: 'Error loading "{0}" from hook'
});
const NO_MAPPING_URL = Object.freeze({
  code: 3019,
  level: 0,
  message: 'Mapping endpoint not set'
});
const BAD_IMPORT_METADATA = Object.freeze({
  code: 3020,
  level: 0,
  message: 'Invalid import metadata: {0} {1}'
});
/* importMap errors */

Object.freeze({
  code: 3011,
  level: 0,
  message: 'import map is not valid'
});
/* eslint-disable lwr/no-unguarded-apis */

const hasDocument = typeof document !== 'undefined';
const hasSetTimeout = typeof setTimeout === 'function';
const hasConsole = typeof console !== 'undefined';
/* eslint-enable lwr/no-unguarded-apis */

function getBaseUrl() {
  let baseUrl = undefined;

  if (hasDocument) {
    // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
    const baseEl = document.querySelector('base[href]');
    baseUrl = baseEl && baseEl.href;
  } // eslint-disable-next-line lwr/no-unguarded-apis


  if (!baseUrl && typeof location !== 'undefined') {
    // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
    baseUrl = location.href.split('#')[0].split('?')[0];
    const lastSepIndex = baseUrl.lastIndexOf('/');

    if (lastSepIndex !== -1) {
      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
    }
  }

  return baseUrl;
}
/**
 * Check if a string is a URL based on Common Internet Scheme Syntax
 * https://www.ietf.org/rfc/rfc1738.txt
 *
 * URL Format:
 *  <scheme>:<scheme-specific-part>
 * Common Internet Scheme Syntax:
 *  The scheme specific part starts with a double slash('//')
 *
 * A valid URL has a colon that is followed by a double slash.
 *
 * @param url - the url that is being checked
 * @returns boolean
 *
 * @example Valid URLs
 * 'https://salesforce.com'
 * 'http://localhost:3000'
 *
 * @example Invalid URLs
 * 'salesforce.com'
 * 'localhost:3000'
 * '@salesforce/label/type:namespace:name'
 */


function isUrl(url) {
  return url.indexOf('://') !== -1;
} // Borrowed and adapted from https://github.com/systemjs/systemjs/blob/master/src/common.js
// Resolves the first path segment relative to the second/parent URL
// eg: resolveIfNotPlainOrUrl('../test', 'http://www.site.com/one/two') => 'http://www.site.com/test'
// eg: resolveIfNotPlainOrUrl('./x/y/z', 'https://my.com/segment')).toBe('https://my.com/x/y/z')


function resolveIfNotPlainOrUrl(relUrl, parentUrl) {
  const backslashRegEx = /\\/g;
  if (relUrl.indexOf('\\') !== -1) relUrl = relUrl.replace(backslashRegEx, '/'); // protocol-relative

  if (relUrl[0] === '/' && relUrl[1] === '/') {
    return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
  } // relative-url
  else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) || relUrl.length === 1 && (relUrl += '/')) || relUrl[0] === '/') {
    const parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
    let pathname;

    if (parentUrl[parentProtocol.length + 1] === '/') {
      // resolving to a :// so we need to read out the auth and host
      if (parentProtocol !== 'file:') {
        pathname = parentUrl.slice(parentProtocol.length + 2);
        pathname = pathname.slice(pathname.indexOf('/') + 1);
      } else {
        pathname = parentUrl.slice(8);
      }
    } else {
      // resolving to :/ so pathname is the /... part
      pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/' ? 1 : 0));
    }

    if (relUrl[0] === '/') return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl; // join together and split for removal of .. and . segments
    // looping the string instead of anything fancy for perf reasons
    // '../../../../../z' resolved to 'x/y' is just 'z'

    const segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;
    const output = [];
    let segmentIndex = -1;

    for (let i = 0; i < segmented.length; i++) {
      // busy reading a segment - only terminate on '/'
      if (segmentIndex !== -1) {
        if (segmented[i] === '/') {
          output.push(segmented.slice(segmentIndex, i + 1));
          segmentIndex = -1;
        }
      } // new segment - check if it is relative
      else if (segmented[i] === '.') {
        // ../ segment
        if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
          output.pop();
          i += 2;
        } // ./ segment
        else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
          i += 1;
        } else {
          // the start of a new segment as below
          segmentIndex = i;
        }
      } // it is the start of a new segment
      else {
        segmentIndex = i;
      }
    } // finish reading out the last segment


    if (segmentIndex !== -1) output.push(segmented.slice(segmentIndex));
    return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
  }
}

function resolveUrl(relUrl, parentUrl) {
  const resolvedUrl = resolveIfNotPlainOrUrl(relUrl, parentUrl) || (isUrl(relUrl) ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
  return resolvedUrl;
}

function createScript(url) {
  // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
  const script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = url;
  return script;
}

let lastWindowError$1, lastWindowErrorUrl;

function loadModuleDef(url) {
  return new Promise(function (resolve, reject) {
    if (hasDocument) {
      /* eslint-disable lwr/no-unguarded-apis, no-undef */
      const script = createScript(url);
      script.addEventListener('error', () => {
        reject(new LoaderError(FAIL_LOAD, [url]));
      });
      script.addEventListener('load', () => {
        document.head.removeChild(script);

        if (lastWindowErrorUrl === url) {
          reject(lastWindowError$1);
        } else {
          resolve();
        }
      });
      document.head.appendChild(script);
      /* eslint-enable lwr/no-unguarded-apis, no-undef */
    }
  });
}

if (hasDocument) {
  // When a script is executed, runtime errors are on the global/window scope which are NOT caught by the script's onerror handler.
  // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
  window.addEventListener('error', evt => {
    lastWindowErrorUrl = evt.filename;
    lastWindowError$1 = evt.error;
  });
} // Bootstrap / shim


const LOADER_PREFIX = 'lwr.loader.';
const MODULE_DEFINE = `${LOADER_PREFIX}module.define`;
const MODULE_FETCH = `${LOADER_PREFIX}module.fetch`;
const MODULE_ERROR = `${LOADER_PREFIX}module.error`;
const MAPPINGS_FETCH = `${LOADER_PREFIX}mappings.fetch`;
const MAPPINGS_ERROR = `${LOADER_PREFIX}mappings.error`;
/* spec based import map resolver */

class ImportMetadataResolver {
  constructor(config, invalidationCallback) {
    // Default to empty mappings
    this.importURICache = new Map();
    this.pendingURICache = new Map();
    this.loadMappingHooks = [];
    this.config = config;
    this.invalidationCallback = invalidationCallback;
  }

  addLoadMappingHook(hook) {
    this.loadMappingHooks.push(hook);
  }

  getMappingEndpoint() {
    return this.config.endpoints && this.config.endpoints.uris ? this.config.endpoints.uris.mapping : undefined;
  }

  getModifiersAsUrlParams() {
    const modifiers = this.config.endpoints ? this.config.endpoints.modifiers : undefined;

    if (!modifiers) {
      // No modifiers return an empty string to append to the URL
      return '';
    } else {
      const qs = Object.keys(modifiers).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(modifiers[key])}`).join('&');
      return `?${qs}`;
    }
  }

  buildMappingUrl(specifier) {
    const mappingEndpoint = this.getMappingEndpoint();
    const specifiers = encodeURIComponent(specifier);
    const modifiers = this.getModifiersAsUrlParams();
    return `${mappingEndpoint}${specifiers}${modifiers}`;
  }

  getBaseUrl() {
    return this.config.baseUrl;
  }

  registerImportMappings(newImportMetadata, rootSpecifiers) {
    if (!rootSpecifiers || rootSpecifiers.length === 0) {
      const imports = newImportMetadata ? JSON.stringify(newImportMetadata) : 'undefined';
      throw new LoaderError(BAD_IMPORT_METADATA, [imports, rootSpecifiers ? '[]' : 'undefined']);
    }

    if (!newImportMetadata) {
      throw new LoaderError(BAD_IMPORT_METADATA, ['undefined', JSON.stringify(rootSpecifiers)]);
    }

    if (!newImportMetadata.imports || Object.keys(newImportMetadata.imports).length === 0) {
      throw new LoaderError(BAD_IMPORT_METADATA, [JSON.stringify(newImportMetadata), JSON.stringify(rootSpecifiers)]);
    }

    const index = newImportMetadata.index || {};

    for (const [uri, specifiers] of Object.entries(newImportMetadata.imports)) {
      specifiers.forEach(specifier => {
        const indexValue = index[specifier];
        const existing = this.importURICache.get(specifier);

        if (!existing) {
          this.saveImportURIRecord(specifier, uri, indexValue, rootSpecifiers.includes(specifier));
        } else {
          const identity = indexValue || uri;
          const existingIdentity = existing.identity || existing.uri;

          if (existingIdentity !== identity) {
            this.invalidationCallback({
              name: specifier,
              oldUrl: existingIdentity,
              newUrl: identity
            });
          }
        }
      });
    }
  } // Get URL from the local cache or return undefiend


  getURI(specifier) {
    return this.importURICache.has(specifier) ? resolveUrl(this.importURICache.get(specifier).uri, this.getBaseUrl()) : undefined;
  }

  resolveLocal(specifier) {
    const uri = this.getURI(specifier);

    if (uri) {
      return uri;
    } else if (isUrl(specifier) || specifier.startsWith('/')) {
      return specifier;
    }

    return undefined;
  }
  /**
   *  Resolves a the URI for a specified module.  It will return the value in this order:
   *
   *  1) Mapping from local URI cache
   *  2) The URI if a specifier is already an absolute URI
   *  3) Mapping fetched from a registered loader hook
   *  4)
   *  @param specifier
   *  @returns module URI
   */


  async resolve(specifier) {
    let uri = this.getURI(specifier);

    if (uri) {
      return uri;
    } else if (isUrl(specifier) || specifier.startsWith('/')) {
      return specifier;
    } else {
      const pending = this.pendingURICache.get(specifier);

      if (pending) {
        return pending;
      }

      this.config.profiler.logOperationStart({
        id: MAPPINGS_FETCH,
        specifier
      });
      const fetchMappingService = this.hasMappingHooks() ? this.evaluateMappingHooks : this.fetchNewMappings;
      const promise = fetchMappingService.bind(this)(specifier).then(importMetadata => {
        if (!importMetadata || !importMetadata.imports) {
          throw new LoaderError(UNRESOLVED, [specifier]);
        }

        this.registerImportMappings(importMetadata, [specifier]);
        uri = this.getURI(specifier);

        if (!uri) {
          throw new LoaderError(UNRESOLVED, [specifier]);
        }

        this.config.profiler.logOperationEnd({
          id: MAPPINGS_FETCH,
          specifier
        });
        return uri;
      }).finally(() => {
        this.pendingURICache.delete(specifier);
      });
      this.pendingURICache.set(specifier, promise);
      return promise;
    }
  }

  hasMappingHooks() {
    return this.loadMappingHooks.length > 0;
  }
  /**
   *  Evaluates mapping hooks.  Returns first match. If all hooks return null call the mapping service.
   *  @param specifier Request module identifier
   *  @returns Import Metadata from the module root
   */


  async evaluateMappingHooks(specifier) {
    // Check with any registered loadMappingHooks
    const loadMappingHooks = this.loadMappingHooks;

    if (loadMappingHooks.length) {
      const knownModules = Array.from(this.importURICache.keys());

      for (let i = 0; i < loadMappingHooks.length; i++) {
        const loadMappingHook = loadMappingHooks[i]; // eslint-disable-next-line no-await-in-loop

        const response = await loadMappingHook(specifier, {
          knownModules
        }); // undefined (but not null) is considered an un expected response so we will stop processing hooks here and throw an error

        if (response || response === undefined) {
          return response;
        }
      }
    } // If we still do not have a match call the mapping service


    return this.fetchNewMappings(specifier);
  }

  async fetchNewMappings(specifier) {
    if (typeof globalThis.fetch !== 'function') {
      throw new LoaderError(UNRESOLVED, [specifier]);
    } // TODO For module invalidation with bundles it is recommended we have to send back all loaded root specified
    // to ensure we detect all conflicts.


    const uri = resolveUrl(this.buildMappingUrl(specifier), this.getBaseUrl());
    return globalThis.fetch(uri).then(res => {
      if (!res.ok) {
        this.config.profiler.logOperationStart({
          id: MAPPINGS_ERROR,
          specifier
        });
        throw new LoaderError(UNRESOLVED, [specifier]);
      }

      return res.json().then(ret => {
        return ret;
      }).catch(err => {
        throw new LoaderError(UNRESOLVED, [specifier]);
      });
    });
  }

  saveImportURIRecord(specifier, uri, identity, isRoot) {
    if (!identity || uri === identity) {
      this.importURICache.set(specifier, {
        uri,
        isRoot: isRoot
      });
    } else {
      this.importURICache.set(specifier, {
        uri,
        identity,
        isRoot: isRoot
      });
    }
  }

}

function reportError(error) {
  // TODO eventually this should be configurable instrumentation to send this somewhere
  // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
  if (hasConsole) console.error(error);
}

function evaluateHandleStaleModuleHooks(handleStaleModuleHooks, hookArgs) {
  const {
    name,
    oldUrl,
    newUrl
  } = hookArgs; // keep evaluating hooks if return value is null

  for (let i = 0; i < handleStaleModuleHooks.length; i++) {
    const hook = handleStaleModuleHooks[i];

    try {
      const hookResult = hook({
        name,
        oldUrl,
        newUrl
      });

      if (hookResult !== null) {
        break;
      }
    } catch (e) {
      reportError(new LoaderError(STALE_HOOK_ERROR));
    }
  }
}

const MODULE_LOAD_TIMEOUT_TIMER = 300000;
let lastWindowError;

if (hasDocument) {
  globalThis.addEventListener('error', evt => {
    lastWindowError = evt.error;
  });
}

if (!hasSetTimeout && hasConsole) {
  // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
  console.warn('setTimeout API is not available, watchdog timer on load hook will not be set');
}

function isCustomResponse(response) {
  return Object.prototype.hasOwnProperty.call(response, 'data') && !Object.prototype.hasOwnProperty.call(response, 'blob');
}

function isFetchResponse(response) {
  // if it quacks like a duck...
  return typeof response.blob === 'function';
}

function isResponseAPromise(response) {
  return !!(response && response.then);
}

async function evaluateLoadHookResponse(response, id) {
  return Promise.resolve().then(async () => {
    if (!response.status) {
      throw new LoaderError(INVALID_LOADER_SERVICE_RESPONSE);
    }

    if (response.status !== 200) {
      throw new LoaderError(HTTP_FAIL_LOAD, [id, `${response.status}`]);
    }

    const isResponse = isFetchResponse(response);
    let code;

    if (isCustomResponse(response)) {
      code = response.data;
    } else if (isResponse) {
      // handle fetch response
      code = await response.text();
    } else {
      throw new LoaderError(INVALID_LOADER_SERVICE_RESPONSE);
    }

    if (!code) {
      throw new LoaderError(FAIL_LOAD, [id]);
    }

    code = `${code}\n//# sourceURL=${id}`; // append sourceURL for debugging

    try {
      // TODO eval source maps for debugging
      eval(code);
    } catch (e) {
      throw new LoaderError(FAIL_LOAD, [id]);
    }

    if (lastWindowError) {
      throw new LoaderError(FAIL_LOAD, [id]);
    }

    return true;
  }).finally(() => {});
}

async function evaluateLoadHook(id, hookPromise) {
  if (!hasSetTimeout) {
    return hookPromise;
  }

  return new Promise((resolve, reject) => {
    // wrap the hook in a watchdog timer
    // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
    const timer = setTimeout(() => {
      reject(new LoaderError(MODULE_LOAD_TIMEOUT, [id]));
    }, MODULE_LOAD_TIMEOUT_TIMER);
    hookPromise.then(response => {
      resolve(response);
    }).catch(() => {
      reject(new LoaderError(FAIL_HOOK_LOAD, [id]));
    }).finally(() => {
      // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
      clearTimeout(timer);
    });
  });
}
/* global console,process */


class ModuleRegistry {
  constructor(config) {
    // A registry for named AMD defines containing the *metadata* of AMD module
    this.namedDefineRegistry = new Map(); // The evaluted module registry where the module identifier (name or URL?) is the key

    this.moduleRegistry = new Map();
    this.profiler = config.profiler;
    this.resolver = new ImportMetadataResolver(config, this.importMetadataInvalidationCallback.bind(this));
  }

  async load(id, importer) {
    const resolvedId = await this.resolve(id, importer);
    const moduleRecord = this.getModuleRecord(resolvedId, id);

    if (moduleRecord.evaluated) {
      return moduleRecord.module;
    } else {
      if (!moduleRecord.evaluationPromise) {
        moduleRecord.evaluationPromise = this.topLevelEvaluation(moduleRecord);
      }

      return moduleRecord.evaluationPromise;
    }
  }

  async resolve(id, importer) {
    const parentUrl = this.resolver.getBaseUrl(); // only support baseUrl for now

    let resolved;
    let aliasedId = id;
    const resolveHooks = this.resolveHook;

    if (resolveHooks) {
      for (let i = 0; i < resolveHooks.length; i++) {
        const resolveHook = resolveHooks[i];
        const response = resolveHook(aliasedId, {
          parentUrl
        });
        let result;

        if (response || response === null) {
          // eslint-disable-next-line no-await-in-loop
          result = isResponseAPromise(response) ? await response : response;
        } // if result is not null, attempt resolution


        if (result !== null) {
          if (typeof result === 'string') {
            if (resolveIfNotPlainOrUrl(result, parentUrl)) {
              // string response can't be a URL
              throw new LoaderError(INVALID_LOADER_SERVICE_RESPONSE);
            }

            aliasedId = result; // the next hook will receive the new id

            continue;
          }

          resolved = result && result.url && (resolveIfNotPlainOrUrl(result.url, parentUrl) || result.url);

          if (!resolved) {
            throw new LoaderError(INVALID_LOADER_SERVICE_RESPONSE);
          } // Don't process any more hooks if we have resolved


          break;
        }
      }

      if (aliasedId !== id) {
        // resolved module id is the aliased module if it has already been defined
        if (!resolved && this.namedDefineRegistry.has(aliasedId)) {
          return aliasedId;
        } else {
          id = aliasedId;
        }
      }
    }

    if (!resolved) {
      const resolvedOrPlain = resolveIfNotPlainOrUrl(id, parentUrl) || id; // if module registry already has named module the resolved id is the plain id

      if (this.moduleRegistry.has(resolvedOrPlain)) {
        return resolvedOrPlain;
      }

      const resolvedUrl = this.resolver.resolveLocal(resolvedOrPlain);

      if (resolvedUrl) {
        // return the plain id if it is already defined && the resolvedUrl is NOT already in the module registry
        if (this.namedDefineRegistry.has(resolvedOrPlain) && this.namedDefineRegistry.get(resolvedOrPlain).defined) {
          const record = this.moduleRegistry.get(resolvedUrl);

          if (!record || !record.aliases.has(resolvedOrPlain)) {
            return resolvedOrPlain;
          }
        }

        return resolvedUrl;
      }

      if (this.namedDefineRegistry.has(resolvedOrPlain)) {
        return resolvedOrPlain;
      }

      try {
        resolved = await this.resolver.resolve(resolvedOrPlain);
      } catch (e) {// defer to error handling below for unresolved
      }
    }

    if (!resolved || !isUrl(resolved)) {
      if (this.namedDefineRegistry.has(id)) {
        return id;
      }

      throw new LoaderError(UNRESOLVED, [id]);
    }

    if (importer && isUrl(resolved)) {
      resolved += `?importer=${encodeURIComponent(importer)}`;
    }

    return resolved;
  }

  has(id) {
    return this.moduleRegistry.has(id);
  }

  define(name, dependencies, exporter) {
    const mod = this.namedDefineRegistry.get(name); // Don't allow redefining a module.

    if (mod && mod.defined) {
      if (process.env.NODE_ENV !== 'production' && hasConsole) {
        // eslint-disable-next-line lwr/no-unguarded-apis
        console.warn(`Module redefine attempted: ${name}`);
      }

      this.lastDefine = mod;
      return;
    }

    const moduleDef = {
      name,
      dependencies,
      exporter,
      defined: true
    };

    if (mod && mod.external) {
      // if module is "external", resolve the external promise to notify any dependees
      mod.external.resolveExternal(moduleDef);
    }

    this.profiler.logOperationStart({
      id: MODULE_DEFINE,
      specifier: name
    });
    this.namedDefineRegistry.set(name, moduleDef);
    this.lastDefine = moduleDef;
  }
  /**
   * Marks modules as "externally" loaded/provided, so that the loader does not attempt to fetch them.
   *
   * @param modules - list of module identifiers
   */


  registerExternalModules(modules) {
    const alreadyRegistered = [];
    modules.map(id => {
      if (this.namedDefineRegistry.has(id)) {
        alreadyRegistered.push(id);
      } else {
        let resolveExternal;
        let timer;
        const moduleDefPromise = new Promise((resolve, reject) => {
          resolveExternal = resolve; // watch the external for timeout
          // eslint-disable-next-line lwr/no-unguarded-apis, no-undef

          timer = setTimeout(() => {
            reject(new LoaderError(MODULE_LOAD_TIMEOUT, [id]));
          }, MODULE_LOAD_TIMEOUT_TIMER);
        }).finally(() => {
          // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
          clearTimeout(timer);
        });
        const moduleDef = {
          name: id,
          defined: false,
          external: {
            resolveExternal,
            moduleDefPromise
          }
        };
        this.namedDefineRegistry.set(id, moduleDef);
      }
    }); // throw error for modules that were already registered

    if (alreadyRegistered.length) {
      throw new LoaderError(MODULE_ALREADY_LOADED, [alreadyRegistered.join(', ')]);
    }
  }

  getImportMetadataResolver() {
    return this.resolver;
  }

  getModuleRecord(resolvedId, id) {
    let moduleRecord = this.moduleRegistry.get(resolvedId);

    if (moduleRecord) {
      // Make sure the original id is in the alias set
      if (!moduleRecord.aliases.has(id)) {
        moduleRecord.aliases.add(id);
      }

      return moduleRecord;
    }

    const instantiation = this.getModuleDef(resolvedId, id);
    const dependencyRecords = instantiation.then(moduleDef => {
      const dependencies = moduleDef.dependencies; // get dep and filter out exports

      const filtered = dependencies.map(dep => {
        if (dep === 'exports') {
          return;
        }

        invariant(dep !== 'require', NO_AMD_REQUIRE);
        return this.getModuleDependencyRecord.call(this, dep);
      }).filter(depRecord => depRecord !== undefined);
      return Promise.all(filtered);
    });
    moduleRecord = {
      id: resolvedId,
      aliases: new Set([id]),
      module: Object.create(null),
      dependencyRecords,
      instantiation,
      evaluated: false,
      evaluationPromise: null
    };
    this.moduleRegistry.set(resolvedId, moduleRecord);
    return moduleRecord;
  }

  async getModuleDependencyRecord(dependency) {
    const resolvedDepId = await this.resolve(dependency);
    return this.getModuleRecord(resolvedDepId, dependency);
  } // execute the "top-level code" (the code outside of functions) of a module


  async topLevelEvaluation(moduleRecord) {
    await this.instantiateAll(moduleRecord, {});
    return this.evaluateModule(moduleRecord, {});
  } // Returns a promise when a module and all of it's dependencies have finished instantiation


  async instantiateAll(moduleRecord, instantiatedMap) {
    if (!instantiatedMap[moduleRecord.id]) {
      instantiatedMap[moduleRecord.id] = true;
      const dependencyModuleRecords = await moduleRecord.dependencyRecords;

      if (dependencyModuleRecords) {
        for (let i = 0; i < dependencyModuleRecords.length; i++) {
          const depRecord = dependencyModuleRecords[i]; // eslint-disable-next-line no-await-in-loop

          await this.instantiateAll(depRecord, instantiatedMap);
        }
      }
    }
  }

  async evaluateModule(moduleRecord, evaluationMap) {
    const dependencyModuleRecords = await moduleRecord.dependencyRecords;

    if (dependencyModuleRecords.length > 0) {
      evaluationMap[moduleRecord.id] = true; // evaluate dependencies first

      await this.evaluateModuleDependencies(dependencyModuleRecords, evaluationMap);
    }

    const {
      exporter,
      dependencies
    } = await moduleRecord.instantiation; // The exports object automatically gets filled in by the exporter evaluation

    const exports = {};
    const depsMapped = await Promise.all(dependencies.map(async dep => {
      if (dep === 'exports') {
        return exports;
      }

      const resolvedDepId = await this.resolve(dep);
      const moduleRecord = this.moduleRegistry.get(resolvedDepId);

      if (!moduleRecord) {
        throw new LoaderError(FAILED_DEP, [resolvedDepId]);
      }

      const module = moduleRecord.module;
      /**
       * Circular dependencies are handled properly when named exports are used,
       * however, for default exports there is a bug: https://github.com/rollup/rollup/issues/3384
       *
       * The workaround below applies for circular dependencies (!moduleRecord.evaluated)
       */

      if (!moduleRecord.evaluated) {
        return this.getCircularDependencyWrapper(module);
      }

      if (module) {
        return module.__defaultInterop ? module.default : module;
      }

      throw new LoaderError(FAILED_DEP, [resolvedDepId]);
    })); // W-10029836 - In the case where we could be instantiating multiple graphs at the same time lets make sure the module have not already been evaluated

    if (moduleRecord.evaluated) {
      return moduleRecord.module;
    } // evaluates the module function


    let moduleDefault = exporter(...depsMapped); // value is returned from exporter, then we are not using named exports

    if (moduleDefault !== undefined) {
      moduleDefault = {
        default: moduleDefault
      }; // __defaultInterop is ONLY used to support backwards compatibility
      // of importing default exports the "wrong" way (when not using named exports).
      // See https://github.com/salesforce/lwr/pull/816

      Object.defineProperty(moduleDefault, '__defaultInterop', {
        value: true
      });
    } // if no return value, then we are using the exports object
    else {
      // handle only default export with Rollup forced named exports
      if (this.isNamedExportDefaultOnly(exports)) {
        Object.defineProperty(exports, '__useDefault', {
          value: true
        });
      }
    }

    const moduleExports = moduleDefault || exports; // update the module record
    // copy over enumerable public methods to module

    for (const key in moduleExports) {
      Object.defineProperty(moduleRecord.module, key, {
        enumerable: true,

        set(value) {
          moduleExports[key] = value;
        },

        get() {
          return moduleExports[key];
        }

      });
    } // copy non-enumerable to module


    if (moduleExports.__useDefault) {
      Object.defineProperty(moduleRecord.module, '__useDefault', {
        value: true
      });
    }

    if (moduleExports.__defaultInterop) {
      Object.defineProperty(moduleRecord.module, '__defaultInterop', {
        value: true
      });
    }

    if (moduleExports.__esModule) {
      Object.defineProperty(moduleRecord.module, '__esModule', {
        value: true
      });
    }

    moduleRecord.evaluated = true;
    Object.freeze(moduleRecord.module);
    return moduleRecord.module;
  } // Determines if named exports module has only default export


  isNamedExportDefaultOnly(exports) {
    return exports !== undefined && Object.getOwnPropertyNames(exports).length === 2 && Object.prototype.hasOwnProperty.call(exports, 'default') && Object.prototype.hasOwnProperty.call(exports, '__esModule');
  } // Wrap the dependency in a function that can be called and detected by __circular__ property.
  // The LWC engine checks for __circular__ to detect circular dependencies.


  getCircularDependencyWrapper(module) {
    const tmp = () => {
      return module.__useDefault || module.__defaultInterop ? module.default : module;
    };

    tmp.__circular__ = true;
    return tmp;
  }

  async evaluateModuleDependencies(dependencyModuleRecords, evaluationMap) {
    for (let i = 0; i < dependencyModuleRecords.length; i++) {
      const depRecord = dependencyModuleRecords[i];

      if (!depRecord.evaluated && !evaluationMap[depRecord.id]) {
        evaluationMap[depRecord.id] = true; // eslint-disable-next-line no-await-in-loop

        await this.evaluateModule(depRecord, evaluationMap);
      }
    }
  }

  async getModuleDef(resolvedId, originalId) {
    // reset lastDefine
    this.lastDefine = undefined; // the module name can be the resolved ID or the original ID if neither are URL's.

    const moduleName = !isUrl(resolvedId) ? resolvedId : originalId !== resolvedId ? originalId : undefined;
    let moduleDef = moduleName && this.namedDefineRegistry.get(moduleName);

    if (moduleDef && moduleDef.external) {
      return moduleDef.external.moduleDefPromise;
    }

    if (moduleDef && moduleDef.defined) {
      return moduleDef;
    }

    const parentUrl = this.resolver.getBaseUrl(); // only support baseUrl for now

    const specifier = moduleName || originalId;
    this.profiler.logOperationStart({
      id: MODULE_FETCH,
      specifier
    });
    return Promise.resolve().then(async () => {
      const loadHooks = this.loadHook;

      if (loadHooks) {
        for (let i = 0; i < loadHooks.length; i++) {
          const loadHook = loadHooks[i];
          const response = loadHook(resolvedId, parentUrl);
          const result = isResponseAPromise(response) ? // eslint-disable-next-line no-await-in-loop
          await evaluateLoadHook(resolvedId, response) : response;

          if (result === undefined) {
            throw new LoaderError(INVALID_LOADER_SERVICE_RESPONSE);
          }

          if (result && result !== null) {
            return evaluateLoadHookResponse(result, resolvedId);
          }
        }
      }

      return false;
    }).then(result => {
      if (result !== true && hasDocument) {
        return loadModuleDef(resolvedId);
      }
    }).then(() => {
      // Attempt to retrieve the module definition by name first
      moduleDef = moduleName && this.namedDefineRegistry.get(moduleName); // Fallback to the last loader.define call

      if (!moduleDef) {
        moduleDef = this.lastDefine;
      } // This should not happen


      if (!moduleDef) {
        throw new LoaderError(FAIL_INSTANTIATE, [resolvedId]);
      }

      this.profiler.logOperationEnd({
        id: MODULE_FETCH,
        specifier
      });
      return moduleDef;
    }).catch(e => {
      this.profiler.logOperationStart({
        id: MODULE_ERROR,
        specifier
      });
      throw e;
    });
  }

  addLoaderPlugin(hooks) {
    if (typeof hooks !== 'object') {
      throw new LoaderError(INVALID_HOOK);
    }

    const {
      loadModule: loadHook,
      resolveModule: resolveHook,
      loadMapping
    } = hooks;

    if (resolveHook) {
      if (this.resolveHook) {
        this.resolveHook.push(resolveHook);
      } else {
        this.resolveHook = [resolveHook];
      }
    }

    if (loadHook) {
      if (this.loadHook) {
        this.loadHook.push(loadHook);
      } else {
        this.loadHook = [loadHook];
      }
    }

    if (loadMapping) {
      this.resolver.addLoadMappingHook(loadMapping);
    }
  }

  importMetadataInvalidationCallback({
    name,
    oldUrl,
    newUrl
  }) {
    const handleStaleModuleHooks = this.handleStaleModuleHook;

    if (handleStaleModuleHooks) {
      evaluateHandleStaleModuleHooks(handleStaleModuleHooks, {
        name,
        oldUrl,
        newUrl
      });
    } else {
      if (hasConsole) {
        // eslint-disable-next-line lwr/no-unguarded-apis, no-undef
        console.warn(`stale module detected ${name}, current URL:${oldUrl}, new URL:${newUrl}`);
      }
    }
  }

  registerHandleStaleModuleHook(handleStaleModule) {
    if (this.handleStaleModuleHook) {
      this.handleStaleModuleHook.push(handleStaleModule);
    } else {
      this.handleStaleModuleHook = [handleStaleModule];
    }
  }

}
/**
 * The LWR loader is inspired and borrows from the algorithms and native browser principles of https://github.com/systemjs/systemjs
 */


class Loader {
  constructor(config) {
    let baseUrl = config.baseUrl;
    const mappingEndpoint = config.endpoints ? config.endpoints.uris.mapping : undefined;
    let profiler = config.profiler;

    if (!mappingEndpoint) {
      throw new LoaderError(NO_MAPPING_URL);
    } // add a trailing slash, if it does not exist


    config.endpoints.uris.mapping = mappingEndpoint.replace(/\/?$/, '/');

    if (baseUrl) {
      // add a trailing slash, if it does not exist
      baseUrl = baseUrl.replace(/\/?$/, '/');
    }

    if (!baseUrl) {
      baseUrl = getBaseUrl();
    }

    if (!baseUrl) {
      throw new LoaderError(NO_BASE_URL);
    }

    if (!profiler) {
      // default noop profiler
      profiler = {
        logOperationStart: () => {
          /* noop */
        },
        logOperationEnd: () => {
          /* noop */
        }
      };
    }

    this.registry = new ModuleRegistry(Object.freeze({
      endpoints: config.endpoints,
      baseUrl,
      profiler
    })); // TODO: W-10539691 - temp workaround for LWR-Java -- remove once appId is implemented there

    if (config.appMetadata && !config.appMetadata.appId) {
      // Parse the appId from the bootstrapModule
      // LWR-Java bootstrap module format: @lwr-bootstrap/my/app/v/0_0_1 -- my/app is the appId
      const match = config.appMetadata.bootstrapModule.match(/@lwr-bootstrap\/(.+)\/v\/.+/);
      const appId = match && match[1];
      config.appMetadata.appId = appId;
    } // TODO: https://github.com/salesforce/lwr/issues/1087


    this.services = Object.freeze({
      addLoaderPlugin: this.registry.addLoaderPlugin.bind(this.registry),
      handleStaleModule: this.registry.registerHandleStaleModuleHook.bind(this.registry),
      appMetadata: config.appMetadata
    });
  }
  /**
   * Defines/registers a single named AMD module definition.
   *
   * @param {string} name The module name
   * @param {string[]} dependencies A list of module dependencies (module imports)
   * @param {Function} execute The function containing the module code. AKA exporter as it also returns the modules exports when executed
   * @return {void}
   */


  define(name, dependencies, execute) {
    invariant(typeof name === 'string', MISSING_NAME);
    let ctor = execute;
    let deps = dependencies; // Convert no dependencies form `define('name', function(){}, {});` to: `define('name', [], function(){}, {})`

    if (typeof deps === 'function') {
      ctor = dependencies;
      deps = [];
    }

    invariant(Array.isArray(deps), INVALID_DEPS);
    this.registry.define(name, deps, ctor);
  }
  /**
   * Retrieves/loads a module, returning it from the registry if it exists and fetching it if it doesn't.
   *
   * @param {string} id - A module identifier or URL
   * @param {string} importer - The versioned specifier of the module importer
   *                            Used when the ID is not versioned (eg: variable dynamic imports)
   * @return {Promise<Module>}
   */


  async load(id, importer) {
    return this.registry.load(id, importer);
  }
  /**
   * Checks if a Module exists in the registry.  Note, returns false even if the ModuleDefinition exists but the Module has not been instantiated yet (executed).
   *
   * @param {string} id - A module identifier or URL
   * @return {boolean}
   */


  has(id) {
    return this.registry.has(id);
  }
  /**
   * Resolves the module identifier or URL.  Returns the module identifier if the moduleDefinition exists, or the full resolved URL if a URL is given.
   *
   * @param {string} id - A module identifier or URL
   * @param {string} importer - The versioned specifier of the module importer
   *                            Used when the ID is not versioned (eg: variable dynamic imports)
   * @return {string}
   */


  async resolve(id, importer) {
    return this.registry.resolve(id, importer);
  }

  async registerImportMappings(mappings, rootSpecifiers) {
    this.registry.getImportMetadataResolver().registerImportMappings(mappings, rootSpecifiers);
  }
  /**
   * Marks modules as "externally" loaded/provided (e.g. preloaded), so that the loader does not attempt to load them.
   *
   * @param modules - list of module identifiers
   */


  registerExternalModules(modules) {
    this.registry.registerExternalModules(modules);
  }

}

export { Loader };