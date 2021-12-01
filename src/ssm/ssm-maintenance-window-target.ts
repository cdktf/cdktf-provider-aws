// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export interface SsmMaintenanceWindowTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#description SsmMaintenanceWindowTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#name SsmMaintenanceWindowTarget#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#owner_information SsmMaintenanceWindowTarget#owner_information}
  */
  readonly ownerInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#resource_type SsmMaintenanceWindowTarget#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#window_id SsmMaintenanceWindowTarget#window_id}
  */
  readonly windowId: string;
  /**
  * targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#targets SsmMaintenanceWindowTarget#targets}
  */
  readonly targets: SsmMaintenanceWindowTargetTargets[];
}
export interface SsmMaintenanceWindowTargetTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#key SsmMaintenanceWindowTarget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html#values SsmMaintenanceWindowTarget#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTargetTargetsToTerraform(struct?: SsmMaintenanceWindowTargetTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target}
*/
export class SsmMaintenanceWindowTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_maintenance_window_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html aws_ssm_maintenance_window_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmMaintenanceWindowTargetConfig
  */
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner_information - computed: false, optional: true, required: false
  private _ownerInformation?: string; 
  public get ownerInformation() {
    return this.getStringAttribute('owner_information');
  }
  public set ownerInformation(value: string) {
    this._ownerInformation = value;
  }
  public resetOwnerInformation() {
    this._ownerInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInformationInput() {
    return this._ownerInformation;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId?: string; 
  public get windowId() {
    return this.getStringAttribute('window_id');
  }
  public set windowId(value: string) {
    this._windowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowIdInput() {
    return this._windowId;
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: SsmMaintenanceWindowTargetTargets[]; 
  public get targets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmMaintenanceWindowTargetTargets[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
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
