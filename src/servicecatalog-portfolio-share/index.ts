// https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogPortfolioShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#accept_language ServicecatalogPortfolioShare#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#id ServicecatalogPortfolioShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#portfolio_id ServicecatalogPortfolioShare#portfolio_id}
  */
  readonly portfolioId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#principal_id ServicecatalogPortfolioShare#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#share_principals ServicecatalogPortfolioShare#share_principals}
  */
  readonly sharePrincipals?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#share_tag_options ServicecatalogPortfolioShare#share_tag_options}
  */
  readonly shareTagOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#type ServicecatalogPortfolioShare#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}
  */
  readonly waitForAcceptance?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#timeouts ServicecatalogPortfolioShare#timeouts}
  */
  readonly timeouts?: ServicecatalogPortfolioShareTimeouts;
}
export interface ServicecatalogPortfolioShareTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#create ServicecatalogPortfolioShare#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#delete ServicecatalogPortfolioShare#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#read ServicecatalogPortfolioShare#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share#update ServicecatalogPortfolioShare#update}
  */
  readonly update?: string;
}

export function servicecatalogPortfolioShareTimeoutsToTerraform(struct?: ServicecatalogPortfolioShareTimeoutsOutputReference | ServicecatalogPortfolioShareTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ServicecatalogPortfolioShareTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicecatalogPortfolioShareTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogPortfolioShareTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share aws_servicecatalog_portfolio_share}
*/
export class ServicecatalogPortfolioShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicecatalog_portfolio_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share aws_servicecatalog_portfolio_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogPortfolioShareConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogPortfolioShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_portfolio_share',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptLanguage = config.acceptLanguage;
    this._id = config.id;
    this._portfolioId = config.portfolioId;
    this._principalId = config.principalId;
    this._sharePrincipals = config.sharePrincipals;
    this._shareTagOptions = config.shareTagOptions;
    this._type = config.type;
    this._waitForAcceptance = config.waitForAcceptance;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string; 
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage;
  }

  // accepted - computed: true, optional: false, required: false
  public get accepted() {
    return this.getBooleanAttribute('accepted');
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

  // portfolio_id - computed: false, optional: false, required: true
  private _portfolioId?: string; 
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }
  public set portfolioId(value: string) {
    this._portfolioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portfolioIdInput() {
    return this._portfolioId;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // share_principals - computed: false, optional: true, required: false
  private _sharePrincipals?: boolean | cdktf.IResolvable; 
  public get sharePrincipals() {
    return this.getBooleanAttribute('share_principals');
  }
  public set sharePrincipals(value: boolean | cdktf.IResolvable) {
    this._sharePrincipals = value;
  }
  public resetSharePrincipals() {
    this._sharePrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePrincipalsInput() {
    return this._sharePrincipals;
  }

  // share_tag_options - computed: false, optional: true, required: false
  private _shareTagOptions?: boolean | cdktf.IResolvable; 
  public get shareTagOptions() {
    return this.getBooleanAttribute('share_tag_options');
  }
  public set shareTagOptions(value: boolean | cdktf.IResolvable) {
    this._shareTagOptions = value;
  }
  public resetShareTagOptions() {
    this._shareTagOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTagOptionsInput() {
    return this._shareTagOptions;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait_for_acceptance - computed: false, optional: true, required: false
  private _waitForAcceptance?: boolean | cdktf.IResolvable; 
  public get waitForAcceptance() {
    return this.getBooleanAttribute('wait_for_acceptance');
  }
  public set waitForAcceptance(value: boolean | cdktf.IResolvable) {
    this._waitForAcceptance = value;
  }
  public resetWaitForAcceptance() {
    this._waitForAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAcceptanceInput() {
    return this._waitForAcceptance;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicecatalogPortfolioShareTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicecatalogPortfolioShareTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      id: cdktf.stringToTerraform(this._id),
      portfolio_id: cdktf.stringToTerraform(this._portfolioId),
      principal_id: cdktf.stringToTerraform(this._principalId),
      share_principals: cdktf.booleanToTerraform(this._sharePrincipals),
      share_tag_options: cdktf.booleanToTerraform(this._shareTagOptions),
      type: cdktf.stringToTerraform(this._type),
      wait_for_acceptance: cdktf.booleanToTerraform(this._waitForAcceptance),
      timeouts: servicecatalogPortfolioShareTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
