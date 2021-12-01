// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudWatch
*/
export interface CloudwatchDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html#dashboard_body CloudwatchDashboard#dashboard_body}
  */
  readonly dashboardBody: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html#dashboard_name CloudwatchDashboard#dashboard_name}
  */
  readonly dashboardName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard}
*/
export class CloudwatchDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudwatch_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dashboardBody = config.dashboardBody;
    this._dashboardName = config.dashboardName;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_body: cdktf.stringToTerraform(this._dashboardBody),
      dashboard_name: cdktf.stringToTerraform(this._dashboardName),
    };
  }
}
