// https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailInstancePublicPortsConfig extends cdktf.TerraformMetaArguments {
  readonly instanceName: string;
  /** port_info block */
  readonly portInfo: LightsailInstancePublicPortsPortInfo[];
}
export interface LightsailInstancePublicPortsPortInfo {
  readonly cidrs?: string[];
  readonly fromPort: number;
  readonly protocol: string;
  readonly toPort: number;
}

function lightsailInstancePublicPortsPortInfoToTerraform(struct?: LightsailInstancePublicPortsPortInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


// Resource

export class LightsailInstancePublicPorts extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LightsailInstancePublicPortsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_instance_public_ports',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceName = config.instanceName;
    this._portInfo = config.portInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName: string;
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName
  }

  // port_info - computed: false, optional: false, required: true
  private _portInfo: LightsailInstancePublicPortsPortInfo[];
  public get portInfo() {
    return this.interpolationForAttribute('port_info') as any;
  }
  public set portInfo(value: LightsailInstancePublicPortsPortInfo[]) {
    this._portInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInfoInput() {
    return this._portInfo
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_name: cdktf.stringToTerraform(this._instanceName),
      port_info: cdktf.listMapper(lightsailInstancePublicPortsPortInfoToTerraform)(this._portInfo),
    };
  }
}
