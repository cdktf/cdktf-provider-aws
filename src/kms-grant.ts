// https://www.terraform.io/docs/providers/aws/r/kms_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsGrantConfig extends TerraformMetaArguments {
  readonly grantCreationTokens?: string[];
  readonly granteePrincipal: string;
  readonly keyId: string;
  readonly name?: string;
  readonly operations: string[];
  readonly retireOnDelete?: boolean;
  readonly retiringPrincipal?: string;
  /** constraints block */
  readonly constraints?: KmsGrantConstraints[];
}
export interface KmsGrantConstraints {
  readonly encryptionContextEquals?: { [key: string]: string };
  readonly encryptionContextSubset?: { [key: string]: string };
}

// Resource

export class KmsGrant extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._grantCreationTokens = config.grantCreationTokens;
    this._granteePrincipal = config.granteePrincipal;
    this._keyId = config.keyId;
    this._name = config.name;
    this._operations = config.operations;
    this._retireOnDelete = config.retireOnDelete;
    this._retiringPrincipal = config.retiringPrincipal;
    this._constraints = config.constraints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grant_creation_tokens - computed: false, optional: true, required: false
  private _grantCreationTokens?: string[];
  public get grantCreationTokens() {
    return this.getListAttribute('grant_creation_tokens');
  }
  public set grantCreationTokens(value: string[] ) {
    this._grantCreationTokens = value;
  }
  public resetGrantCreationTokens() {
    this._grantCreationTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantCreationTokensInput() {
    return this._grantCreationTokens
  }

  // grant_id - computed: true, optional: false, required: false
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }

  // grant_token - computed: true, optional: false, required: false
  public get grantToken() {
    return this.getStringAttribute('grant_token');
  }

  // grantee_principal - computed: false, optional: false, required: true
  private _granteePrincipal: string;
  public get granteePrincipal() {
    return this.getStringAttribute('grantee_principal');
  }
  public set granteePrincipal(value: string) {
    this._granteePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteePrincipalInput() {
    return this._granteePrincipal
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // operations - computed: false, optional: false, required: true
  private _operations: string[];
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations
  }

  // retire_on_delete - computed: false, optional: true, required: false
  private _retireOnDelete?: boolean;
  public get retireOnDelete() {
    return this.getBooleanAttribute('retire_on_delete');
  }
  public set retireOnDelete(value: boolean ) {
    this._retireOnDelete = value;
  }
  public resetRetireOnDelete() {
    this._retireOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retireOnDeleteInput() {
    return this._retireOnDelete
  }

  // retiring_principal - computed: false, optional: true, required: false
  private _retiringPrincipal?: string;
  public get retiringPrincipal() {
    return this.getStringAttribute('retiring_principal');
  }
  public set retiringPrincipal(value: string ) {
    this._retiringPrincipal = value;
  }
  public resetRetiringPrincipal() {
    this._retiringPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retiringPrincipalInput() {
    return this._retiringPrincipal
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints?: KmsGrantConstraints[];
  public get constraints() {
    return this.interpolationForAttribute('constraints') as any;
  }
  public set constraints(value: KmsGrantConstraints[] ) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_creation_tokens: this._grantCreationTokens,
      grantee_principal: this._granteePrincipal,
      key_id: this._keyId,
      name: this._name,
      operations: this._operations,
      retire_on_delete: this._retireOnDelete,
      retiring_principal: this._retiringPrincipal,
      constraints: this._constraints,
    };
  }
}
