// https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group#id SyntheticsGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group#name SyntheticsGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group#tags SyntheticsGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group#tags_all SyntheticsGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group aws_synthetics_group}
*/
export class SyntheticsGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_synthetics_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsGroup to import
  * @param importFromId The id of the existing SyntheticsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_synthetics_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/synthetics_group aws_synthetics_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_synthetics_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.86.1',
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
    this._id = config.id;
    this._name = config.name;
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
