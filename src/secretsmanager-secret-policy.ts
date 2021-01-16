// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsmanagerSecretPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly blockPublicPolicy?: boolean;
  readonly policy: string;
  readonly secretArn: string;
}

// Resource

export class SecretsmanagerSecretPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blockPublicPolicy = config.blockPublicPolicy;
    this._policy = config.policy;
    this._secretArn = config.secretArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean;
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean ) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy
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

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
      policy: cdktf.stringToTerraform(this._policy),
      secret_arn: cdktf.stringToTerraform(this._secretArn),
    };
  }
}
