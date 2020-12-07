// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
  readonly acceleratorArn: string;
  readonly clientAffinity?: string;
  readonly protocol: string;
  /** port_range block */
  readonly portRange: GlobalacceleratorListenerPortRange[];
}
export interface GlobalacceleratorListenerPortRange {
  readonly fromPort?: number;
  readonly toPort?: number;
}

function globalacceleratorListenerPortRangeToTerraform(struct?: GlobalacceleratorListenerPortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


// Resource

export class GlobalacceleratorListener extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_arn: cdktf.stringToTerraform(this._acceleratorArn),
      client_affinity: cdktf.stringToTerraform(this._clientAffinity),
      protocol: cdktf.stringToTerraform(this._protocol),
      port_range: cdktf.listMapper(globalacceleratorListenerPortRangeToTerraform)(this._portRange),
    };
  }
}
