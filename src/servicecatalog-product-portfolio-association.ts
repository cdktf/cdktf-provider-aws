// https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogProductPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly acceptLanguage?: string;
  readonly portfolioId: string;
  readonly productId: string;
  readonly sourcePortfolioId?: string;
}

// Resource

export class ServicecatalogProductPortfolioAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicecatalogProductPortfolioAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_product_portfolio_association',
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
    this._productId = config.productId;
    this._sourcePortfolioId = config.sourcePortfolioId;
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

  // product_id - computed: false, optional: false, required: true
  private _productId: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // source_portfolio_id - computed: false, optional: true, required: false
  private _sourcePortfolioId?: string;
  public get sourcePortfolioId() {
    return this.getStringAttribute('source_portfolio_id');
  }
  public set sourcePortfolioId(value: string ) {
    this._sourcePortfolioId = value;
  }
  public resetSourcePortfolioId() {
    this._sourcePortfolioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortfolioIdInput() {
    return this._sourcePortfolioId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      portfolio_id: cdktf.stringToTerraform(this._portfolioId),
      product_id: cdktf.stringToTerraform(this._productId),
      source_portfolio_id: cdktf.stringToTerraform(this._sourcePortfolioId),
    };
  }
}
