// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lightsail
*/
export interface LightsailInstancePublicPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#instance_name LightsailInstancePublicPorts#instance_name}
  */
  readonly instanceName: string;
  /**
  * port_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#port_info LightsailInstancePublicPorts#port_info}
  */
  readonly portInfo: LightsailInstancePublicPortsPortInfo[];
}
export interface LightsailInstancePublicPortsPortInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#cidrs LightsailInstancePublicPorts#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#from_port LightsailInstancePublicPorts#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#protocol LightsailInstancePublicPorts#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#to_port LightsailInstancePublicPorts#to_port}
  */
  readonly toPort: number;
}

export function lightsailInstancePublicPortsPortInfoToTerraform(struct?: LightsailInstancePublicPortsPortInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports}
*/
export class LightsailInstancePublicPorts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lightsail_instance_public_ports";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailInstancePublicPortsConfig
  */
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
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // port_info - computed: false, optional: false, required: true
  private _portInfo?: LightsailInstancePublicPortsPortInfo[]; 
  public get portInfo() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port_info') as any;
  }
  public set portInfo(value: LightsailInstancePublicPortsPortInfo[]) {
    this._portInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInfoInput() {
    return this._portInfo;
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
