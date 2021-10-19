// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeStar
*/
export namespace CodeStar {
  export interface CodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#host_arn CodestarconnectionsConnection#host_arn}
    */
    readonly hostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#name CodestarconnectionsConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#provider_type CodestarconnectionsConnection#provider_type}
    */
    readonly providerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#tags CodestarconnectionsConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#tags_all CodestarconnectionsConnection#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection}
  */
  export class CodestarconnectionsConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codestarconnections_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarconnectionsConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: CodestarconnectionsConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codestarconnections_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._hostArn = config.hostArn;
      this._name = config.name;
      this._providerType = config.providerType;
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

    // connection_status - computed: true, optional: false, required: false
    public get connectionStatus() {
      return this.getStringAttribute('connection_status');
    }

    // host_arn - computed: false, optional: true, required: false
    private _hostArn?: string | undefined; 
    public get hostArn() {
      return this.getStringAttribute('host_arn');
    }
    public set hostArn(value: string | undefined) {
      this._hostArn = value;
    }
    public resetHostArn() {
      this._hostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostArnInput() {
      return this._hostArn
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

    // provider_type - computed: true, optional: true, required: false
    private _providerType?: string | undefined; 
    public get providerType() {
      return this.getStringAttribute('provider_type');
    }
    public set providerType(value: string | undefined) {
      this._providerType = value;
    }
    public resetProviderType() {
      this._providerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerTypeInput() {
      return this._providerType
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
        host_arn: cdktf.stringToTerraform(this._hostArn),
        name: cdktf.stringToTerraform(this._name),
        provider_type: cdktf.stringToTerraform(this._providerType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CodestarconnectionsHostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#name CodestarconnectionsHost#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#provider_endpoint CodestarconnectionsHost#provider_endpoint}
    */
    readonly providerEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#provider_type CodestarconnectionsHost#provider_type}
    */
    readonly providerType: string;
    /**
    * vpc_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#vpc_configuration CodestarconnectionsHost#vpc_configuration}
    */
    readonly vpcConfiguration?: CodestarconnectionsHostVpcConfiguration;
  }
  export interface CodestarconnectionsHostVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#security_group_ids CodestarconnectionsHost#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#subnet_ids CodestarconnectionsHost#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#tls_certificate CodestarconnectionsHost#tls_certificate}
    */
    readonly tlsCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#vpc_id CodestarconnectionsHost#vpc_id}
    */
    readonly vpcId: string;
  }

  function codestarconnectionsHostVpcConfigurationToTerraform(struct?: CodestarconnectionsHostVpcConfigurationOutputReference | CodestarconnectionsHostVpcConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
      tls_certificate: cdktf.stringToTerraform(struct!.tlsCertificate),
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }

  export class CodestarconnectionsHostVpcConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tls_certificate - computed: false, optional: true, required: false
    private _tlsCertificate?: string | undefined; 
    public get tlsCertificate() {
      return this.getStringAttribute('tls_certificate');
    }
    public set tlsCertificate(value: string | undefined) {
      this._tlsCertificate = value;
    }
    public resetTlsCertificate() {
      this._tlsCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsCertificateInput() {
      return this._tlsCertificate
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html aws_codestarconnections_host}
  */
  export class CodestarconnectionsHost extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codestarconnections_host";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html aws_codestarconnections_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarconnectionsHostConfig
    */
    public constructor(scope: Construct, id: string, config: CodestarconnectionsHostConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codestarconnections_host',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._providerEndpoint = config.providerEndpoint;
      this._providerType = config.providerType;
      this._vpcConfiguration = config.vpcConfiguration;
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

    // provider_endpoint - computed: false, optional: false, required: true
    private _providerEndpoint?: string; 
    public get providerEndpoint() {
      return this.getStringAttribute('provider_endpoint');
    }
    public set providerEndpoint(value: string) {
      this._providerEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerEndpointInput() {
      return this._providerEndpoint
    }

    // provider_type - computed: false, optional: false, required: true
    private _providerType?: string; 
    public get providerType() {
      return this.getStringAttribute('provider_type');
    }
    public set providerType(value: string) {
      this._providerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerTypeInput() {
      return this._providerType
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // vpc_configuration - computed: false, optional: true, required: false
    private _vpcConfiguration?: CodestarconnectionsHostVpcConfiguration | undefined; 
    private __vpcConfigurationOutput = new CodestarconnectionsHostVpcConfigurationOutputReference(this as any, "vpc_configuration", true);
    public get vpcConfiguration() {
      return this.__vpcConfigurationOutput;
    }
    public putVpcConfiguration(value: CodestarconnectionsHostVpcConfiguration | undefined) {
      this._vpcConfiguration = value;
    }
    public resetVpcConfiguration() {
      this._vpcConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
      return this._vpcConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        provider_endpoint: cdktf.stringToTerraform(this._providerEndpoint),
        provider_type: cdktf.stringToTerraform(this._providerType),
        vpc_configuration: codestarconnectionsHostVpcConfigurationToTerraform(this._vpcConfiguration),
      };
    }
  }
  export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#detail_type CodestarnotificationsNotificationRule#detail_type}
    */
    readonly detailType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}
    */
    readonly eventTypeIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#name CodestarnotificationsNotificationRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#resource CodestarnotificationsNotificationRule#resource}
    */
    readonly resource: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#status CodestarnotificationsNotificationRule#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#tags CodestarnotificationsNotificationRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#tags_all CodestarnotificationsNotificationRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#target CodestarnotificationsNotificationRule#target}
    */
    readonly target?: CodestarnotificationsNotificationRuleTarget[];
  }
  export interface CodestarnotificationsNotificationRuleTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#address CodestarnotificationsNotificationRule#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#type CodestarnotificationsNotificationRule#type}
    */
    readonly type?: string;
  }

  function codestarnotificationsNotificationRuleTargetToTerraform(struct?: CodestarnotificationsNotificationRuleTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      address: cdktf.stringToTerraform(struct!.address),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule}
  */
  export class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codestarnotifications_notification_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarnotificationsNotificationRuleConfig
    */
    public constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codestarnotifications_notification_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._detailType = config.detailType;
      this._eventTypeIds = config.eventTypeIds;
      this._name = config.name;
      this._resource = config.resource;
      this._status = config.status;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._target = config.target;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // detail_type - computed: false, optional: false, required: true
    private _detailType?: string; 
    public get detailType() {
      return this.getStringAttribute('detail_type');
    }
    public set detailType(value: string) {
      this._detailType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get detailTypeInput() {
      return this._detailType
    }

    // event_type_ids - computed: false, optional: false, required: true
    private _eventTypeIds?: string[]; 
    public get eventTypeIds() {
      return this.getListAttribute('event_type_ids');
    }
    public set eventTypeIds(value: string[]) {
      this._eventTypeIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeIdsInput() {
      return this._eventTypeIds
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

    // resource - computed: false, optional: false, required: true
    private _resource?: string; 
    public get resource() {
      return this.getStringAttribute('resource');
    }
    public set resource(value: string) {
      this._resource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
      return this._resource
    }

    // status - computed: false, optional: true, required: false
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
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

    // target - computed: false, optional: true, required: false
    private _target?: CodestarnotificationsNotificationRuleTarget[] | undefined; 
    public get target() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('target') as any;
    }
    public set target(value: CodestarnotificationsNotificationRuleTarget[] | undefined) {
      this._target = value;
    }
    public resetTarget() {
      this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        detail_type: cdktf.stringToTerraform(this._detailType),
        event_type_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._eventTypeIds),
        name: cdktf.stringToTerraform(this._name),
        resource: cdktf.stringToTerraform(this._resource),
        status: cdktf.stringToTerraform(this._status),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target: cdktf.listMapper(codestarnotificationsNotificationRuleTargetToTerraform)(this._target),
      };
    }
  }
  export interface DataAwsCodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html#arn DataAwsCodestarconnectionsConnection#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html#tags DataAwsCodestarconnectionsConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection}
  */
  export class DataAwsCodestarconnectionsConnection extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codestarconnections_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodestarconnectionsConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCodestarconnectionsConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codestarconnections_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._tags = config.tags;
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

    // connection_status - computed: true, optional: false, required: false
    public get connectionStatus() {
      return this.getStringAttribute('connection_status');
    }

    // host_arn - computed: true, optional: false, required: false
    public get hostArn() {
      return this.getStringAttribute('host_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // provider_type - computed: true, optional: false, required: false
    public get providerType() {
      return this.getStringAttribute('provider_type');
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
        arn: cdktf.stringToTerraform(this._arn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
