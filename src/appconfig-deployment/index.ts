// https://www.terraform.io/docs/providers/aws/r/appconfig_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppconfigDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#application_id AppconfigDeployment#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#configuration_profile_id AppconfigDeployment#configuration_profile_id}
  */
  readonly configurationProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#configuration_version AppconfigDeployment#configuration_version}
  */
  readonly configurationVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#deployment_strategy_id AppconfigDeployment#deployment_strategy_id}
  */
  readonly deploymentStrategyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#description AppconfigDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#environment_id AppconfigDeployment#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#id AppconfigDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#tags AppconfigDeployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment#tags_all AppconfigDeployment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment aws_appconfig_deployment}
*/
export class AppconfigDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appconfig_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment aws_appconfig_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppconfigDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: AppconfigDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appconfig_deployment',
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
    this._applicationId = config.applicationId;
    this._configurationProfileId = config.configurationProfileId;
    this._configurationVersion = config.configurationVersion;
    this._deploymentStrategyId = config.deploymentStrategyId;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_profile_id - computed: false, optional: false, required: true
  private _configurationProfileId?: string; 
  public get configurationProfileId() {
    return this.getStringAttribute('configuration_profile_id');
  }
  public set configurationProfileId(value: string) {
    this._configurationProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationProfileIdInput() {
    return this._configurationProfileId;
  }

  // configuration_version - computed: false, optional: false, required: true
  private _configurationVersion?: string; 
  public get configurationVersion() {
    return this.getStringAttribute('configuration_version');
  }
  public set configurationVersion(value: string) {
    this._configurationVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationVersionInput() {
    return this._configurationVersion;
  }

  // deployment_number - computed: true, optional: false, required: false
  public get deploymentNumber() {
    return this.getNumberAttribute('deployment_number');
  }

  // deployment_strategy_id - computed: false, optional: false, required: true
  private _deploymentStrategyId?: string; 
  public get deploymentStrategyId() {
    return this.getStringAttribute('deployment_strategy_id');
  }
  public set deploymentStrategyId(value: string) {
    this._deploymentStrategyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStrategyIdInput() {
    return this._deploymentStrategyId;
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      configuration_profile_id: cdktf.stringToTerraform(this._configurationProfileId),
      configuration_version: cdktf.stringToTerraform(this._configurationVersion),
      deployment_strategy_id: cdktf.stringToTerraform(this._deploymentStrategyId),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
