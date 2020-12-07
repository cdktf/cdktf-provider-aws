// https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamResourceShareConfig extends cdktf.TerraformMetaArguments {
  readonly allowExternalPrincipals?: boolean;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: RamResourceShareTimeouts;
}
export interface RamResourceShareTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function ramResourceShareTimeoutsToTerraform(struct?: RamResourceShareTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class RamResourceShare extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RamResourceShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowExternalPrincipals = config.allowExternalPrincipals;
    this._name = config.name;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_principals - computed: false, optional: true, required: false
  private _allowExternalPrincipals?: boolean;
  public get allowExternalPrincipals() {
    return this.getBooleanAttribute('allow_external_principals');
  }
  public set allowExternalPrincipals(value: boolean ) {
    this._allowExternalPrincipals = value;
  }
  public resetAllowExternalPrincipals() {
    this._allowExternalPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalPrincipalsInput() {
    return this._allowExternalPrincipals
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RamResourceShareTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RamResourceShareTimeouts ) {
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
      allow_external_principals: cdktf.booleanToTerraform(this._allowExternalPrincipals),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: ramResourceShareTimeoutsToTerraform(this._timeouts),
    };
  }
}
