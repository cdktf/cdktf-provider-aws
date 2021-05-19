// https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogPortfolioShareConfig extends cdktf.TerraformMetaArguments {
  readonly acceptLanguage?: string;
  readonly portfolioId: string;
  readonly principalId: string;
  readonly shareTagOptions?: boolean;
  readonly type: string;
  readonly waitForAcceptance?: boolean;
}

// Resource

export class ServicecatalogPortfolioShare extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicecatalogPortfolioShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_portfolio_share',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._portfolioId = config.portfolioId;
    this._principalId = config.principalId;
    this._shareTagOptions = config.shareTagOptions;
    this._type = config.type;
    this._waitForAcceptance = config.waitForAcceptance;
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

  // accepted - computed: true, optional: false, required: false
  public get accepted() {
    return this.getBooleanAttribute('accepted');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // portfolio_id - computed: false, optional: false, required: true
  private _portfolioId: string;
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }
  public set portfolioId(value: string) {
    this._portfolioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portfolioIdInput() {
    return this._portfolioId
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId: string;
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId
  }

  // share_tag_options - computed: false, optional: true, required: false
  private _shareTagOptions?: boolean;
  public get shareTagOptions() {
    return this.getBooleanAttribute('share_tag_options');
  }
  public set shareTagOptions(value: boolean ) {
    this._shareTagOptions = value;
  }
  public resetShareTagOptions() {
    this._shareTagOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTagOptionsInput() {
    return this._shareTagOptions
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // wait_for_acceptance - computed: false, optional: true, required: false
  private _waitForAcceptance?: boolean;
  public get waitForAcceptance() {
    return this.getBooleanAttribute('wait_for_acceptance');
  }
  public set waitForAcceptance(value: boolean ) {
    this._waitForAcceptance = value;
  }
  public resetWaitForAcceptance() {
    this._waitForAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAcceptanceInput() {
    return this._waitForAcceptance
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      portfolio_id: cdktf.stringToTerraform(this._portfolioId),
      principal_id: cdktf.stringToTerraform(this._principalId),
      share_tag_options: cdktf.booleanToTerraform(this._shareTagOptions),
      type: cdktf.stringToTerraform(this._type),
      wait_for_acceptance: cdktf.booleanToTerraform(this._waitForAcceptance),
    };
  }
}
