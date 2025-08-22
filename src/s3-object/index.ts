/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#acl S3Object#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#bucket S3Object#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#cache_control S3Object#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}
  */
  readonly checksumAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#content S3Object#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#content_base64 S3Object#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#content_disposition S3Object#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#content_encoding S3Object#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#content_language S3Object#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#content_type S3Object#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#etag S3Object#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#force_destroy S3Object#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#id S3Object#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#key S3Object#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#metadata S3Object#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}
  */
  readonly objectLockLegalHoldStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}
  */
  readonly objectLockMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}
  */
  readonly objectLockRetainUntilDate?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#region S3Object#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}
  */
  readonly serverSideEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#source S3Object#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#source_hash S3Object#source_hash}
  */
  readonly sourceHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#storage_class S3Object#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#tags S3Object#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#tags_all S3Object#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#website_redirect S3Object#website_redirect}
  */
  readonly websiteRedirect?: string;
  /**
  * override_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#override_provider S3Object#override_provider}
  */
  readonly overrideProvider?: S3ObjectOverrideProvider;
}
export interface S3ObjectOverrideProviderDefaultTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#tags S3Object#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function s3ObjectOverrideProviderDefaultTagsToTerraform(struct?: S3ObjectOverrideProviderDefaultTagsOutputReference | S3ObjectOverrideProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function s3ObjectOverrideProviderDefaultTagsToHclTerraform(struct?: S3ObjectOverrideProviderDefaultTagsOutputReference | S3ObjectOverrideProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ObjectOverrideProviderDefaultTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ObjectOverrideProviderDefaultTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ObjectOverrideProviderDefaultTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface S3ObjectOverrideProvider {
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#default_tags S3Object#default_tags}
  */
  readonly defaultTags?: S3ObjectOverrideProviderDefaultTags;
}

export function s3ObjectOverrideProviderToTerraform(struct?: S3ObjectOverrideProviderOutputReference | S3ObjectOverrideProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_tags: s3ObjectOverrideProviderDefaultTagsToTerraform(struct!.defaultTags),
  }
}


export function s3ObjectOverrideProviderToHclTerraform(struct?: S3ObjectOverrideProviderOutputReference | S3ObjectOverrideProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_tags: {
      value: s3ObjectOverrideProviderDefaultTagsToHclTerraform(struct!.defaultTags),
      isBlock: true,
      type: "list",
      storageClassType: "S3ObjectOverrideProviderDefaultTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ObjectOverrideProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ObjectOverrideProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTags = this._defaultTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ObjectOverrideProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTags.internalValue = value.defaultTags;
    }
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags = new S3ObjectOverrideProviderDefaultTagsOutputReference(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
  }
  public putDefaultTags(value: S3ObjectOverrideProviderDefaultTags) {
    this._defaultTags.internalValue = value;
  }
  public resetDefaultTags() {
    this._defaultTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object aws_s3_object}
*/
export class S3Object extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Object to import
  * @param importFromId The id of the existing S3Object that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Object to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/s3_object aws_s3_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ObjectConfig
  */
  public constructor(scope: Construct, id: string, config: S3ObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_object',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._bucketKeyEnabled = config.bucketKeyEnabled;
    this._cacheControl = config.cacheControl;
    this._checksumAlgorithm = config.checksumAlgorithm;
    this._content = config.content;
    this._contentBase64 = config.contentBase64;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._etag = config.etag;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._key = config.key;
    this._kmsKeyId = config.kmsKeyId;
    this._metadata = config.metadata;
    this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._region = config.region;
    this._serverSideEncryption = config.serverSideEncryption;
    this._source = config.source;
    this._sourceHash = config.sourceHash;
    this._storageClass = config.storageClass;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._websiteRedirect = config.websiteRedirect;
    this._overrideProvider.internalValue = config.overrideProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_key_enabled - computed: true, optional: true, required: false
  private _bucketKeyEnabled?: boolean | cdktf.IResolvable; 
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }
  public set bucketKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._bucketKeyEnabled = value;
  }
  public resetBucketKeyEnabled() {
    this._bucketKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketKeyEnabledInput() {
    return this._bucketKeyEnabled;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // checksum_algorithm - computed: false, optional: true, required: false
  private _checksumAlgorithm?: string; 
  public get checksumAlgorithm() {
    return this.getStringAttribute('checksum_algorithm');
  }
  public set checksumAlgorithm(value: string) {
    this._checksumAlgorithm = value;
  }
  public resetChecksumAlgorithm() {
    this._checksumAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumAlgorithmInput() {
    return this._checksumAlgorithm;
  }

  // checksum_crc32 - computed: true, optional: false, required: false
  public get checksumCrc32() {
    return this.getStringAttribute('checksum_crc32');
  }

  // checksum_crc32c - computed: true, optional: false, required: false
  public get checksumCrc32C() {
    return this.getStringAttribute('checksum_crc32c');
  }

  // checksum_crc64nvme - computed: true, optional: false, required: false
  public get checksumCrc64Nvme() {
    return this.getStringAttribute('checksum_crc64nvme');
  }

  // checksum_sha1 - computed: true, optional: false, required: false
  public get checksumSha1() {
    return this.getStringAttribute('checksum_sha1');
  }

  // checksum_sha256 - computed: true, optional: false, required: false
  public get checksumSha256() {
    return this.getStringAttribute('checksum_sha256');
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // object_lock_legal_hold_status - computed: false, optional: true, required: false
  private _objectLockLegalHoldStatus?: string; 
  public get objectLockLegalHoldStatus() {
    return this.getStringAttribute('object_lock_legal_hold_status');
  }
  public set objectLockLegalHoldStatus(value: string) {
    this._objectLockLegalHoldStatus = value;
  }
  public resetObjectLockLegalHoldStatus() {
    this._objectLockLegalHoldStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockLegalHoldStatusInput() {
    return this._objectLockLegalHoldStatus;
  }

  // object_lock_mode - computed: false, optional: true, required: false
  private _objectLockMode?: string; 
  public get objectLockMode() {
    return this.getStringAttribute('object_lock_mode');
  }
  public set objectLockMode(value: string) {
    this._objectLockMode = value;
  }
  public resetObjectLockMode() {
    this._objectLockMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockModeInput() {
    return this._objectLockMode;
  }

  // object_lock_retain_until_date - computed: false, optional: true, required: false
  private _objectLockRetainUntilDate?: string; 
  public get objectLockRetainUntilDate() {
    return this.getStringAttribute('object_lock_retain_until_date');
  }
  public set objectLockRetainUntilDate(value: string) {
    this._objectLockRetainUntilDate = value;
  }
  public resetObjectLockRetainUntilDate() {
    this._objectLockRetainUntilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockRetainUntilDateInput() {
    return this._objectLockRetainUntilDate;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // server_side_encryption - computed: true, optional: true, required: false
  private _serverSideEncryption?: string; 
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: string) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_hash - computed: false, optional: true, required: false
  private _sourceHash?: string; 
  public get sourceHash() {
    return this.getStringAttribute('source_hash');
  }
  public set sourceHash(value: string) {
    this._sourceHash = value;
  }
  public resetSourceHash() {
    this._sourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHashInput() {
    return this._sourceHash;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // website_redirect - computed: false, optional: true, required: false
  private _websiteRedirect?: string; 
  public get websiteRedirect() {
    return this.getStringAttribute('website_redirect');
  }
  public set websiteRedirect(value: string) {
    this._websiteRedirect = value;
  }
  public resetWebsiteRedirect() {
    this._websiteRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteRedirectInput() {
    return this._websiteRedirect;
  }

  // override_provider - computed: false, optional: true, required: false
  private _overrideProvider = new S3ObjectOverrideProviderOutputReference(this, "override_provider");
  public get overrideProvider() {
    return this._overrideProvider;
  }
  public putOverrideProvider(value: S3ObjectOverrideProvider) {
    this._overrideProvider.internalValue = value;
  }
  public resetOverrideProvider() {
    this._overrideProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProviderInput() {
    return this._overrideProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      checksum_algorithm: cdktf.stringToTerraform(this._checksumAlgorithm),
      content: cdktf.stringToTerraform(this._content),
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      etag: cdktf.stringToTerraform(this._etag),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
      object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
      object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
      region: cdktf.stringToTerraform(this._region),
      server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
      source: cdktf.stringToTerraform(this._source),
      source_hash: cdktf.stringToTerraform(this._sourceHash),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
      override_provider: s3ObjectOverrideProviderToTerraform(this._overrideProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._bucketKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_control: {
        value: cdktf.stringToHclTerraform(this._cacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checksum_algorithm: {
        value: cdktf.stringToHclTerraform(this._checksumAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_base64: {
        value: cdktf.stringToHclTerraform(this._contentBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_disposition: {
        value: cdktf.stringToHclTerraform(this._contentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktf.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_language: {
        value: cdktf.stringToHclTerraform(this._contentLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      object_lock_legal_hold_status: {
        value: cdktf.stringToHclTerraform(this._objectLockLegalHoldStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_lock_mode: {
        value: cdktf.stringToHclTerraform(this._objectLockMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_lock_retain_until_date: {
        value: cdktf.stringToHclTerraform(this._objectLockRetainUntilDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_side_encryption: {
        value: cdktf.stringToHclTerraform(this._serverSideEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_hash: {
        value: cdktf.stringToHclTerraform(this._sourceHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      website_redirect: {
        value: cdktf.stringToHclTerraform(this._websiteRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_provider: {
        value: s3ObjectOverrideProviderToHclTerraform(this._overrideProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3ObjectOverrideProviderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
