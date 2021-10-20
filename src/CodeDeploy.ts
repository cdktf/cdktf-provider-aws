// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeDeploy
*/
export namespace CodeDeploy {
  export interface CodedeployAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#compute_platform CodedeployApp#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#name CodedeployApp#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#tags CodedeployApp#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#tags_all CodedeployApp#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app}
  */
  export class CodedeployApp extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codedeploy_app";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployAppConfig
    */
    public constructor(scope: Construct, id: string, config: CodedeployAppConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codedeploy_app',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._computePlatform = config.computePlatform;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: true, optional: false, required: false
    public get applicationId() {
      return this.getStringAttribute('application_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compute_platform - computed: false, optional: true, required: false
    private _computePlatform?: string | undefined; 
    public get computePlatform() {
      return this.getStringAttribute('compute_platform');
    }
    public set computePlatform(value: string | undefined) {
      this._computePlatform = value;
    }
    public resetComputePlatform() {
      this._computePlatform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computePlatformInput() {
      return this._computePlatform
    }

    // github_account_name - computed: true, optional: false, required: false
    public get githubAccountName() {
      return this.getStringAttribute('github_account_name');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // linked_to_github - computed: true, optional: false, required: false
    public get linkedToGithub() {
      return this.getBooleanAttribute('linked_to_github') as any;
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
        compute_platform: cdktf.stringToTerraform(this._computePlatform),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CodedeployDeploymentConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#compute_platform CodedeployDeploymentConfig#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}
    */
    readonly deploymentConfigName: string;
    /**
    * minimum_healthy_hosts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}
    */
    readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts;
    /**
    * traffic_routing_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}
    */
    readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig;
  }
  export interface CodedeployDeploymentConfigMinimumHealthyHosts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#value CodedeployDeploymentConfig#value}
    */
    readonly value?: number;
  }

  function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference | CodedeployDeploymentConfigMinimumHealthyHosts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class CodedeployDeploymentConfigMinimumHealthyHostsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // value - computed: false, optional: true, required: false
    private _value?: number | undefined; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number | undefined) {
      this._value = value;
    }
    public resetValue() {
      this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}
    */
    readonly percentage?: number;
  }

  function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      interval: cdktf.numberToTerraform(struct!.interval),
      percentage: cdktf.numberToTerraform(struct!.percentage),
    }
  }

  export class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // interval - computed: false, optional: true, required: false
    private _interval?: number | undefined; 
    public get interval() {
      return this.getNumberAttribute('interval');
    }
    public set interval(value: number | undefined) {
      this._interval = value;
    }
    public resetInterval() {
      this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
    }

    // percentage - computed: false, optional: true, required: false
    private _percentage?: number | undefined; 
    public get percentage() {
      return this.getNumberAttribute('percentage');
    }
    public set percentage(value: number | undefined) {
      this._percentage = value;
    }
    public resetPercentage() {
      this._percentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get percentageInput() {
      return this._percentage
    }
  }
  export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}
    */
    readonly percentage?: number;
  }

  function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      interval: cdktf.numberToTerraform(struct!.interval),
      percentage: cdktf.numberToTerraform(struct!.percentage),
    }
  }

  export class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // interval - computed: false, optional: true, required: false
    private _interval?: number | undefined; 
    public get interval() {
      return this.getNumberAttribute('interval');
    }
    public set interval(value: number | undefined) {
      this._interval = value;
    }
    public resetInterval() {
      this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
    }

    // percentage - computed: false, optional: true, required: false
    private _percentage?: number | undefined; 
    public get percentage() {
      return this.getNumberAttribute('percentage');
    }
    public set percentage(value: number | undefined) {
      this._percentage = value;
    }
    public resetPercentage() {
      this._percentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get percentageInput() {
      return this._percentage
    }
  }
  export interface CodedeployDeploymentConfigTrafficRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * time_based_canary block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_canary CodedeployDeploymentConfig#time_based_canary}
    */
    readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
    /**
    * time_based_linear block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_linear CodedeployDeploymentConfig#time_based_linear}
    */
    readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
  }

  function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference | CodedeployDeploymentConfigTrafficRoutingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      time_based_canary: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct!.timeBasedCanary),
      time_based_linear: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct!.timeBasedLinear),
    }
  }

  export class CodedeployDeploymentConfigTrafficRoutingConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // time_based_canary - computed: false, optional: true, required: false
    private _timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined; 
    private __timeBasedCanaryOutput = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(this as any, "time_based_canary", true);
    public get timeBasedCanary() {
      return this.__timeBasedCanaryOutput;
    }
    public putTimeBasedCanary(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined) {
      this._timeBasedCanary = value;
    }
    public resetTimeBasedCanary() {
      this._timeBasedCanary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeBasedCanaryInput() {
      return this._timeBasedCanary
    }

    // time_based_linear - computed: false, optional: true, required: false
    private _timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined; 
    private __timeBasedLinearOutput = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(this as any, "time_based_linear", true);
    public get timeBasedLinear() {
      return this.__timeBasedLinearOutput;
    }
    public putTimeBasedLinear(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined) {
      this._timeBasedLinear = value;
    }
    public resetTimeBasedLinear() {
      this._timeBasedLinear = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeBasedLinearInput() {
      return this._timeBasedLinear
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config}
  */
  export class CodedeployDeploymentConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codedeploy_deployment_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentConfigConfig
    */
    public constructor(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codedeploy_deployment_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._computePlatform = config.computePlatform;
      this._deploymentConfigName = config.deploymentConfigName;
      this._minimumHealthyHosts = config.minimumHealthyHosts;
      this._trafficRoutingConfig = config.trafficRoutingConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // compute_platform - computed: false, optional: true, required: false
    private _computePlatform?: string | undefined; 
    public get computePlatform() {
      return this.getStringAttribute('compute_platform');
    }
    public set computePlatform(value: string | undefined) {
      this._computePlatform = value;
    }
    public resetComputePlatform() {
      this._computePlatform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computePlatformInput() {
      return this._computePlatform
    }

    // deployment_config_id - computed: true, optional: false, required: false
    public get deploymentConfigId() {
      return this.getStringAttribute('deployment_config_id');
    }

    // deployment_config_name - computed: false, optional: false, required: true
    private _deploymentConfigName?: string; 
    public get deploymentConfigName() {
      return this.getStringAttribute('deployment_config_name');
    }
    public set deploymentConfigName(value: string) {
      this._deploymentConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigNameInput() {
      return this._deploymentConfigName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // minimum_healthy_hosts - computed: false, optional: true, required: false
    private _minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts | undefined; 
    private __minimumHealthyHostsOutput = new CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(this as any, "minimum_healthy_hosts", true);
    public get minimumHealthyHosts() {
      return this.__minimumHealthyHostsOutput;
    }
    public putMinimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts | undefined) {
      this._minimumHealthyHosts = value;
    }
    public resetMinimumHealthyHosts() {
      this._minimumHealthyHosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumHealthyHostsInput() {
      return this._minimumHealthyHosts
    }

    // traffic_routing_config - computed: false, optional: true, required: false
    private _trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig | undefined; 
    private __trafficRoutingConfigOutput = new CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(this as any, "traffic_routing_config", true);
    public get trafficRoutingConfig() {
      return this.__trafficRoutingConfigOutput;
    }
    public putTrafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig | undefined) {
      this._trafficRoutingConfig = value;
    }
    public resetTrafficRoutingConfig() {
      this._trafficRoutingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficRoutingConfigInput() {
      return this._trafficRoutingConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        compute_platform: cdktf.stringToTerraform(this._computePlatform),
        deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
        minimum_healthy_hosts: codedeployDeploymentConfigMinimumHealthyHostsToTerraform(this._minimumHealthyHosts),
        traffic_routing_config: codedeployDeploymentConfigTrafficRoutingConfigToTerraform(this._trafficRoutingConfig),
      };
    }
  }
  export interface CodedeployDeploymentGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#app_name CodedeployDeploymentGroup#app_name}
    */
    readonly appName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}
    */
    readonly autoscalingGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}
    */
    readonly deploymentConfigName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}
    */
    readonly deploymentGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#service_role_arn CodedeployDeploymentGroup#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#tags CodedeployDeploymentGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#tags_all CodedeployDeploymentGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * alarm_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}
    */
    readonly alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration;
    /**
    * auto_rollback_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration;
    /**
    * blue_green_deployment_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}
    */
    readonly blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig;
    /**
    * deployment_style block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_style CodedeployDeploymentGroup#deployment_style}
    */
    readonly deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle;
    /**
    * ec2_tag_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
    */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[];
    /**
    * ec2_tag_set block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}
    */
    readonly ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[];
    /**
    * ecs_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ecs_service CodedeployDeploymentGroup#ecs_service}
    */
    readonly ecsService?: CodedeployDeploymentGroupEcsService;
    /**
    * load_balancer_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}
    */
    readonly loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo;
    /**
    * on_premises_instance_tag_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}
    */
    readonly onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
    /**
    * trigger_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}
    */
    readonly triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[];
  }
  export interface CodedeployDeploymentGroupAlarmConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#alarms CodedeployDeploymentGroup#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#enabled CodedeployDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}
    */
    readonly ignorePollAlarmFailure?: boolean | cdktf.IResolvable;
  }

  function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct?: CodedeployDeploymentGroupAlarmConfigurationOutputReference | CodedeployDeploymentGroupAlarmConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      alarms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.alarms),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      ignore_poll_alarm_failure: cdktf.booleanToTerraform(struct!.ignorePollAlarmFailure),
    }
  }

  export class CodedeployDeploymentGroupAlarmConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // alarms - computed: false, optional: true, required: false
    private _alarms?: string[] | undefined; 
    public get alarms() {
      return this.getListAttribute('alarms');
    }
    public set alarms(value: string[] | undefined) {
      this._alarms = value;
    }
    public resetAlarms() {
      this._alarms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
      return this._alarms
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // ignore_poll_alarm_failure - computed: false, optional: true, required: false
    private _ignorePollAlarmFailure?: boolean | cdktf.IResolvable | undefined; 
    public get ignorePollAlarmFailure() {
      return this.getBooleanAttribute('ignore_poll_alarm_failure') as any;
    }
    public set ignorePollAlarmFailure(value: boolean | cdktf.IResolvable | undefined) {
      this._ignorePollAlarmFailure = value;
    }
    public resetIgnorePollAlarmFailure() {
      this._ignorePollAlarmFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignorePollAlarmFailureInput() {
      return this._ignorePollAlarmFailure
    }
  }
  export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#enabled CodedeployDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#events CodedeployDeploymentGroup#events}
    */
    readonly events?: string[];
  }

  function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct?: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference | CodedeployDeploymentGroupAutoRollbackConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    }
  }

  export class CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // events - computed: false, optional: true, required: false
    private _events?: string[] | undefined; 
    public get events() {
      return this.getListAttribute('events');
    }
    public set events(value: string[] | undefined) {
      this._events = value;
    }
    public resetEvents() {
      this._events = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
      return this._events
    }
  }
  export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}
    */
    readonly actionOnTimeout?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}
    */
    readonly waitTimeInMinutes?: number;
  }

  function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action_on_timeout: cdktf.stringToTerraform(struct!.actionOnTimeout),
      wait_time_in_minutes: cdktf.numberToTerraform(struct!.waitTimeInMinutes),
    }
  }

  export class CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action_on_timeout - computed: false, optional: true, required: false
    private _actionOnTimeout?: string | undefined; 
    public get actionOnTimeout() {
      return this.getStringAttribute('action_on_timeout');
    }
    public set actionOnTimeout(value: string | undefined) {
      this._actionOnTimeout = value;
    }
    public resetActionOnTimeout() {
      this._actionOnTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionOnTimeoutInput() {
      return this._actionOnTimeout
    }

    // wait_time_in_minutes - computed: false, optional: true, required: false
    private _waitTimeInMinutes?: number | undefined; 
    public get waitTimeInMinutes() {
      return this.getNumberAttribute('wait_time_in_minutes');
    }
    public set waitTimeInMinutes(value: number | undefined) {
      this._waitTimeInMinutes = value;
    }
    public resetWaitTimeInMinutes() {
      this._waitTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitTimeInMinutesInput() {
      return this._waitTimeInMinutes
    }
  }
  export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action CodedeployDeploymentGroup#action}
    */
    readonly action?: string;
  }

  function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: cdktf.stringToTerraform(struct!.action),
    }
  }

  export class CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: true, required: false
    private _action?: string | undefined; 
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string | undefined) {
      this._action = value;
    }
    public resetAction() {
      this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }
  }
  export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action CodedeployDeploymentGroup#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}
    */
    readonly terminationWaitTimeInMinutes?: number;
  }

  function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: cdktf.stringToTerraform(struct!.action),
      termination_wait_time_in_minutes: cdktf.numberToTerraform(struct!.terminationWaitTimeInMinutes),
    }
  }

  export class CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: true, required: false
    private _action?: string | undefined; 
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string | undefined) {
      this._action = value;
    }
    public resetAction() {
      this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // termination_wait_time_in_minutes - computed: false, optional: true, required: false
    private _terminationWaitTimeInMinutes?: number | undefined; 
    public get terminationWaitTimeInMinutes() {
      return this.getNumberAttribute('termination_wait_time_in_minutes');
    }
    public set terminationWaitTimeInMinutes(value: number | undefined) {
      this._terminationWaitTimeInMinutes = value;
    }
    public resetTerminationWaitTimeInMinutes() {
      this._terminationWaitTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationWaitTimeInMinutesInput() {
      return this._terminationWaitTimeInMinutes
    }
  }
  export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
    /**
    * deployment_ready_option block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}
    */
    readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
    /**
    * green_fleet_provisioning_option block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}
    */
    readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
    /**
    * terminate_blue_instances_on_deployment_success block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}
    */
    readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
  }

  function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      deployment_ready_option: codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct!.deploymentReadyOption),
      green_fleet_provisioning_option: codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct!.greenFleetProvisioningOption),
      terminate_blue_instances_on_deployment_success: codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct!.terminateBlueInstancesOnDeploymentSuccess),
    }
  }

  export class CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // deployment_ready_option - computed: false, optional: true, required: false
    private _deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined; 
    private __deploymentReadyOptionOutput = new CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference(this as any, "deployment_ready_option", true);
    public get deploymentReadyOption() {
      return this.__deploymentReadyOptionOutput;
    }
    public putDeploymentReadyOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined) {
      this._deploymentReadyOption = value;
    }
    public resetDeploymentReadyOption() {
      this._deploymentReadyOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentReadyOptionInput() {
      return this._deploymentReadyOption
    }

    // green_fleet_provisioning_option - computed: false, optional: true, required: false
    private _greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined; 
    private __greenFleetProvisioningOptionOutput = new CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference(this as any, "green_fleet_provisioning_option", true);
    public get greenFleetProvisioningOption() {
      return this.__greenFleetProvisioningOptionOutput;
    }
    public putGreenFleetProvisioningOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined) {
      this._greenFleetProvisioningOption = value;
    }
    public resetGreenFleetProvisioningOption() {
      this._greenFleetProvisioningOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get greenFleetProvisioningOptionInput() {
      return this._greenFleetProvisioningOption
    }

    // terminate_blue_instances_on_deployment_success - computed: false, optional: true, required: false
    private _terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined; 
    private __terminateBlueInstancesOnDeploymentSuccessOutput = new CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference(this as any, "terminate_blue_instances_on_deployment_success", true);
    public get terminateBlueInstancesOnDeploymentSuccess() {
      return this.__terminateBlueInstancesOnDeploymentSuccessOutput;
    }
    public putTerminateBlueInstancesOnDeploymentSuccess(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined) {
      this._terminateBlueInstancesOnDeploymentSuccess = value;
    }
    public resetTerminateBlueInstancesOnDeploymentSuccess() {
      this._terminateBlueInstancesOnDeploymentSuccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateBlueInstancesOnDeploymentSuccessInput() {
      return this._terminateBlueInstancesOnDeploymentSuccess
    }
  }
  export interface CodedeployDeploymentGroupDeploymentStyle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_option CodedeployDeploymentGroup#deployment_option}
    */
    readonly deploymentOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_type CodedeployDeploymentGroup#deployment_type}
    */
    readonly deploymentType?: string;
  }

  function codedeployDeploymentGroupDeploymentStyleToTerraform(struct?: CodedeployDeploymentGroupDeploymentStyleOutputReference | CodedeployDeploymentGroupDeploymentStyle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      deployment_option: cdktf.stringToTerraform(struct!.deploymentOption),
      deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    }
  }

  export class CodedeployDeploymentGroupDeploymentStyleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // deployment_option - computed: false, optional: true, required: false
    private _deploymentOption?: string | undefined; 
    public get deploymentOption() {
      return this.getStringAttribute('deployment_option');
    }
    public set deploymentOption(value: string | undefined) {
      this._deploymentOption = value;
    }
    public resetDeploymentOption() {
      this._deploymentOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentOptionInput() {
      return this._deploymentOption
    }

    // deployment_type - computed: false, optional: true, required: false
    private _deploymentType?: string | undefined; 
    public get deploymentType() {
      return this.getStringAttribute('deployment_type');
    }
    public set deploymentType(value: string | undefined) {
      this._deploymentType = value;
    }
    public resetDeploymentType() {
      this._deploymentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTypeInput() {
      return this._deploymentType
    }
  }
  export interface CodedeployDeploymentGroupEc2TagFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
  }

  function codedeployDeploymentGroupEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
  }

  function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CodedeployDeploymentGroupEc2TagSet {
    /**
    * ec2_tag_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
    */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
  }

  function codedeployDeploymentGroupEc2TagSetToTerraform(struct?: CodedeployDeploymentGroupEc2TagSet): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform)(struct!.ec2TagFilter),
    }
  }

  export interface CodedeployDeploymentGroupEcsService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#cluster_name CodedeployDeploymentGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#service_name CodedeployDeploymentGroup#service_name}
    */
    readonly serviceName: string;
  }

  function codedeployDeploymentGroupEcsServiceToTerraform(struct?: CodedeployDeploymentGroupEcsServiceOutputReference | CodedeployDeploymentGroupEcsService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cluster_name: cdktf.stringToTerraform(struct!.clusterName),
      service_name: cdktf.stringToTerraform(struct!.serviceName),
    }
  }

  export class CodedeployDeploymentGroupEcsServiceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName?: string; 
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // service_name - computed: false, optional: false, required: true
    private _serviceName?: string; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
      this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }
  }
  export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}
    */
    readonly name?: string;
  }

  function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}
    */
    readonly name?: string;
  }

  function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#listener_arns CodedeployDeploymentGroup#listener_arns}
    */
    readonly listenerArns: string[];
  }

  function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.listenerArns),
    }
  }

  export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // listener_arns - computed: false, optional: false, required: true
    private _listenerArns?: string[]; 
    public get listenerArns() {
      return this.getListAttribute('listener_arns');
    }
    public set listenerArns(value: string[]) {
      this._listenerArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnsInput() {
      return this._listenerArns
    }
  }
  export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}
    */
    readonly name: string;
  }

  function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#listener_arns CodedeployDeploymentGroup#listener_arns}
    */
    readonly listenerArns: string[];
  }

  function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.listenerArns),
    }
  }

  export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // listener_arns - computed: false, optional: false, required: true
    private _listenerArns?: string[]; 
    public get listenerArns() {
      return this.getListAttribute('listener_arns');
    }
    public set listenerArns(value: string[]) {
      this._listenerArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnsInput() {
      return this._listenerArns
    }
  }
  export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
    /**
    * prod_traffic_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}
    */
    readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
    /**
    * target_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group CodedeployDeploymentGroup#target_group}
    */
    readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
    /**
    * test_traffic_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}
    */
    readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
  }

  function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prod_traffic_route: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct!.prodTrafficRoute),
      target_group: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform)(struct!.targetGroup),
      test_traffic_route: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct!.testTrafficRoute),
    }
  }

  export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // prod_traffic_route - computed: false, optional: false, required: true
    private _prodTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute; 
    private __prodTrafficRouteOutput = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference(this as any, "prod_traffic_route", true);
    public get prodTrafficRoute() {
      return this.__prodTrafficRouteOutput;
    }
    public putProdTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute) {
      this._prodTrafficRoute = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prodTrafficRouteInput() {
      return this._prodTrafficRoute
    }

    // target_group - computed: false, optional: false, required: true
    private _targetGroup?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[]; 
    public get targetGroup() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('target_group') as any;
    }
    public set targetGroup(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[]) {
      this._targetGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupInput() {
      return this._targetGroup
    }

    // test_traffic_route - computed: false, optional: true, required: false
    private _testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined; 
    private __testTrafficRouteOutput = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference(this as any, "test_traffic_route", true);
    public get testTrafficRoute() {
      return this.__testTrafficRouteOutput;
    }
    public putTestTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined) {
      this._testTrafficRoute = value;
    }
    public resetTestTrafficRoute() {
      this._testTrafficRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get testTrafficRouteInput() {
      return this._testTrafficRoute
    }
  }
  export interface CodedeployDeploymentGroupLoadBalancerInfo {
    /**
    * elb_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#elb_info CodedeployDeploymentGroup#elb_info}
    */
    readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
    /**
    * target_group_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group_info CodedeployDeploymentGroup#target_group_info}
    */
    readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
    /**
    * target_group_pair_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}
    */
    readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
  }

  function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      elb_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform)(struct!.elbInfo),
      target_group_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform)(struct!.targetGroupInfo),
      target_group_pair_info: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct!.targetGroupPairInfo),
    }
  }

  export class CodedeployDeploymentGroupLoadBalancerInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // elb_info - computed: false, optional: true, required: false
    private _elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | undefined; 
    public get elbInfo() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('elb_info') as any;
    }
    public set elbInfo(value: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | undefined) {
      this._elbInfo = value;
    }
    public resetElbInfo() {
      this._elbInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elbInfoInput() {
      return this._elbInfo
    }

    // target_group_info - computed: false, optional: true, required: false
    private _targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | undefined; 
    public get targetGroupInfo() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('target_group_info') as any;
    }
    public set targetGroupInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | undefined) {
      this._targetGroupInfo = value;
    }
    public resetTargetGroupInfo() {
      this._targetGroupInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupInfoInput() {
      return this._targetGroupInfo
    }

    // target_group_pair_info - computed: false, optional: true, required: false
    private _targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined; 
    private __targetGroupPairInfoOutput = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference(this as any, "target_group_pair_info", true);
    public get targetGroupPairInfo() {
      return this.__targetGroupPairInfoOutput;
    }
    public putTargetGroupPairInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined) {
      this._targetGroupPairInfo = value;
    }
    public resetTargetGroupPairInfo() {
      this._targetGroupPairInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupPairInfoInput() {
      return this._targetGroupPairInfo
    }
  }
  export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
  }

  function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CodedeployDeploymentGroupTriggerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_events CodedeployDeploymentGroup#trigger_events}
    */
    readonly triggerEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_name CodedeployDeploymentGroup#trigger_name}
    */
    readonly triggerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}
    */
    readonly triggerTargetArn: string;
  }

  function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct?: CodedeployDeploymentGroupTriggerConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      trigger_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.triggerEvents),
      trigger_name: cdktf.stringToTerraform(struct!.triggerName),
      trigger_target_arn: cdktf.stringToTerraform(struct!.triggerTargetArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group}
  */
  export class CodedeployDeploymentGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codedeploy_deployment_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentGroupConfig
    */
    public constructor(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codedeploy_deployment_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appName = config.appName;
      this._autoscalingGroups = config.autoscalingGroups;
      this._deploymentConfigName = config.deploymentConfigName;
      this._deploymentGroupName = config.deploymentGroupName;
      this._serviceRoleArn = config.serviceRoleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._alarmConfiguration = config.alarmConfiguration;
      this._autoRollbackConfiguration = config.autoRollbackConfiguration;
      this._blueGreenDeploymentConfig = config.blueGreenDeploymentConfig;
      this._deploymentStyle = config.deploymentStyle;
      this._ec2TagFilter = config.ec2TagFilter;
      this._ec2TagSet = config.ec2TagSet;
      this._ecsService = config.ecsService;
      this._loadBalancerInfo = config.loadBalancerInfo;
      this._onPremisesInstanceTagFilter = config.onPremisesInstanceTagFilter;
      this._triggerConfiguration = config.triggerConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_name - computed: false, optional: false, required: true
    private _appName?: string; 
    public get appName() {
      return this.getStringAttribute('app_name');
    }
    public set appName(value: string) {
      this._appName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appNameInput() {
      return this._appName
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // autoscaling_groups - computed: false, optional: true, required: false
    private _autoscalingGroups?: string[] | undefined; 
    public get autoscalingGroups() {
      return this.getListAttribute('autoscaling_groups');
    }
    public set autoscalingGroups(value: string[] | undefined) {
      this._autoscalingGroups = value;
    }
    public resetAutoscalingGroups() {
      this._autoscalingGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingGroupsInput() {
      return this._autoscalingGroups
    }

    // compute_platform - computed: true, optional: false, required: false
    public get computePlatform() {
      return this.getStringAttribute('compute_platform');
    }

    // deployment_config_name - computed: false, optional: true, required: false
    private _deploymentConfigName?: string | undefined; 
    public get deploymentConfigName() {
      return this.getStringAttribute('deployment_config_name');
    }
    public set deploymentConfigName(value: string | undefined) {
      this._deploymentConfigName = value;
    }
    public resetDeploymentConfigName() {
      this._deploymentConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentConfigNameInput() {
      return this._deploymentConfigName
    }

    // deployment_group_id - computed: true, optional: false, required: false
    public get deploymentGroupId() {
      return this.getStringAttribute('deployment_group_id');
    }

    // deployment_group_name - computed: false, optional: false, required: true
    private _deploymentGroupName?: string; 
    public get deploymentGroupName() {
      return this.getStringAttribute('deployment_group_name');
    }
    public set deploymentGroupName(value: string) {
      this._deploymentGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentGroupNameInput() {
      return this._deploymentGroupName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // service_role_arn - computed: false, optional: false, required: true
    private _serviceRoleArn?: string; 
    public get serviceRoleArn() {
      return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string) {
      this._serviceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleArnInput() {
      return this._serviceRoleArn
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

    // alarm_configuration - computed: false, optional: true, required: false
    private _alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration | undefined; 
    private __alarmConfigurationOutput = new CodedeployDeploymentGroupAlarmConfigurationOutputReference(this as any, "alarm_configuration", true);
    public get alarmConfiguration() {
      return this.__alarmConfigurationOutput;
    }
    public putAlarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration | undefined) {
      this._alarmConfiguration = value;
    }
    public resetAlarmConfiguration() {
      this._alarmConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmConfigurationInput() {
      return this._alarmConfiguration
    }

    // auto_rollback_configuration - computed: false, optional: true, required: false
    private _autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration | undefined; 
    private __autoRollbackConfigurationOutput = new CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(this as any, "auto_rollback_configuration", true);
    public get autoRollbackConfiguration() {
      return this.__autoRollbackConfigurationOutput;
    }
    public putAutoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration | undefined) {
      this._autoRollbackConfiguration = value;
    }
    public resetAutoRollbackConfiguration() {
      this._autoRollbackConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRollbackConfigurationInput() {
      return this._autoRollbackConfiguration
    }

    // blue_green_deployment_config - computed: false, optional: true, required: false
    private _blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined; 
    private __blueGreenDeploymentConfigOutput = new CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference(this as any, "blue_green_deployment_config", true);
    public get blueGreenDeploymentConfig() {
      return this.__blueGreenDeploymentConfigOutput;
    }
    public putBlueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined) {
      this._blueGreenDeploymentConfig = value;
    }
    public resetBlueGreenDeploymentConfig() {
      this._blueGreenDeploymentConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blueGreenDeploymentConfigInput() {
      return this._blueGreenDeploymentConfig
    }

    // deployment_style - computed: false, optional: true, required: false
    private _deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle | undefined; 
    private __deploymentStyleOutput = new CodedeployDeploymentGroupDeploymentStyleOutputReference(this as any, "deployment_style", true);
    public get deploymentStyle() {
      return this.__deploymentStyleOutput;
    }
    public putDeploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle | undefined) {
      this._deploymentStyle = value;
    }
    public resetDeploymentStyle() {
      this._deploymentStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentStyleInput() {
      return this._deploymentStyle
    }

    // ec2_tag_filter - computed: false, optional: true, required: false
    private _ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[] | undefined; 
    public get ec2TagFilter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ec2_tag_filter') as any;
    }
    public set ec2TagFilter(value: CodedeployDeploymentGroupEc2TagFilter[] | undefined) {
      this._ec2TagFilter = value;
    }
    public resetEc2TagFilter() {
      this._ec2TagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2TagFilterInput() {
      return this._ec2TagFilter
    }

    // ec2_tag_set - computed: false, optional: true, required: false
    private _ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[] | undefined; 
    public get ec2TagSet() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ec2_tag_set') as any;
    }
    public set ec2TagSet(value: CodedeployDeploymentGroupEc2TagSet[] | undefined) {
      this._ec2TagSet = value;
    }
    public resetEc2TagSet() {
      this._ec2TagSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2TagSetInput() {
      return this._ec2TagSet
    }

    // ecs_service - computed: false, optional: true, required: false
    private _ecsService?: CodedeployDeploymentGroupEcsService | undefined; 
    private __ecsServiceOutput = new CodedeployDeploymentGroupEcsServiceOutputReference(this as any, "ecs_service", true);
    public get ecsService() {
      return this.__ecsServiceOutput;
    }
    public putEcsService(value: CodedeployDeploymentGroupEcsService | undefined) {
      this._ecsService = value;
    }
    public resetEcsService() {
      this._ecsService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsServiceInput() {
      return this._ecsService
    }

    // load_balancer_info - computed: false, optional: true, required: false
    private _loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo | undefined; 
    private __loadBalancerInfoOutput = new CodedeployDeploymentGroupLoadBalancerInfoOutputReference(this as any, "load_balancer_info", true);
    public get loadBalancerInfo() {
      return this.__loadBalancerInfoOutput;
    }
    public putLoadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo | undefined) {
      this._loadBalancerInfo = value;
    }
    public resetLoadBalancerInfo() {
      this._loadBalancerInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInfoInput() {
      return this._loadBalancerInfo
    }

    // on_premises_instance_tag_filter - computed: false, optional: true, required: false
    private _onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | undefined; 
    public get onPremisesInstanceTagFilter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('on_premises_instance_tag_filter') as any;
    }
    public set onPremisesInstanceTagFilter(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | undefined) {
      this._onPremisesInstanceTagFilter = value;
    }
    public resetOnPremisesInstanceTagFilter() {
      this._onPremisesInstanceTagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPremisesInstanceTagFilterInput() {
      return this._onPremisesInstanceTagFilter
    }

    // trigger_configuration - computed: false, optional: true, required: false
    private _triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[] | undefined; 
    public get triggerConfiguration() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('trigger_configuration') as any;
    }
    public set triggerConfiguration(value: CodedeployDeploymentGroupTriggerConfiguration[] | undefined) {
      this._triggerConfiguration = value;
    }
    public resetTriggerConfiguration() {
      this._triggerConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerConfigurationInput() {
      return this._triggerConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_name: cdktf.stringToTerraform(this._appName),
        autoscaling_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._autoscalingGroups),
        deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
        deployment_group_name: cdktf.stringToTerraform(this._deploymentGroupName),
        service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        alarm_configuration: codedeployDeploymentGroupAlarmConfigurationToTerraform(this._alarmConfiguration),
        auto_rollback_configuration: codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(this._autoRollbackConfiguration),
        blue_green_deployment_config: codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(this._blueGreenDeploymentConfig),
        deployment_style: codedeployDeploymentGroupDeploymentStyleToTerraform(this._deploymentStyle),
        ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagFilterToTerraform)(this._ec2TagFilter),
        ec2_tag_set: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetToTerraform)(this._ec2TagSet),
        ecs_service: codedeployDeploymentGroupEcsServiceToTerraform(this._ecsService),
        load_balancer_info: codedeployDeploymentGroupLoadBalancerInfoToTerraform(this._loadBalancerInfo),
        on_premises_instance_tag_filter: cdktf.listMapper(codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform)(this._onPremisesInstanceTagFilter),
        trigger_configuration: cdktf.listMapper(codedeployDeploymentGroupTriggerConfigurationToTerraform)(this._triggerConfiguration),
      };
    }
  }
}
