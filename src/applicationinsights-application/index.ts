// https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationinsightsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}
  */
  readonly autoConfigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}
  */
  readonly autoCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}
  */
  readonly cweMonitorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}
  */
  readonly groupingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#id ApplicationinsightsApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}
  */
  readonly opsCenterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}
  */
  readonly opsItemSnsTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#tags ApplicationinsightsApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application aws_applicationinsights_application}
*/
export class ApplicationinsightsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_applicationinsights_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationinsightsApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationinsightsApplication to import
  * @param importFromId The id of the existing ApplicationinsightsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationinsightsApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_applicationinsights_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/applicationinsights_application aws_applicationinsights_application} Resource
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
        providerVersion: '5.53.0',
        providerVersionConstraint: '~> 5.0'
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_config_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoConfigEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create: {
        value: cdktf.booleanToHclTerraform(this._autoCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cwe_monitor_enabled: {
        value: cdktf.booleanToHclTerraform(this._cweMonitorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grouping_type: {
        value: cdktf.stringToHclTerraform(this._groupingType),
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
      ops_center_enabled: {
        value: cdktf.booleanToHclTerraform(this._opsCenterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ops_item_sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._opsItemSnsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
