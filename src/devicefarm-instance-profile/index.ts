/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicefarmInstanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}
  */
  readonly excludeAppPackagesFromCleanup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}
  */
  readonly packageCleanup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}
  */
  readonly rebootAfterUse?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#region DevicefarmInstanceProfile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile aws_devicefarm_instance_profile}
*/
export class DevicefarmInstanceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devicefarm_instance_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevicefarmInstanceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevicefarmInstanceProfile to import
  * @param importFromId The id of the existing DevicefarmInstanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevicefarmInstanceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_devicefarm_instance_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/devicefarm_instance_profile aws_devicefarm_instance_profile} Resource
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
        providerVersion: '6.12.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_app_packages_from_cleanup: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeAppPackagesFromCleanup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_cleanup: {
        value: cdktf.booleanToHclTerraform(this._packageCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reboot_after_use: {
        value: cdktf.booleanToHclTerraform(this._rebootAfterUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
