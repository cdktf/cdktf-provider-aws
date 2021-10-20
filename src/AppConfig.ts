// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AppConfig
*/
export namespace AppConfig {
  export interface AppconfigApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_application.html#description AppconfigApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_application.html#name AppconfigApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_application.html#tags AppconfigApplication#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_application.html#tags_all AppconfigApplication#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_application.html aws_appconfig_application}
  */
  export class AppconfigApplication extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appconfig_application";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_application.html aws_appconfig_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigApplicationConfig
    */
    public constructor(scope: Construct, id: string, config: AppconfigApplicationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appconfig_application',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
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

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface AppconfigConfigurationProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#application_id AppconfigConfigurationProfile#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#description AppconfigConfigurationProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#location_uri AppconfigConfigurationProfile#location_uri}
    */
    readonly locationUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#name AppconfigConfigurationProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}
    */
    readonly retrievalRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#tags AppconfigConfigurationProfile#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#tags_all AppconfigConfigurationProfile#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * validator block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#validator AppconfigConfigurationProfile#validator}
    */
    readonly validator?: AppconfigConfigurationProfileValidator[];
  }
  export interface AppconfigConfigurationProfileValidator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#content AppconfigConfigurationProfile#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#type AppconfigConfigurationProfile#type}
    */
    readonly type: string;
  }

  function appconfigConfigurationProfileValidatorToTerraform(struct?: AppconfigConfigurationProfileValidator): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      content: cdktf.stringToTerraform(struct!.content),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile}
  */
  export class AppconfigConfigurationProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appconfig_configuration_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigConfigurationProfileConfig
    */
    public constructor(scope: Construct, id: string, config: AppconfigConfigurationProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appconfig_configuration_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._description = config.description;
      this._locationUri = config.locationUri;
      this._name = config.name;
      this._retrievalRoleArn = config.retrievalRoleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._validator = config.validator;
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
      return this._applicationId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // configuration_profile_id - computed: true, optional: false, required: false
    public get configurationProfileId() {
      return this.getStringAttribute('configuration_profile_id');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // location_uri - computed: false, optional: false, required: true
    private _locationUri?: string; 
    public get locationUri() {
      return this.getStringAttribute('location_uri');
    }
    public set locationUri(value: string) {
      this._locationUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationUriInput() {
      return this._locationUri
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
      return this._name
    }

    // retrieval_role_arn - computed: false, optional: true, required: false
    private _retrievalRoleArn?: string | undefined; 
    public get retrievalRoleArn() {
      return this.getStringAttribute('retrieval_role_arn');
    }
    public set retrievalRoleArn(value: string | undefined) {
      this._retrievalRoleArn = value;
    }
    public resetRetrievalRoleArn() {
      this._retrievalRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retrievalRoleArnInput() {
      return this._retrievalRoleArn
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // validator - computed: false, optional: true, required: false
    private _validator?: AppconfigConfigurationProfileValidator[] | undefined; 
    public get validator() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('validator') as any;
    }
    public set validator(value: AppconfigConfigurationProfileValidator[] | undefined) {
      this._validator = value;
    }
    public resetValidator() {
      this._validator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validatorInput() {
      return this._validator
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        description: cdktf.stringToTerraform(this._description),
        location_uri: cdktf.stringToTerraform(this._locationUri),
        name: cdktf.stringToTerraform(this._name),
        retrieval_role_arn: cdktf.stringToTerraform(this._retrievalRoleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        validator: cdktf.listMapper(appconfigConfigurationProfileValidatorToTerraform)(this._validator),
      };
    }
  }
  export interface AppconfigDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#application_id AppconfigDeployment#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#configuration_profile_id AppconfigDeployment#configuration_profile_id}
    */
    readonly configurationProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#configuration_version AppconfigDeployment#configuration_version}
    */
    readonly configurationVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#deployment_strategy_id AppconfigDeployment#deployment_strategy_id}
    */
    readonly deploymentStrategyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#description AppconfigDeployment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#environment_id AppconfigDeployment#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#tags AppconfigDeployment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html#tags_all AppconfigDeployment#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html aws_appconfig_deployment}
  */
  export class AppconfigDeployment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appconfig_deployment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment.html aws_appconfig_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigDeploymentConfig
    */
    public constructor(scope: Construct, id: string, config: AppconfigDeploymentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appconfig_deployment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._configurationProfileId = config.configurationProfileId;
      this._configurationVersion = config.configurationVersion;
      this._deploymentStrategyId = config.deploymentStrategyId;
      this._description = config.description;
      this._environmentId = config.environmentId;
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
      return this._applicationId
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
      return this._configurationProfileId
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
      return this._configurationVersion
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
      return this._deploymentStrategyId
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
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
      return this._environmentId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
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
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface AppconfigDeploymentStrategyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}
    */
    readonly deploymentDurationInMinutes: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#description AppconfigDeploymentStrategy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}
    */
    readonly finalBakeTimeInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#growth_factor AppconfigDeploymentStrategy#growth_factor}
    */
    readonly growthFactor: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#growth_type AppconfigDeploymentStrategy#growth_type}
    */
    readonly growthType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#name AppconfigDeploymentStrategy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#replicate_to AppconfigDeploymentStrategy#replicate_to}
    */
    readonly replicateTo: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#tags AppconfigDeploymentStrategy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#tags_all AppconfigDeploymentStrategy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy}
  */
  export class AppconfigDeploymentStrategy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appconfig_deployment_strategy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigDeploymentStrategyConfig
    */
    public constructor(scope: Construct, id: string, config: AppconfigDeploymentStrategyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appconfig_deployment_strategy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deploymentDurationInMinutes = config.deploymentDurationInMinutes;
      this._description = config.description;
      this._finalBakeTimeInMinutes = config.finalBakeTimeInMinutes;
      this._growthFactor = config.growthFactor;
      this._growthType = config.growthType;
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
      return this._deploymentDurationInMinutes
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // final_bake_time_in_minutes - computed: false, optional: true, required: false
    private _finalBakeTimeInMinutes?: number | undefined; 
    public get finalBakeTimeInMinutes() {
      return this.getNumberAttribute('final_bake_time_in_minutes');
    }
    public set finalBakeTimeInMinutes(value: number | undefined) {
      this._finalBakeTimeInMinutes = value;
    }
    public resetFinalBakeTimeInMinutes() {
      this._finalBakeTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get finalBakeTimeInMinutesInput() {
      return this._finalBakeTimeInMinutes
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
      return this._growthFactor
    }

    // growth_type - computed: false, optional: true, required: false
    private _growthType?: string | undefined; 
    public get growthType() {
      return this.getStringAttribute('growth_type');
    }
    public set growthType(value: string | undefined) {
      this._growthType = value;
    }
    public resetGrowthType() {
      this._growthType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get growthTypeInput() {
      return this._growthType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
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
      return this._replicateTo
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
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
        name: cdktf.stringToTerraform(this._name),
        replicate_to: cdktf.stringToTerraform(this._replicateTo),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface AppconfigEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#application_id AppconfigEnvironment#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#description AppconfigEnvironment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#name AppconfigEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#tags AppconfigEnvironment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#tags_all AppconfigEnvironment#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * monitor block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#monitor AppconfigEnvironment#monitor}
    */
    readonly monitor?: AppconfigEnvironmentMonitor[];
  }
  export interface AppconfigEnvironmentMonitor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#alarm_arn AppconfigEnvironment#alarm_arn}
    */
    readonly alarmArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#alarm_role_arn AppconfigEnvironment#alarm_role_arn}
    */
    readonly alarmRoleArn?: string;
  }

  function appconfigEnvironmentMonitorToTerraform(struct?: AppconfigEnvironmentMonitor): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      alarm_arn: cdktf.stringToTerraform(struct!.alarmArn),
      alarm_role_arn: cdktf.stringToTerraform(struct!.alarmRoleArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html aws_appconfig_environment}
  */
  export class AppconfigEnvironment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appconfig_environment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html aws_appconfig_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigEnvironmentConfig
    */
    public constructor(scope: Construct, id: string, config: AppconfigEnvironmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appconfig_environment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._description = config.description;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._monitor = config.monitor;
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
      return this._applicationId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
      return this.getStringAttribute('environment_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // monitor - computed: false, optional: true, required: false
    private _monitor?: AppconfigEnvironmentMonitor[] | undefined; 
    public get monitor() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('monitor') as any;
    }
    public set monitor(value: AppconfigEnvironmentMonitor[] | undefined) {
      this._monitor = value;
    }
    public resetMonitor() {
      this._monitor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorInput() {
      return this._monitor
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        monitor: cdktf.listMapper(appconfigEnvironmentMonitorToTerraform)(this._monitor),
      };
    }
  }
  export interface AppconfigHostedConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#application_id AppconfigHostedConfigurationVersion#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}
    */
    readonly configurationProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#content AppconfigHostedConfigurationVersion#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#content_type AppconfigHostedConfigurationVersion#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#description AppconfigHostedConfigurationVersion#description}
    */
    readonly description?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version}
  */
  export class AppconfigHostedConfigurationVersion extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appconfig_hosted_configuration_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigHostedConfigurationVersionConfig
    */
    public constructor(scope: Construct, id: string, config: AppconfigHostedConfigurationVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appconfig_hosted_configuration_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationId = config.applicationId;
      this._configurationProfileId = config.configurationProfileId;
      this._content = config.content;
      this._contentType = config.contentType;
      this._description = config.description;
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
      return this._applicationId
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
      return this._configurationProfileId
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
      return this.getStringAttribute('content');
    }
    public set content(value: string) {
      this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
      return this._content
    }

    // content_type - computed: false, optional: false, required: true
    private _contentType?: string; 
    public get contentType() {
      return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
      this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
      return this._contentType
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // version_number - computed: true, optional: false, required: false
    public get versionNumber() {
      return this.getNumberAttribute('version_number');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_id: cdktf.stringToTerraform(this._applicationId),
        configuration_profile_id: cdktf.stringToTerraform(this._configurationProfileId),
        content: cdktf.stringToTerraform(this._content),
        content_type: cdktf.stringToTerraform(this._contentType),
        description: cdktf.stringToTerraform(this._description),
      };
    }
  }
}
