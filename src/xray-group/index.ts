/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XrayGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#filter_expression XrayGroup#filter_expression}
  */
  readonly filterExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#group_name XrayGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#id XrayGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#region XrayGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#tags XrayGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#tags_all XrayGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * insights_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#insights_configuration XrayGroup#insights_configuration}
  */
  readonly insightsConfiguration?: XrayGroupInsightsConfiguration;
}
export interface XrayGroupInsightsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#insights_enabled XrayGroup#insights_enabled}
  */
  readonly insightsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#notifications_enabled XrayGroup#notifications_enabled}
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


export function xrayGroupInsightsConfigurationToHclTerraform(struct?: XrayGroupInsightsConfigurationOutputReference | XrayGroupInsightsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insights_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.insightsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notifications_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.notificationsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group aws_xray_group}
*/
export class XrayGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_xray_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a XrayGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the XrayGroup to import
  * @param importFromId The id of the existing XrayGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the XrayGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_xray_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/xray_group aws_xray_group} Resource
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
        providerVersion: '6.13.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      insights_configuration: xrayGroupInsightsConfigurationToTerraform(this._insightsConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_expression: {
        value: cdktf.stringToHclTerraform(this._filterExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      insights_configuration: {
        value: xrayGroupInsightsConfigurationToHclTerraform(this._insightsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "XrayGroupInsightsConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
