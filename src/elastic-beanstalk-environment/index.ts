// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticBeanstalkEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}
  */
  readonly application: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}
  */
  readonly cnamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}
  */
  readonly platformArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}
  */
  readonly pollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}
  */
  readonly solutionStackName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}
  */
  readonly tier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}
  */
  readonly versionLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}
  */
  readonly waitForReadyTimeout?: string;
  /**
  * setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}
  */
  readonly setting?: ElasticBeanstalkEnvironmentSetting[] | cdktf.IResolvable;
}
export interface ElasticBeanstalkEnvironmentAllSettings {
}

export function elasticBeanstalkEnvironmentAllSettingsToTerraform(struct?: ElasticBeanstalkEnvironmentAllSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ElasticBeanstalkEnvironmentAllSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElasticBeanstalkEnvironmentAllSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticBeanstalkEnvironmentAllSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class ElasticBeanstalkEnvironmentAllSettingsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElasticBeanstalkEnvironmentAllSettingsOutputReference {
    return new ElasticBeanstalkEnvironmentAllSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticBeanstalkEnvironmentSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}
  */
  readonly value: string;
}

export function elasticBeanstalkEnvironmentSettingToTerraform(struct?: ElasticBeanstalkEnvironmentSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class ElasticBeanstalkEnvironmentSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElasticBeanstalkEnvironmentSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticBeanstalkEnvironmentSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resource = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resource = value.resource;
      this._value = value.value;
    }
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ElasticBeanstalkEnvironmentSettingList extends cdktf.ComplexList {
  public internalValue? : ElasticBeanstalkEnvironmentSetting[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElasticBeanstalkEnvironmentSettingOutputReference {
    return new ElasticBeanstalkEnvironmentSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment aws_elastic_beanstalk_environment}
*/
export class ElasticBeanstalkEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elastic_beanstalk_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment aws_elastic_beanstalk_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticBeanstalkEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticBeanstalkEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_environment',
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
    this._application = config.application;
    this._cnamePrefix = config.cnamePrefix;
    this._description = config.description;
    this._id = config.id;
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
    this._setting.internalValue = config.setting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_settings - computed: true, optional: false, required: false
  private _allSettings = new ElasticBeanstalkEnvironmentAllSettingsList(this, "all_settings", true);
  public get allSettings() {
    return this._allSettings;
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
  private _setting = new ElasticBeanstalkEnvironmentSettingList(this, "setting", true);
  public get setting() {
    return this._setting;
  }
  public putSetting(value: ElasticBeanstalkEnvironmentSetting[] | cdktf.IResolvable) {
    this._setting.internalValue = value;
  }
  public resetSetting() {
    this._setting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      cname_prefix: cdktf.stringToTerraform(this._cnamePrefix),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      platform_arn: cdktf.stringToTerraform(this._platformArn),
      poll_interval: cdktf.stringToTerraform(this._pollInterval),
      solution_stack_name: cdktf.stringToTerraform(this._solutionStackName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      template_name: cdktf.stringToTerraform(this._templateName),
      tier: cdktf.stringToTerraform(this._tier),
      version_label: cdktf.stringToTerraform(this._versionLabel),
      wait_for_ready_timeout: cdktf.stringToTerraform(this._waitForReadyTimeout),
      setting: cdktf.listMapper(elasticBeanstalkEnvironmentSettingToTerraform, true)(this._setting.internalValue),
    };
  }
}
