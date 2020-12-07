// https://www.terraform.io/docs/providers/aws/r/db_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** ingress block */
  readonly ingress: DbSecurityGroupIngress[];
}
export interface DbSecurityGroupIngress {
  readonly cidr?: string;
  readonly securityGroupId?: string;
  readonly securityGroupName?: string;
  readonly securityGroupOwnerId?: string;
}

function dbSecurityGroupIngressToTerraform(struct?: DbSecurityGroupIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    security_group_owner_id: cdktf.stringToTerraform(struct!.securityGroupOwnerId),
  }
}


// Resource

export class DbSecurityGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_security_group',
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
    this._tags = config.tags;
    this._ingress = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // ingress - computed: false, optional: false, required: true
  private _ingress: DbSecurityGroupIngress[];
  public get ingress() {
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: DbSecurityGroupIngress[]) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ingress: cdktf.listMapper(dbSecurityGroupIngressToTerraform)(this._ingress),
    };
  }
}
