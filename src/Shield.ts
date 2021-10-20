// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Shield Protection
*/
export namespace Shield {
  export interface ShieldProtectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#name ShieldProtection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#resource_arn ShieldProtection#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#tags ShieldProtection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html#tags_all ShieldProtection#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html aws_shield_protection}
  */
  export class ShieldProtection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_shield_protection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/shield_protection.html aws_shield_protection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldProtectionConfig
    */
    public constructor(scope: Construct, id: string, config: ShieldProtectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_shield_protection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._resourceArn = config.resourceArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ShieldProtectionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#aggregation ShieldProtectionGroup#aggregation}
    */
    readonly aggregation: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#members ShieldProtectionGroup#members}
    */
    readonly members?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#pattern ShieldProtectionGroup#pattern}
    */
    readonly pattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#protection_group_id ShieldProtectionGroup#protection_group_id}
    */
    readonly protectionGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#resource_type ShieldProtectionGroup#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#tags ShieldProtectionGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#tags_all ShieldProtectionGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html aws_shield_protection_group}
  */
  export class ShieldProtectionGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_shield_protection_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html aws_shield_protection_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldProtectionGroupConfig
    */
    public constructor(scope: Construct, id: string, config: ShieldProtectionGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_shield_protection_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._aggregation = config.aggregation;
      this._members = config.members;
      this._pattern = config.pattern;
      this._protectionGroupId = config.protectionGroupId;
      this._resourceType = config.resourceType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aggregation - computed: false, optional: false, required: true
    private _aggregation?: string; 
    public get aggregation() {
      return this.getStringAttribute('aggregation');
    }
    public set aggregation(value: string) {
      this._aggregation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationInput() {
      return this._aggregation
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // members - computed: false, optional: true, required: false
    private _members?: string[] | undefined; 
    public get members() {
      return this.getListAttribute('members');
    }
    public set members(value: string[] | undefined) {
      this._members = value;
    }
    public resetMembers() {
      this._members = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get membersInput() {
      return this._members
    }

    // pattern - computed: false, optional: false, required: true
    private _pattern?: string; 
    public get pattern() {
      return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
      this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
      return this._pattern
    }

    // protection_group_arn - computed: true, optional: false, required: false
    public get protectionGroupArn() {
      return this.getStringAttribute('protection_group_arn');
    }

    // protection_group_id - computed: false, optional: false, required: true
    private _protectionGroupId?: string; 
    public get protectionGroupId() {
      return this.getStringAttribute('protection_group_id');
    }
    public set protectionGroupId(value: string) {
      this._protectionGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protectionGroupIdInput() {
      return this._protectionGroupId
    }

    // resource_type - computed: false, optional: true, required: false
    private _resourceType?: string | undefined; 
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string | undefined) {
      this._resourceType = value;
    }
    public resetResourceType() {
      this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
      return this._resourceType
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aggregation: cdktf.stringToTerraform(this._aggregation),
        members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
        pattern: cdktf.stringToTerraform(this._pattern),
        protection_group_id: cdktf.stringToTerraform(this._protectionGroupId),
        resource_type: cdktf.stringToTerraform(this._resourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
}
