// https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InspectorAssessmentTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target#id InspectorAssessmentTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target#name InspectorAssessmentTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target#resource_group_arn InspectorAssessmentTarget#resource_group_arn}
  */
  readonly resourceGroupArn?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target aws_inspector_assessment_target}
*/
export class InspectorAssessmentTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_inspector_assessment_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target aws_inspector_assessment_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InspectorAssessmentTargetConfig
  */
  public constructor(scope: Construct, id: string, config: InspectorAssessmentTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector_assessment_target',
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
    this._name = config.name;
    this._resourceGroupArn = config.resourceGroupArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_arn - computed: false, optional: true, required: false
  private _resourceGroupArn?: string; 
  public get resourceGroupArn() {
    return this.getStringAttribute('resource_group_arn');
  }
  public set resourceGroupArn(value: string) {
    this._resourceGroupArn = value;
  }
  public resetResourceGroupArn() {
    this._resourceGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupArnInput() {
    return this._resourceGroupArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_arn: cdktf.stringToTerraform(this._resourceGroupArn),
    };
  }
}
