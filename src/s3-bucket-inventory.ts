// https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketInventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#enabled S3BucketInventory#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#included_object_versions S3BucketInventory#included_object_versions}
  */
  readonly includedObjectVersions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#name S3BucketInventory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#optional_fields S3BucketInventory#optional_fields}
  */
  readonly optionalFields?: string[];
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#destination S3BucketInventory#destination}
  */
  readonly destination: S3BucketInventoryDestination[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#filter S3BucketInventory#filter}
  */
  readonly filter?: S3BucketInventoryFilter[];
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#schedule S3BucketInventory#schedule}
  */
  readonly schedule: S3BucketInventorySchedule[];
}
export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#key_id S3BucketInventory#key_id}
  */
  readonly keyId: string;
}

function s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseKms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
}

function s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface S3BucketInventoryDestinationBucketEncryption {
  /**
  * sse_kms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_kms S3BucketInventory#sse_kms}
  */
  readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms[];
  /**
  * sse_s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_s3 S3BucketInventory#sse_s3}
  */
  readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3[];
}

function s3BucketInventoryDestinationBucketEncryptionToTerraform(struct?: S3BucketInventoryDestinationBucketEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sse_kms: cdktf.listMapper(s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform)(struct!.sseKms),
    sse_s3: cdktf.listMapper(s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform)(struct!.sseS3),
  }
}

export interface S3BucketInventoryDestinationBucket {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#account_id S3BucketInventory#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket_arn S3BucketInventory#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#format S3BucketInventory#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
  */
  readonly prefix?: string;
  /**
  * encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#encryption S3BucketInventory#encryption}
  */
  readonly encryption?: S3BucketInventoryDestinationBucketEncryption[];
}

function s3BucketInventoryDestinationBucketToTerraform(struct?: S3BucketInventoryDestinationBucket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    format: cdktf.stringToTerraform(struct!.format),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    encryption: cdktf.listMapper(s3BucketInventoryDestinationBucketEncryptionToTerraform)(struct!.encryption),
  }
}

export interface S3BucketInventoryDestination {
  /**
  * bucket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
  */
  readonly bucket: S3BucketInventoryDestinationBucket[];
}

function s3BucketInventoryDestinationToTerraform(struct?: S3BucketInventoryDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.listMapper(s3BucketInventoryDestinationBucketToTerraform)(struct!.bucket),
  }
}

export interface S3BucketInventoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
  */
  readonly prefix?: string;
}

function s3BucketInventoryFilterToTerraform(struct?: S3BucketInventoryFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface S3BucketInventorySchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#frequency S3BucketInventory#frequency}
  */
  readonly frequency: string;
}

function s3BucketInventoryScheduleToTerraform(struct?: S3BucketInventorySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory}
*/
export class S3BucketInventory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_inventory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketInventoryConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketInventoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_inventory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._enabled = config.enabled;
    this._includedObjectVersions = config.includedObjectVersions;
    this._name = config.name;
    this._optionalFields = config.optionalFields;
    this._destination = config.destination;
    this._filter = config.filter;
    this._schedule = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_object_versions - computed: false, optional: false, required: true
  private _includedObjectVersions: string;
  public get includedObjectVersions() {
    return this.getStringAttribute('included_object_versions');
  }
  public set includedObjectVersions(value: string) {
    this._includedObjectVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectVersionsInput() {
    return this._includedObjectVersions
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // optional_fields - computed: false, optional: true, required: false
  private _optionalFields?: string[];
  public get optionalFields() {
    return this.getListAttribute('optional_fields');
  }
  public set optionalFields(value: string[] ) {
    this._optionalFields = value;
  }
  public resetOptionalFields() {
    this._optionalFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalFieldsInput() {
    return this._optionalFields
  }

  // destination - computed: false, optional: false, required: true
  private _destination: S3BucketInventoryDestination[];
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: S3BucketInventoryDestination[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: S3BucketInventoryFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: S3BucketInventoryFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: S3BucketInventorySchedule[];
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: S3BucketInventorySchedule[]) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      enabled: cdktf.booleanToTerraform(this._enabled),
      included_object_versions: cdktf.stringToTerraform(this._includedObjectVersions),
      name: cdktf.stringToTerraform(this._name),
      optional_fields: cdktf.listMapper(cdktf.stringToTerraform)(this._optionalFields),
      destination: cdktf.listMapper(s3BucketInventoryDestinationToTerraform)(this._destination),
      filter: cdktf.listMapper(s3BucketInventoryFilterToTerraform)(this._filter),
      schedule: cdktf.listMapper(s3BucketInventoryScheduleToTerraform)(this._schedule),
    };
  }
}
