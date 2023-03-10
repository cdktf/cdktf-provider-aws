// https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppconfigDeploymentStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}
  */
  readonly deploymentDurationInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}
  */
  readonly finalBakeTimeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}
  */
  readonly growthFactor: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}
  */
  readonly growthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}
  */
  readonly replicateTo: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy aws_appconfig_deployment_strategy}
*/
export class AppconfigDeploymentStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appconfig_deployment_strategy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy aws_appconfig_deployment_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppconfigDeploymentStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: AppconfigDeploymentStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appconfig_deployment_strategy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._deploymentDurationInMinutes = config.deploymentDurationInMinutes;
    this._description = config.description;
    this._finalBakeTimeInMinutes = config.finalBakeTimeInMinutes;
    this._growthFactor = config.growthFactor;
    this._growthType = config.growthType;
    this._id = config.id;
    this._name = config.name;
    this._replicateTo = config.replicateTo;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deployment_duration_in_minutes - computed: false, optional: false, required: true
  private _deploymentDurationInMinutes?: number; 
  public get deploymentDurationInMinutes() {
    return this.getNumberAttribute('deployment_duration_in_minutes');
  }
  public set deploymentDurationInMinutes(value: number) {
    this._deploymentDurationInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDurationInMinutesInput() {
    return this._deploymentDurationInMinutes;
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

  // final_bake_time_in_minutes - computed: false, optional: true, required: false
  private _finalBakeTimeInMinutes?: number; 
  public get finalBakeTimeInMinutes() {
    return this.getNumberAttribute('final_bake_time_in_minutes');
  }
  public set finalBakeTimeInMinutes(value: number) {
    this._finalBakeTimeInMinutes = value;
  }
  public resetFinalBakeTimeInMinutes() {
    this._finalBakeTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBakeTimeInMinutesInput() {
    return this._finalBakeTimeInMinutes;
  }

  // growth_factor - computed: false, optional: false, required: true
  private _growthFactor?: number; 
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }
  public set growthFactor(value: number) {
    this._growthFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get growthFactorInput() {
    return this._growthFactor;
  }

  // growth_type - computed: false, optional: true, required: false
  private _growthType?: string; 
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
  public set growthType(value: string) {
    this._growthType = value;
  }
  public resetGrowthType() {
    this._growthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthTypeInput() {
    return this._growthType;
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

  // replicate_to - computed: false, optional: false, required: true
  private _replicateTo?: string; 
  public get replicateTo() {
    return this.getStringAttribute('replicate_to');
  }
  public set replicateTo(value: string) {
    this._replicateTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateToInput() {
    return this._replicateTo;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_duration_in_minutes: cdktf.numberToTerraform(this._deploymentDurationInMinutes),
      description: cdktf.stringToTerraform(this._description),
      final_bake_time_in_minutes: cdktf.numberToTerraform(this._finalBakeTimeInMinutes),
      growth_factor: cdktf.numberToTerraform(this._growthFactor),
      growth_type: cdktf.stringToTerraform(this._growthType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      replicate_to: cdktf.stringToTerraform(this._replicateTo),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
