// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Outposts
*/
export namespace Outposts {
  export interface DataAwsOutpostsOutpostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html#name DataAwsOutpostsOutpost#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html#owner_id DataAwsOutpostsOutpost#owner_id}
    */
    readonly ownerId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost}
  */
  export class DataAwsOutpostsOutpost extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_outposts_outpost";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_outposts_outpost',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._ownerId = config.ownerId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // availability_zone_id - computed: true, optional: false, required: false
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
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

    // owner_id - computed: true, optional: true, required: false
    private _ownerId?: string | undefined; 
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }
    public set ownerId(value: string | undefined) {
      this._ownerId = value;
    }
    public resetOwnerId() {
      this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerIdInput() {
      return this._ownerId
    }

    // site_id - computed: true, optional: false, required: false
    public get siteId() {
      return this.getStringAttribute('site_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        owner_id: cdktf.stringToTerraform(this._ownerId),
      };
    }
  }
  export interface DataAwsOutpostsOutpostInstanceTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html#arn DataAwsOutpostsOutpostInstanceType#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}
    */
    readonly preferredInstanceTypes?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html aws_outposts_outpost_instance_type}
  */
  export class DataAwsOutpostsOutpostInstanceType extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_outposts_outpost_instance_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_type.html aws_outposts_outpost_instance_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostInstanceTypeConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_outposts_outpost_instance_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._instanceType = config.instanceType;
      this._preferredInstanceTypes = config.preferredInstanceTypes;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // preferred_instance_types - computed: false, optional: true, required: false
    private _preferredInstanceTypes?: string[] | undefined; 
    public get preferredInstanceTypes() {
      return this.getListAttribute('preferred_instance_types');
    }
    public set preferredInstanceTypes(value: string[] | undefined) {
      this._preferredInstanceTypes = value;
    }
    public resetPreferredInstanceTypes() {
      this._preferredInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredInstanceTypesInput() {
      return this._preferredInstanceTypes
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        preferred_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceTypes),
      };
    }
  }
  export interface DataAwsOutpostsOutpostInstanceTypesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types.html#arn DataAwsOutpostsOutpostInstanceTypes#arn}
    */
    readonly arn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types.html aws_outposts_outpost_instance_types}
  */
  export class DataAwsOutpostsOutpostInstanceTypes extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_outposts_outpost_instance_types";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types.html aws_outposts_outpost_instance_types} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostInstanceTypesConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypesConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_outposts_outpost_instance_types',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_types - computed: true, optional: false, required: false
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
      };
    }
  }
  export interface DataAwsOutpostsOutpostsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#availability_zone DataAwsOutpostsOutposts#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#owner_id DataAwsOutpostsOutposts#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#site_id DataAwsOutpostsOutposts#site_id}
    */
    readonly siteId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts}
  */
  export class DataAwsOutpostsOutposts extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_outposts_outposts";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_outposts_outposts',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._availabilityZoneId = config.availabilityZoneId;
      this._ownerId = config.ownerId;
      this._siteId = config.siteId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string | undefined; 
    public get availabilityZoneId() {
      return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string | undefined) {
      this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
      this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
      return this._availabilityZoneId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // owner_id - computed: true, optional: true, required: false
    private _ownerId?: string | undefined; 
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }
    public set ownerId(value: string | undefined) {
      this._ownerId = value;
    }
    public resetOwnerId() {
      this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerIdInput() {
      return this._ownerId
    }

    // site_id - computed: true, optional: true, required: false
    private _siteId?: string | undefined; 
    public get siteId() {
      return this.getStringAttribute('site_id');
    }
    public set siteId(value: string | undefined) {
      this._siteId = value;
    }
    public resetSiteId() {
      this._siteId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get siteIdInput() {
      return this._siteId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
        owner_id: cdktf.stringToTerraform(this._ownerId),
        site_id: cdktf.stringToTerraform(this._siteId),
      };
    }
  }
  export interface DataAwsOutpostsSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_site.html#name DataAwsOutpostsSite#name}
    */
    readonly name?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_site.html aws_outposts_site}
  */
  export class DataAwsOutpostsSite extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_outposts_site";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_site.html aws_outposts_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsSiteConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsOutpostsSiteConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_outposts_site',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
      return this.getStringAttribute('account_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsOutpostsSitesConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_sites.html aws_outposts_sites}
  */
  export class DataAwsOutpostsSites extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_outposts_sites";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_sites.html aws_outposts_sites} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsSitesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsOutpostsSitesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_outposts_sites',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
}
