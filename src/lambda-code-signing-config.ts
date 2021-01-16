// https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LambdaCodeSigningConfigConfig extends TerraformMetaArguments {
  readonly description?: string;
  /** allowed_publishers block */
  readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers[];
  /** policies block */
  readonly policies?: LambdaCodeSigningConfigPolicies[];
}
export interface LambdaCodeSigningConfigAllowedPublishers {
  readonly signingProfileVersionArns: string[];
}
export interface LambdaCodeSigningConfigPolicies {
  readonly untrustedArtifactOnDeployment: string;
}

// Resource

export class LambdaCodeSigningConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_code_signing_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._allowedPublishers = config.allowedPublishers;
    this._policies = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_id - computed: true, optional: false, required: true
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_modified - computed: true, optional: false, required: true
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // allowed_publishers - computed: false, optional: false, required: true
  private _allowedPublishers: LambdaCodeSigningConfigAllowedPublishers[];
  public get allowedPublishers() {
    return this._allowedPublishers;
  }
  public set allowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers[]) {
    this._allowedPublishers = value;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: LambdaCodeSigningConfigPolicies[];
  public get policies() {
    return this._policies;
  }
  public set policies(value: LambdaCodeSigningConfigPolicies[] | undefined) {
    this._policies = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      allowed_publishers: this._allowedPublishers,
      policies: this._policies,
    };
  }
}
