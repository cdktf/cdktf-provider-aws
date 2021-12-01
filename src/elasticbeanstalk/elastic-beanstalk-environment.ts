// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Beanstalk
*/
export interface ElasticBeanstalkEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#application ElasticBeanstalkEnvironment#application}
  */
  readonly application: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}
  */
  readonly cnamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#description ElasticBeanstalkEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#name ElasticBeanstalkEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#platform_arn ElasticBeanstalkEnvironment#platform_arn}
  */
  readonly platformArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#poll_interval ElasticBeanstalkEnvironment#poll_interval}
  */
  readonly pollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}
  */
  readonly solutionStackName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tags ElasticBeanstalkEnvironment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tags_all ElasticBeanstalkEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#template_name ElasticBeanstalkEnvironment#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tier ElasticBeanstalkEnvironment#tier}
  */
  readonly tier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#version_label ElasticBeanstalkEnvironment#version_label}
  */
  readonly versionLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}
  */
  readonly waitForReadyTimeout?: string;
  /**
  * setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#setting ElasticBeanstalkEnvironment#setting}
  */
  readonly setting?: ElasticBeanstalkEnvironmentSetting[];
}
export class ElasticBeanstalkEnvironmentAllSettings extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface ElasticBeanstalkEnvironmentSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#name ElasticBeanstalkEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#namespace ElasticBeanstalkEnvironment#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#resource ElasticBeanstalkEnvironment#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#value ElasticBeanstalkEnvironment#value}
  */
  readonly value: string;
}

export function elasticBeanstalkEnvironmentSettingToTerraform(struct?: ElasticBeanstalkEnvironmentSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource: cdktf.stringToTerraform(struct!.resource),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment}
*/
export class ElasticBeanstalkEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elastic_beanstalk_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticBeanstalkEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticBeanstalkEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._application = config.application;
    this._cnamePrefix = config.cnamePrefix;
    this._description = config.description;
    this._name = config.name;
    this._platformArn = config.platformArn;
    this._pollInterval = config.pollInterval;
    this._solutionStackName = config.solutionStackName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._templateName = config.templateName;
    this._tier = config.tier;
    this._versionLabel = config.versionLabel;
    this._waitForReadyTimeout = config.waitForReadyTimeout;
    this._setting = config.setting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_settings - computed: true, optional: false, required: false
  public allSettings(index: string) {
    return new ElasticBeanstalkEnvironmentAllSettings(this, 'all_settings', index);
  }

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_groups - computed: true, optional: false, required: false
  public get autoscalingGroups() {
    return this.getListAttribute('autoscaling_groups');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // cname_prefix - computed: true, optional: true, required: false
  private _cnamePrefix?: string; 
  public get cnamePrefix() {
    return this.getStringAttribute('cname_prefix');
  }
  public set cnamePrefix(value: string) {
    this._cnamePrefix = value;
  }
  public resetCnamePrefix() {
    this._cnamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnamePrefixInput() {
    return this._cnamePrefix;
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

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // launch_configurations - computed: true, optional: false, required: false
  public get launchConfigurations() {
    return this.getListAttribute('launch_configurations');
  }

  // load_balancers - computed: true, optional: false, required: false
  public get loadBalancers() {
    return this.getListAttribute('load_balancers');
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

  // platform_arn - computed: true, optional: true, required: false
  private _platformArn?: string; 
  public get platformArn() {
    return this.getStringAttribute('platform_arn');
  }
  public set platformArn(value: string) {
    this._platformArn = value;
  }
  public resetPlatformArn() {
    this._platformArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformArnInput() {
    return this._platformArn;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: string; 
  public get pollInterval() {
    return this.getStringAttribute('poll_interval');
  }
  public set pollInterval(value: string) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // queues - computed: true, optional: false, required: false
  public get queues() {
    return this.getListAttribute('queues');
  }

  // solution_stack_name - computed: true, optional: true, required: false
  private _solutionStackName?: string; 
  public get solutionStackName() {
    return this.getStringAttribute('solution_stack_name');
  }
  public set solutionStackName(value: string) {
    this._solutionStackName = value;
  }
  public resetSolutionStackName() {
    this._solutionStackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionStackNameInput() {
    return this._solutionStackName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // triggers - computed: true, optional: false, required: false
  public get triggers() {
    return this.getListAttribute('triggers');
  }

  // version_label - computed: true, optional: true, required: false
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  public resetVersionLabel() {
    this._versionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // wait_for_ready_timeout - computed: false, optional: true, required: false
  private _waitForReadyTimeout?: string; 
  public get waitForReadyTimeout() {
    return this.getStringAttribute('wait_for_ready_timeout');
  }
  public set waitForReadyTimeout(value: string) {
    this._waitForReadyTimeout = value;
  }
  public resetWaitForReadyTimeout() {
    this._waitForReadyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadyTimeoutInput() {
    return this._waitForReadyTimeout;
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: ElasticBeanstalkEnvironmentSetting[]; 
  public get setting() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('setting') as any;
  }
  public set setting(value: ElasticBeanstalkEnvironmentSetting[]) {
    this._setting = value;
  }
  public resetSetting() {
    this._setting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      cname_prefix: cdktf.stringToTerraform(this._cnamePrefix),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      platform_arn: cdktf.stringToTerraform(this._platformArn),
      poll_interval: cdktf.stringToTerraform(this._pollInterval),
      solution_stack_name: cdktf.stringToTerraform(this._solutionStackName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      template_name: cdktf.stringToTerraform(this._templateName),
      tier: cdktf.stringToTerraform(this._tier),
      version_label: cdktf.stringToTerraform(this._versionLabel),
      wait_for_ready_timeout: cdktf.stringToTerraform(this._waitForReadyTimeout),
      setting: cdktf.listMapper(elasticBeanstalkEnvironmentSettingToTerraform)(this._setting),
    };
  }
}
