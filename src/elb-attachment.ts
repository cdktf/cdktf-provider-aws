// https://www.terraform.io/docs/providers/aws/r/elb_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "elb": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElbAttachmentConfig extends TerraformMetaArguments {
  readonly elb: string;
  readonly instance: string;
}

// Resource

export class ElbAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElbAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elb_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._elb = config.elb;
    this._instance = config.instance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // elb - computed: false, optional: false, required: true
  private _elb: string;
  public get elb() {
    return this._elb;
  }
  public set elb(value: string) {
    this._elb = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string) {
    this._instance = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      elb: this._elb,
      instance: this._instance,
    };
  }
}
