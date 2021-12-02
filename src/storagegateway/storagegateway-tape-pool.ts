// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Storage Gateway
*/
export interface StoragegatewayTapePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#pool_name StoragegatewayTapePool#pool_name}
  */
  readonly poolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#retention_lock_time_in_days StoragegatewayTapePool#retention_lock_time_in_days}
  */
  readonly retentionLockTimeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#retention_lock_type StoragegatewayTapePool#retention_lock_type}
  */
  readonly retentionLockType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#storage_class StoragegatewayTapePool#storage_class}
  */
  readonly storageClass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#tags StoragegatewayTapePool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#tags_all StoragegatewayTapePool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool}
*/
export class StoragegatewayTapePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_storagegateway_tape_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayTapePoolConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // retention_lock_time_in_days - computed: false, optional: true, required: false
  private _retentionLockTimeInDays?: number; 
  public get retentionLockTimeInDays() {
    return this.getNumberAttribute('retention_lock_time_in_days');
  }
  public set retentionLockTimeInDays(value: number) {
    this._retentionLockTimeInDays = value;
  }
  public resetRetentionLockTimeInDays() {
    this._retentionLockTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionLockTimeInDaysInput() {
    return this._retentionLockTimeInDays;
  }

  // retention_lock_type - computed: false, optional: true, required: false
  private _retentionLockType?: string; 
  public get retentionLockType() {
    return this.getStringAttribute('retention_lock_type');
  }
  public set retentionLockType(value: string) {
    this._retentionLockType = value;
  }
  public resetRetentionLockType() {
    this._retentionLockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionLockTypeInput() {
    return this._retentionLockType;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
