// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Service Catalog
*/
export namespace ServiceCatalog {
  export interface ServicecatalogBudgetResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html#budget_name ServicecatalogBudgetResourceAssociation#budget_name}
    */
    readonly budgetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html#resource_id ServicecatalogBudgetResourceAssociation#resource_id}
    */
    readonly resourceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association}
  */
  export class ServicecatalogBudgetResourceAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_budget_resource_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogBudgetResourceAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogBudgetResourceAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_budget_resource_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._budgetName = config.budgetName;
      this._resourceId = config.resourceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // budget_name - computed: false, optional: false, required: true
    private _budgetName?: string; 
    public get budgetName() {
      return this.getStringAttribute('budget_name');
    }
    public set budgetName(value: string) {
      this._budgetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get budgetNameInput() {
      return this._budgetName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        budget_name: cdktf.stringToTerraform(this._budgetName),
        resource_id: cdktf.stringToTerraform(this._resourceId),
      };
    }
  }
  export interface ServicecatalogConstraintConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#accept_language ServicecatalogConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#description ServicecatalogConstraint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#parameters ServicecatalogConstraint#parameters}
    */
    readonly parameters: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#portfolio_id ServicecatalogConstraint#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#product_id ServicecatalogConstraint#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html#type ServicecatalogConstraint#type}
    */
    readonly type: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html aws_servicecatalog_constraint}
  */
  export class ServicecatalogConstraint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_constraint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html aws_servicecatalog_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogConstraintConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogConstraintConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_constraint',
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
      this._parameters = config.parameters;
      this._portfolioId = config.portfolioId;
      this._productId = config.productId;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // parameters - computed: false, optional: false, required: true
    private _parameters?: string; 
    public get parameters() {
      return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
      this._parameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
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
      return this._portfolioId
    }

    // product_id - computed: false, optional: false, required: true
    private _productId?: string; 
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

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        description: cdktf.stringToTerraform(this._description),
        parameters: cdktf.stringToTerraform(this._parameters),
        portfolio_id: cdktf.stringToTerraform(this._portfolioId),
        product_id: cdktf.stringToTerraform(this._productId),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface ServicecatalogOrganizationsAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html#enabled ServicecatalogOrganizationsAccess#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html aws_servicecatalog_organizations_access}
  */
  export class ServicecatalogOrganizationsAccess extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_organizations_access";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html aws_servicecatalog_organizations_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogOrganizationsAccessConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogOrganizationsAccessConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_organizations_access',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabled = config.enabled;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enabled: cdktf.booleanToTerraform(this._enabled),
      };
    }
  }
  export interface ServicecatalogPortfolioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#description ServicecatalogPortfolio#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#name ServicecatalogPortfolio#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#provider_name ServicecatalogPortfolio#provider_name}
    */
    readonly providerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#tags ServicecatalogPortfolio#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#tags_all ServicecatalogPortfolio#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#timeouts ServicecatalogPortfolio#timeouts}
    */
    readonly timeouts?: ServicecatalogPortfolioTimeouts;
  }
  export interface ServicecatalogPortfolioTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#create ServicecatalogPortfolio#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#delete ServicecatalogPortfolio#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html#update ServicecatalogPortfolio#update}
    */
    readonly update?: string;
  }

  function servicecatalogPortfolioTimeoutsToTerraform(struct?: ServicecatalogPortfolioTimeoutsOutputReference | ServicecatalogPortfolioTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class ServicecatalogPortfolioTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html aws_servicecatalog_portfolio}
  */
  export class ServicecatalogPortfolio extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_portfolio";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html aws_servicecatalog_portfolio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPortfolioConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogPortfolioConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_portfolio',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._providerName = config.providerName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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

    // provider_name - computed: false, optional: false, required: true
    private _providerName?: string; 
    public get providerName() {
      return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
      this._providerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
      return this._providerName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ServicecatalogPortfolioTimeouts | undefined; 
    private __timeoutsOutput = new ServicecatalogPortfolioTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ServicecatalogPortfolioTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        provider_name: cdktf.stringToTerraform(this._providerName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: servicecatalogPortfolioTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ServicecatalogPortfolioShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#accept_language ServicecatalogPortfolioShare#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#portfolio_id ServicecatalogPortfolioShare#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#principal_id ServicecatalogPortfolioShare#principal_id}
    */
    readonly principalId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#share_tag_options ServicecatalogPortfolioShare#share_tag_options}
    */
    readonly shareTagOptions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#type ServicecatalogPortfolioShare#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}
    */
    readonly waitForAcceptance?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html aws_servicecatalog_portfolio_share}
  */
  export class ServicecatalogPortfolioShare extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_portfolio_share";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html aws_servicecatalog_portfolio_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPortfolioShareConfig
    */
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
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
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
      return this.getBooleanAttribute('accepted') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._portfolioId
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
      return this._principalId
    }

    // share_tag_options - computed: false, optional: true, required: false
    private _shareTagOptions?: boolean | cdktf.IResolvable | undefined; 
    public get shareTagOptions() {
      return this.getBooleanAttribute('share_tag_options') as any;
    }
    public set shareTagOptions(value: boolean | cdktf.IResolvable | undefined) {
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
    private _type?: string; 
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
    private _waitForAcceptance?: boolean | cdktf.IResolvable | undefined; 
    public get waitForAcceptance() {
      return this.getBooleanAttribute('wait_for_acceptance') as any;
    }
    public set waitForAcceptance(value: boolean | cdktf.IResolvable | undefined) {
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
  export interface ServicecatalogPrincipalPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#accept_language ServicecatalogPrincipalPortfolioAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#portfolio_id ServicecatalogPrincipalPortfolioAssociation#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#principal_arn ServicecatalogPrincipalPortfolioAssociation#principal_arn}
    */
    readonly principalArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html#principal_type ServicecatalogPrincipalPortfolioAssociation#principal_type}
    */
    readonly principalType?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html aws_servicecatalog_principal_portfolio_association}
  */
  export class ServicecatalogPrincipalPortfolioAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_principal_portfolio_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html aws_servicecatalog_principal_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPrincipalPortfolioAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogPrincipalPortfolioAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_principal_portfolio_association',
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
      this._principalArn = config.principalArn;
      this._principalType = config.principalType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
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
    private _portfolioId?: string; 
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

    // principal_arn - computed: false, optional: false, required: true
    private _principalArn?: string; 
    public get principalArn() {
      return this.getStringAttribute('principal_arn');
    }
    public set principalArn(value: string) {
      this._principalArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalArnInput() {
      return this._principalArn
    }

    // principal_type - computed: false, optional: true, required: false
    private _principalType?: string | undefined; 
    public get principalType() {
      return this.getStringAttribute('principal_type');
    }
    public set principalType(value: string | undefined) {
      this._principalType = value;
    }
    public resetPrincipalType() {
      this._principalType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalTypeInput() {
      return this._principalType
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        portfolio_id: cdktf.stringToTerraform(this._portfolioId),
        principal_arn: cdktf.stringToTerraform(this._principalArn),
        principal_type: cdktf.stringToTerraform(this._principalType),
      };
    }
  }
  export interface ServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#accept_language ServicecatalogProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#distributor ServicecatalogProduct#distributor}
    */
    readonly distributor?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#owner ServicecatalogProduct#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_description ServicecatalogProduct#support_description}
    */
    readonly supportDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_email ServicecatalogProduct#support_email}
    */
    readonly supportEmail?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_url ServicecatalogProduct#support_url}
    */
    readonly supportUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags ServicecatalogProduct#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags_all ServicecatalogProduct#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}
    */
    readonly type: string;
    /**
    * provisioning_artifact_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}
    */
    readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters;
  }
  export interface ServicecatalogProductProvisioningArtifactParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#disable_template_validation ServicecatalogProduct#disable_template_validation}
    */
    readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_physical_id ServicecatalogProduct#template_physical_id}
    */
    readonly templatePhysicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_url ServicecatalogProduct#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}
    */
    readonly type?: string;
  }

  function servicecatalogProductProvisioningArtifactParametersToTerraform(struct?: ServicecatalogProductProvisioningArtifactParametersOutputReference | ServicecatalogProductProvisioningArtifactParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      description: cdktf.stringToTerraform(struct!.description),
      disable_template_validation: cdktf.booleanToTerraform(struct!.disableTemplateValidation),
      name: cdktf.stringToTerraform(struct!.name),
      template_physical_id: cdktf.stringToTerraform(struct!.templatePhysicalId),
      template_url: cdktf.stringToTerraform(struct!.templateUrl),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class ServicecatalogProductProvisioningArtifactParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // disable_template_validation - computed: false, optional: true, required: false
    private _disableTemplateValidation?: boolean | cdktf.IResolvable | undefined; 
    public get disableTemplateValidation() {
      return this.getBooleanAttribute('disable_template_validation') as any;
    }
    public set disableTemplateValidation(value: boolean | cdktf.IResolvable | undefined) {
      this._disableTemplateValidation = value;
    }
    public resetDisableTemplateValidation() {
      this._disableTemplateValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableTemplateValidationInput() {
      return this._disableTemplateValidation
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // template_physical_id - computed: false, optional: true, required: false
    private _templatePhysicalId?: string | undefined; 
    public get templatePhysicalId() {
      return this.getStringAttribute('template_physical_id');
    }
    public set templatePhysicalId(value: string | undefined) {
      this._templatePhysicalId = value;
    }
    public resetTemplatePhysicalId() {
      this._templatePhysicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templatePhysicalIdInput() {
      return this._templatePhysicalId
    }

    // template_url - computed: false, optional: true, required: false
    private _templateUrl?: string | undefined; 
    public get templateUrl() {
      return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string | undefined) {
      this._templateUrl = value;
    }
    public resetTemplateUrl() {
      this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
      return this._templateUrl
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product}
  */
  export class ServicecatalogProduct extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_product";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogProductConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_product',
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
      this._distributor = config.distributor;
      this._name = config.name;
      this._owner = config.owner;
      this._supportDescription = config.supportDescription;
      this._supportEmail = config.supportEmail;
      this._supportUrl = config.supportUrl;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._provisioningArtifactParameters = config.provisioningArtifactParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
      this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
      this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
      return this._acceptLanguage
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // distributor - computed: true, optional: true, required: false
    private _distributor?: string | undefined; 
    public get distributor() {
      return this.getStringAttribute('distributor');
    }
    public set distributor(value: string | undefined) {
      this._distributor = value;
    }
    public resetDistributor() {
      this._distributor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distributorInput() {
      return this._distributor
    }

    // has_default_path - computed: true, optional: false, required: false
    public get hasDefaultPath() {
      return this.getBooleanAttribute('has_default_path') as any;
    }

    // id - computed: true, optional: true, required: false
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
      return this._name
    }

    // owner - computed: false, optional: false, required: true
    private _owner?: string; 
    public get owner() {
      return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
      this._owner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
      return this._owner
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // support_description - computed: true, optional: true, required: false
    private _supportDescription?: string | undefined; 
    public get supportDescription() {
      return this.getStringAttribute('support_description');
    }
    public set supportDescription(value: string | undefined) {
      this._supportDescription = value;
    }
    public resetSupportDescription() {
      this._supportDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportDescriptionInput() {
      return this._supportDescription
    }

    // support_email - computed: true, optional: true, required: false
    private _supportEmail?: string | undefined; 
    public get supportEmail() {
      return this.getStringAttribute('support_email');
    }
    public set supportEmail(value: string | undefined) {
      this._supportEmail = value;
    }
    public resetSupportEmail() {
      this._supportEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportEmailInput() {
      return this._supportEmail
    }

    // support_url - computed: true, optional: true, required: false
    private _supportUrl?: string | undefined; 
    public get supportUrl() {
      return this.getStringAttribute('support_url');
    }
    public set supportUrl(value: string | undefined) {
      this._supportUrl = value;
    }
    public resetSupportUrl() {
      this._supportUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportUrlInput() {
      return this._supportUrl
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
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
      return this._type
    }

    // provisioning_artifact_parameters - computed: false, optional: false, required: true
    private _provisioningArtifactParameters?: ServicecatalogProductProvisioningArtifactParameters; 
    private __provisioningArtifactParametersOutput = new ServicecatalogProductProvisioningArtifactParametersOutputReference(this as any, "provisioning_artifact_parameters", true);
    public get provisioningArtifactParameters() {
      return this.__provisioningArtifactParametersOutput;
    }
    public putProvisioningArtifactParameters(value: ServicecatalogProductProvisioningArtifactParameters) {
      this._provisioningArtifactParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningArtifactParametersInput() {
      return this._provisioningArtifactParameters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        description: cdktf.stringToTerraform(this._description),
        distributor: cdktf.stringToTerraform(this._distributor),
        name: cdktf.stringToTerraform(this._name),
        owner: cdktf.stringToTerraform(this._owner),
        support_description: cdktf.stringToTerraform(this._supportDescription),
        support_email: cdktf.stringToTerraform(this._supportEmail),
        support_url: cdktf.stringToTerraform(this._supportUrl),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        provisioning_artifact_parameters: servicecatalogProductProvisioningArtifactParametersToTerraform(this._provisioningArtifactParameters),
      };
    }
  }
  export interface ServicecatalogProductPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#accept_language ServicecatalogProductPortfolioAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#product_id ServicecatalogProductPortfolioAssociation#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}
    */
    readonly sourcePortfolioId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html aws_servicecatalog_product_portfolio_association}
  */
  export class ServicecatalogProductPortfolioAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_product_portfolio_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html aws_servicecatalog_product_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductPortfolioAssociationConfig
    */
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
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
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
    private _portfolioId?: string; 
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
    private _productId?: string; 
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
    private _sourcePortfolioId?: string | undefined; 
    public get sourcePortfolioId() {
      return this.getStringAttribute('source_portfolio_id');
    }
    public set sourcePortfolioId(value: string | undefined) {
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
  export interface ServicecatalogProvisionedProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accept_language ServicecatalogProvisionedProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}
    */
    readonly ignoreErrors?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#name ServicecatalogProvisionedProduct#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#notification_arns ServicecatalogProvisionedProduct#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_id ServicecatalogProvisionedProduct#path_id}
    */
    readonly pathId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_name ServicecatalogProvisionedProduct#path_name}
    */
    readonly pathName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_id ServicecatalogProvisionedProduct#product_id}
    */
    readonly productId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_name ServicecatalogProvisionedProduct#product_name}
    */
    readonly productName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}
    */
    readonly provisioningArtifactId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}
    */
    readonly provisioningArtifactName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}
    */
    readonly retainPhysicalResources?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags ServicecatalogProvisionedProduct#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags_all ServicecatalogProvisionedProduct#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * provisioning_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}
    */
    readonly provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[];
    /**
    * stack_set_provisioning_preferences block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}
    */
    readonly stackSetProvisioningPreferences?: ServicecatalogProvisionedProductStackSetProvisioningPreferences;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#timeouts ServicecatalogProvisionedProduct#timeouts}
    */
    readonly timeouts?: ServicecatalogProvisionedProductTimeouts;
  }
  export interface ServicecatalogProvisionedProductProvisioningParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#key ServicecatalogProvisionedProduct#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}
    */
    readonly usePreviousValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#value ServicecatalogProvisionedProduct#value}
    */
    readonly value?: string;
  }

  function servicecatalogProvisionedProductProvisioningParametersToTerraform(struct?: ServicecatalogProvisionedProductProvisioningParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      use_previous_value: cdktf.booleanToTerraform(struct!.usePreviousValue),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface ServicecatalogProvisionedProductStackSetProvisioningPreferences {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accounts ServicecatalogProvisionedProduct#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}
    */
    readonly maxConcurrencyCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}
    */
    readonly maxConcurrencyPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#regions ServicecatalogProvisionedProduct#regions}
    */
    readonly regions?: string[];
  }

  function servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(struct?: ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference | ServicecatalogProvisionedProductStackSetProvisioningPreferences): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accounts),
      failure_tolerance_count: cdktf.numberToTerraform(struct!.failureToleranceCount),
      failure_tolerance_percentage: cdktf.numberToTerraform(struct!.failureTolerancePercentage),
      max_concurrency_count: cdktf.numberToTerraform(struct!.maxConcurrencyCount),
      max_concurrency_percentage: cdktf.numberToTerraform(struct!.maxConcurrencyPercentage),
      regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    }
  }

  export class ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // accounts - computed: false, optional: true, required: false
    private _accounts?: string[] | undefined; 
    public get accounts() {
      return this.getListAttribute('accounts');
    }
    public set accounts(value: string[] | undefined) {
      this._accounts = value;
    }
    public resetAccounts() {
      this._accounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountsInput() {
      return this._accounts
    }

    // failure_tolerance_count - computed: false, optional: true, required: false
    private _failureToleranceCount?: number | undefined; 
    public get failureToleranceCount() {
      return this.getNumberAttribute('failure_tolerance_count');
    }
    public set failureToleranceCount(value: number | undefined) {
      this._failureToleranceCount = value;
    }
    public resetFailureToleranceCount() {
      this._failureToleranceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureToleranceCountInput() {
      return this._failureToleranceCount
    }

    // failure_tolerance_percentage - computed: false, optional: true, required: false
    private _failureTolerancePercentage?: number | undefined; 
    public get failureTolerancePercentage() {
      return this.getNumberAttribute('failure_tolerance_percentage');
    }
    public set failureTolerancePercentage(value: number | undefined) {
      this._failureTolerancePercentage = value;
    }
    public resetFailureTolerancePercentage() {
      this._failureTolerancePercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureTolerancePercentageInput() {
      return this._failureTolerancePercentage
    }

    // max_concurrency_count - computed: false, optional: true, required: false
    private _maxConcurrencyCount?: number | undefined; 
    public get maxConcurrencyCount() {
      return this.getNumberAttribute('max_concurrency_count');
    }
    public set maxConcurrencyCount(value: number | undefined) {
      this._maxConcurrencyCount = value;
    }
    public resetMaxConcurrencyCount() {
      this._maxConcurrencyCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyCountInput() {
      return this._maxConcurrencyCount
    }

    // max_concurrency_percentage - computed: false, optional: true, required: false
    private _maxConcurrencyPercentage?: number | undefined; 
    public get maxConcurrencyPercentage() {
      return this.getNumberAttribute('max_concurrency_percentage');
    }
    public set maxConcurrencyPercentage(value: number | undefined) {
      this._maxConcurrencyPercentage = value;
    }
    public resetMaxConcurrencyPercentage() {
      this._maxConcurrencyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyPercentageInput() {
      return this._maxConcurrencyPercentage
    }

    // regions - computed: false, optional: true, required: false
    private _regions?: string[] | undefined; 
    public get regions() {
      return this.getListAttribute('regions');
    }
    public set regions(value: string[] | undefined) {
      this._regions = value;
    }
    public resetRegions() {
      this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
      return this._regions
    }
  }
  export interface ServicecatalogProvisionedProductTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#create ServicecatalogProvisionedProduct#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#delete ServicecatalogProvisionedProduct#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#update ServicecatalogProvisionedProduct#update}
    */
    readonly update?: string;
  }

  function servicecatalogProvisionedProductTimeoutsToTerraform(struct?: ServicecatalogProvisionedProductTimeoutsOutputReference | ServicecatalogProvisionedProductTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class ServicecatalogProvisionedProductTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product}
  */
  export class ServicecatalogProvisionedProduct extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_provisioned_product";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisionedProductConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogProvisionedProductConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_provisioned_product',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._acceptLanguage = config.acceptLanguage;
      this._ignoreErrors = config.ignoreErrors;
      this._name = config.name;
      this._notificationArns = config.notificationArns;
      this._pathId = config.pathId;
      this._pathName = config.pathName;
      this._productId = config.productId;
      this._productName = config.productName;
      this._provisioningArtifactId = config.provisioningArtifactId;
      this._provisioningArtifactName = config.provisioningArtifactName;
      this._retainPhysicalResources = config.retainPhysicalResources;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._provisioningParameters = config.provisioningParameters;
      this._stackSetProvisioningPreferences = config.stackSetProvisioningPreferences;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
      this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
      this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
      return this._acceptLanguage
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cloudwatch_dashboard_names - computed: true, optional: false, required: false
    public get cloudwatchDashboardNames() {
      return this.getListAttribute('cloudwatch_dashboard_names');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ignore_errors - computed: false, optional: true, required: false
    private _ignoreErrors?: boolean | cdktf.IResolvable | undefined; 
    public get ignoreErrors() {
      return this.getBooleanAttribute('ignore_errors') as any;
    }
    public set ignoreErrors(value: boolean | cdktf.IResolvable | undefined) {
      this._ignoreErrors = value;
    }
    public resetIgnoreErrors() {
      this._ignoreErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreErrorsInput() {
      return this._ignoreErrors
    }

    // last_provisioning_record_id - computed: true, optional: false, required: false
    public get lastProvisioningRecordId() {
      return this.getStringAttribute('last_provisioning_record_id');
    }

    // last_record_id - computed: true, optional: false, required: false
    public get lastRecordId() {
      return this.getStringAttribute('last_record_id');
    }

    // last_successful_provisioning_record_id - computed: true, optional: false, required: false
    public get lastSuccessfulProvisioningRecordId() {
      return this.getStringAttribute('last_successful_provisioning_record_id');
    }

    // launch_role_arn - computed: true, optional: false, required: false
    public get launchRoleArn() {
      return this.getStringAttribute('launch_role_arn');
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
      return this._name
    }

    // notification_arns - computed: false, optional: true, required: false
    private _notificationArns?: string[] | undefined; 
    public get notificationArns() {
      return this.getListAttribute('notification_arns');
    }
    public set notificationArns(value: string[] | undefined) {
      this._notificationArns = value;
    }
    public resetNotificationArns() {
      this._notificationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArnsInput() {
      return this._notificationArns
    }

    // path_id - computed: true, optional: true, required: false
    private _pathId?: string | undefined; 
    public get pathId() {
      return this.getStringAttribute('path_id');
    }
    public set pathId(value: string | undefined) {
      this._pathId = value;
    }
    public resetPathId() {
      this._pathId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathIdInput() {
      return this._pathId
    }

    // path_name - computed: false, optional: true, required: false
    private _pathName?: string | undefined; 
    public get pathName() {
      return this.getStringAttribute('path_name');
    }
    public set pathName(value: string | undefined) {
      this._pathName = value;
    }
    public resetPathName() {
      this._pathName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathNameInput() {
      return this._pathName
    }

    // product_id - computed: true, optional: true, required: false
    private _productId?: string | undefined; 
    public get productId() {
      return this.getStringAttribute('product_id');
    }
    public set productId(value: string | undefined) {
      this._productId = value;
    }
    public resetProductId() {
      this._productId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
      return this._productId
    }

    // product_name - computed: false, optional: true, required: false
    private _productName?: string | undefined; 
    public get productName() {
      return this.getStringAttribute('product_name');
    }
    public set productName(value: string | undefined) {
      this._productName = value;
    }
    public resetProductName() {
      this._productName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productNameInput() {
      return this._productName
    }

    // provisioning_artifact_id - computed: true, optional: true, required: false
    private _provisioningArtifactId?: string | undefined; 
    public get provisioningArtifactId() {
      return this.getStringAttribute('provisioning_artifact_id');
    }
    public set provisioningArtifactId(value: string | undefined) {
      this._provisioningArtifactId = value;
    }
    public resetProvisioningArtifactId() {
      this._provisioningArtifactId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningArtifactIdInput() {
      return this._provisioningArtifactId
    }

    // provisioning_artifact_name - computed: false, optional: true, required: false
    private _provisioningArtifactName?: string | undefined; 
    public get provisioningArtifactName() {
      return this.getStringAttribute('provisioning_artifact_name');
    }
    public set provisioningArtifactName(value: string | undefined) {
      this._provisioningArtifactName = value;
    }
    public resetProvisioningArtifactName() {
      this._provisioningArtifactName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningArtifactNameInput() {
      return this._provisioningArtifactName
    }

    // retain_physical_resources - computed: false, optional: true, required: false
    private _retainPhysicalResources?: boolean | cdktf.IResolvable | undefined; 
    public get retainPhysicalResources() {
      return this.getBooleanAttribute('retain_physical_resources') as any;
    }
    public set retainPhysicalResources(value: boolean | cdktf.IResolvable | undefined) {
      this._retainPhysicalResources = value;
    }
    public resetRetainPhysicalResources() {
      this._retainPhysicalResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainPhysicalResourcesInput() {
      return this._retainPhysicalResources
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
      return this.getStringAttribute('status_message');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // provisioning_parameters - computed: false, optional: true, required: false
    private _provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[] | undefined; 
    public get provisioningParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('provisioning_parameters') as any;
    }
    public set provisioningParameters(value: ServicecatalogProvisionedProductProvisioningParameters[] | undefined) {
      this._provisioningParameters = value;
    }
    public resetProvisioningParameters() {
      this._provisioningParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisioningParametersInput() {
      return this._provisioningParameters
    }

    // stack_set_provisioning_preferences - computed: false, optional: true, required: false
    private _stackSetProvisioningPreferences?: ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined; 
    private __stackSetProvisioningPreferencesOutput = new ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference(this as any, "stack_set_provisioning_preferences", true);
    public get stackSetProvisioningPreferences() {
      return this.__stackSetProvisioningPreferencesOutput;
    }
    public putStackSetProvisioningPreferences(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined) {
      this._stackSetProvisioningPreferences = value;
    }
    public resetStackSetProvisioningPreferences() {
      this._stackSetProvisioningPreferences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetProvisioningPreferencesInput() {
      return this._stackSetProvisioningPreferences
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ServicecatalogProvisionedProductTimeouts | undefined; 
    private __timeoutsOutput = new ServicecatalogProvisionedProductTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ServicecatalogProvisionedProductTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
        name: cdktf.stringToTerraform(this._name),
        notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
        path_id: cdktf.stringToTerraform(this._pathId),
        path_name: cdktf.stringToTerraform(this._pathName),
        product_id: cdktf.stringToTerraform(this._productId),
        product_name: cdktf.stringToTerraform(this._productName),
        provisioning_artifact_id: cdktf.stringToTerraform(this._provisioningArtifactId),
        provisioning_artifact_name: cdktf.stringToTerraform(this._provisioningArtifactName),
        retain_physical_resources: cdktf.booleanToTerraform(this._retainPhysicalResources),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        provisioning_parameters: cdktf.listMapper(servicecatalogProvisionedProductProvisioningParametersToTerraform)(this._provisioningParameters),
        stack_set_provisioning_preferences: servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(this._stackSetProvisioningPreferences),
        timeouts: servicecatalogProvisionedProductTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ServicecatalogProvisioningArtifactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#accept_language ServicecatalogProvisioningArtifact#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#active ServicecatalogProvisioningArtifact#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#description ServicecatalogProvisioningArtifact#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}
    */
    readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#guidance ServicecatalogProvisioningArtifact#guidance}
    */
    readonly guidance?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#name ServicecatalogProvisioningArtifact#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#product_id ServicecatalogProvisioningArtifact#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}
    */
    readonly templatePhysicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#template_url ServicecatalogProvisioningArtifact#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html#type ServicecatalogProvisioningArtifact#type}
    */
    readonly type?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html aws_servicecatalog_provisioning_artifact}
  */
  export class ServicecatalogProvisioningArtifact extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_provisioning_artifact";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html aws_servicecatalog_provisioning_artifact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisioningArtifactConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogProvisioningArtifactConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_provisioning_artifact',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._acceptLanguage = config.acceptLanguage;
      this._active = config.active;
      this._description = config.description;
      this._disableTemplateValidation = config.disableTemplateValidation;
      this._guidance = config.guidance;
      this._name = config.name;
      this._productId = config.productId;
      this._templatePhysicalId = config.templatePhysicalId;
      this._templateUrl = config.templateUrl;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
      this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
      this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
      return this._acceptLanguage
    }

    // active - computed: false, optional: true, required: false
    private _active?: boolean | cdktf.IResolvable | undefined; 
    public get active() {
      return this.getBooleanAttribute('active') as any;
    }
    public set active(value: boolean | cdktf.IResolvable | undefined) {
      this._active = value;
    }
    public resetActive() {
      this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeInput() {
      return this._active
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // disable_template_validation - computed: false, optional: true, required: false
    private _disableTemplateValidation?: boolean | cdktf.IResolvable | undefined; 
    public get disableTemplateValidation() {
      return this.getBooleanAttribute('disable_template_validation') as any;
    }
    public set disableTemplateValidation(value: boolean | cdktf.IResolvable | undefined) {
      this._disableTemplateValidation = value;
    }
    public resetDisableTemplateValidation() {
      this._disableTemplateValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableTemplateValidationInput() {
      return this._disableTemplateValidation
    }

    // guidance - computed: false, optional: true, required: false
    private _guidance?: string | undefined; 
    public get guidance() {
      return this.getStringAttribute('guidance');
    }
    public set guidance(value: string | undefined) {
      this._guidance = value;
    }
    public resetGuidance() {
      this._guidance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get guidanceInput() {
      return this._guidance
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // product_id - computed: false, optional: false, required: true
    private _productId?: string; 
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

    // template_physical_id - computed: false, optional: true, required: false
    private _templatePhysicalId?: string | undefined; 
    public get templatePhysicalId() {
      return this.getStringAttribute('template_physical_id');
    }
    public set templatePhysicalId(value: string | undefined) {
      this._templatePhysicalId = value;
    }
    public resetTemplatePhysicalId() {
      this._templatePhysicalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templatePhysicalIdInput() {
      return this._templatePhysicalId
    }

    // template_url - computed: false, optional: true, required: false
    private _templateUrl?: string | undefined; 
    public get templateUrl() {
      return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string | undefined) {
      this._templateUrl = value;
    }
    public resetTemplateUrl() {
      this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
      return this._templateUrl
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        active: cdktf.booleanToTerraform(this._active),
        description: cdktf.stringToTerraform(this._description),
        disable_template_validation: cdktf.booleanToTerraform(this._disableTemplateValidation),
        guidance: cdktf.stringToTerraform(this._guidance),
        name: cdktf.stringToTerraform(this._name),
        product_id: cdktf.stringToTerraform(this._productId),
        template_physical_id: cdktf.stringToTerraform(this._templatePhysicalId),
        template_url: cdktf.stringToTerraform(this._templateUrl),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface ServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#accept_language ServicecatalogServiceAction#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#description ServicecatalogServiceAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#name ServicecatalogServiceAction#name}
    */
    readonly name: string;
    /**
    * definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#definition ServicecatalogServiceAction#definition}
    */
    readonly definition: ServicecatalogServiceActionDefinition;
  }
  export interface ServicecatalogServiceActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#assume_role ServicecatalogServiceAction#assume_role}
    */
    readonly assumeRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#name ServicecatalogServiceAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#parameters ServicecatalogServiceAction#parameters}
    */
    readonly parameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#type ServicecatalogServiceAction#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#version ServicecatalogServiceAction#version}
    */
    readonly version: string;
  }

  function servicecatalogServiceActionDefinitionToTerraform(struct?: ServicecatalogServiceActionDefinitionOutputReference | ServicecatalogServiceActionDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      assume_role: cdktf.stringToTerraform(struct!.assumeRole),
      name: cdktf.stringToTerraform(struct!.name),
      parameters: cdktf.stringToTerraform(struct!.parameters),
      type: cdktf.stringToTerraform(struct!.type),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class ServicecatalogServiceActionDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // assume_role - computed: false, optional: true, required: false
    private _assumeRole?: string | undefined; 
    public get assumeRole() {
      return this.getStringAttribute('assume_role');
    }
    public set assumeRole(value: string | undefined) {
      this._assumeRole = value;
    }
    public resetAssumeRole() {
      this._assumeRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assumeRoleInput() {
      return this._assumeRole
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
      return this._name
    }

    // parameters - computed: false, optional: true, required: false
    private _parameters?: string | undefined; 
    public get parameters() {
      return this.getStringAttribute('parameters');
    }
    public set parameters(value: string | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html aws_servicecatalog_service_action}
  */
  export class ServicecatalogServiceAction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_service_action";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html aws_servicecatalog_service_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogServiceActionConfig
    */
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
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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
    private _definition?: ServicecatalogServiceActionDefinition; 
    private __definitionOutput = new ServicecatalogServiceActionDefinitionOutputReference(this as any, "definition", true);
    public get definition() {
      return this.__definitionOutput;
    }
    public putDefinition(value: ServicecatalogServiceActionDefinition) {
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
        definition: servicecatalogServiceActionDefinitionToTerraform(this._definition),
      };
    }
  }
  export interface ServicecatalogTagOptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html#active ServicecatalogTagOption#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html#key ServicecatalogTagOption#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html#value ServicecatalogTagOption#value}
    */
    readonly value: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html aws_servicecatalog_tag_option}
  */
  export class ServicecatalogTagOption extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_tag_option";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html aws_servicecatalog_tag_option} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogTagOptionConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogTagOptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_tag_option',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._active = config.active;
      this._key = config.key;
      this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active - computed: false, optional: true, required: false
    private _active?: boolean | cdktf.IResolvable | undefined; 
    public get active() {
      return this.getBooleanAttribute('active') as any;
    }
    public set active(value: boolean | cdktf.IResolvable | undefined) {
      this._active = value;
    }
    public resetActive() {
      this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeInput() {
      return this._active
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        active: cdktf.booleanToTerraform(this._active),
        key: cdktf.stringToTerraform(this._key),
        value: cdktf.stringToTerraform(this._value),
      };
    }
  }
  export interface ServicecatalogTagOptionResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}
    */
    readonly tagOptionId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html aws_servicecatalog_tag_option_resource_association}
  */
  export class ServicecatalogTagOptionResourceAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_tag_option_resource_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html aws_servicecatalog_tag_option_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogTagOptionResourceAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: ServicecatalogTagOptionResourceAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_tag_option_resource_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resourceId = config.resourceId;
      this._tagOptionId = config.tagOptionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }

    // resource_created_time - computed: true, optional: false, required: false
    public get resourceCreatedTime() {
      return this.getStringAttribute('resource_created_time');
    }

    // resource_description - computed: true, optional: false, required: false
    public get resourceDescription() {
      return this.getStringAttribute('resource_description');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // resource_name - computed: true, optional: false, required: false
    public get resourceName() {
      return this.getStringAttribute('resource_name');
    }

    // tag_option_id - computed: false, optional: false, required: true
    private _tagOptionId?: string; 
    public get tagOptionId() {
      return this.getStringAttribute('tag_option_id');
    }
    public set tagOptionId(value: string) {
      this._tagOptionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagOptionIdInput() {
      return this._tagOptionId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        resource_id: cdktf.stringToTerraform(this._resourceId),
        tag_option_id: cdktf.stringToTerraform(this._tagOptionId),
      };
    }
  }
  export interface DataAwsServicecatalogConstraintConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html#accept_language DataAwsServicecatalogConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html#description DataAwsServicecatalogConstraint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html#id DataAwsServicecatalogConstraint#id}
    */
    readonly id: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html aws_servicecatalog_constraint}
  */
  export class DataAwsServicecatalogConstraint extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_constraint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html aws_servicecatalog_constraint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogConstraintConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsServicecatalogConstraintConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_constraint',
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
      this._id = config.id;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // parameters - computed: true, optional: false, required: false
    public get parameters() {
      return this.getStringAttribute('parameters');
    }

    // portfolio_id - computed: true, optional: false, required: false
    public get portfolioId() {
      return this.getStringAttribute('portfolio_id');
    }

    // product_id - computed: true, optional: false, required: false
    public get productId() {
      return this.getStringAttribute('product_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        description: cdktf.stringToTerraform(this._description),
        id: cdktf.stringToTerraform(this._id),
      };
    }
  }
  export interface DataAwsServicecatalogLaunchPathsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html#accept_language DataAwsServicecatalogLaunchPaths#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html#product_id DataAwsServicecatalogLaunchPaths#product_id}
    */
    readonly productId: string;
  }
  export class DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries extends cdktf.ComplexComputedList {

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }
  export class DataAwsServicecatalogLaunchPathsSummaries extends cdktf.ComplexComputedList {

    // constraint_summaries - computed: true, optional: false, required: false
    public get constraintSummaries() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('constraint_summaries') as any;
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // path_id - computed: true, optional: false, required: false
    public get pathId() {
      return this.getStringAttribute('path_id');
    }

    // tags - computed: true, optional: false, required: false
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths}
  */
  export class DataAwsServicecatalogLaunchPaths extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_launch_paths";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogLaunchPathsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsServicecatalogLaunchPathsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_launch_paths',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._acceptLanguage = config.acceptLanguage;
      this._productId = config.productId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
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

    // product_id - computed: false, optional: false, required: true
    private _productId?: string; 
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

    // summaries - computed: true, optional: false, required: false
    public summaries(index: string) {
      return new DataAwsServicecatalogLaunchPathsSummaries(this, 'summaries', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        product_id: cdktf.stringToTerraform(this._productId),
      };
    }
  }
  export interface DataAwsServicecatalogPortfolioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html#accept_language DataAwsServicecatalogPortfolio#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html#id DataAwsServicecatalogPortfolio#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html#tags DataAwsServicecatalogPortfolio#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html aws_servicecatalog_portfolio}
  */
  export class DataAwsServicecatalogPortfolio extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_portfolio";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio.html aws_servicecatalog_portfolio} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_portfolio',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._acceptLanguage = config.acceptLanguage;
      this._id = config.id;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
      this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
      this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
      return this._acceptLanguage
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // provider_name - computed: true, optional: false, required: false
    public get providerName() {
      return this.getStringAttribute('provider_name');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        id: cdktf.stringToTerraform(this._id),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsServicecatalogPortfolioConstraintsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html#product_id DataAwsServicecatalogPortfolioConstraints#product_id}
    */
    readonly productId?: string;
  }
  export class DataAwsServicecatalogPortfolioConstraintsDetails extends cdktf.ComplexComputedList {

    // constraint_id - computed: true, optional: false, required: false
    public get constraintId() {
      return this.getStringAttribute('constraint_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // portfolio_id - computed: true, optional: false, required: false
    public get portfolioId() {
      return this.getStringAttribute('portfolio_id');
    }

    // product_id - computed: true, optional: false, required: false
    public get productId() {
      return this.getStringAttribute('product_id');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints}
  */
  export class DataAwsServicecatalogPortfolioConstraints extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_portfolio_constraints";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConstraintsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConstraintsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_portfolio_constraints',
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
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
      this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
      this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
      return this._acceptLanguage
    }

    // details - computed: true, optional: false, required: false
    public details(index: string) {
      return new DataAwsServicecatalogPortfolioConstraintsDetails(this, 'details', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._portfolioId
    }

    // product_id - computed: false, optional: true, required: false
    private _productId?: string | undefined; 
    public get productId() {
      return this.getStringAttribute('product_id');
    }
    public set productId(value: string | undefined) {
      this._productId = value;
    }
    public resetProductId() {
      this._productId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productIdInput() {
      return this._productId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        portfolio_id: cdktf.stringToTerraform(this._portfolioId),
        product_id: cdktf.stringToTerraform(this._productId),
      };
    }
  }
  export interface DataAwsServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html#accept_language DataAwsServicecatalogProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html#id DataAwsServicecatalogProduct#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html#tags DataAwsServicecatalogProduct#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html aws_servicecatalog_product}
  */
  export class DataAwsServicecatalogProduct extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_servicecatalog_product";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html aws_servicecatalog_product} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogProductConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsServicecatalogProductConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_servicecatalog_product',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._acceptLanguage = config.acceptLanguage;
      this._id = config.id;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_language - computed: false, optional: true, required: false
    private _acceptLanguage?: string | undefined; 
    public get acceptLanguage() {
      return this.getStringAttribute('accept_language');
    }
    public set acceptLanguage(value: string | undefined) {
      this._acceptLanguage = value;
    }
    public resetAcceptLanguage() {
      this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptLanguageInput() {
      return this._acceptLanguage
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // distributor - computed: true, optional: false, required: false
    public get distributor() {
      return this.getStringAttribute('distributor');
    }

    // has_default_path - computed: true, optional: false, required: false
    public get hasDefaultPath() {
      return this.getBooleanAttribute('has_default_path') as any;
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // support_description - computed: true, optional: false, required: false
    public get supportDescription() {
      return this.getStringAttribute('support_description');
    }

    // support_email - computed: true, optional: false, required: false
    public get supportEmail() {
      return this.getStringAttribute('support_email');
    }

    // support_url - computed: true, optional: false, required: false
    public get supportUrl() {
      return this.getStringAttribute('support_url');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accept_language: cdktf.stringToTerraform(this._acceptLanguage),
        id: cdktf.stringToTerraform(this._id),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
