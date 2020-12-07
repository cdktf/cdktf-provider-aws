// https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesIdentityPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly identity: string;
  readonly name: string;
  readonly policy: string;
}

// Resource

export class SesIdentityPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesIdentityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_identity_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._identity = config.identity;
    this._name = config.name;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: false, optional: false, required: true
  private _identity: string;
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
      identity: cdktf.stringToTerraform(this._identity),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }
}
