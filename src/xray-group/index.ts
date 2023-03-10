// https://www.terraform.io/docs/providers/aws/r/xray_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XrayGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#filter_expression XrayGroup#filter_expression}
  */
  readonly filterExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#group_name XrayGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#id XrayGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#tags XrayGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#tags_all XrayGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * insights_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#insights_configuration XrayGroup#insights_configuration}
  */
  readonly insightsConfiguration?: XrayGroupInsightsConfiguration;
}
export interface XrayGroupInsightsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#insights_enabled XrayGroup#insights_enabled}
  */
  readonly insightsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_group#notifications_enabled XrayGroup#notifications_enabled}
  */
  readonly notificationsEnabled?: boolean | cdktf.IResolvable;
}

export function xrayGroupInsightsConfigurationToTerraform(struct?: XrayGroupInsightsConfigurationOutputReference | XrayGroupInsightsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insights_enabled: cdktf.booleanToTerraform(struct!.insightsEnabled),
    notifications_enabled: cdktf.booleanToTerraform(struct!.notificationsEnabled),
  }
}

export class XrayGroupInsightsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): XrayGroupInsightsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsEnabled = this._insightsEnabled;
    }
    if (this._notificationsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationsEnabled = this._notificationsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: XrayGroupInsightsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsEnabled = undefined;
      this._notificationsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsEnabled = value.insightsEnabled;
      this._notificationsEnabled = value.notificationsEnabled;
    }
  }

  // insights_enabled - computed: false, optional: false, required: true
  private _insightsEnabled?: boolean | cdktf.IResolvable; 
  public get insightsEnabled() {
    return this.getBooleanAttribute('insights_enabled');
  }
  public set insightsEnabled(value: boolean | cdktf.IResolvable) {
    this._insightsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsEnabledInput() {
    return this._insightsEnabled;
  }

  // notifications_enabled - computed: true, optional: true, required: false
  private _notificationsEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsEnabled() {
    return this.getBooleanAttribute('notifications_enabled');
  }
  public set notificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsEnabled = value;
  }
  public resetNotificationsEnabled() {
    this._notificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsEnabledInput() {
    return this._notificationsEnabled;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_group aws_xray_group}
*/
export class XrayGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_xray_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/xray_group aws_xray_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XrayGroupConfig
  */
  public constructor(scope: Construct, id: string, config: XrayGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_xray_group',
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
    this._filterExpression = config.filterExpression;
    this._groupName = config.groupName;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._insightsConfiguration.internalValue = config.insightsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // filter_expression - computed: false, optional: false, required: true
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // insights_configuration - computed: false, optional: true, required: false
  private _insightsConfiguration = new XrayGroupInsightsConfigurationOutputReference(this, "insights_configuration");
  public get insightsConfiguration() {
    return this._insightsConfiguration;
  }
  public putInsightsConfiguration(value: XrayGroupInsightsConfiguration) {
    this._insightsConfiguration.internalValue = value;
  }
  public resetInsightsConfiguration() {
    this._insightsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsConfigurationInput() {
    return this._insightsConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_expression: cdktf.stringToTerraform(this._filterExpression),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      insights_configuration: xrayGroupInsightsConfigurationToTerraform(this._insightsConfiguration.internalValue),
    };
  }
}
