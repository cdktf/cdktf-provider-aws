// https://www.terraform.io/docs/providers/aws/r/ses_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesTemplateConfig extends cdktf.TerraformMetaArguments {
  readonly html?: string;
  readonly name: string;
  readonly subject?: string;
  readonly text?: string;
}

// Resource

export class SesTemplate extends cdktf.TerraformResource {

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
    return this.getStringAttribute('html');
  }
  public set html(value: string ) {
    this._html = value;
  }
  public resetHtml() {
    this._html = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string;
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string ) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // text - computed: false, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string ) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      html: cdktf.stringToTerraform(this._html),
      name: cdktf.stringToTerraform(this._name),
      subject: cdktf.stringToTerraform(this._subject),
      text: cdktf.stringToTerraform(this._text),
    };
  }
}
