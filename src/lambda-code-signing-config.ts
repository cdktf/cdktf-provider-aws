// https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#description LambdaCodeSigningConfig#description}
  */
  readonly description?: string;
  /**
  * allowed_publishers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
  */
  readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers[];
  /**
  * policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#policies LambdaCodeSigningConfig#policies}
  */
  readonly policies?: LambdaCodeSigningConfigPolicies[];
}
export interface LambdaCodeSigningConfigAllowedPublishers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}
  */
  readonly signingProfileVersionArns: string[];
}

function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: LambdaCodeSigningConfigAllowedPublishers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    signing_profile_version_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.signingProfileVersionArns),
  }
}

export interface LambdaCodeSigningConfigPolicies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}
  */
  readonly untrustedArtifactOnDeployment: string;
}

function lambdaCodeSigningConfigPoliciesToTerraform(struct?: LambdaCodeSigningConfigPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct!.untrustedArtifactOnDeployment),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config}
*/
export class LambdaCodeSigningConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lambda_code_signing_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaCodeSigningConfigConfig
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // allowed_publishers - computed: false, optional: false, required: true
  private _allowedPublishers: LambdaCodeSigningConfigAllowedPublishers[];
  public get allowedPublishers() {
    return this.interpolationForAttribute('allowed_publishers') as any;
  }
  public set allowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers[]) {
    this._allowedPublishers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPublishersInput() {
    return this._allowedPublishers
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: LambdaCodeSigningConfigPolicies[];
  public get policies() {
    return this.interpolationForAttribute('policies') as any;
  }
  public set policies(value: LambdaCodeSigningConfigPolicies[] ) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      allowed_publishers: cdktf.listMapper(lambdaCodeSigningConfigAllowedPublishersToTerraform)(this._allowedPublishers),
      policies: cdktf.listMapper(lambdaCodeSigningConfigPoliciesToTerraform)(this._policies),
    };
  }
}
