// https://www.terraform.io/docs/providers/aws/r/eip.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipConfig extends cdktf.TerraformMetaArguments {
  readonly associateWithPrivateIp?: string;
  readonly customerOwnedIpv4Pool?: string;
  readonly instance?: string;
  readonly networkInterface?: string;
  readonly publicIpv4Pool?: string;
  readonly tags?: { [key: string]: string };
  readonly vpc?: boolean;
  /** timeouts block */
  readonly timeouts?: EipTimeouts;
}
export interface EipTimeouts {
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function eipTimeoutsToTerraform(struct?: EipTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Eip extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_eip',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associateWithPrivateIp = config.associateWithPrivateIp;
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._instance = config.instance;
    this._networkInterface = config.networkInterface;
    this._publicIpv4Pool = config.publicIpv4Pool;
    this._tags = config.tags;
    this._vpc = config.vpc;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // associate_with_private_ip - computed: false, optional: true, required: false
  private _associateWithPrivateIp?: string;
  public get associateWithPrivateIp() {
    return this.getStringAttribute('associate_with_private_ip');
  }
  public set associateWithPrivateIp(value: string ) {
    this._associateWithPrivateIp = value;
  }
  public resetAssociateWithPrivateIp() {
    this._associateWithPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateWithPrivateIpInput() {
    return this._associateWithPrivateIp
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // customer_owned_ip - computed: true, optional: false, required: false
  public get customerOwnedIp() {
    return this.getStringAttribute('customer_owned_ip');
  }

  // customer_owned_ipv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIpv4Pool?: string;
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }
  public set customerOwnedIpv4Pool(value: string ) {
    this._customerOwnedIpv4Pool = value;
  }
  public resetCustomerOwnedIpv4Pool() {
    this._customerOwnedIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpv4PoolInput() {
    return this._customerOwnedIpv4Pool
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string;
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
  }

  // network_interface - computed: true, optional: true, required: false
  private _networkInterface?: string;
  public get networkInterface() {
    return this.getStringAttribute('network_interface');
  }
  public set networkInterface(value: string) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // private_dns - computed: true, optional: false, required: false
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_dns - computed: true, optional: false, required: false
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_ipv4_pool - computed: true, optional: true, required: false
  private _publicIpv4Pool?: string;
  public get publicIpv4Pool() {
    return this.getStringAttribute('public_ipv4_pool');
  }
  public set publicIpv4Pool(value: string) {
    this._publicIpv4Pool = value;
  }
  public resetPublicIpv4Pool() {
    this._publicIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpv4PoolInput() {
    return this._publicIpv4Pool
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: boolean;
  public get vpc() {
    return this.getBooleanAttribute('vpc');
  }
  public set vpc(value: boolean) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EipTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EipTimeouts ) {
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
      associate_with_private_ip: cdktf.stringToTerraform(this._associateWithPrivateIp),
      customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
      instance: cdktf.stringToTerraform(this._instance),
      network_interface: cdktf.stringToTerraform(this._networkInterface),
      public_ipv4_pool: cdktf.stringToTerraform(this._publicIpv4Pool),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc: cdktf.booleanToTerraform(this._vpc),
      timeouts: eipTimeoutsToTerraform(this._timeouts),
    };
  }
}
