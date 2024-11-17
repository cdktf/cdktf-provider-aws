// https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyThreatintelsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#activate GuarddutyThreatintelset#activate}
  */
  readonly activate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#detector_id GuarddutyThreatintelset#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#format GuarddutyThreatintelset#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#id GuarddutyThreatintelset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#location GuarddutyThreatintelset#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#name GuarddutyThreatintelset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#tags GuarddutyThreatintelset#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#tags_all GuarddutyThreatintelset#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset aws_guardduty_threatintelset}
*/
export class GuarddutyThreatintelset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_threatintelset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuarddutyThreatintelset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuarddutyThreatintelset to import
  * @param importFromId The id of the existing GuarddutyThreatintelset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuarddutyThreatintelset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_threatintelset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/resources/guardduty_threatintelset aws_guardduty_threatintelset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyThreatintelsetConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyThreatintelsetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_threatintelset',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.76.0',
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
    this._activate = config.activate;
    this._detectorId = config.detectorId;
    this._format = config.format;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: false, optional: false, required: true
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
      activate: cdktf.booleanToTerraform(this._activate),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: cdktf.booleanToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detector_id: {
        value: cdktf.stringToHclTerraform(this._detectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
