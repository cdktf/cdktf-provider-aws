/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard#dashboard_body CloudwatchDashboard#dashboard_body}
  */
  readonly dashboardBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard#dashboard_name CloudwatchDashboard#dashboard_name}
  */
  readonly dashboardName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard#id CloudwatchDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard#region CloudwatchDashboard#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard aws_cloudwatch_dashboard}
*/
export class CloudwatchDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchDashboard to import
  * @param importFromId The id of the existing CloudwatchDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/cloudwatch_dashboard aws_cloudwatch_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
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
    this._dashboardBody = config.dashboardBody;
    this._dashboardName = config.dashboardName;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_arn - computed: true, optional: false, required: false
  public get dashboardArn() {
    return this.getStringAttribute('dashboard_arn');
  }

  // dashboard_body - computed: false, optional: false, required: true
  private _dashboardBody?: string; 
  public get dashboardBody() {
    return this.getStringAttribute('dashboard_body');
  }
  public set dashboardBody(value: string) {
    this._dashboardBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardBodyInput() {
    return this._dashboardBody;
  }

  // dashboard_name - computed: false, optional: false, required: true
  private _dashboardName?: string; 
  public get dashboardName() {
    return this.getStringAttribute('dashboard_name');
  }
  public set dashboardName(value: string) {
    this._dashboardName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardNameInput() {
    return this._dashboardName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_body: cdktf.stringToTerraform(this._dashboardBody),
      dashboard_name: cdktf.stringToTerraform(this._dashboardName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_body: {
        value: cdktf.stringToHclTerraform(this._dashboardBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_name: {
        value: cdktf.stringToHclTerraform(this._dashboardName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
