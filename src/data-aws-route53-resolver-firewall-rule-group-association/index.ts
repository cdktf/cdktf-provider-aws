// https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/data-sources/route53_resolver_firewall_rule_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/data-sources/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}
  */
  readonly firewallRuleGroupAssociationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/data-sources/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/data-sources/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}
*/
export class DataAwsRoute53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_resolver_firewall_rule_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRoute53ResolverFirewallRuleGroupAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRoute53ResolverFirewallRuleGroupAssociation to import
  * @param importFromId The id of the existing DataAwsRoute53ResolverFirewallRuleGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/data-sources/route53_resolver_firewall_rule_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRoute53ResolverFirewallRuleGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_resolver_firewall_rule_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/data-sources/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_firewall_rule_group_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.51.0',
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
    this._firewallRuleGroupAssociationId = config.firewallRuleGroupAssociationId;
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

  // firewall_rule_group_association_id - computed: false, optional: false, required: true
  private _firewallRuleGroupAssociationId?: string; 
  public get firewallRuleGroupAssociationId() {
    return this.getStringAttribute('firewall_rule_group_association_id');
  }
  public set firewallRuleGroupAssociationId(value: string) {
    this._firewallRuleGroupAssociationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleGroupAssociationIdInput() {
    return this._firewallRuleGroupAssociationId;
  }

  // firewall_rule_group_id - computed: true, optional: false, required: false
  public get firewallRuleGroupId() {
    return this.getStringAttribute('firewall_rule_group_id');
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

  // mutation_protection - computed: true, optional: false, required: false
  public get mutationProtection() {
    return this.getStringAttribute('mutation_protection');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_rule_group_association_id: cdktf.stringToTerraform(this._firewallRuleGroupAssociationId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_rule_group_association_id: {
        value: cdktf.stringToHclTerraform(this._firewallRuleGroupAssociationId),
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
