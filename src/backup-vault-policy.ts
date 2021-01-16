// https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupVaultPolicyConfig extends TerraformMetaArguments {
  readonly backupVaultName: string;
  readonly policy: string;
}

// Resource

export class BackupVaultPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupVaultPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_vault_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupVaultName = config.backupVaultName;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_vault_arn - computed: true, optional: false, required: true
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_name - computed: false, optional: false, required: true
  private _backupVaultName: string;
  public get backupVaultName() {
    return this._backupVaultName;
  }
  public set backupVaultName(value: string) {
    this._backupVaultName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string) {
    this._policy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_vault_name: this._backupVaultName,
      policy: this._policy,
    };
  }
}
