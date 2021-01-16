// https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StoragegatewayTapePoolConfig extends TerraformMetaArguments {
  readonly poolName: string;
  readonly retentionLockTimeInDays?: number;
  readonly retentionLockType?: string;
  readonly storageClass: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class StoragegatewayTapePool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StoragegatewayTapePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_tape_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._poolName = config.poolName;
    this._retentionLockTimeInDays = config.retentionLockTimeInDays;
    this._retentionLockType = config.retentionLockType;
    this._storageClass = config.storageClass;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName: string;
  public get poolName() {
    return this._poolName;
  }
  public set poolName(value: string) {
    this._poolName = value;
  }

  // retention_lock_time_in_days - computed: false, optional: true, required: false
  private _retentionLockTimeInDays?: number;
  public get retentionLockTimeInDays() {
    return this._retentionLockTimeInDays;
  }
  public set retentionLockTimeInDays(value: number | undefined) {
    this._retentionLockTimeInDays = value;
  }

  // retention_lock_type - computed: false, optional: true, required: false
  private _retentionLockType?: string;
  public get retentionLockType() {
    return this._retentionLockType;
  }
  public set retentionLockType(value: string | undefined) {
    this._retentionLockType = value;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass: string;
  public get storageClass() {
    return this._storageClass;
  }
  public set storageClass(value: string) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pool_name: this._poolName,
      retention_lock_time_in_days: this._retentionLockTimeInDays,
      retention_lock_type: this._retentionLockType,
      storage_class: this._storageClass,
      tags: this._tags,
    };
  }
}
