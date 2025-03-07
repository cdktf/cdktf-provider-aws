/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlacierVaultLockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}
  */
  readonly completeLock: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock#id GlacierVaultLock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}
  */
  readonly ignoreDeletionError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock#policy GlacierVaultLock#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}
  */
  readonly vaultName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock aws_glacier_vault_lock}
*/
export class GlacierVaultLock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glacier_vault_lock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlacierVaultLock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlacierVaultLock to import
  * @param importFromId The id of the existing GlacierVaultLock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlacierVaultLock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glacier_vault_lock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/glacier_vault_lock aws_glacier_vault_lock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlacierVaultLockConfig
  */
  public constructor(scope: Construct, id: string, config: GlacierVaultLockConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glacier_vault_lock',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._completeLock = config.completeLock;
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
      ignore_deletion_error: cdktf.booleanToTerraform(this._ignoreDeletionError),
      policy: cdktf.stringToTerraform(this._policy),
      vault_name: cdktf.stringToTerraform(this._vaultName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      complete_lock: {
        value: cdktf.booleanToHclTerraform(this._completeLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_deletion_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreDeletionError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_name: {
        value: cdktf.stringToHclTerraform(this._vaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
