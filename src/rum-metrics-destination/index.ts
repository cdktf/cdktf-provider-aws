/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumMetricsDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination#app_monitor_name RumMetricsDestination#app_monitor_name}
  */
  readonly appMonitorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination#destination RumMetricsDestination#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination#destination_arn RumMetricsDestination#destination_arn}
  */
  readonly destinationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination#iam_role_arn RumMetricsDestination#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination#id RumMetricsDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination aws_rum_metrics_destination}
*/
export class RumMetricsDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rum_metrics_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumMetricsDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumMetricsDestination to import
  * @param importFromId The id of the existing RumMetricsDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumMetricsDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rum_metrics_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rum_metrics_destination aws_rum_metrics_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumMetricsDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: RumMetricsDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rum_metrics_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.83.1',
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
    this._appMonitorName = config.appMonitorName;
    this._destination = config.destination;
    this._destinationArn = config.destinationArn;
    this._iamRoleArn = config.iamRoleArn;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_monitor_name - computed: false, optional: false, required: true
  private _appMonitorName?: string; 
  public get appMonitorName() {
    return this.getStringAttribute('app_monitor_name');
  }
  public set appMonitorName(value: string) {
    this._appMonitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appMonitorNameInput() {
    return this._appMonitorName;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_arn - computed: false, optional: true, required: false
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  public resetDestinationArn() {
    this._destinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_monitor_name: cdktf.stringToTerraform(this._appMonitorName),
      destination: cdktf.stringToTerraform(this._destination),
      destination_arn: cdktf.stringToTerraform(this._destinationArn),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_monitor_name: {
        value: cdktf.stringToHclTerraform(this._appMonitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_arn: {
        value: cdktf.stringToHclTerraform(this._destinationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._iamRoleArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
