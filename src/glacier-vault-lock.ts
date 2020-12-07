// https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlacierVaultLockConfig extends cdktf.TerraformMetaArguments {
  readonly completeLock: boolean;
  readonly ignoreDeletionError?: boolean;
  readonly policy: string;
  readonly vaultName: string;
}

// Resource

export class GlacierVaultLock extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _completeLock: boolean;
  public get completeLock() {
    return this.getBooleanAttribute('complete_lock');
  }
  public set completeLock(value: boolean) {
    this._completeLock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLockInput() {
    return this._completeLock
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_deletion_error - computed: false, optional: true, required: false
  private _ignoreDeletionError?: boolean;
  public get ignoreDeletionError() {
    return this.getBooleanAttribute('ignore_deletion_error');
  }
  public set ignoreDeletionError(value: boolean ) {
    this._ignoreDeletionError = value;
  }
  public resetIgnoreDeletionError() {
    this._ignoreDeletionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDeletionErrorInput() {
    return this._ignoreDeletionError
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

  // vault_name - computed: false, optional: false, required: true
  private _vaultName: string;
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName
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
