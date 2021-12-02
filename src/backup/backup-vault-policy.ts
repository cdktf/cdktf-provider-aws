// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Backup
*/
export interface BackupVaultPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html#backup_vault_name BackupVaultPolicy#backup_vault_name}
  */
  readonly backupVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html#policy BackupVaultPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy}
*/
export class BackupVaultPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_backup_vault_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupVaultPolicyConfig
  */
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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
