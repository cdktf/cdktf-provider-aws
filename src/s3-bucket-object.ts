// https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "acl": {
        "type": "string",
        "optional": true
      },
      "bucket": {
        "type": "string",
        "required": true
      },
      "cache_control": {
        "type": "string",
        "optional": true
      },
      "content": {
        "type": "string",
        "optional": true
      },
      "content_base64": {
        "type": "string",
        "optional": true
      },
      "content_disposition": {
        "type": "string",
        "optional": true
      },
      "content_encoding": {
        "type": "string",
        "optional": true
      },
      "content_language": {
        "type": "string",
        "optional": true
      },
      "content_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "etag": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "force_destroy": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key": {
        "type": "string",
        "required": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "object_lock_legal_hold_status": {
        "type": "string",
        "optional": true
      },
      "object_lock_mode": {
        "type": "string",
        "optional": true
      },
      "object_lock_retain_until_date": {
        "type": "string",
        "optional": true
      },
      "server_side_encryption": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "source": {
        "type": "string",
        "optional": true
      },
      "storage_class": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "version_id": {
        "type": "string",
        "computed": true
      },
      "website_redirect": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3BucketObjectConfig extends TerraformMetaArguments {
  readonly acl?: string;
  readonly bucket: string;
  readonly cacheControl?: string;
  readonly content?: string;
  readonly contentBase64?: string;
  readonly contentDisposition?: string;
  readonly contentEncoding?: string;
  readonly contentLanguage?: string;
  readonly contentType?: string;
  readonly etag?: string;
  readonly forceDestroy?: boolean;
  readonly key: string;
  readonly kmsKeyId?: string;
  readonly metadata?: { [key: string]: string };
  readonly objectLockLegalHoldStatus?: string;
  readonly objectLockMode?: string;
  readonly objectLockRetainUntilDate?: string;
  readonly serverSideEncryption?: string;
  readonly source?: string;
  readonly storageClass?: string;
  readonly tags?: { [key: string]: string };
  readonly websiteRedirect?: string;
}

// Resource

export class S3BucketObject extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3BucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentBase64 = config.contentBase64;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._etag = config.etag;
    this._forceDestroy = config.forceDestroy;
    this._key = config.key;
    this._kmsKeyId = config.kmsKeyId;
    this._metadata = config.metadata;
    this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._serverSideEncryption = config.serverSideEncryption;
    this._source = config.source;
    this._storageClass = config.storageClass;
    this._tags = config.tags;
    this._websiteRedirect = config.websiteRedirect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string;
  public get acl() {
    return this._acl;
  }
  public set acl(value: string | undefined) {
    this._acl = value;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string;
  public get cacheControl() {
    return this._cacheControl;
  }
  public set cacheControl(value: string | undefined) {
    this._cacheControl = value;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string;
  public get content() {
    return this._content;
  }
  public set content(value: string | undefined) {
    this._content = value;
  }

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string;
  public get contentBase64() {
    return this._contentBase64;
  }
  public set contentBase64(value: string | undefined) {
    this._contentBase64 = value;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this._contentDisposition;
  }
  public set contentDisposition(value: string | undefined) {
    this._contentDisposition = value;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this._contentEncoding;
  }
  public set contentEncoding(value: string | undefined) {
    this._contentEncoding = value;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this._contentLanguage;
  }
  public set contentLanguage(value: string | undefined) {
    this._contentLanguage = value;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType ?? this.getStringAttribute('content_type');
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string;
  public get etag() {
    return this._etag ?? this.getStringAttribute('etag');
  }
  public set etag(value: string | undefined) {
    this._etag = value;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // object_lock_legal_hold_status - computed: false, optional: true, required: false
  private _objectLockLegalHoldStatus?: string;
  public get objectLockLegalHoldStatus() {
    return this._objectLockLegalHoldStatus;
  }
  public set objectLockLegalHoldStatus(value: string | undefined) {
    this._objectLockLegalHoldStatus = value;
  }

  // object_lock_mode - computed: false, optional: true, required: false
  private _objectLockMode?: string;
  public get objectLockMode() {
    return this._objectLockMode;
  }
  public set objectLockMode(value: string | undefined) {
    this._objectLockMode = value;
  }

  // object_lock_retain_until_date - computed: false, optional: true, required: false
  private _objectLockRetainUntilDate?: string;
  public get objectLockRetainUntilDate() {
    return this._objectLockRetainUntilDate;
  }
  public set objectLockRetainUntilDate(value: string | undefined) {
    this._objectLockRetainUntilDate = value;
  }

  // server_side_encryption - computed: true, optional: true, required: false
  private _serverSideEncryption?: string;
  public get serverSideEncryption() {
    return this._serverSideEncryption ?? this.getStringAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: string | undefined) {
    this._serverSideEncryption = value;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source;
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string;
  public get storageClass() {
    return this._storageClass ?? this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string | undefined) {
    this._storageClass = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version_id - computed: true, optional: false, required: true
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // website_redirect - computed: false, optional: true, required: false
  private _websiteRedirect?: string;
  public get websiteRedirect() {
    return this._websiteRedirect;
  }
  public set websiteRedirect(value: string | undefined) {
    this._websiteRedirect = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: this._acl,
      bucket: this._bucket,
      cache_control: this._cacheControl,
      content: this._content,
      content_base64: this._contentBase64,
      content_disposition: this._contentDisposition,
      content_encoding: this._contentEncoding,
      content_language: this._contentLanguage,
      content_type: this._contentType,
      etag: this._etag,
      force_destroy: this._forceDestroy,
      key: this._key,
      kms_key_id: this._kmsKeyId,
      metadata: this._metadata,
      object_lock_legal_hold_status: this._objectLockLegalHoldStatus,
      object_lock_mode: this._objectLockMode,
      object_lock_retain_until_date: this._objectLockRetainUntilDate,
      server_side_encryption: this._serverSideEncryption,
      source: this._source,
      storage_class: this._storageClass,
      tags: this._tags,
      website_redirect: this._websiteRedirect,
    };
  }
}
