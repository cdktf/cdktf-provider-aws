/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/waf_subscribed_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsWafSubscribedRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/waf_subscribed_rule_group#id DataAwsWafSubscribedRuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/waf_subscribed_rule_group#metric_name DataAwsWafSubscribedRuleGroup#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/waf_subscribed_rule_group#name DataAwsWafSubscribedRuleGroup#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/waf_subscribed_rule_group aws_waf_subscribed_rule_group}
*/
export class DataAwsWafSubscribedRuleGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_waf_subscribed_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsWafSubscribedRuleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsWafSubscribedRuleGroup to import
  * @param importFromId The id of the existing DataAwsWafSubscribedRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/waf_subscribed_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsWafSubscribedRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_waf_subscribed_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/data-sources/waf_subscribed_rule_group aws_waf_subscribed_rule_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsWafSubscribedRuleGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsWafSubscribedRuleGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_subscribed_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.61.0',
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
    this._id = config.id;
    this._metricName = config.metricName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
