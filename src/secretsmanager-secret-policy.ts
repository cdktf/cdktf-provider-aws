// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecretsmanagerSecretPolicyConfig extends TerraformMetaArguments {
  readonly blockPublicPolicy?: boolean;
  readonly policy: string;
  readonly secretArn: string;
}

// Resource

export class SecretsmanagerSecretPolicy extends TerraformResource {

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
    return this._blockPublicPolicy;
  }
  public set blockPublicPolicy(value: boolean | undefined) {
    this._blockPublicPolicy = value;
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

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn: string;
  public get secretArn() {
    return this._secretArn;
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_public_policy: this._blockPublicPolicy,
      policy: this._policy,
      secret_arn: this._secretArn,
    };
  }
}
