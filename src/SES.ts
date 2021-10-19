// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export namespace SES {
  export interface SesActiveReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html#rule_set_name SesActiveReceiptRuleSet#rule_set_name}
    */
    readonly ruleSetName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html aws_ses_active_receipt_rule_set}
  */
  export class SesActiveReceiptRuleSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_active_receipt_rule_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html aws_ses_active_receipt_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesActiveReceiptRuleSetConfig
    */
    public constructor(scope: Construct, id: string, config: SesActiveReceiptRuleSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_active_receipt_rule_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._ruleSetName = config.ruleSetName;
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

    // rule_set_name - computed: false, optional: false, required: true
    private _ruleSetName?: string; 
    public get ruleSetName() {
      return this.getStringAttribute('rule_set_name');
    }
    public set ruleSetName(value: string) {
      this._ruleSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetNameInput() {
      return this._ruleSetName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      };
    }
  }
  export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#name SesConfigurationSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}
    */
    readonly reputationMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#sending_enabled SesConfigurationSet#sending_enabled}
    */
    readonly sendingEnabled?: boolean | cdktf.IResolvable;
    /**
    * delivery_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#delivery_options SesConfigurationSet#delivery_options}
    */
    readonly deliveryOptions?: SesConfigurationSetDeliveryOptions;
  }
  export interface SesConfigurationSetDeliveryOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#tls_policy SesConfigurationSet#tls_policy}
    */
    readonly tlsPolicy?: string;
  }

  function sesConfigurationSetDeliveryOptionsToTerraform(struct?: SesConfigurationSetDeliveryOptionsOutputReference | SesConfigurationSetDeliveryOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      tls_policy: cdktf.stringToTerraform(struct!.tlsPolicy),
    }
  }

  export class SesConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // tls_policy - computed: false, optional: true, required: false
    private _tlsPolicy?: string | undefined; 
    public get tlsPolicy() {
      return this.getStringAttribute('tls_policy');
    }
    public set tlsPolicy(value: string | undefined) {
      this._tlsPolicy = value;
    }
    public resetTlsPolicy() {
      this._tlsPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsPolicyInput() {
      return this._tlsPolicy
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set}
  */
  export class SesConfigurationSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_configuration_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesConfigurationSetConfig
    */
    public constructor(scope: Construct, id: string, config: SesConfigurationSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_configuration_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._reputationMetricsEnabled = config.reputationMetricsEnabled;
      this._sendingEnabled = config.sendingEnabled;
      this._deliveryOptions = config.deliveryOptions;
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

    // last_fresh_start - computed: true, optional: false, required: false
    public get lastFreshStart() {
      return this.getStringAttribute('last_fresh_start');
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

    // reputation_metrics_enabled - computed: false, optional: true, required: false
    private _reputationMetricsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get reputationMetricsEnabled() {
      return this.getBooleanAttribute('reputation_metrics_enabled') as any;
    }
    public set reputationMetricsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._reputationMetricsEnabled = value;
    }
    public resetReputationMetricsEnabled() {
      this._reputationMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reputationMetricsEnabledInput() {
      return this._reputationMetricsEnabled
    }

    // sending_enabled - computed: false, optional: true, required: false
    private _sendingEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get sendingEnabled() {
      return this.getBooleanAttribute('sending_enabled') as any;
    }
    public set sendingEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._sendingEnabled = value;
    }
    public resetSendingEnabled() {
      this._sendingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sendingEnabledInput() {
      return this._sendingEnabled
    }

    // delivery_options - computed: false, optional: true, required: false
    private _deliveryOptions?: SesConfigurationSetDeliveryOptions | undefined; 
    private __deliveryOptionsOutput = new SesConfigurationSetDeliveryOptionsOutputReference(this as any, "delivery_options", true);
    public get deliveryOptions() {
      return this.__deliveryOptionsOutput;
    }
    public putDeliveryOptions(value: SesConfigurationSetDeliveryOptions | undefined) {
      this._deliveryOptions = value;
    }
    public resetDeliveryOptions() {
      this._deliveryOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryOptionsInput() {
      return this._deliveryOptions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        reputation_metrics_enabled: cdktf.booleanToTerraform(this._reputationMetricsEnabled),
        sending_enabled: cdktf.booleanToTerraform(this._sendingEnabled),
        delivery_options: sesConfigurationSetDeliveryOptionsToTerraform(this._deliveryOptions),
      };
    }
  }
  export interface SesDomainDkimConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html#domain SesDomainDkim#domain}
    */
    readonly domain: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html aws_ses_domain_dkim}
  */
  export class SesDomainDkim extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_domain_dkim";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html aws_ses_domain_dkim} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainDkimConfig
    */
    public constructor(scope: Construct, id: string, config: SesDomainDkimConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_domain_dkim',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domain = config.domain;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dkim_tokens - computed: true, optional: false, required: false
    public get dkimTokens() {
      return this.getListAttribute('dkim_tokens');
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
      this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
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
        domain: cdktf.stringToTerraform(this._domain),
      };
    }
  }
  export interface SesDomainIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html#domain SesDomainIdentity#domain}
    */
    readonly domain: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html aws_ses_domain_identity}
  */
  export class SesDomainIdentity extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_domain_identity";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html aws_ses_domain_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainIdentityConfig
    */
    public constructor(scope: Construct, id: string, config: SesDomainIdentityConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_domain_identity',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domain = config.domain;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
      this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // verification_token - computed: true, optional: false, required: false
    public get verificationToken() {
      return this.getStringAttribute('verification_token');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain: cdktf.stringToTerraform(this._domain),
      };
    }
  }
  export interface SesDomainIdentityVerificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#domain SesDomainIdentityVerification#domain}
    */
    readonly domain: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#timeouts SesDomainIdentityVerification#timeouts}
    */
    readonly timeouts?: SesDomainIdentityVerificationTimeouts;
  }
  export interface SesDomainIdentityVerificationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#create SesDomainIdentityVerification#create}
    */
    readonly create?: string;
  }

  function sesDomainIdentityVerificationTimeoutsToTerraform(struct?: SesDomainIdentityVerificationTimeoutsOutputReference | SesDomainIdentityVerificationTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export class SesDomainIdentityVerificationTimeoutsOutputReference extends cdktf.ComplexObject {
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html aws_ses_domain_identity_verification}
  */
  export class SesDomainIdentityVerification extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_domain_identity_verification";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html aws_ses_domain_identity_verification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainIdentityVerificationConfig
    */
    public constructor(scope: Construct, id: string, config: SesDomainIdentityVerificationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_domain_identity_verification',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domain = config.domain;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
      this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: SesDomainIdentityVerificationTimeouts | undefined; 
    private __timeoutsOutput = new SesDomainIdentityVerificationTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: SesDomainIdentityVerificationTimeouts | undefined) {
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
        domain: cdktf.stringToTerraform(this._domain),
        timeouts: sesDomainIdentityVerificationTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface SesDomainMailFromConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#behavior_on_mx_failure SesDomainMailFrom#behavior_on_mx_failure}
    */
    readonly behaviorOnMxFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#domain SesDomainMailFrom#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#mail_from_domain SesDomainMailFrom#mail_from_domain}
    */
    readonly mailFromDomain: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from}
  */
  export class SesDomainMailFrom extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_domain_mail_from";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainMailFromConfig
    */
    public constructor(scope: Construct, id: string, config: SesDomainMailFromConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_domain_mail_from',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._behaviorOnMxFailure = config.behaviorOnMxFailure;
      this._domain = config.domain;
      this._mailFromDomain = config.mailFromDomain;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // behavior_on_mx_failure - computed: false, optional: true, required: false
    private _behaviorOnMxFailure?: string | undefined; 
    public get behaviorOnMxFailure() {
      return this.getStringAttribute('behavior_on_mx_failure');
    }
    public set behaviorOnMxFailure(value: string | undefined) {
      this._behaviorOnMxFailure = value;
    }
    public resetBehaviorOnMxFailure() {
      this._behaviorOnMxFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorOnMxFailureInput() {
      return this._behaviorOnMxFailure
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
      this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // mail_from_domain - computed: false, optional: false, required: true
    private _mailFromDomain?: string; 
    public get mailFromDomain() {
      return this.getStringAttribute('mail_from_domain');
    }
    public set mailFromDomain(value: string) {
      this._mailFromDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mailFromDomainInput() {
      return this._mailFromDomain
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        behavior_on_mx_failure: cdktf.stringToTerraform(this._behaviorOnMxFailure),
        domain: cdktf.stringToTerraform(this._domain),
        mail_from_domain: cdktf.stringToTerraform(this._mailFromDomain),
      };
    }
  }
  export interface SesEmailIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_email_identity.html#email SesEmailIdentity#email}
    */
    readonly email: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_email_identity.html aws_ses_email_identity}
  */
  export class SesEmailIdentity extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_email_identity";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_email_identity.html aws_ses_email_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesEmailIdentityConfig
    */
    public constructor(scope: Construct, id: string, config: SesEmailIdentityConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_email_identity',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._email = config.email;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // email - computed: false, optional: false, required: true
    private _email?: string; 
    public get email() {
      return this.getStringAttribute('email');
    }
    public set email(value: string) {
      this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
      return this._email
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
        email: cdktf.stringToTerraform(this._email),
      };
    }
  }
  export interface SesEventDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#configuration_set_name SesEventDestination#configuration_set_name}
    */
    readonly configurationSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#enabled SesEventDestination#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#matching_types SesEventDestination#matching_types}
    */
    readonly matchingTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#name SesEventDestination#name}
    */
    readonly name: string;
    /**
    * cloudwatch_destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#cloudwatch_destination SesEventDestination#cloudwatch_destination}
    */
    readonly cloudwatchDestination?: SesEventDestinationCloudwatchDestination[];
    /**
    * kinesis_destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#kinesis_destination SesEventDestination#kinesis_destination}
    */
    readonly kinesisDestination?: SesEventDestinationKinesisDestination;
    /**
    * sns_destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#sns_destination SesEventDestination#sns_destination}
    */
    readonly snsDestination?: SesEventDestinationSnsDestination;
  }
  export interface SesEventDestinationCloudwatchDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#default_value SesEventDestination#default_value}
    */
    readonly defaultValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#dimension_name SesEventDestination#dimension_name}
    */
    readonly dimensionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#value_source SesEventDestination#value_source}
    */
    readonly valueSource: string;
  }

  function sesEventDestinationCloudwatchDestinationToTerraform(struct?: SesEventDestinationCloudwatchDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      default_value: cdktf.stringToTerraform(struct!.defaultValue),
      dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
      value_source: cdktf.stringToTerraform(struct!.valueSource),
    }
  }

  export interface SesEventDestinationKinesisDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#role_arn SesEventDestination#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#stream_arn SesEventDestination#stream_arn}
    */
    readonly streamArn: string;
  }

  function sesEventDestinationKinesisDestinationToTerraform(struct?: SesEventDestinationKinesisDestinationOutputReference | SesEventDestinationKinesisDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      stream_arn: cdktf.stringToTerraform(struct!.streamArn),
    }
  }

  export class SesEventDestinationKinesisDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn?: string; 
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
      this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
    }
  }
  export interface SesEventDestinationSnsDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#topic_arn SesEventDestination#topic_arn}
    */
    readonly topicArn: string;
  }

  function sesEventDestinationSnsDestinationToTerraform(struct?: SesEventDestinationSnsDestinationOutputReference | SesEventDestinationSnsDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }

  export class SesEventDestinationSnsDestinationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // topic_arn - computed: false, optional: false, required: true
    private _topicArn?: string; 
    public get topicArn() {
      return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
      this._topicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
      return this._topicArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination}
  */
  export class SesEventDestination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_event_destination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesEventDestinationConfig
    */
    public constructor(scope: Construct, id: string, config: SesEventDestinationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_event_destination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._configurationSetName = config.configurationSetName;
      this._enabled = config.enabled;
      this._matchingTypes = config.matchingTypes;
      this._name = config.name;
      this._cloudwatchDestination = config.cloudwatchDestination;
      this._kinesisDestination = config.kinesisDestination;
      this._snsDestination = config.snsDestination;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // configuration_set_name - computed: false, optional: false, required: true
    private _configurationSetName?: string; 
    public get configurationSetName() {
      return this.getStringAttribute('configuration_set_name');
    }
    public set configurationSetName(value: string) {
      this._configurationSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetNameInput() {
      return this._configurationSetName
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // matching_types - computed: false, optional: false, required: true
    private _matchingTypes?: string[]; 
    public get matchingTypes() {
      return this.getListAttribute('matching_types');
    }
    public set matchingTypes(value: string[]) {
      this._matchingTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingTypesInput() {
      return this._matchingTypes
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

    // cloudwatch_destination - computed: false, optional: true, required: false
    private _cloudwatchDestination?: SesEventDestinationCloudwatchDestination[] | undefined; 
    public get cloudwatchDestination() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('cloudwatch_destination') as any;
    }
    public set cloudwatchDestination(value: SesEventDestinationCloudwatchDestination[] | undefined) {
      this._cloudwatchDestination = value;
    }
    public resetCloudwatchDestination() {
      this._cloudwatchDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchDestinationInput() {
      return this._cloudwatchDestination
    }

    // kinesis_destination - computed: false, optional: true, required: false
    private _kinesisDestination?: SesEventDestinationKinesisDestination | undefined; 
    private __kinesisDestinationOutput = new SesEventDestinationKinesisDestinationOutputReference(this as any, "kinesis_destination", true);
    public get kinesisDestination() {
      return this.__kinesisDestinationOutput;
    }
    public putKinesisDestination(value: SesEventDestinationKinesisDestination | undefined) {
      this._kinesisDestination = value;
    }
    public resetKinesisDestination() {
      this._kinesisDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisDestinationInput() {
      return this._kinesisDestination
    }

    // sns_destination - computed: false, optional: true, required: false
    private _snsDestination?: SesEventDestinationSnsDestination | undefined; 
    private __snsDestinationOutput = new SesEventDestinationSnsDestinationOutputReference(this as any, "sns_destination", true);
    public get snsDestination() {
      return this.__snsDestinationOutput;
    }
    public putSnsDestination(value: SesEventDestinationSnsDestination | undefined) {
      this._snsDestination = value;
    }
    public resetSnsDestination() {
      this._snsDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsDestinationInput() {
      return this._snsDestination
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
        enabled: cdktf.booleanToTerraform(this._enabled),
        matching_types: cdktf.listMapper(cdktf.stringToTerraform)(this._matchingTypes),
        name: cdktf.stringToTerraform(this._name),
        cloudwatch_destination: cdktf.listMapper(sesEventDestinationCloudwatchDestinationToTerraform)(this._cloudwatchDestination),
        kinesis_destination: sesEventDestinationKinesisDestinationToTerraform(this._kinesisDestination),
        sns_destination: sesEventDestinationSnsDestinationToTerraform(this._snsDestination),
      };
    }
  }
  export interface SesIdentityNotificationTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#identity SesIdentityNotificationTopic#identity}
    */
    readonly identity: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#include_original_headers SesIdentityNotificationTopic#include_original_headers}
    */
    readonly includeOriginalHeaders?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#notification_type SesIdentityNotificationTopic#notification_type}
    */
    readonly notificationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#topic_arn SesIdentityNotificationTopic#topic_arn}
    */
    readonly topicArn?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic}
  */
  export class SesIdentityNotificationTopic extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_identity_notification_topic";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesIdentityNotificationTopicConfig
    */
    public constructor(scope: Construct, id: string, config: SesIdentityNotificationTopicConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_identity_notification_topic',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._identity = config.identity;
      this._includeOriginalHeaders = config.includeOriginalHeaders;
      this._notificationType = config.notificationType;
      this._topicArn = config.topicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity - computed: false, optional: false, required: true
    private _identity?: string; 
    public get identity() {
      return this.getStringAttribute('identity');
    }
    public set identity(value: string) {
      this._identity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityInput() {
      return this._identity
    }

    // include_original_headers - computed: false, optional: true, required: false
    private _includeOriginalHeaders?: boolean | cdktf.IResolvable | undefined; 
    public get includeOriginalHeaders() {
      return this.getBooleanAttribute('include_original_headers') as any;
    }
    public set includeOriginalHeaders(value: boolean | cdktf.IResolvable | undefined) {
      this._includeOriginalHeaders = value;
    }
    public resetIncludeOriginalHeaders() {
      this._includeOriginalHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeOriginalHeadersInput() {
      return this._includeOriginalHeaders
    }

    // notification_type - computed: false, optional: false, required: true
    private _notificationType?: string; 
    public get notificationType() {
      return this.getStringAttribute('notification_type');
    }
    public set notificationType(value: string) {
      this._notificationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTypeInput() {
      return this._notificationType
    }

    // topic_arn - computed: false, optional: true, required: false
    private _topicArn?: string | undefined; 
    public get topicArn() {
      return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string | undefined) {
      this._topicArn = value;
    }
    public resetTopicArn() {
      this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
      return this._topicArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        identity: cdktf.stringToTerraform(this._identity),
        include_original_headers: cdktf.booleanToTerraform(this._includeOriginalHeaders),
        notification_type: cdktf.stringToTerraform(this._notificationType),
        topic_arn: cdktf.stringToTerraform(this._topicArn),
      };
    }
  }
  export interface SesIdentityPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html#identity SesIdentityPolicy#identity}
    */
    readonly identity: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html#name SesIdentityPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html#policy SesIdentityPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html aws_ses_identity_policy}
  */
  export class SesIdentityPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_identity_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html aws_ses_identity_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesIdentityPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: SesIdentityPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_identity_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._identity = config.identity;
      this._name = config.name;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity - computed: false, optional: false, required: true
    private _identity?: string; 
    public get identity() {
      return this.getStringAttribute('identity');
    }
    public set identity(value: string) {
      this._identity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityInput() {
      return this._identity
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

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        identity: cdktf.stringToTerraform(this._identity),
        name: cdktf.stringToTerraform(this._name),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface SesReceiptFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html#cidr SesReceiptFilter#cidr}
    */
    readonly cidr: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html#name SesReceiptFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html#policy SesReceiptFilter#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html aws_ses_receipt_filter}
  */
  export class SesReceiptFilter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_receipt_filter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html aws_ses_receipt_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptFilterConfig
    */
    public constructor(scope: Construct, id: string, config: SesReceiptFilterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_receipt_filter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cidr = config.cidr;
      this._name = config.name;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cidr - computed: false, optional: false, required: true
    private _cidr?: string; 
    public get cidr() {
      return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
      this._cidr = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
      return this._cidr
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

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cidr: cdktf.stringToTerraform(this._cidr),
        name: cdktf.stringToTerraform(this._name),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface SesReceiptRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#after SesReceiptRule#after}
    */
    readonly after?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#enabled SesReceiptRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#name SesReceiptRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#recipients SesReceiptRule#recipients}
    */
    readonly recipients?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#rule_set_name SesReceiptRule#rule_set_name}
    */
    readonly ruleSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#scan_enabled SesReceiptRule#scan_enabled}
    */
    readonly scanEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#tls_policy SesReceiptRule#tls_policy}
    */
    readonly tlsPolicy?: string;
    /**
    * add_header_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#add_header_action SesReceiptRule#add_header_action}
    */
    readonly addHeaderAction?: SesReceiptRuleAddHeaderAction[];
    /**
    * bounce_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#bounce_action SesReceiptRule#bounce_action}
    */
    readonly bounceAction?: SesReceiptRuleBounceAction[];
    /**
    * lambda_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#lambda_action SesReceiptRule#lambda_action}
    */
    readonly lambdaAction?: SesReceiptRuleLambdaAction[];
    /**
    * s3_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#s3_action SesReceiptRule#s3_action}
    */
    readonly s3Action?: SesReceiptRuleS3Action[];
    /**
    * sns_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#sns_action SesReceiptRule#sns_action}
    */
    readonly snsAction?: SesReceiptRuleSnsAction[];
    /**
    * stop_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#stop_action SesReceiptRule#stop_action}
    */
    readonly stopAction?: SesReceiptRuleStopAction[];
    /**
    * workmail_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#workmail_action SesReceiptRule#workmail_action}
    */
    readonly workmailAction?: SesReceiptRuleWorkmailAction[];
  }
  export interface SesReceiptRuleAddHeaderAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#header_name SesReceiptRule#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#header_value SesReceiptRule#header_value}
    */
    readonly headerValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
  }

  function sesReceiptRuleAddHeaderActionToTerraform(struct?: SesReceiptRuleAddHeaderAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      header_name: cdktf.stringToTerraform(struct!.headerName),
      header_value: cdktf.stringToTerraform(struct!.headerValue),
      position: cdktf.numberToTerraform(struct!.position),
    }
  }

  export interface SesReceiptRuleBounceAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#message SesReceiptRule#message}
    */
    readonly message: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#sender SesReceiptRule#sender}
    */
    readonly sender: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#smtp_reply_code SesReceiptRule#smtp_reply_code}
    */
    readonly smtpReplyCode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#status_code SesReceiptRule#status_code}
    */
    readonly statusCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
  }

  function sesReceiptRuleBounceActionToTerraform(struct?: SesReceiptRuleBounceAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      message: cdktf.stringToTerraform(struct!.message),
      position: cdktf.numberToTerraform(struct!.position),
      sender: cdktf.stringToTerraform(struct!.sender),
      smtp_reply_code: cdktf.stringToTerraform(struct!.smtpReplyCode),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }

  export interface SesReceiptRuleLambdaAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#function_arn SesReceiptRule#function_arn}
    */
    readonly functionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#invocation_type SesReceiptRule#invocation_type}
    */
    readonly invocationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
  }

  function sesReceiptRuleLambdaActionToTerraform(struct?: SesReceiptRuleLambdaAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      function_arn: cdktf.stringToTerraform(struct!.functionArn),
      invocation_type: cdktf.stringToTerraform(struct!.invocationType),
      position: cdktf.numberToTerraform(struct!.position),
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }

  export interface SesReceiptRuleS3Action {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#bucket_name SesReceiptRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#kms_key_arn SesReceiptRule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#object_key_prefix SesReceiptRule#object_key_prefix}
    */
    readonly objectKeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
  }

  function sesReceiptRuleS3ActionToTerraform(struct?: SesReceiptRuleS3Action): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket_name: cdktf.stringToTerraform(struct!.bucketName),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      object_key_prefix: cdktf.stringToTerraform(struct!.objectKeyPrefix),
      position: cdktf.numberToTerraform(struct!.position),
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }

  export interface SesReceiptRuleSnsAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#encoding SesReceiptRule#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn: string;
  }

  function sesReceiptRuleSnsActionToTerraform(struct?: SesReceiptRuleSnsAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encoding: cdktf.stringToTerraform(struct!.encoding),
      position: cdktf.numberToTerraform(struct!.position),
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }

  export interface SesReceiptRuleStopAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#scope SesReceiptRule#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
  }

  function sesReceiptRuleStopActionToTerraform(struct?: SesReceiptRuleStopAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      position: cdktf.numberToTerraform(struct!.position),
      scope: cdktf.stringToTerraform(struct!.scope),
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }

  export interface SesReceiptRuleWorkmailAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#organization_arn SesReceiptRule#organization_arn}
    */
    readonly organizationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
  }

  function sesReceiptRuleWorkmailActionToTerraform(struct?: SesReceiptRuleWorkmailAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      organization_arn: cdktf.stringToTerraform(struct!.organizationArn),
      position: cdktf.numberToTerraform(struct!.position),
      topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule}
  */
  export class SesReceiptRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_receipt_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptRuleConfig
    */
    public constructor(scope: Construct, id: string, config: SesReceiptRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_receipt_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._after = config.after;
      this._enabled = config.enabled;
      this._name = config.name;
      this._recipients = config.recipients;
      this._ruleSetName = config.ruleSetName;
      this._scanEnabled = config.scanEnabled;
      this._tlsPolicy = config.tlsPolicy;
      this._addHeaderAction = config.addHeaderAction;
      this._bounceAction = config.bounceAction;
      this._lambdaAction = config.lambdaAction;
      this._s3Action = config.s3Action;
      this._snsAction = config.snsAction;
      this._stopAction = config.stopAction;
      this._workmailAction = config.workmailAction;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // after - computed: false, optional: true, required: false
    private _after?: string | undefined; 
    public get after() {
      return this.getStringAttribute('after');
    }
    public set after(value: string | undefined) {
      this._after = value;
    }
    public resetAfter() {
      this._after = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get afterInput() {
      return this._after
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
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

    // recipients - computed: false, optional: true, required: false
    private _recipients?: string[] | undefined; 
    public get recipients() {
      return this.getListAttribute('recipients');
    }
    public set recipients(value: string[] | undefined) {
      this._recipients = value;
    }
    public resetRecipients() {
      this._recipients = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recipientsInput() {
      return this._recipients
    }

    // rule_set_name - computed: false, optional: false, required: true
    private _ruleSetName?: string; 
    public get ruleSetName() {
      return this.getStringAttribute('rule_set_name');
    }
    public set ruleSetName(value: string) {
      this._ruleSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetNameInput() {
      return this._ruleSetName
    }

    // scan_enabled - computed: false, optional: true, required: false
    private _scanEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get scanEnabled() {
      return this.getBooleanAttribute('scan_enabled') as any;
    }
    public set scanEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._scanEnabled = value;
    }
    public resetScanEnabled() {
      this._scanEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanEnabledInput() {
      return this._scanEnabled
    }

    // tls_policy - computed: true, optional: true, required: false
    private _tlsPolicy?: string | undefined; 
    public get tlsPolicy() {
      return this.getStringAttribute('tls_policy');
    }
    public set tlsPolicy(value: string | undefined) {
      this._tlsPolicy = value;
    }
    public resetTlsPolicy() {
      this._tlsPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsPolicyInput() {
      return this._tlsPolicy
    }

    // add_header_action - computed: false, optional: true, required: false
    private _addHeaderAction?: SesReceiptRuleAddHeaderAction[] | undefined; 
    public get addHeaderAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('add_header_action') as any;
    }
    public set addHeaderAction(value: SesReceiptRuleAddHeaderAction[] | undefined) {
      this._addHeaderAction = value;
    }
    public resetAddHeaderAction() {
      this._addHeaderAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addHeaderActionInput() {
      return this._addHeaderAction
    }

    // bounce_action - computed: false, optional: true, required: false
    private _bounceAction?: SesReceiptRuleBounceAction[] | undefined; 
    public get bounceAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('bounce_action') as any;
    }
    public set bounceAction(value: SesReceiptRuleBounceAction[] | undefined) {
      this._bounceAction = value;
    }
    public resetBounceAction() {
      this._bounceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bounceActionInput() {
      return this._bounceAction
    }

    // lambda_action - computed: false, optional: true, required: false
    private _lambdaAction?: SesReceiptRuleLambdaAction[] | undefined; 
    public get lambdaAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('lambda_action') as any;
    }
    public set lambdaAction(value: SesReceiptRuleLambdaAction[] | undefined) {
      this._lambdaAction = value;
    }
    public resetLambdaAction() {
      this._lambdaAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaActionInput() {
      return this._lambdaAction
    }

    // s3_action - computed: false, optional: true, required: false
    private _s3Action?: SesReceiptRuleS3Action[] | undefined; 
    public get s3Action() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('s3_action') as any;
    }
    public set s3Action(value: SesReceiptRuleS3Action[] | undefined) {
      this._s3Action = value;
    }
    public resetS3Action() {
      this._s3Action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ActionInput() {
      return this._s3Action
    }

    // sns_action - computed: false, optional: true, required: false
    private _snsAction?: SesReceiptRuleSnsAction[] | undefined; 
    public get snsAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('sns_action') as any;
    }
    public set snsAction(value: SesReceiptRuleSnsAction[] | undefined) {
      this._snsAction = value;
    }
    public resetSnsAction() {
      this._snsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsActionInput() {
      return this._snsAction
    }

    // stop_action - computed: false, optional: true, required: false
    private _stopAction?: SesReceiptRuleStopAction[] | undefined; 
    public get stopAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stop_action') as any;
    }
    public set stopAction(value: SesReceiptRuleStopAction[] | undefined) {
      this._stopAction = value;
    }
    public resetStopAction() {
      this._stopAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stopActionInput() {
      return this._stopAction
    }

    // workmail_action - computed: false, optional: true, required: false
    private _workmailAction?: SesReceiptRuleWorkmailAction[] | undefined; 
    public get workmailAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('workmail_action') as any;
    }
    public set workmailAction(value: SesReceiptRuleWorkmailAction[] | undefined) {
      this._workmailAction = value;
    }
    public resetWorkmailAction() {
      this._workmailAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workmailActionInput() {
      return this._workmailAction
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        after: cdktf.stringToTerraform(this._after),
        enabled: cdktf.booleanToTerraform(this._enabled),
        name: cdktf.stringToTerraform(this._name),
        recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._recipients),
        rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
        scan_enabled: cdktf.booleanToTerraform(this._scanEnabled),
        tls_policy: cdktf.stringToTerraform(this._tlsPolicy),
        add_header_action: cdktf.listMapper(sesReceiptRuleAddHeaderActionToTerraform)(this._addHeaderAction),
        bounce_action: cdktf.listMapper(sesReceiptRuleBounceActionToTerraform)(this._bounceAction),
        lambda_action: cdktf.listMapper(sesReceiptRuleLambdaActionToTerraform)(this._lambdaAction),
        s3_action: cdktf.listMapper(sesReceiptRuleS3ActionToTerraform)(this._s3Action),
        sns_action: cdktf.listMapper(sesReceiptRuleSnsActionToTerraform)(this._snsAction),
        stop_action: cdktf.listMapper(sesReceiptRuleStopActionToTerraform)(this._stopAction),
        workmail_action: cdktf.listMapper(sesReceiptRuleWorkmailActionToTerraform)(this._workmailAction),
      };
    }
  }
  export interface SesReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html#rule_set_name SesReceiptRuleSet#rule_set_name}
    */
    readonly ruleSetName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html aws_ses_receipt_rule_set}
  */
  export class SesReceiptRuleSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_receipt_rule_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html aws_ses_receipt_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptRuleSetConfig
    */
    public constructor(scope: Construct, id: string, config: SesReceiptRuleSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ses_receipt_rule_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._ruleSetName = config.ruleSetName;
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

    // rule_set_name - computed: false, optional: false, required: true
    private _ruleSetName?: string; 
    public get ruleSetName() {
      return this.getStringAttribute('rule_set_name');
    }
    public set ruleSetName(value: string) {
      this._ruleSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetNameInput() {
      return this._ruleSetName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      };
    }
  }
  export interface SesTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#html SesTemplate#html}
    */
    readonly html?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#name SesTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#subject SesTemplate#subject}
    */
    readonly subject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#text SesTemplate#text}
    */
    readonly text?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html aws_ses_template}
  */
  export class SesTemplate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ses_template";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html aws_ses_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesTemplateConfig
    */
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // html - computed: false, optional: true, required: false
    private _html?: string | undefined; 
    public get html() {
      return this.getStringAttribute('html');
    }
    public set html(value: string | undefined) {
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

    // subject - computed: false, optional: true, required: false
    private _subject?: string | undefined; 
    public get subject() {
      return this.getStringAttribute('subject');
    }
    public set subject(value: string | undefined) {
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
    private _text?: string | undefined; 
    public get text() {
      return this.getStringAttribute('text');
    }
    public set text(value: string | undefined) {
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
}
