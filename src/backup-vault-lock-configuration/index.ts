// https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupVaultLockConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}
  */
  readonly backupVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}
  */
  readonly changeableForDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}
  */
  readonly maxRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}
  */
  readonly minRetentionDays?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration aws_backup_vault_lock_configuration}
*/
export class BackupVaultLockConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_vault_lock_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration aws_backup_vault_lock_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupVaultLockConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BackupVaultLockConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_vault_lock_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupVaultName = config.backupVaultName;
    this._changeableForDays = config.changeableForDays;
    this._id = config.id;
    this._maxRetentionDays = config.maxRetentionDays;
    this._minRetentionDays = config.minRetentionDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_vault_arn - computed: true, optional: false, required: false
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_name - computed: false, optional: false, required: true
  private _backupVaultName?: string; 
  public get backupVaultName() {
    return this.getStringAttribute('backup_vault_name');
  }
  public set backupVaultName(value: string) {
    this._backupVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultNameInput() {
    return this._backupVaultName;
  }

  // changeable_for_days - computed: false, optional: true, required: false
  private _changeableForDays?: number; 
  public get changeableForDays() {
    return this.getNumberAttribute('changeable_for_days');
  }
  public set changeableForDays(value: number) {
    this._changeableForDays = value;
  }
  public resetChangeableForDays() {
    this._changeableForDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeableForDaysInput() {
    return this._changeableForDays;
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

  // max_retention_days - computed: false, optional: true, required: false
  private _maxRetentionDays?: number; 
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }
  public set maxRetentionDays(value: number) {
    this._maxRetentionDays = value;
  }
  public resetMaxRetentionDays() {
    this._maxRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetentionDaysInput() {
    return this._maxRetentionDays;
  }

  // min_retention_days - computed: false, optional: true, required: false
  private _minRetentionDays?: number; 
  public get minRetentionDays() {
    return this.getNumberAttribute('min_retention_days');
  }
  public set minRetentionDays(value: number) {
    this._minRetentionDays = value;
  }
  public resetMinRetentionDays() {
    this._minRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetentionDaysInput() {
    return this._minRetentionDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
      changeable_for_days: cdktf.numberToTerraform(this._changeableForDays),
      id: cdktf.stringToTerraform(this._id),
      max_retention_days: cdktf.numberToTerraform(this._maxRetentionDays),
      min_retention_days: cdktf.numberToTerraform(this._minRetentionDays),
    };
  }
}
