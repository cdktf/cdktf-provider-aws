// https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicefarmInstanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}
  */
  readonly excludeAppPackagesFromCleanup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}
  */
  readonly packageCleanup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}
  */
  readonly rebootAfterUse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile aws_devicefarm_instance_profile}
*/
export class DevicefarmInstanceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devicefarm_instance_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile aws_devicefarm_instance_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicefarmInstanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DevicefarmInstanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devicefarm_instance_profile',
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
    this._description = config.description;
    this._excludeAppPackagesFromCleanup = config.excludeAppPackagesFromCleanup;
    this._id = config.id;
    this._name = config.name;
    this._packageCleanup = config.packageCleanup;
    this._rebootAfterUse = config.rebootAfterUse;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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

  // exclude_app_packages_from_cleanup - computed: false, optional: true, required: false
  private _excludeAppPackagesFromCleanup?: string[]; 
  public get excludeAppPackagesFromCleanup() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_app_packages_from_cleanup'));
  }
  public set excludeAppPackagesFromCleanup(value: string[]) {
    this._excludeAppPackagesFromCleanup = value;
  }
  public resetExcludeAppPackagesFromCleanup() {
    this._excludeAppPackagesFromCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAppPackagesFromCleanupInput() {
    return this._excludeAppPackagesFromCleanup;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // package_cleanup - computed: false, optional: true, required: false
  private _packageCleanup?: boolean | cdktf.IResolvable; 
  public get packageCleanup() {
    return this.getBooleanAttribute('package_cleanup');
  }
  public set packageCleanup(value: boolean | cdktf.IResolvable) {
    this._packageCleanup = value;
  }
  public resetPackageCleanup() {
    this._packageCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageCleanupInput() {
    return this._packageCleanup;
  }

  // reboot_after_use - computed: false, optional: true, required: false
  private _rebootAfterUse?: boolean | cdktf.IResolvable; 
  public get rebootAfterUse() {
    return this.getBooleanAttribute('reboot_after_use');
  }
  public set rebootAfterUse(value: boolean | cdktf.IResolvable) {
    this._rebootAfterUse = value;
  }
  public resetRebootAfterUse() {
    this._rebootAfterUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootAfterUseInput() {
    return this._rebootAfterUse;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      exclude_app_packages_from_cleanup: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeAppPackagesFromCleanup),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      package_cleanup: cdktf.booleanToTerraform(this._packageCleanup),
      reboot_after_use: cdktf.booleanToTerraform(this._rebootAfterUse),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
