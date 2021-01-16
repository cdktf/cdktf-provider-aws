// https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  /** ingress block */
  readonly ingress: RedshiftSecurityGroupIngress[];
}
export interface RedshiftSecurityGroupIngress {
  readonly cidr?: string;
  readonly securityGroupName?: string;
  readonly securityGroupOwnerId?: string;
}

function redshiftSecurityGroupIngressToTerraform(struct?: RedshiftSecurityGroupIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    security_group_owner_id: cdktf.stringToTerraform(struct!.securityGroupOwnerId),
  }
}


// Resource

export class RedshiftSecurityGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedshiftSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_security_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._ingress = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // ingress - computed: false, optional: false, required: true
  private _ingress: RedshiftSecurityGroupIngress[];
  public get ingress() {
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: RedshiftSecurityGroupIngress[]) {
    this._ingress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      ingress: cdktf.listMapper(redshiftSecurityGroupIngressToTerraform)(this._ingress),
    };
  }
}
