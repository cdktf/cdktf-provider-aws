// https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverFirewallConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config#firewall_fail_open Route53ResolverFirewallConfig#firewall_fail_open}
  */
  readonly firewallFailOpen?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config#id Route53ResolverFirewallConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config#resource_id Route53ResolverFirewallConfig#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config aws_route53_resolver_firewall_config}
*/
export class Route53ResolverFirewallConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_resolver_firewall_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config aws_route53_resolver_firewall_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverFirewallConfigConfig
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverFirewallConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_firewall_config',
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
    this._firewallFailOpen = config.firewallFailOpen;
    this._id = config.id;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_fail_open - computed: true, optional: true, required: false
  private _firewallFailOpen?: string; 
  public get firewallFailOpen() {
    return this.getStringAttribute('firewall_fail_open');
  }
  public set firewallFailOpen(value: string) {
    this._firewallFailOpen = value;
  }
  public resetFirewallFailOpen() {
    this._firewallFailOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallFailOpenInput() {
    return this._firewallFailOpen;
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_fail_open: cdktf.stringToTerraform(this._firewallFailOpen),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }
}
