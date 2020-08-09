// https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "complete_lock": {
        "type": "bool",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ignore_deletion_error": {
        "type": "bool",
        "optional": true
      },
      "policy": {
        "type": "string",
        "required": true
      },
      "vault_name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlacierVaultLockConfig extends TerraformMetaArguments {
  readonly completeLock: boolean;
  readonly ignoreDeletionError?: boolean;
  readonly policy: string;
  readonly vaultName: string;
}

// Resource

export class GlacierVaultLock extends TerraformResource {

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
    return this._completeLock;
  }
  public set completeLock(value: boolean) {
    this._completeLock = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ignore_deletion_error - computed: false, optional: true, required: false
  private _ignoreDeletionError?: boolean;
  public get ignoreDeletionError() {
    return this._ignoreDeletionError;
  }
  public set ignoreDeletionError(value: boolean | undefined) {
    this._ignoreDeletionError = value;
  }

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string) {
    this._policy = value;
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName: string;
  public get vaultName() {
    return this._vaultName;
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      complete_lock: this._completeLock,
      ignore_deletion_error: this._ignoreDeletionError,
      policy: this._policy,
      vault_name: this._vaultName,
    };
  }
}
