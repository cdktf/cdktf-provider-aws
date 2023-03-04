// https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoverycontrolconfigRoutingControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control#cluster_arn Route53RecoverycontrolconfigRoutingControl#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control#control_panel_arn Route53RecoverycontrolconfigRoutingControl#control_panel_arn}
  */
  readonly controlPanelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control#id Route53RecoverycontrolconfigRoutingControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control#name Route53RecoverycontrolconfigRoutingControl#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control aws_route53recoverycontrolconfig_routing_control}
*/
export class Route53RecoverycontrolconfigRoutingControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53recoverycontrolconfig_routing_control";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control aws_route53recoverycontrolconfig_routing_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoverycontrolconfigRoutingControlConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigRoutingControlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53recoverycontrolconfig_routing_control',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._clusterArn = config.clusterArn;
    this._controlPanelArn = config.controlPanelArn;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // control_panel_arn - computed: true, optional: true, required: false
  private _controlPanelArn?: string; 
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }
  public set controlPanelArn(value: string) {
    this._controlPanelArn = value;
  }
  public resetControlPanelArn() {
    this._controlPanelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPanelArnInput() {
    return this._controlPanelArn;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
