// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#accelerator_arn GlobalacceleratorListener#accelerator_arn}
  */
  readonly acceleratorArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#client_affinity GlobalacceleratorListener#client_affinity}
  */
  readonly clientAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#protocol GlobalacceleratorListener#protocol}
  */
  readonly protocol: string;
  /**
  * port_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#port_range GlobalacceleratorListener#port_range}
  */
  readonly portRange: GlobalacceleratorListenerPortRange[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#timeouts GlobalacceleratorListener#timeouts}
  */
  readonly timeouts?: GlobalacceleratorListenerTimeouts;
}
export interface GlobalacceleratorListenerPortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#from_port GlobalacceleratorListener#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#to_port GlobalacceleratorListener#to_port}
  */
  readonly toPort?: number;
}

function globalacceleratorListenerPortRangeToTerraform(struct?: GlobalacceleratorListenerPortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface GlobalacceleratorListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#create GlobalacceleratorListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#delete GlobalacceleratorListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#update GlobalacceleratorListener#update}
  */
  readonly update?: string;
}

function globalacceleratorListenerTimeoutsToTerraform(struct?: GlobalacceleratorListenerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener}
*/
export class GlobalacceleratorListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_globalaccelerator_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorListenerConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_listener',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceleratorArn = config.acceleratorArn;
    this._clientAffinity = config.clientAffinity;
    this._protocol = config.protocol;
    this._portRange = config.portRange;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_arn - computed: false, optional: false, required: true
  private _acceleratorArn: string;
  public get acceleratorArn() {
    return this.getStringAttribute('accelerator_arn');
  }
  public set acceleratorArn(value: string) {
    this._acceleratorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorArnInput() {
    return this._acceleratorArn
  }

  // client_affinity - computed: false, optional: true, required: false
  private _clientAffinity?: string;
  public get clientAffinity() {
    return this.getStringAttribute('client_affinity');
  }
  public set clientAffinity(value: string ) {
    this._clientAffinity = value;
  }
  public resetClientAffinity() {
    this._clientAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityInput() {
    return this._clientAffinity
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange: GlobalacceleratorListenerPortRange[];
  public get portRange() {
    return this.interpolationForAttribute('port_range') as any;
  }
  public set portRange(value: GlobalacceleratorListenerPortRange[]) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GlobalacceleratorListenerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GlobalacceleratorListenerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_arn: cdktf.stringToTerraform(this._acceleratorArn),
      client_affinity: cdktf.stringToTerraform(this._clientAffinity),
      protocol: cdktf.stringToTerraform(this._protocol),
      port_range: cdktf.listMapper(globalacceleratorListenerPortRangeToTerraform)(this._portRange),
      timeouts: globalacceleratorListenerTimeoutsToTerraform(this._timeouts),
    };
  }
}
