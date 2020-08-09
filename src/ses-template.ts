// https://www.terraform.io/docs/providers/aws/r/ses_template.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "html": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "subject": {
        "type": "string",
        "optional": true
      },
      "text": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SesTemplateConfig extends TerraformMetaArguments {
  readonly html?: string;
  readonly name: string;
  readonly subject?: string;
  readonly text?: string;
}

// Resource

export class SesTemplate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_template',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._html = config.html;
    this._name = config.name;
    this._subject = config.subject;
    this._text = config.text;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // html - computed: false, optional: true, required: false
  private _html?: string;
  public get html() {
    return this._html;
  }
  public set html(value: string | undefined) {
    this._html = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string;
  public get subject() {
    return this._subject;
  }
  public set subject(value: string | undefined) {
    this._subject = value;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string;
  public get text() {
    return this._text;
  }
  public set text(value: string | undefined) {
    this._text = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      html: this._html,
      name: this._name,
      subject: this._subject,
      text: this._text,
    };
  }
}
