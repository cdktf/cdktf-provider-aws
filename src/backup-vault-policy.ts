// https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupVaultPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly backupVaultName: string;
  readonly policy: string;
}

// Resource

export class BackupVaultPolicy extends cdktf.TerraformResource {

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

  // backup_vault_arn - computed: true, optional: false, required: false
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_name - computed: false, optional: false, required: true
  private _backupVaultName: string;
  public get backupVaultName() {
    return this.getStringAttribute('backup_vault_name');
  }
  public set backupVaultName(value: string) {
    this._backupVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultNameInput() {
    return this._backupVaultName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }
}
