// https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayTapePoolConfig extends cdktf.TerraformMetaArguments {
  readonly poolName: string;
  readonly retentionLockTimeInDays?: number;
  readonly retentionLockType?: string;
  readonly storageClass: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class StoragegatewayTapePool extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName: string;
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName
  }

  // retention_lock_time_in_days - computed: false, optional: true, required: false
  private _retentionLockTimeInDays?: number;
  public get retentionLockTimeInDays() {
    return this.getNumberAttribute('retention_lock_time_in_days');
  }
  public set retentionLockTimeInDays(value: number ) {
    this._retentionLockTimeInDays = value;
  }
  public resetRetentionLockTimeInDays() {
    this._retentionLockTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionLockTimeInDaysInput() {
    return this._retentionLockTimeInDays
  }

  // retention_lock_type - computed: false, optional: true, required: false
  private _retentionLockType?: string;
  public get retentionLockType() {
    return this.getStringAttribute('retention_lock_type');
  }
  public set retentionLockType(value: string ) {
    this._retentionLockType = value;
  }
  public resetRetentionLockType() {
    this._retentionLockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionLockTypeInput() {
    return this._retentionLockType
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass: string;
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pool_name: cdktf.stringToTerraform(this._poolName),
      retention_lock_time_in_days: cdktf.numberToTerraform(this._retentionLockTimeInDays),
      retention_lock_type: cdktf.stringToTerraform(this._retentionLockType),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
