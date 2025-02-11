// https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elb_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elb_attachment#elb ElbAttachment#elb}
  */
  readonly elb: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elb_attachment#id ElbAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elb_attachment#instance ElbAttachment#instance}
  */
  readonly instance: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elb_attachment aws_elb_attachment}
*/
export class ElbAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elb_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElbAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElbAttachment to import
  * @param importFromId The id of the existing ElbAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elb_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElbAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elb_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/elb_attachment aws_elb_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ElbAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elb_attachment',
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
    this._elb = config.elb;
    this._id = config.id;
    this._instance = config.instance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // elb - computed: false, optional: false, required: true
  private _elb?: string; 
  public get elb() {
    return this.getStringAttribute('elb');
  }
  public set elb(value: string) {
    this._elb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInput() {
    return this._elb;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      elb: cdktf.stringToTerraform(this._elb),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      elb: {
        value: cdktf.stringToHclTerraform(this._elb),
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
