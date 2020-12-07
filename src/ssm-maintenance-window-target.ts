// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowTargetConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name?: string;
  readonly ownerInformation?: string;
  readonly resourceType: string;
  readonly windowId: string;
  /** targets block */
  readonly targets: SsmMaintenanceWindowTargetTargets[];
}
export interface SsmMaintenanceWindowTargetTargets {
  readonly key: string;
  readonly values: string[];
}

function ssmMaintenanceWindowTargetTargetsToTerraform(struct?: SsmMaintenanceWindowTargetTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class SsmMaintenanceWindowTarget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window_target',
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
    this._ownerInformation = config.ownerInformation;
    this._resourceType = config.resourceType;
    this._windowId = config.windowId;
    this._targets = config.targets;
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // owner_information - computed: false, optional: true, required: false
  private _ownerInformation?: string;
  public get ownerInformation() {
    return this.getStringAttribute('owner_information');
  }
  public set ownerInformation(value: string ) {
    this._ownerInformation = value;
  }
  public resetOwnerInformation() {
    this._ownerInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInformationInput() {
    return this._ownerInformation
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId: string;
  public get windowId() {
    return this.getStringAttribute('window_id');
  }
  public set windowId(value: string) {
    this._windowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowIdInput() {
    return this._windowId
  }

  // targets - computed: false, optional: false, required: true
  private _targets: SsmMaintenanceWindowTargetTargets[];
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmMaintenanceWindowTargetTargets[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      owner_information: cdktf.stringToTerraform(this._ownerInformation),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      window_id: cdktf.stringToTerraform(this._windowId),
      targets: cdktf.listMapper(ssmMaintenanceWindowTargetTargetsToTerraform)(this._targets),
    };
  }
}
