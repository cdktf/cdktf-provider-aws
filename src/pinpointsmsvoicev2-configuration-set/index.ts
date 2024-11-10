// https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Pinpointsmsvoicev2ConfigurationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_message_type Pinpointsmsvoicev2ConfigurationSet#default_message_type}
  */
  readonly defaultMessageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_sender_id Pinpointsmsvoicev2ConfigurationSet#default_sender_id}
  */
  readonly defaultSenderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set#name Pinpointsmsvoicev2ConfigurationSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set#tags Pinpointsmsvoicev2ConfigurationSet#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set aws_pinpointsmsvoicev2_configuration_set}
*/
export class Pinpointsmsvoicev2ConfigurationSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_configuration_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pinpointsmsvoicev2ConfigurationSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2ConfigurationSet to import
  * @param importFromId The id of the existing Pinpointsmsvoicev2ConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2ConfigurationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_configuration_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/pinpointsmsvoicev2_configuration_set aws_pinpointsmsvoicev2_configuration_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pinpointsmsvoicev2ConfigurationSetConfig
  */
  public constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2ConfigurationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_configuration_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.0',
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
    this._defaultMessageType = config.defaultMessageType;
    this._defaultSenderId = config.defaultSenderId;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_message_type - computed: false, optional: true, required: false
  private _defaultMessageType?: string; 
  public get defaultMessageType() {
    return this.getStringAttribute('default_message_type');
  }
  public set defaultMessageType(value: string) {
    this._defaultMessageType = value;
  }
  public resetDefaultMessageType() {
    this._defaultMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMessageTypeInput() {
    return this._defaultMessageType;
  }

  // default_sender_id - computed: false, optional: true, required: false
  private _defaultSenderId?: string; 
  public get defaultSenderId() {
    return this.getStringAttribute('default_sender_id');
  }
  public set defaultSenderId(value: string) {
    this._defaultSenderId = value;
  }
  public resetDefaultSenderId() {
    this._defaultSenderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSenderIdInput() {
    return this._defaultSenderId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_message_type: cdktf.stringToTerraform(this._defaultMessageType),
      default_sender_id: cdktf.stringToTerraform(this._defaultSenderId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_message_type: {
        value: cdktf.stringToHclTerraform(this._defaultMessageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_sender_id: {
        value: cdktf.stringToHclTerraform(this._defaultSenderId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
