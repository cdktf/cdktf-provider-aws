// https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
  readonly acceptLanguage?: string;
  readonly description?: string;
  readonly name: string;
  /** definition block */
  readonly definition: ServicecatalogServiceActionDefinition[];
}
export interface ServicecatalogServiceActionDefinition {
  readonly assumeRole?: string;
  readonly name: string;
  readonly parameters?: string;
  readonly type?: string;
  readonly version: string;
}

function servicecatalogServiceActionDefinitionToTerraform(struct?: ServicecatalogServiceActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assume_role: cdktf.stringToTerraform(struct!.assumeRole),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


// Resource

export class ServicecatalogServiceAction extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicecatalogServiceActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_service_action',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._description = config.description;
    this._name = config.name;
    this._definition = config.definition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string;
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string ) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage
  }

  // description - computed: true, optional: true, required: false
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
    return this._description
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

  // definition - computed: false, optional: false, required: true
  private _definition: ServicecatalogServiceActionDefinition[];
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }
  public set definition(value: ServicecatalogServiceActionDefinition[]) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      definition: cdktf.listMapper(servicecatalogServiceActionDefinitionToTerraform)(this._definition),
    };
  }
}
