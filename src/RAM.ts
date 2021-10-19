// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Resource Access Manager
*/
export namespace RAM {
  export interface RamPrincipalAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html#principal RamPrincipalAssociation#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html#resource_share_arn RamPrincipalAssociation#resource_share_arn}
    */
    readonly resourceShareArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association}
  */
  export class RamPrincipalAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ram_principal_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamPrincipalAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: RamPrincipalAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ram_principal_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._principal = config.principal;
      this._resourceShareArn = config.resourceShareArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
      return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
      this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
      return this._principal
    }

    // resource_share_arn - computed: false, optional: false, required: true
    private _resourceShareArn?: string; 
    public get resourceShareArn() {
      return this.getStringAttribute('resource_share_arn');
    }
    public set resourceShareArn(value: string) {
      this._resourceShareArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceShareArnInput() {
      return this._resourceShareArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        principal: cdktf.stringToTerraform(this._principal),
        resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
      };
    }
  }
  export interface RamResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html#resource_arn RamResourceAssociation#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html#resource_share_arn RamResourceAssociation#resource_share_arn}
    */
    readonly resourceShareArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html aws_ram_resource_association}
  */
  export class RamResourceAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ram_resource_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html aws_ram_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: RamResourceAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ram_resource_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resourceArn = config.resourceArn;
      this._resourceShareArn = config.resourceShareArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // resource_share_arn - computed: false, optional: false, required: true
    private _resourceShareArn?: string; 
    public get resourceShareArn() {
      return this.getStringAttribute('resource_share_arn');
    }
    public set resourceShareArn(value: string) {
      this._resourceShareArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceShareArnInput() {
      return this._resourceShareArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
        resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
      };
    }
  }
  export interface RamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#allow_external_principals RamResourceShare#allow_external_principals}
    */
    readonly allowExternalPrincipals?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#name RamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#tags RamResourceShare#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#tags_all RamResourceShare#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#timeouts RamResourceShare#timeouts}
    */
    readonly timeouts?: RamResourceShareTimeouts;
  }
  export interface RamResourceShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#create RamResourceShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#delete RamResourceShare#delete}
    */
    readonly delete?: string;
  }

  function ramResourceShareTimeoutsToTerraform(struct?: RamResourceShareTimeoutsOutputReference | RamResourceShareTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class RamResourceShareTimeoutsOutputReference extends cdktf.ComplexObject {
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share}
  */
  export class RamResourceShare extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ram_resource_share";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareConfig
    */
    public constructor(scope: Construct, id: string, config: RamResourceShareConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ram_resource_share',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowExternalPrincipals = config.allowExternalPrincipals;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_external_principals - computed: false, optional: true, required: false
    private _allowExternalPrincipals?: boolean | cdktf.IResolvable | undefined; 
    public get allowExternalPrincipals() {
      return this.getBooleanAttribute('allow_external_principals') as any;
    }
    public set allowExternalPrincipals(value: boolean | cdktf.IResolvable | undefined) {
      this._allowExternalPrincipals = value;
    }
    public resetAllowExternalPrincipals() {
      this._allowExternalPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowExternalPrincipalsInput() {
      return this._allowExternalPrincipals
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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
    private _timeouts?: RamResourceShareTimeouts | undefined; 
    private __timeoutsOutput = new RamResourceShareTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RamResourceShareTimeouts | undefined) {
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
        allow_external_principals: cdktf.booleanToTerraform(this._allowExternalPrincipals),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: ramResourceShareTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface RamResourceShareAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#share_arn RamResourceShareAccepter#share_arn}
    */
    readonly shareArn: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#timeouts RamResourceShareAccepter#timeouts}
    */
    readonly timeouts?: RamResourceShareAccepterTimeouts;
  }
  export interface RamResourceShareAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#create RamResourceShareAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#delete RamResourceShareAccepter#delete}
    */
    readonly delete?: string;
  }

  function ramResourceShareAccepterTimeoutsToTerraform(struct?: RamResourceShareAccepterTimeoutsOutputReference | RamResourceShareAccepterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class RamResourceShareAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter}
  */
  export class RamResourceShareAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ram_resource_share_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: RamResourceShareAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ram_resource_share_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._shareArn = config.shareArn;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invitation_arn - computed: true, optional: false, required: false
    public get invitationArn() {
      return this.getStringAttribute('invitation_arn');
    }

    // receiver_account_id - computed: true, optional: false, required: false
    public get receiverAccountId() {
      return this.getStringAttribute('receiver_account_id');
    }

    // resources - computed: true, optional: false, required: false
    public get resources() {
      return this.getListAttribute('resources');
    }

    // sender_account_id - computed: true, optional: false, required: false
    public get senderAccountId() {
      return this.getStringAttribute('sender_account_id');
    }

    // share_arn - computed: false, optional: false, required: true
    private _shareArn?: string; 
    public get shareArn() {
      return this.getStringAttribute('share_arn');
    }
    public set shareArn(value: string) {
      this._shareArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get shareArnInput() {
      return this._shareArn
    }

    // share_id - computed: true, optional: false, required: false
    public get shareId() {
      return this.getStringAttribute('share_id');
    }

    // share_name - computed: true, optional: false, required: false
    public get shareName() {
      return this.getStringAttribute('share_name');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: RamResourceShareAccepterTimeouts | undefined; 
    private __timeoutsOutput = new RamResourceShareAccepterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: RamResourceShareAccepterTimeouts | undefined) {
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
        share_arn: cdktf.stringToTerraform(this._shareArn),
        timeouts: ramResourceShareAccepterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsRamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#resource_owner DataAwsRamResourceShare#resource_owner}
    */
    readonly resourceOwner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#tags DataAwsRamResourceShare#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#filter DataAwsRamResourceShare#filter}
    */
    readonly filter?: DataAwsRamResourceShareFilter[];
  }
  export interface DataAwsRamResourceShareFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#values DataAwsRamResourceShare#values}
    */
    readonly values: string[];
  }

  function dataAwsRamResourceShareFilterToTerraform(struct?: DataAwsRamResourceShareFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share}
  */
  export class DataAwsRamResourceShare extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ram_resource_share";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRamResourceShareConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsRamResourceShareConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ram_resource_share',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._resourceOwner = config.resourceOwner;
      this._tags = config.tags;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // owning_account_id - computed: true, optional: false, required: false
    public get owningAccountId() {
      return this.getStringAttribute('owning_account_id');
    }

    // resource_owner - computed: false, optional: false, required: true
    private _resourceOwner?: string; 
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }
    public set resourceOwner(value: string) {
      this._resourceOwner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceOwnerInput() {
      return this._resourceOwner
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsRamResourceShareFilter[] | undefined; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsRamResourceShareFilter[] | undefined) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        resource_owner: cdktf.stringToTerraform(this._resourceOwner),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        filter: cdktf.listMapper(dataAwsRamResourceShareFilterToTerraform)(this._filter),
      };
    }
  }
}
