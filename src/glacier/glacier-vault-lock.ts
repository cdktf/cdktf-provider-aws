// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glacier
*/
export interface GlacierVaultLockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}
  */
  readonly completeLock: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}
  */
  readonly ignoreDeletionError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#policy GlacierVaultLock#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}
  */
  readonly vaultName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock aws_glacier_vault_lock}
*/
export class GlacierVaultLock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glacier_vault_lock";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock aws_glacier_vault_lock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlacierVaultLockConfig
  */
  public constructor(scope: Construct, id: string, config: GlacierVaultLockConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glacier_vault_lock',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._completeLock = config.completeLock;
    this._ignoreDeletionError = config.ignoreDeletionError;
    this._policy = config.policy;
    this._vaultName = config.vaultName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // complete_lock - computed: false, optional: false, required: true
  private _completeLock?: boolean | cdktf.IResolvable; 
  public get completeLock() {
    return this.getBooleanAttribute('complete_lock');
  }
  public set completeLock(value: boolean | cdktf.IResolvable) {
    this._completeLock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLockInput() {
    return this._completeLock;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_deletion_error - computed: false, optional: true, required: false
  private _ignoreDeletionError?: boolean | cdktf.IResolvable; 
  public get ignoreDeletionError() {
    return this.getBooleanAttribute('ignore_deletion_error');
  }
  public set ignoreDeletionError(value: boolean | cdktf.IResolvable) {
    this._ignoreDeletionError = value;
  }
  public resetIgnoreDeletionError() {
    this._ignoreDeletionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDeletionErrorInput() {
    return this._ignoreDeletionError;
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

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      complete_lock: cdktf.booleanToTerraform(this._completeLock),
      ignore_deletion_error: cdktf.booleanToTerraform(this._ignoreDeletionError),
      policy: cdktf.stringToTerraform(this._policy),
      vault_name: cdktf.stringToTerraform(this._vaultName),
    };
  }
}
