// https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerModelPackageGroupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy#id SagemakerModelPackageGroupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy#model_package_group_name SagemakerModelPackageGroupPolicy#model_package_group_name}
  */
  readonly modelPackageGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy#resource_policy SagemakerModelPackageGroupPolicy#resource_policy}
  */
  readonly resourcePolicy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy aws_sagemaker_model_package_group_policy}
*/
export class SagemakerModelPackageGroupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_model_package_group_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy aws_sagemaker_model_package_group_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelPackageGroupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model_package_group_policy',
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
    this._id = config.id;
    this._modelPackageGroupName = config.modelPackageGroupName;
    this._resourcePolicy = config.resourcePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // model_package_group_name - computed: false, optional: false, required: true
  private _modelPackageGroupName?: string; 
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }
  public set modelPackageGroupName(value: string) {
    this._modelPackageGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupNameInput() {
    return this._modelPackageGroupName;
  }

  // resource_policy - computed: false, optional: false, required: true
  private _resourcePolicy?: string; 
  public get resourcePolicy() {
    return this.getStringAttribute('resource_policy');
  }
  public set resourcePolicy(value: string) {
    this._resourcePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyInput() {
    return this._resourcePolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      model_package_group_name: cdktf.stringToTerraform(this._modelPackageGroupName),
      resource_policy: cdktf.stringToTerraform(this._resourcePolicy),
    };
  }
}
