// https://www.terraform.io/docs/providers/aws/r/applicationinsights_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationinsightsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}
  */
  readonly autoConfigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}
  */
  readonly autoCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}
  */
  readonly cweMonitorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}
  */
  readonly groupingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}
  */
  readonly opsCenterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}
  */
  readonly opsItemSnsTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application aws_applicationinsights_application}
*/
export class ApplicationinsightsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_applicationinsights_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application aws_applicationinsights_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationinsightsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationinsightsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_applicationinsights_application',
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
    this._autoConfigEnabled = config.autoConfigEnabled;
    this._autoCreate = config.autoCreate;
    this._cweMonitorEnabled = config.cweMonitorEnabled;
    this._groupingType = config.groupingType;
    this._id = config.id;
    this._opsCenterEnabled = config.opsCenterEnabled;
    this._opsItemSnsTopicArn = config.opsItemSnsTopicArn;
    this._resourceGroupName = config.resourceGroupName;
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

  // auto_config_enabled - computed: false, optional: true, required: false
  private _autoConfigEnabled?: boolean | cdktf.IResolvable; 
  public get autoConfigEnabled() {
    return this.getBooleanAttribute('auto_config_enabled');
  }
  public set autoConfigEnabled(value: boolean | cdktf.IResolvable) {
    this._autoConfigEnabled = value;
  }
  public resetAutoConfigEnabled() {
    this._autoConfigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigEnabledInput() {
    return this._autoConfigEnabled;
  }

  // auto_create - computed: false, optional: true, required: false
  private _autoCreate?: boolean | cdktf.IResolvable; 
  public get autoCreate() {
    return this.getBooleanAttribute('auto_create');
  }
  public set autoCreate(value: boolean | cdktf.IResolvable) {
    this._autoCreate = value;
  }
  public resetAutoCreate() {
    this._autoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateInput() {
    return this._autoCreate;
  }

  // cwe_monitor_enabled - computed: false, optional: true, required: false
  private _cweMonitorEnabled?: boolean | cdktf.IResolvable; 
  public get cweMonitorEnabled() {
    return this.getBooleanAttribute('cwe_monitor_enabled');
  }
  public set cweMonitorEnabled(value: boolean | cdktf.IResolvable) {
    this._cweMonitorEnabled = value;
  }
  public resetCweMonitorEnabled() {
    this._cweMonitorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cweMonitorEnabledInput() {
    return this._cweMonitorEnabled;
  }

  // grouping_type - computed: false, optional: true, required: false
  private _groupingType?: string; 
  public get groupingType() {
    return this.getStringAttribute('grouping_type');
  }
  public set groupingType(value: string) {
    this._groupingType = value;
  }
  public resetGroupingType() {
    this._groupingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingTypeInput() {
    return this._groupingType;
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

  // ops_center_enabled - computed: false, optional: true, required: false
  private _opsCenterEnabled?: boolean | cdktf.IResolvable; 
  public get opsCenterEnabled() {
    return this.getBooleanAttribute('ops_center_enabled');
  }
  public set opsCenterEnabled(value: boolean | cdktf.IResolvable) {
    this._opsCenterEnabled = value;
  }
  public resetOpsCenterEnabled() {
    this._opsCenterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsCenterEnabledInput() {
    return this._opsCenterEnabled;
  }

  // ops_item_sns_topic_arn - computed: false, optional: true, required: false
  private _opsItemSnsTopicArn?: string; 
  public get opsItemSnsTopicArn() {
    return this.getStringAttribute('ops_item_sns_topic_arn');
  }
  public set opsItemSnsTopicArn(value: string) {
    this._opsItemSnsTopicArn = value;
  }
  public resetOpsItemSnsTopicArn() {
    this._opsItemSnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsItemSnsTopicArnInput() {
    return this._opsItemSnsTopicArn;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
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
      auto_config_enabled: cdktf.booleanToTerraform(this._autoConfigEnabled),
      auto_create: cdktf.booleanToTerraform(this._autoCreate),
      cwe_monitor_enabled: cdktf.booleanToTerraform(this._cweMonitorEnabled),
      grouping_type: cdktf.stringToTerraform(this._groupingType),
      id: cdktf.stringToTerraform(this._id),
      ops_center_enabled: cdktf.booleanToTerraform(this._opsCenterEnabled),
      ops_item_sns_topic_arn: cdktf.stringToTerraform(this._opsItemSnsTopicArn),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
