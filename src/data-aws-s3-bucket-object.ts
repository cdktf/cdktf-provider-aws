// https://www.terraform.io/docs/providers/aws/r/data_aws_s3_bucket_object.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "body": {
        "type": "string",
        "computed": true
      },
      "bucket": {
        "type": "string",
        "required": true
      },
      "cache_control": {
        "type": "string",
        "computed": true
      },
      "content_disposition": {
        "type": "string",
        "computed": true
      },
      "content_encoding": {
        "type": "string",
        "computed": true
      },
      "content_language": {
        "type": "string",
        "computed": true
      },
      "content_length": {
        "type": "number",
        "computed": true
      },
      "content_type": {
        "type": "string",
        "computed": true
      },
      "etag": {
        "type": "string",
        "computed": true
      },
      "expiration": {
        "type": "string",
        "computed": true
      },
      "expires": {
        "type": "string",
        "computed": true
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
      "last_modified": {
        "type": "string",
        "computed": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "object_lock_legal_hold_status": {
        "type": "string",
        "computed": true
      },
      "object_lock_mode": {
        "type": "string",
        "computed": true
      },
      "object_lock_retain_until_date": {
        "type": "string",
        "computed": true
      },
      "range": {
        "type": "string",
        "optional": true
      },
      "server_side_encryption": {
        "type": "string",
        "computed": true
      },
      "sse_kms_key_id": {
        "type": "string",
        "computed": true
      },
      "storage_class": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "version_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "website_redirect_location": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAwsS3BucketObjectConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly key: string;
  readonly range?: string;
  readonly tags?: { [key: string]: string };
  readonly versionId?: string;
}

// Resource

export class DataAwsS3BucketObject extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsS3BucketObjectConfig) {
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
    this._bucket = config.bucket;
    this._key = config.key;
    this._range = config.range;
    this._tags = config.tags;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: true
  public get body() {
    return this.getStringAttribute('body');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // cache_control - computed: true, optional: false, required: true
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content_disposition - computed: true, optional: false, required: true
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: true
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_language - computed: true, optional: false, required: true
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }

  // content_length - computed: true, optional: false, required: true
  public get contentLength() {
    return this.getNumberAttribute('content_length');
  }

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expiration - computed: true, optional: false, required: true
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expires - computed: true, optional: false, required: true
  public get expires() {
    return this.getStringAttribute('expires');
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

  // last_modified - computed: true, optional: false, required: true
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
  }

  // object_lock_legal_hold_status - computed: true, optional: false, required: true
  public get objectLockLegalHoldStatus() {
    return this.getStringAttribute('object_lock_legal_hold_status');
  }

  // object_lock_mode - computed: true, optional: false, required: true
  public get objectLockMode() {
    return this.getStringAttribute('object_lock_mode');
  }

  // object_lock_retain_until_date - computed: true, optional: false, required: true
  public get objectLockRetainUntilDate() {
    return this.getStringAttribute('object_lock_retain_until_date');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string;
  public get range() {
    return this._range;
  }
  public set range(value: string | undefined) {
    this._range = value;
  }

  // server_side_encryption - computed: true, optional: false, required: true
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }

  // sse_kms_key_id - computed: true, optional: false, required: true
  public get sseKmsKeyId() {
    return this.getStringAttribute('sse_kms_key_id');
  }

  // storage_class - computed: true, optional: false, required: true
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this._versionId ?? this.getStringAttribute('version_id');
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }

  // website_redirect_location - computed: true, optional: false, required: true
  public get websiteRedirectLocation() {
    return this.getStringAttribute('website_redirect_location');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      key: this._key,
      range: this._range,
      tags: this._tags,
      version_id: this._versionId,
    };
  }
}
