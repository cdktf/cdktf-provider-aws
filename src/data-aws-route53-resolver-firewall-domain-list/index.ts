// https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRoute53ResolverFirewallDomainListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}
  */
  readonly firewallDomainListId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list}
*/
export class DataAwsRoute53ResolverFirewallDomainList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_resolver_firewall_domain_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRoute53ResolverFirewallDomainListConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallDomainListConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_firewall_domain_list',
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
    this._firewallDomainListId = config.firewallDomainListId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator_request_id - computed: true, optional: false, required: false
  public get creatorRequestId() {
    return this.getStringAttribute('creator_request_id');
  }

  // domain_count - computed: true, optional: false, required: false
  public get domainCount() {
    return this.getNumberAttribute('domain_count');
  }

  // firewall_domain_list_id - computed: false, optional: false, required: true
  private _firewallDomainListId?: string; 
  public get firewallDomainListId() {
    return this.getStringAttribute('firewall_domain_list_id');
  }
  public set firewallDomainListId(value: string) {
    this._firewallDomainListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDomainListIdInput() {
    return this._firewallDomainListId;
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

  // managed_owner_name - computed: true, optional: false, required: false
  public get managedOwnerName() {
    return this.getStringAttribute('managed_owner_name');
  }

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_domain_list_id: cdktf.stringToTerraform(this._firewallDomainListId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
