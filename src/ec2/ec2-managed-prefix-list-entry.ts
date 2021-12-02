// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface Ec2ManagedPrefixListEntryAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#cidr Ec2ManagedPrefixListEntryA#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#description Ec2ManagedPrefixListEntryA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html#prefix_list_id Ec2ManagedPrefixListEntryA#prefix_list_id}
  */
  readonly prefixListId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry}
*/
export class Ec2ManagedPrefixListEntryA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_managed_prefix_list_entry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list_entry.html aws_ec2_managed_prefix_list_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ManagedPrefixListEntryAConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListEntryAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_managed_prefix_list_entry',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidr = config.cidr;
    this._description = config.description;
    this._prefixListId = config.prefixListId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_list_id - computed: false, optional: false, required: true
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      description: cdktf.stringToTerraform(this._description),
      prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
    };
  }
}
