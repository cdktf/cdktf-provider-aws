// https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allowed_publishers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
  */
  readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
  /**
  * policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#policies LambdaCodeSigningConfig#policies}
  */
  readonly policies?: LambdaCodeSigningConfigPolicies;
}
export interface LambdaCodeSigningConfigAllowedPublishers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}
  */
  readonly signingProfileVersionArns: string[];
}

export function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: LambdaCodeSigningConfigAllowedPublishersOutputReference | LambdaCodeSigningConfigAllowedPublishers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signing_profile_version_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signingProfileVersionArns),
  }
}

export class LambdaCodeSigningConfigAllowedPublishersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaCodeSigningConfigAllowedPublishers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signingProfileVersionArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingProfileVersionArns = this._signingProfileVersionArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaCodeSigningConfigAllowedPublishers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signingProfileVersionArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signingProfileVersionArns = value.signingProfileVersionArns;
    }
  }

  // signing_profile_version_arns - computed: false, optional: false, required: true
  private _signingProfileVersionArns?: string[]; 
  public get signingProfileVersionArns() {
    return cdktf.Fn.tolist(this.getListAttribute('signing_profile_version_arns'));
  }
  public set signingProfileVersionArns(value: string[]) {
    this._signingProfileVersionArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingProfileVersionArnsInput() {
    return this._signingProfileVersionArns;
  }
}
export interface LambdaCodeSigningConfigPolicies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}
  */
  readonly untrustedArtifactOnDeployment: string;
}

export function lambdaCodeSigningConfigPoliciesToTerraform(struct?: LambdaCodeSigningConfigPoliciesOutputReference | LambdaCodeSigningConfigPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct!.untrustedArtifactOnDeployment),
  }
}

export class LambdaCodeSigningConfigPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaCodeSigningConfigPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._untrustedArtifactOnDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedArtifactOnDeployment = this._untrustedArtifactOnDeployment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaCodeSigningConfigPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._untrustedArtifactOnDeployment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._untrustedArtifactOnDeployment = value.untrustedArtifactOnDeployment;
    }
  }

  // untrusted_artifact_on_deployment - computed: false, optional: false, required: true
  private _untrustedArtifactOnDeployment?: string; 
  public get untrustedArtifactOnDeployment() {
    return this.getStringAttribute('untrusted_artifact_on_deployment');
  }
  public set untrustedArtifactOnDeployment(value: string) {
    this._untrustedArtifactOnDeployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedArtifactOnDeploymentInput() {
    return this._untrustedArtifactOnDeployment;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config aws_lambda_code_signing_config}
*/
export class LambdaCodeSigningConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_code_signing_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config aws_lambda_code_signing_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaCodeSigningConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_code_signing_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._allowedPublishers.internalValue = config.allowedPublishers;
    this._policies.internalValue = config.policies;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // allowed_publishers - computed: false, optional: false, required: true
  private _allowedPublishers = new LambdaCodeSigningConfigAllowedPublishersOutputReference(this, "allowed_publishers");
  public get allowedPublishers() {
    return this._allowedPublishers;
  }
  public putAllowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers) {
    this._allowedPublishers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPublishersInput() {
    return this._allowedPublishers.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new LambdaCodeSigningConfigPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: LambdaCodeSigningConfigPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      allowed_publishers: lambdaCodeSigningConfigAllowedPublishersToTerraform(this._allowedPublishers.internalValue),
      policies: lambdaCodeSigningConfigPoliciesToTerraform(this._policies.internalValue),
    };
  }
}
