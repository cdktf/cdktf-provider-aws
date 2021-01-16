// https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchDashboardConfig extends cdktf.TerraformMetaArguments {
  readonly dashboardBody: string;
  readonly dashboardName: string;
}

// Resource

export class CloudwatchDashboard extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _dashboardBody: string;
  public get dashboardBody() {
    return this.getStringAttribute('dashboard_body');
  }
  public set dashboardBody(value: string) {
    this._dashboardBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardBodyInput() {
    return this._dashboardBody
  }

  // dashboard_name - computed: false, optional: false, required: true
  private _dashboardName: string;
  public get dashboardName() {
    return this.getStringAttribute('dashboard_name');
  }
  public set dashboardName(value: string) {
    this._dashboardName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardNameInput() {
    return this._dashboardName
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
