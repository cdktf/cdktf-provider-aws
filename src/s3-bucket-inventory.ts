// https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3BucketInventoryConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly enabled?: boolean;
  readonly includedObjectVersions: string;
  readonly name: string;
  readonly optionalFields?: string[];
  /** destination block */
  readonly destination: S3BucketInventoryDestination[];
  /** filter block */
  readonly filter?: S3BucketInventoryFilter[];
  /** schedule block */
  readonly schedule: S3BucketInventorySchedule[];
}
export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
  readonly keyId: string;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
}
export interface S3BucketInventoryDestinationBucketEncryption {
  /** sse_kms block */
  readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms[];
  /** sse_s3 block */
  readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3[];
}
export interface S3BucketInventoryDestinationBucket {
  readonly accountId?: string;
  readonly bucketArn: string;
  readonly format: string;
  readonly prefix?: string;
  /** encryption block */
  readonly encryption?: S3BucketInventoryDestinationBucketEncryption[];
}
export interface S3BucketInventoryDestination {
  /** bucket block */
  readonly bucket: S3BucketInventoryDestinationBucket[];
}
export interface S3BucketInventoryFilter {
  readonly prefix?: string;
}
export interface S3BucketInventorySchedule {
  readonly frequency: string;
}

// Resource

export class S3BucketInventory extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
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
      bucket: this._bucket,
      enabled: this._enabled,
      included_object_versions: this._includedObjectVersions,
      name: this._name,
      optional_fields: this._optionalFields,
      destination: this._destination,
      filter: this._filter,
      schedule: this._schedule,
    };
  }
}
