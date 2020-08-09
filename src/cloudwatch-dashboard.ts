// https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dashboard_arn": {
        "type": "string",
        "computed": true
      },
      "dashboard_body": {
        "type": "string",
        "required": true
      },
      "dashboard_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchDashboardConfig extends TerraformMetaArguments {
  readonly dashboardBody: string;
  readonly dashboardName: string;
}

// Resource

export class CloudwatchDashboard extends TerraformResource {

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

  // dashboard_arn - computed: true, optional: false, required: true
  public get dashboardArn() {
    return this.getStringAttribute('dashboard_arn');
  }

  // dashboard_body - computed: false, optional: false, required: true
  private _dashboardBody: string;
  public get dashboardBody() {
    return this._dashboardBody;
  }
  public set dashboardBody(value: string) {
    this._dashboardBody = value;
  }

  // dashboard_name - computed: false, optional: false, required: true
  private _dashboardName: string;
  public get dashboardName() {
    return this._dashboardName;
  }
  public set dashboardName(value: string) {
    this._dashboardName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_body: this._dashboardBody,
      dashboard_name: this._dashboardName,
    };
  }
}
